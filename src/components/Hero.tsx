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
            Built for fire &amp; life safety contractors
          </p>

          <h1 className="text-[clamp(2rem,3.8vw,3rem)] text-gradient-ink">
            You don&apos;t lose money on the inspection.
            <br />
            <span className="text-accent">
              You lose it after the report is filed.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg text-muted">
            Your techs find the deficiencies. Then it waits — for someone to price
            it, write the proposal, send it, chase it. Most never go out. We build
            the system that closes that gap, using your price book and your
            signature.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton href="#book">{CTA}</CtaButton>
            <CtaButton href="#systems" variant="ghost">
              See what we build
            </CtaButton>
          </div>

          <p className="mt-5 font-mono text-xs text-faint">
            Nothing we build makes a code call · your certified people sign everything
          </p>
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <SystemDiagram />
        </div>
      </div>
    </div>
  );
}
