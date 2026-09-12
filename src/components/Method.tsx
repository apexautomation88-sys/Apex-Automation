import { Eyebrow, Section, SectionTitle, Lede } from "./ui";

const STEPS = [
  {
    day: "The call",
    title: "We find the bleeding number",
    body: "Thirty minutes. We look at deficiency close rate, missed calls, and failed access events, and pick the one we can move in four weeks. You get the diagnosis whether or not you hire us.",
  },
  {
    day: "Days 1–30",
    title: "One number, instrumented first",
    body: "We baseline it before we turn anything on — without a baseline there's no honest renewal conversation later. Then we ship the first system. About 30 minutes of your inspections manager's time, once.",
  },
  {
    day: "Days 31–60",
    title: "Close the loop",
    body: "Follow-up sequences, approval routing, and CRM hygiene, so the proposal that got drafted actually gets decided instead of sitting in someone's drafts folder.",
  },
  {
    day: "Days 61–90",
    title: "Expand along the calendar",
    body: "Renewals, the five-year internals, extinguisher hydro, the copper-sunset list. The calendar never stops, which is what makes this permanent rather than a project.",
  },
];

export function Method() {
  return (
    <Section id="method" className="border-t border-hairline">
      <Eyebrow>How it works</Eyebrow>
      <SectionTitle>Your workload is a calendar, not a funnel.</SectionTitle>
      <Lede>
        Work is due when it&apos;s due. Slip an inspection and it compounds into
        next quarter, because capacity is inelastic when the calendar is. We build
        against that rhythm instead of fighting it.
      </Lede>

      <ol className="mt-14 space-y-px">
        {STEPS.map((s, i) => (
          <li
            key={s.day}
            className="group relative grid gap-3 border border-hairline bg-elevated p-7 transition-colors duration-300 first:rounded-t-2xl last:rounded-b-2xl hover:bg-floating md:grid-cols-[170px_1fr] md:gap-8 md:p-9"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
                {s.day}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 max-w-2xl text-[15px] text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
