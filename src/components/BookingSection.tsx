import { Section, Eyebrow, SectionTitle, Lede } from "./ui";
import { CalendlyEmbed } from "./Booking";

const PROMISES = [
  "We map where your time actually goes",
  "We name the one process worth automating first",
  "You get a rough number — cost and payback",
];

export function BookingSection() {
  return (
    <Section id="book" className="border-t border-hairline bg-atmosphere">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <Eyebrow>Book the teardown</Eyebrow>
          <SectionTitle>30 minutes. No pitch.</SectionTitle>
          <Lede>
            You leave with a map of your own operation whether or not you ever hire
            us. Here&apos;s exactly what happens on the call:
          </Lede>

          <ul className="mt-8 space-y-3.5">
            {PROMISES.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-muted">
                <span aria-hidden className="mt-0.5 shrink-0 font-mono text-accent">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>

          <p className="mt-9 border-t border-hairline pt-7 font-mono text-xs text-faint">
            Prefer email? Write to{" "}
            <a
              href="mailto:apexautomation88@gmail.com"
              className="text-muted underline decoration-hairline-bright underline-offset-4 transition-colors hover:text-accent"
            >
              apexautomation88@gmail.com
            </a>
          </p>
        </div>

        <CalendlyEmbed />
      </div>
    </Section>
  );
}
