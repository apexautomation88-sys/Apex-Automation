import { Eyebrow, Section, SectionTitle, Lede, Card } from "./ui";

const COSTS = [
  {
    stat: "The copy-paste tax",
    body: "Someone on payroll moves data between three systems that don't talk. Every day. Forever.",
  },
  {
    stat: "The 4-hour reply",
    body: "A lead fills in your form at 9pm. Nobody sees it until 1pm tomorrow. Your competitor answered at 9:04.",
  },
  {
    stat: "The tribal knowledge",
    body: "One person knows how the process actually works. When they're out, it stops. When they quit, it breaks.",
  },
];

export function Problem() {
  return (
    <Section>
      <Eyebrow>The real cost</Eyebrow>
      <SectionTitle>
        Manual work doesn&apos;t feel expensive. That&apos;s exactly why it survives.
      </SectionTitle>
      <Lede>
        It never shows up as a line item. It shows up as headcount you had to hire,
        deals that went cold, and a team doing work they resent.
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
          Do the arithmetic once. One person, 15 hours a week, on work a system could
          do — that&apos;s roughly{" "}
          <span className="text-accent">750 hours a year</span> you are already
          paying for. The automation isn&apos;t the new cost. It&apos;s the refund.
        </p>
      </div>
    </Section>
  );
}
