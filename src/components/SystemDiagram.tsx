/**
 * The hero visual: the deficiency-to-quote path.
 *
 * This is the exact gap the business is built around — the tech documents a
 * deficiency, and then it sits. Showing the path (and where it stalls) does more
 * work than any stock illustration.
 *
 * Orientation is responsive: a 5-across row crushes each node at 390px, so the
 * pipeline runs vertically on mobile and horizontally from `sm` up.
 * Animation is transform/opacity only, and stops under prefers-reduced-motion.
 */

const NODES = [
  { label: "Deficiency", sub: "tech writes it up" },
  { label: "Priced", sub: "your price book" },
  { label: "Approved", sub: "one click, human" },
  { label: "Chased", sub: "email · SMS" },
  { label: "Signed", sub: "repair booked" },
] as const;

function Packet({ delay }: { delay: string }) {
  return (
    <>
      {/* Wrapper spans the connector, so translate(100%) travels exactly its length. */}
      <span aria-hidden className="absolute inset-0 sm:hidden">
        <span
          className="absolute inset-0"
          style={{ animation: `packet-y 3s linear ${delay} infinite` }}
        >
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_2px_rgb(184_255_60/0.5)]" />
        </span>
      </span>

      <span aria-hidden className="absolute inset-0 hidden sm:block">
        <span
          className="absolute inset-0"
          style={{ animation: `packet 3s linear ${delay} infinite` }}
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
      aria-label="The deficiency-to-quote path: a deficiency is written up, priced from your price book, approved by a human in one click, followed up by email and SMS, and signed as booked repair work."
      className="relative rounded-2xl border border-hairline bg-elevated/60 p-5 shadow-[--shadow-floating] backdrop-blur-sm sm:p-7"
    >
      <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
        <span
          className="h-1.5 w-1.5 rounded-full bg-accent"
          style={{ animation: "node-pulse 2s ease-in-out infinite" }}
        />
        deficiency → signed repair
      </div>

      <div className="flex flex-col items-stretch sm:flex-row">
        {NODES.map((node, i) => (
          <div
            key={node.label}
            className="flex min-w-0 flex-col items-stretch sm:flex-1 sm:flex-row"
          >
            <div className="flex min-w-0 flex-col justify-center rounded-xl border border-hairline-bright bg-floating px-2.5 py-3 text-center sm:flex-1 sm:px-1.5 sm:py-4">
              <p className="font-mono text-[10px] leading-tight font-medium text-ink sm:text-[11px]">
                {node.label}
              </p>
              <p className="mt-1 text-[9px] leading-tight text-faint">{node.sub}</p>
            </div>

            {i < NODES.length - 1 && (
              <div className="relative h-5 w-px shrink-0 self-center bg-hairline-bright sm:h-px sm:w-4">
                <Packet delay={`${i * 0.5}s`} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-hairline pt-4 font-mono text-[10px] text-faint">
        <span>deficiency close rate</span>
        <span className="shrink-0">
          <span className="text-alarm">25%</span>
          <span className="mx-1.5">→</span>
          <span className="text-accent">70%</span>
        </span>
      </div>
    </div>
  );
}
