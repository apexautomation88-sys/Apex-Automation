import { Eyebrow, Section, SectionTitle, Lede, Placeholder } from "./ui";

/**
 * PLACEHOLDER case studies.
 * Every bracketed field must be replaced with a real, verifiable client result
 * before launch. Do not invent numbers — in this trade a number you can't
 * defend on a call is worse than no number at all.
 */
const CASES = [
  {
    trade: "[Trade — e.g. alarm + sprinkler, 5 trucks]",
    client: "[Client name, or 'A $3M shop in DFW']",
    situation: "[What was leaking — the deficiency backlog, missed after-hours calls, failed access]",
    built: "[Which system we shipped, in one sentence]",
    before: "[Before metric]",
    after: "[After metric]",
  },
  {
    trade: "[Trade mix]",
    client: "[Client name or descriptor]",
    situation: "[What was leaking]",
    built: "[What we shipped]",
    before: "[Before metric]",
    after: "[After metric]",
  },
];

export function CaseStudies() {
  return (
    <Section id="work" className="border-t border-hairline">
      <Eyebrow>Proof</Eyebrow>
      <SectionTitle>Same trade. Same code book. Same leak.</SectionTitle>
      <Lede>
        Every shop we work with was already doing the inspections correctly. What
        changed was what happened in the days after the report got filed.
      </Lede>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {CASES.map((c, i) => (
          <article
            key={i}
            className="flex flex-col rounded-2xl border border-hairline bg-elevated p-7 shadow-[--shadow-elevated] md:p-9"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              <Placeholder>{c.trade}</Placeholder>
            </p>

            <h3 className="mt-4 text-xl font-semibold text-ink">
              <Placeholder>{c.client}</Placeholder>
            </h3>

            <dl className="mt-6 space-y-4 text-[15px]">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  Situation
                </dt>
                <dd className="mt-1 text-muted">
                  <Placeholder>{c.situation}</Placeholder>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  What we shipped
                </dt>
                <dd className="mt-1 text-muted">
                  <Placeholder>{c.built}</Placeholder>
                </dd>
              </div>
            </dl>

            <div className="mt-7 flex items-center gap-4 border-t border-hairline pt-6">
              <div className="flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  Before
                </p>
                <p className="mt-1 text-sm text-muted">
                  <Placeholder>{c.before}</Placeholder>
                </p>
              </div>
              <span aria-hidden className="text-accent">
                →
              </span>
              <div className="flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  After
                </p>
                <p className="mt-1 text-sm text-accent">
                  <Placeholder>{c.after}</Placeholder>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 rounded-xl border border-dashed border-accent-deep bg-accent/5 p-5 font-mono text-xs text-accent-dim">
        ⚠ Both case studies are placeholders. Send the real client, trade mix, and
        before/after numbers and I&apos;ll swap them in. Nothing here is invented.
      </p>
    </Section>
  );
}
