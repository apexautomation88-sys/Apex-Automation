import { Section } from "./ui";

export function Guarantee() {
  return (
    <Section className="border-t border-hairline">
      <div className="relative overflow-hidden rounded-3xl border border-accent-deep bg-elevated p-9 shadow-[--shadow-floating] md:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 80% at 85% 0%, rgb(184 255 60 / 0.10), transparent 70%)",
          }}
        />
        <div className="relative">
          <p className="mb-5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            The guarantee
          </p>

          <h2 className="max-w-3xl text-[clamp(1.875rem,4vw,3rem)] text-gradient-ink">
            It works, or you get your money back.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-muted">
            We agree on the number before we start — in writing. We baseline it
            before anything switches on, so there&apos;s no argument later about
            what moved. If the system we ship doesn&apos;t hit it, you don&apos;t
            pay. You keep the code either way.
          </p>

          <p className="mt-8 rounded-xl border border-dashed border-accent-deep bg-accent/5 p-4 font-mono text-[11px] leading-relaxed text-accent-dim">
            ⚠ Placeholder wording. Send me your exact guarantee terms — refund
            window, what counts as hitting the target, any conditions — so this
            states your real offer and not my paraphrase of it.
          </p>
        </div>
      </div>
    </Section>
  );
}
