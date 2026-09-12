import { Eyebrow, Section, SectionTitle, Lede, Card } from "./ui";

const COSTS = [
  {
    stat: "The deficiency that never got quoted",
    body: "Your tech documented it. It's in the report. Six weeks later nobody has priced it, and the property manager has forgotten the conversation happened.",
  },
  {
    stat: "The truck that couldn't get in",
    body: "Tenant unreachable, sprinkler room key missing, kitchen mid-service. The roll is burned, the route is broken, and nobody gets billed for the hour.",
  },
  {
    stat: "The 2am trouble signal",
    body: "It reaches a message service that can't tell a supervisory from a trouble. Your on-call tech hears about it in the morning — or the customer calls somebody else.",
  },
];

export function Problem() {
  return (
    <Section>
      <Eyebrow>Where the money leaks</Eyebrow>
      <SectionTitle>
        The inspection is the annuity. The repair is the profit — and it&apos;s
        the one that leaks.
      </SectionTitle>
      <Lede>
        ITM revenue is code-mandated and predictable. Nobody opts out of NFPA 25.
        The margin lives in what the inspection finds, and that&apos;s exactly
        where the process stops being a system and starts being somebody&apos;s
        memory.
      </Lede>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {COSTS.map((c) => (
          <Card key={c.stat}>
            <p className="font-display text-xl font-semibold tracking-tight text-ink">
              {c.stat}
            </p>
            <p className="mt-3 text-[15px] text-muted">{c.body}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-hairline bg-elevated p-7 shadow-[--shadow-elevated] md:p-9">
        <p className="max-w-3xl text-lg text-ink md:text-xl">
          Two thousand deficiencies a year at a $650 average repair is{" "}
          <span className="text-accent">$1.3M</span> of addressable work sitting
          inside your own system. At a 25% close rate, roughly{" "}
          <span className="text-alarm">$975,000</span> of it never gets booked.
          Same techs, same buildings, same findings — the gap is entirely in what
          happens after the report is filed.
        </p>
      </div>
    </Section>
  );
}
