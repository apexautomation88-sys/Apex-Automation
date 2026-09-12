import { Eyebrow, Section, SectionTitle, Lede, Placeholder } from "./ui";

/**
 * PLACEHOLDER case studies.
 * Every bracketed field must be replaced with a real, verifiable client result
 * before this page goes live. Do not invent numbers here.
 */
const CASES = [
  {
    industry: "[Industry 1]",
    client: "[Client name or 'A 40-person distributor']",
    situation: "[What was breaking — the manual process and who was doing it]",
    built: "[What we actually built, in one sentence]",
    before: "[Before metric]",
    after: "[After metric]",
    result: "[The headline result, e.g. '31 hours/week returned']",
  },
  {
    industry: "[Industry 2]",
    client: "[Client name or descriptor]",
    situation: "[What was breaking]",
    built: "[What we built]",
    before: "[Before metric]",
    after: "[After metric]",
    result: "[The headline result]",
  },
];

export function CaseStudies() {
  return (
    <Section id="work" className="border-t border-hairline">
      <Eyebrow>Proof</Eyebrow>
      <SectionTitle>
        Different industries. Same method. Same kind of result.
      </SectionTitle>
      <Lede>
        The businesses below have almost nothing in common — which is the point. The
        bottleneck is never the industry. It&apos;s the handoff between two systems
        that never learned to talk.
      </Lede>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {CASES.map((c, i) => (
          <article
            key={i}
            className="flex flex-col rounded-2xl border border-hairline bg-elevated p-7 shadow-[--shadow-elevated] md:p-9"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              <Placeholder>{c.industry}</Placeholder>
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
                  What we built
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
        ⚠ These two case studies are placeholders. Send the real client, industry,
        before/after numbers and I&apos;ll swap them in. Nothing here is invented.
      </p>
    </Section>
  );
}
