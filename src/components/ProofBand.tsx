import { Placeholder } from "./ui";

/** PLACEHOLDER metrics — replace each `value` with a real, defensible number. */
const STATS = [
  { value: "add metric", label: "hours returned / month", placeholder: true },
  { value: "add metric", label: "systems shipped", placeholder: true },
  { value: "30", label: "days to live", placeholder: false },
  { value: "100%", label: "of the code is yours", placeholder: false },
];

export function ProofBand() {
  return (
    <div className="border-y border-hairline bg-elevated/40">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px px-6 md:grid-cols-4 md:px-10">
        {STATS.map((s) => (
          <div key={s.label} className="py-9 text-center md:py-11">
            <p className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              {s.placeholder ? (
                <span className="font-mono text-xs font-normal">
                  <Placeholder>{s.value}</Placeholder>
                </span>
              ) : (
                <span className="text-ink">{s.value}</span>
              )}
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
