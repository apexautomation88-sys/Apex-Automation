import { Eyebrow, Section, SectionTitle, Lede } from "./ui";

const STEPS = [
  {
    day: "Day 0",
    title: "Teardown call",
    body: "30 minutes. We map where your time actually goes and pick the one process with the highest return. You get the map whether or not you hire us.",
  },
  {
    day: "Days 1–5",
    title: "Scope and fixed quote",
    body: "We write down exactly what gets built, what it connects to, and what it costs. One number. No hourly billing, no scope creep clause.",
  },
  {
    day: "Days 6–25",
    title: "Build",
    body: "We build against your real data, not a sandbox. You see working software at the end of every week — not a status update.",
  },
  {
    day: "Days 26–30",
    title: "Ship and hand over",
    body: "Live in production, your team trained, documentation written, code in your repository. You own all of it.",
  },
];

export function Method() {
  return (
    <Section id="method" className="border-t border-hairline">
      <Eyebrow>How it works</Eyebrow>
      <SectionTitle>Thirty days, four checkpoints, no mystery.</SectionTitle>
      <Lede>
        The reason automation projects fail isn&apos;t technical. It&apos;s that
        nobody agreed what &quot;done&quot; meant. We fix that on day one.
      </Lede>

      <ol className="mt-14 space-y-px">
        {STEPS.map((s, i) => (
          <li
            key={s.day}
            className="group relative grid gap-3 border border-hairline bg-elevated p-7 transition-colors duration-300 first:rounded-t-2xl last:rounded-b-2xl hover:bg-floating md:grid-cols-[160px_1fr] md:gap-8 md:p-9"
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
