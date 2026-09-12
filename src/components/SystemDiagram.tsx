/**
 * The hero visual: a live automation pipeline.
 * Shows what Apex actually builds rather than decorating the page with a gradient.
 *
 * Orientation is responsive — a 4-across row crushes each node to ~56px at 390px,
 * so the pipeline runs vertically on mobile and horizontally from `sm` up.
 * Animation is transform/opacity only, and stops under prefers-reduced-motion.
 */

const NODES = [
  { label: "Intake", sub: "email · form" },
  { label: "Extract", sub: "AI parse" },
  { label: "Decide", sub: "your rules" },
  { label: "Act", sub: "CRM · Slack" },
] as const;

function Packet({ delay }: { delay: string }) {
  return (
    <>
      {/* Wrapper spans the connector, so translate(100%) travels exactly its length. */}
      <span aria-hidden className="absolute inset-0 sm:hidden">
        <span
          className="absolute inset-0"
          style={{ animation: `packet-y 2.6s linear ${delay} infinite` }}
        >
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_2px_rgb(184_255_60/0.5)]" />
        </span>
      </span>

      <span aria-hidden className="absolute inset-0 hidden sm:block">
        <span
          className="absolute inset-0"
          style={{ animation: `packet 2.6s linear ${delay} infinite` }}
        >
          <span className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_2px_rgb(184_255_60/0.5)]" />
        </span>
      </span>
    </>
  );
}

export function SystemDiagram() {
  return (
    <div
      role="img"
      aria-label="Automation pipeline: intake, AI extraction, rule-based decision, then action in your CRM and Slack."
      className="relative rounded-2xl border border-hairline bg-elevated/60 p-5 shadow-[--shadow-floating] backdrop-blur-sm sm:p-7"
    >
      <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
        <span
          className="h-1.5 w-1.5 rounded-full bg-accent"
          style={{ animation: "node-pulse 2s ease-in-out infinite" }}
        />
        pipeline · live
      </div>

      <div className="flex flex-col items-stretch sm:flex-row">
        {NODES.map((node, i) => (
          <div
            key={node.label}
            className="flex min-w-0 flex-col items-stretch sm:flex-1 sm:flex-row"
          >
            <div className="flex min-w-0 flex-col justify-center rounded-xl border border-hairline-bright bg-floating px-3 py-3 text-center sm:flex-1 sm:px-3 sm:py-4">
              <p className="font-mono text-xs leading-tight font-medium text-ink">
                {node.label}
              </p>
              <p className="mt-1 text-[10px] leading-tight text-faint">{node.sub}</p>
            </div>

            {i < NODES.length - 1 && (
              <div className="relative h-5 w-px shrink-0 self-center bg-hairline-bright sm:h-px sm:w-6">
                <Packet delay={`${i * 0.55}s`} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-hairline pt-4 font-mono text-[10px] text-faint">
        <span>illustrative · not a client metric</span>
        <span className="shrink-0 text-accent">hours → seconds</span>
      </div>
    </div>
  );
}
