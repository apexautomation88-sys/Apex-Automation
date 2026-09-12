import { Eyebrow, Section, SectionTitle } from "./ui";

const FAQS = [
  {
    q: "This is life safety. I'm not putting AI in front of my customers.",
    a: "Neither would we. Nothing we build makes a code call or a life-safety decision. It answers the phone at 2am, captures the site and the panel state, and pages your on-call tech faster than a message service does. Your certified people still make every judgment and sign every report.",
  },
  {
    q: "My inspection software already does that.",
    a: "Tell us which one and we'll be specific. Inspect Point's assistant checks your report for missing photos. It doesn't call the property manager who's been sitting on a $4,200 proposal for six weeks. We work the gaps between your systems and your customer — the phone, the inbox, the follow-up. We don't rebuild your inspection forms.",
  },
  {
    q: "My customers want to talk to a person.",
    a: "They do — during business hours. At 11pm they want someone to pick up. Right now that's a message service reading a script that can't tell a supervisory signal from a trouble. Every call still reaches your team. The difference is whether it reaches them in four minutes or the next morning.",
  },
  {
    q: "We're too busy to take on a project right now.",
    a: "That's usually the real objection, and it's fair. So the first thing we build takes work away rather than adding it. About thirty minutes of your inspections manager's time, once. If month one costs you more than that, you don't pay for month two.",
  },
  {
    q: "What does it cost?",
    a: "You were going to hire for this. An estimator runs $62–120K and an admin coordinator $35–50K, and both take months to ramp. We price well under that hire, and we scope it against the deficiency math from your own system — so the number has a denominator, not just a price tag.",
  },
  {
    q: "Our data is a mess — we're still on spreadsheets and paper.",
    a: "About a third of small shops are on spreadsheets and another quarter on paper. That's a buying signal, not a blocker. We scope phase one to something that needs no clean data at all: inbound calls, or just the deficiency list from the last 90 days. We never lead with a data migration.",
  },
  {
    q: "What happens when it gets something wrong?",
    a: "Every outbound message is templated and approved before it sends. Every action is logged with a timestamp and an approver. Confidence thresholds escalate to a human, and there's a kill switch you can reach without calling us. In a liability trade, the governance is the feature.",
  },
  {
    q: "I'm selling the business in a couple of years anyway.",
    a: "Then this is among the highest-ROI things you can do. Buyers pay 6–10× EBITDA and they price two things: recurring revenue percentage and owner-dependence. Raising RMR and getting the follow-up out of your head and into a system moves both — the multiple, not just the profit.",
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
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-medium text-ink transition-colors duration-200 hover:text-accent [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden
                className="mt-1 shrink-0 font-mono text-xl text-faint transition-transform duration-300 ease-[--ease-spring] group-open:rotate-45"
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
