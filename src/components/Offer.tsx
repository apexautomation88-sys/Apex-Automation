import { Eyebrow, Section, SectionTitle, Lede, CtaButton } from "./ui";
import { CTA } from "@/lib/site";

const INCLUDED = [
  "One bleeding number, baselined before we switch anything on",
  "The system built against your real data — not a sandbox",
  "Wired into your inspection platform, not layered on top of it",
  "Your price book, your code language, your signature",
  "Full audit trail — timestamped, attributed, exportable",
  "Your team trained, documentation written",
  "A kill switch you can reach without calling us",
];

const NOT_INCLUDED = [
  "Code interpretation presented as authoritative",
  "Automatic submission to an AHJ",
  "Any life-safety judgment made by a machine",
  "A data migration before we deliver anything",
  "Lock-in to our hosting",
];

export function Offer() {
  return (
    <Section id="pricing" className="border-t border-hairline">
      <Eyebrow>The engagement</Eyebrow>
      <SectionTitle>
        Priced against the hire you were about to make.
      </SectionTitle>
      <Lede>
        You already know what an estimator costs. We scope on the call, quote one
        number, and anchor it to the repair revenue sitting unbooked in your own
        system — so it&apos;s a comparison, not a price tag.
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
              A fraction of that hire
            </p>
            <p className="mt-2 text-sm text-muted">
              Scoped on the call. It doesn&apos;t take three months to ramp, and it
              doesn&apos;t quit in year two.
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
            If we don&apos;t think this pays for itself in your shop, we&apos;ll say
            so on the call and you can keep the diagnosis. That conversation costs
            you half an hour.
          </p>
        </div>
      </div>
    </Section>
  );
}
