import { Eyebrow, Section, SectionTitle, Lede } from "./ui";

const SYSTEMS = [
  {
    n: "01",
    title: "Lead response engines",
    body: "Inbound hits your form, email, or phone. It gets qualified, enriched, routed, and replied to before a human touches it.",
    stack: ["forms", "CRM", "email", "SMS"],
  },
  {
    n: "02",
    title: "Document processing",
    body: "Invoices, POs, contracts, applications. Parsed, validated against your rules, pushed into the system of record — with exceptions flagged for a human.",
    stack: ["OCR", "LLM extract", "ERP"],
  },
  {
    n: "03",
    title: "Internal copilots",
    body: "A chat interface over your own data. Your team asks in plain English and gets answers from your docs, tickets, and database — not from the open internet.",
    stack: ["RAG", "Slack", "internal DB"],
  },
  {
    n: "04",
    title: "Reporting that runs itself",
    body: "The spreadsheet somebody rebuilds every Monday, replaced by a pipeline that assembles it overnight and flags what moved.",
    stack: ["warehouse", "scheduled jobs", "alerts"],
  },
];

export function WhatWeBuild() {
  return (
    <Section id="services" className="border-t border-hairline">
      <Eyebrow>What we build</Eyebrow>
      <SectionTitle>Four systems that pay for themselves fastest.</SectionTitle>
      <Lede>
        Most businesses need one of these before they need anything clever. We start
        where the money is, not where the demo is impressive.
      </Lede>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {SYSTEMS.map((s) => (
          <div
            key={s.n}
            className="group rounded-2xl border border-hairline bg-elevated p-7 shadow-[--shadow-elevated] transition duration-300 ease-[--ease-spring] hover:-translate-y-1 hover:border-hairline-bright hover:bg-floating md:p-8"
          >
            <span className="font-mono text-xs text-accent">{s.n}</span>
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
        ))}
      </div>
    </Section>
  );
}
