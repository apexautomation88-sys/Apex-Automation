import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTA, site } from "@/lib/site";

export const metadata: Metadata = {
  // No robots entry: Next already emits noindex on not-found responses.
  title: `Page not found — ${site.name}`,
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        id="main"
        className="bg-atmosphere flex min-h-[80vh] items-center px-6 pt-32 pb-24 md:px-10"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-elevated px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-muted">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-alarm" />
            404 · trouble condition
          </p>

          <h1 className="max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] text-gradient-ink">
            This page isn’t on the route.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            The link may be old, or the address may have a typo. Nothing is wrong with
            the rest of the site.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-base shadow-[--shadow-accent] transition duration-200 ease-[--ease-spring] hover:-translate-y-0.5 hover:bg-accent-dim active:translate-y-px"
            >
              Back to the homepage
              <span aria-hidden className="transition-transform duration-200 ease-[--ease-spring] group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/#book"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline-bright bg-elevated px-7 py-3.5 text-sm font-semibold text-ink transition duration-200 ease-[--ease-spring] hover:-translate-y-0.5 hover:border-faint hover:bg-floating active:translate-y-px"
            >
              {CTA}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
