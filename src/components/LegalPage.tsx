import Link from "next/link";
import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { legal } from "@/lib/site";

export type LegalSection = { id: string; title: string; content: ReactNode };

const DOCS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/accessibility", label: "Accessibility Statement" },
];

/**
 * Shared shell for the legal documents. Sections are passed as data so the
 * on-page table of contents and the anchors can never drift out of sync.
 */
export function LegalPage({
  title,
  path,
  intro,
  sections,
}: {
  title: string;
  path: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <Nav />
      <main id="main" className="bg-atmosphere px-6 pt-32 pb-24 md:px-10 md:pt-40">
        <div className="mx-auto w-full max-w-6xl">
          <header className="max-w-3xl border-b border-hairline pb-10">
            <p className="mb-5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Legal
            </p>
            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] text-gradient-ink">{title}</h1>
            <p className="mt-4 font-mono text-xs text-faint">
              Effective {legal.effectiveDate} · {legal.entity}
            </p>
            <div className="mt-6 text-lg text-muted">{intro}</div>
          </header>

          <div className="mt-14 grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            <nav aria-label="On this page" className="min-w-0 self-start lg:sticky lg:top-24">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                On this page
              </p>
              <ol className="mt-4 space-y-2.5 border-l border-hairline">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-sm text-muted transition-colors duration-200 hover:border-accent hover:text-ink"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="min-w-0 max-w-3xl">
              {sections.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  aria-labelledby={`${s.id}-heading`}
                  className={i === 0 ? "" : "mt-14 border-t border-hairline pt-14"}
                >
                  <h2
                    id={`${s.id}-heading`}
                    className="text-[clamp(1.5rem,2.6vw,2rem)] text-ink"
                  >
                    {s.title}
                  </h2>
                  <div
                    className={
                      "mt-5 text-[15px] leading-[1.75] text-muted " +
                      "[&_a]:text-accent [&_a]:underline [&_a]:decoration-accent-deep [&_a]:underline-offset-4 [&_a:hover]:text-ink " +
                      "[&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:text-ink " +
                      "[&_li]:mt-2 [&_p+p]:mt-4 [&_p]:max-w-none [&_strong]:font-semibold [&_strong]:text-ink " +
                      "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:marker:text-faint " +
                      "[&_p+ul]:mt-3 [&_ul+p]:mt-4"
                    }
                  >
                    {s.content}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <nav
            aria-label="Legal documents"
            className="mt-20 grid gap-3 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {DOCS.map((d) => {
              const current = d.href === path;
              return (
                <Link
                  key={d.href}
                  href={d.href}
                  aria-current={current ? "page" : undefined}
                  className={`rounded-xl border px-5 py-4 text-sm transition duration-200 ease-[--ease-spring] active:translate-y-px ${
                    current
                      ? "border-accent-deep bg-accent/5 text-accent"
                      : "border-hairline bg-elevated text-muted hover:-translate-y-0.5 hover:border-hairline-bright hover:text-ink"
                  }`}
                >
                  {d.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
