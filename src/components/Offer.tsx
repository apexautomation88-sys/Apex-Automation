import { Eyebrow, Section, SectionTitle, Lede, CtaButton } from "./ui";
import { CTA } from "@/lib/site";

const INCLUDED = [
  "One process, mapped end to end",
  "The system built against your real data",
  "Every integration wired to your existing tools",
  "Your team trained on it",
  "Written documentation",
  "Source code in your repository — you own it",
  "30 days of support after launch",
];

const NOT_INCLUDED = [
  "Hourly billing",
  "A strategy deck",
  "A six-month discovery phase",
  "Lock-in to our hosting",
];

export function Offer() {
  return (
    <Section id="pricing" className="border-t border-hairline">
      <Eyebrow>The engagement</Eyebrow>
      <SectionTitle>One process. One fixed price. Live in 30 days.</SectionTitle>
      <Lede>
        We scope it on the call and quote one number. If it changes, it changes
        because you asked — never because we discovered something we should have
        caught in scoping.
      </Lede>

      <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl border border-hairline bg-elevated p-8 shadow-[--shadow-elevated] md:p-10">
          <h3 className="text-2xl font-semibold text-ink">What you get</h3>
          <ul className="mt-7 space-y-3.5">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-muted">
                <span aria-hidden className="mt-0.5 shrink-0 font-mono text-accent">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 border-t border-hairline pt-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              Investment
            </p>
            <p className="mt-2 font-display text-3xl font-bold text-ink">
              Scoped on the call
            </p>
            <p className="mt-2 text-sm text-muted">
              Priced against what the manual process already costs you — so the
              number has a denominator, not just a price tag.
            </p>
          </div>

          <CtaButton href="#book" className="mt-8 w-full sm:w-auto">
            {CTA}
          </CtaButton>
        </div>

        <div className="rounded-2xl border border-hairline bg-base p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-ink">What you don&apos;t get</h3>
          <ul className="mt-7 space-y-3.5">
            {NOT_INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-faint">
                <span aria-hidden className="mt-0.5 shrink-0 font-mono">✕</span>
                <span className="line-through decoration-hairline-bright">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-9 border-t border-hairline pt-7 text-[15px] text-muted">
            If we don&apos;t think automation will pay for itself in your case,
            we&apos;ll tell you on the call and you can keep the map. That
            conversation costs you 30 minutes.
          </p>
        </div>
      </div>
    </Section>
  );
}
