/**
 * Industry benchmarks — NOT Apex client results.
 * The distinction is labelled on the page on purpose: in a liability trade,
 * borrowing someone else's numbers without saying so is how you lose the room.
 */
const STATS = [
  { value: "25→70%", label: "deficiency close rate, systematized" },
  { value: "41.9%", label: "name labor as problem #1" },
  { value: "19.5%", label: "pull-through, top performers" },
  { value: "1.6 days", label: "to invoice, top performers" },
];

export function ProofBand() {
  return (
    <div className="border-y border-hairline bg-elevated/40">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-2 gap-px md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 py-9 text-center md:py-11">
              <p className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 font-mono text-[11px] leading-relaxed text-faint">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <p className="border-t border-hairline py-4 text-center font-mono text-[10px] text-faint">
          Industry benchmarks across the fire &amp; life safety trade — not Apex
          client results.
        </p>
      </div>
    </div>
  );
}
