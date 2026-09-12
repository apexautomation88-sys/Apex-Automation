"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const SCRIPT_ID = "calendly-widget-script";
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

/**
 * Calendly is embedded inline rather than linked out — sending a warm visitor to
 * another domain is the biggest drop-off point on an agency page.
 *
 * The widget only loads once the section nears the viewport so it never blocks
 * first paint. We call initInlineWidget ourselves rather than relying on
 * Calendly's auto-scan: the script is injected after mount, and under React
 * StrictMode the effect runs twice, which made auto-scan unreliable.
 */
export function CalendlyEmbed() {
  const sentinel = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [failed, setFailed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!near) return;

    const url = `${site.calendly}?hide_gdpr_banner=1&background_color=121214&text_color=ededef&primary_color=b8ff3c`;

    const mount = () => {
      const parent = target.current;
      if (!parent || !window.Calendly) return;
      // Guard against StrictMode's double-invoke rendering two calendars.
      if (parent.childElementCount > 0) return;
      window.Calendly.initInlineWidget({ url, parentElement: parent });
      setMounted(true);
    };

    if (window.Calendly) {
      mount();
      return;
    }

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    const onLoad = () => mount();
    const onError = () => setFailed(true);

    script.addEventListener("load", onLoad);
    script.addEventListener("error", onError);

    // Deliberately does NOT remove the script on cleanup — tearing it down mid-flight
    // was what left the container empty.
    return () => {
      script?.removeEventListener("load", onLoad);
      script?.removeEventListener("error", onError);
    };
  }, [near]);

  return (
    <div
      ref={sentinel}
      className="overflow-hidden rounded-2xl border border-hairline bg-elevated shadow-[--shadow-floating]"
    >
      <div className="relative" style={{ minHeight: "700px" }}>
        {/* Sits behind the widget; the iframe covers it once Calendly mounts. */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center transition-opacity duration-500 ${
            mounted && !failed ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <p className="font-mono text-xs text-faint">
            {failed ? "Calendar didn't load." : "Loading calendar…"}
          </p>
          <a
            href={site.calendly}
            className="rounded text-sm text-accent underline decoration-accent-deep underline-offset-4 transition-colors hover:text-ink"
          >
            Open the booking page directly
          </a>
        </div>

        <div ref={target} className="relative" style={{ minWidth: "320px", height: "700px" }} />
      </div>
    </div>
  );
}
