"use client";

import { useEffect, useState } from "react";
import { CTA } from "@/lib/site";

/** Mobile-only sticky CTA. Appears past the hero, hides once the booking section is in view. */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const book = document.getElementById("book");

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const bookingVisible = book
        ? book.getBoundingClientRect().top < window.innerHeight
        : false;
      setShow(pastHero && !bookingVisible);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      inert={!show}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-base/90 p-4 backdrop-blur-xl transition duration-300 ease-[--ease-spring] md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <a
        href="#book"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-base shadow-[--shadow-accent] active:translate-y-px"
      >
        {CTA}
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
