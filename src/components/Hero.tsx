import { CtaButton } from "./ui";
import { SystemDiagram } from "./SystemDiagram";
import { CTA } from "@/lib/site";

export function Hero() {
  return (
    <div id="top" className="bg-atmosphere relative overflow-hidden pt-28 pb-20 md:pt-36">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="animate-rise">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-elevated px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Shipped in 30 days — or you don&apos;t pay
          </p>

          <h1 className="text-[clamp(2.25rem,4.4vw,3.5rem)] text-gradient-ink">
            Your team is doing work
            <br />
            <span className="text-accent">software should be doing.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg text-muted">
            We&apos;re not consultants with a slide deck. We design, build, and ship
            working AI systems into your business — then hand you the keys.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton href="#book">{CTA}</CtaButton>
            <CtaButton href="#work" variant="ghost">
              See the work
            </CtaButton>
          </div>

          <p className="mt-5 font-mono text-xs text-faint">
            30 minutes · no pitch · you leave with a map either way
          </p>
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <SystemDiagram />
        </div>
      </div>
    </div>
  );
}
