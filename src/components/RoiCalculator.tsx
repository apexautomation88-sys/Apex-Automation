"use client";

import { useId, useState } from "react";
import { Eyebrow, SectionTitle, Lede, CtaButton } from "./ui";
import { CTA } from "@/lib/site";

const fmt = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm text-muted">
          {label}
        </label>
        <span className="shrink-0 font-mono text-sm text-ink">{format(value)}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-hairline-bright accent-accent"
      />
    </div>
  );
}

export function RoiCalculator() {
  const [deficiencies, setDeficiencies] = useState(2000);
  const [avgRepair, setAvgRepair] = useState(650);
  const [closeRate, setCloseRate] = useState(25);

  const addressable = deficiencies * avgRepair;
  const bookedNow = addressable * (closeRate / 100);

  // Deliberately conservative: we model +20 points, roughly half the 25→70
  // lift observed when the quote path gets systematized. Capped at 70.
  const improved = Math.min(closeRate + 20, 70);
  const bookedAfter = addressable * (improved / 100);
  const recovered = bookedAfter - bookedNow;

  return (
    <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
      <div>
        <Eyebrow>Your deficiency leak</Eyebrow>
        <SectionTitle>Run it against your own numbers.</SectionTitle>
        <Lede>
          This is the diagnostic question worth asking before anything else: of
          the deficiencies your techs wrote up last quarter, what percentage
          turned into a signed repair? Most shops land near 25%.
        </Lede>
        <div className="mt-9 hidden lg:block">
          <CtaButton href="#book">{CTA}</CtaButton>
        </div>
      </div>

      <div className="rounded-2xl border border-hairline bg-elevated p-7 shadow-[--shadow-floating] md:p-9">
        <div className="space-y-7">
          <Slider
            label="Deficiencies written up per year"
            value={deficiencies}
            min={100}
            max={6000}
            step={100}
            format={(v) => v.toLocaleString("en-US")}
            onChange={setDeficiencies}
          />
          <Slider
            label="Average repair value"
            value={avgRepair}
            min={150}
            max={3000}
            step={50}
            format={fmt}
            onChange={setAvgRepair}
          />
          <Slider
            label="Current close rate"
            value={closeRate}
            min={5}
            max={65}
            step={1}
            format={(v) => `${v}%`}
            onChange={setCloseRate}
          />
        </div>

        <div className="mt-9 space-y-4 border-t border-hairline pt-7">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm text-muted">Addressable repair work</span>
            <span className="font-display text-xl font-bold text-ink">
              {fmt(addressable)}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm text-muted">
              Never booked at {closeRate}%
            </span>
            <span className="font-display text-xl font-bold text-alarm">
              {fmt(addressable - bookedNow)}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-4 border-t border-hairline pt-4">
            <span className="text-sm text-muted">
              Recovered at {improved}% — half the observed lift
            </span>
            <span className="font-display text-3xl font-bold text-accent md:text-4xl">
              +{fmt(recovered)}
            </span>
          </div>
        </div>

        <p className="mt-6 font-mono text-[11px] leading-relaxed text-faint">
          Estimate from your inputs — not a quote, and not a client result. On the
          call we pull the real number out of your own system.
        </p>

        <div className="mt-7 lg:hidden">
          <CtaButton href="#book" className="w-full">
            {CTA}
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
