import { Eyebrow, Section, SectionTitle } from "./ui";

const FAQS = [
  {
    q: "How much does it cost?",
    a: "We quote one fixed number after the scoping call, priced against what the manual process already costs you. Most single-system builds land in a range we'll be upfront about on the call — we don't publish a number here because quoting before understanding your process is how agencies end up renegotiating halfway through.",
  },
  {
    q: "Our data is a mess. Are we even ready?",
    a: "Everyone's data is a mess. If it were clean and well-structured, you'd have automated this already. Cleaning and structuring it is part of the build, not a prerequisite you need to solve before calling us.",
  },
  {
    q: "Could our own developers just build this?",
    a: "Sometimes, yes — and if that's genuinely true we'll say so. But your developers already have a roadmap, and automation work tends to sit at the bottom of it for a year. You're not comparing our price to zero. You're comparing it to the cost of the delay.",
  },
  {
    q: "What happens when it breaks?",
    a: "Systems get monitored and alert on failure rather than silently doing nothing. You get 30 days of support after launch, full documentation, and the source code in your own repository. If you fire us, everything keeps running.",
  },
  {
    q: "Do we need to hire someone to run it?",
    a: "No. We build for the team you have. If a system needs a specialist to operate, we've built the wrong system.",
  },
  {
    q: "How much of our time does this take?",
    a: "Roughly two hours in week one to map the process, then about 30 minutes a week to review what we've built. We work against your real data so you aren't stuck writing specifications for us.",
  },
];

export function Faq() {
  return (
    <Section id="faq" className="border-t border-hairline">
      <Eyebrow>Objections</Eyebrow>
      <SectionTitle>The questions you&apos;re actually asking.</SectionTitle>

      <div className="mt-14 divide-y divide-hairline border-y border-hairline">
        {FAQS.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-ink transition-colors duration-200 hover:text-accent [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden
                className="shrink-0 font-mono text-xl text-faint transition-transform duration-300 ease-[--ease-spring] group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-3xl pb-7 text-[15px] text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
