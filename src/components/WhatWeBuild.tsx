import { Eyebrow, Section, SectionTitle, Lede } from "./ui";

/**
 * Severity tags reuse the three fire alarm panel states. It's a deliberate
 * signal to the buyer that we know the trade — and it ranks the offers by how
 * fast the money shows up.
 */
const SEVERITY = {
  alarm: { label: "Alarm", cls: "text-alarm border-alarm" },
  supervisory: { label: "Supervisory", cls: "text-supervisory border-supervisory" },
  trouble: { label: "Trouble", cls: "text-trouble border-trouble" },
} as const;

const SYSTEMS = [
  {
    n: "01",
    sev: "alarm",
    title: "Deficiency-to-quote engine",
    body: "Watches your inspection system for new deficiencies, drafts a priced proposal from your price book and the tech's photos, writes the code citation and the risk in language a property manager understands, routes it to you for one-click approval, then runs the follow-up until it's won, lost, or escalated.",
    stack: ["Inspect Point", "ServiceTrade", "BuildOps", "your price book"],
  },
  {
    n: "02",
    sev: "alarm",
    title: "Copper-sunset upgrade campaign",
    body: "The FCC dropped the approval requirement for copper retirement in March. Carriers can cut a line on 90 days' notice, and AT&T started decommissioning wire centers in June. Every DACT panel on a POTS line is a forced communicator swap — plus a dual-path RMR uplift. We build the list out of your monitoring data and run the campaign.",
    stack: ["monitoring data", "wire-center notices", "quotes", "truck rolls"],
  },
  {
    n: "03",
    sev: "alarm",
    title: "After-hours & overflow voice agent",
    body: "Answers every call, triages by panel state — alarm, supervisory, or trouble — captures site, panel type, zone and contact, applies your escalation rules, and books routine inspections straight onto the route. It never makes a life-safety judgment. It routes, captures, and escalates.",
    stack: ["voice", "on-call paging", "route booking"],
  },
  {
    n: "04",
    sev: "supervisory",
    title: "Scheduling & access coordination",
    body: "Works the anniversary list three to four weeks out, confirms the appointment, verifies who has keys and what needs to be shut down, re-confirms 24 hours ahead, and re-fills a cancelled slot from a nearby standby list so route density survives.",
    stack: ["anniversary list", "tenant contact", "route density"],
  },
  {
    n: "05",
    sev: "supervisory",
    title: "Report QA before AHJ submission",
    body: "Reads the completed report against the jurisdiction's requirements and the adopted code edition. Flags missing photos, blank device counts, unsigned fields and inconsistent results — before the tech leaves the site. A human always hits send.",
    stack: ["The Compliance Engine", "IROL", "adopted code edition"],
  },
  {
    n: "06",
    sev: "supervisory",
    title: "Renewals, RMR retention & escalation",
    body: "Tracks contract anniversaries, flags at-risk accounts — no service in 14 months, a property-manager change, a bounced invoice — runs renewal outreach, and executes CPI-based price escalations with proper notice.",
    stack: ["monitoring platform", "contract dates", "CPI escalation"],
  },
];

export function WhatWeBuild() {
  return (
    <Section id="systems" className="border-t border-hairline">
      <Eyebrow>What we build</Eyebrow>
      <SectionTitle>Ranked by how fast the money shows up.</SectionTitle>
      <Lede>
        We don&apos;t rebuild your inspection software. We work the layer it
        doesn&apos;t touch — the phone, the follow-up, the customer&apos;s inbox,
        and the gap between two systems that were never introduced.
      </Lede>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-hairline pb-6 font-mono text-[11px] text-faint">
        <span className="text-alarm">■ Alarm — revenue bleeding now</span>
        <span className="text-supervisory">■ Supervisory — strong ROI, longer build</span>
        <span className="text-trouble">■ Trouble — real value, slower payback</span>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {SYSTEMS.map((s) => {
          const sev = SEVERITY[s.sev as keyof typeof SEVERITY];
          return (
            <div
              key={s.n}
              className="group rounded-2xl border border-hairline bg-elevated p-7 shadow-[--shadow-elevated] transition duration-300 ease-[--ease-spring] hover:-translate-y-1 hover:border-hairline-bright hover:bg-floating md:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-accent">{s.n}</span>
                <span
                  className={`rounded border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] ${sev.cls}`}
                >
                  {sev.label}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-[15px] text-muted">{s.body}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {s.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-hairline bg-base px-2.5 py-1 font-mono text-[10px] text-faint"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
