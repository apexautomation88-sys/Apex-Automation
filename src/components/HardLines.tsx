import { Eyebrow, Section, SectionTitle, Lede } from "./ui";

const LINES = [
  {
    never: "Never interprets code as authoritative",
    always: "It drafts the citation and the plain-language risk. A certified human reviews and signs. You are not getting a second opinion on compliance from a machine.",
  },
  {
    never: "Never submits to an AHJ",
    always: "Reports are QA'd and staged against the jurisdiction's adopted code edition. A human hits send, every time.",
  },
  {
    never: "Never makes a life-safety call",
    always: "The voice agent triages by panel state and escalates. It will not tell a caller a building is safe, or that a signal can be ignored.",
  },
  {
    never: "Never sends unapproved work",
    always: "Every outbound message is templated and approved. Every action is logged with a timestamp and an approver. There's a kill switch you can reach without calling us.",
  },
];

export function HardLines() {
  return (
    <Section id="governance" className="border-t border-hairline">
      <Eyebrow>Hard lines</Eyebrow>
      <SectionTitle>What it will never do.</SectionTitle>
      <Lede>
        You are in a liability trade. You should be suspicious of anyone putting
        AI near your customers — we&apos;d be too. So here are the limits in
        writing, before you have to ask for them.
      </Lede>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
        {LINES.map((l) => (
          <div key={l.never} className="bg-elevated p-7 md:p-8">
            <p className="flex items-start gap-3 font-display text-lg font-semibold tracking-tight text-ink">
              <span aria-hidden className="mt-0.5 shrink-0 font-mono text-alarm">
                ✕
              </span>
              {l.never}
            </p>
            <p className="mt-3 pl-7 text-[15px] text-muted">{l.always}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-lg text-ink">
        In a trade where the record is the deliverable,{" "}
        <span className="text-accent">the audit log is the product.</span> Every
        agent action is timestamped, attributed, and exportable — which is exactly
        what your insurer and your AHJ will want to see.
      </p>
    </Section>
  );
}
