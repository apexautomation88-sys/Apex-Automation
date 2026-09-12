"use client";

import { useId, useState } from "react";
import { Eyebrow, SectionTitle, Lede, CtaButton } from "./ui";
import { CTA } from "@/lib/site";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm text-muted">
          {label}
        </label>
        <span className="font-mono text-sm text-ink">
          {value}
          {suffix}
        </span>
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
  const [hours, setHours] = useState(15);
  const [rate, setRate] = useState(35);
  const [people, setPeople] = useState(2);

  const annualCost = hours * rate * people * 52;
  // Deliberately conservative: we claim 70% of the manual work is automatable,
  // not 100%. Overclaiming here is what gets caught on the sales call.
  const recovered = annualCost * 0.7;

  return (
    <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
      <div>
        <Eyebrow>&quot;It&apos;s too expensive&quot;</Eyebrow>
        <SectionTitle>Compared to what you&apos;re already spending?</SectionTitle>
        <Lede>
          The manual process is not free. It is the most expensive thing in your
          business — it is just billed as salary, so nobody flags it. Move the
          sliders to your own numbers.
        </Lede>
        <div className="mt-9 hidden lg:block">
          <CtaButton href="#book">{CTA}</CtaButton>
        </div>
      </div>

      <div className="rounded-2xl border border-hairline bg-elevated p-7 shadow-[--shadow-floating] md:p-9">
        <div className="space-y-7">
          <Slider
            label="Hours per week on manual work"
            value={hours}
            min={1}
            max={60}
            step={1}
            suffix=" hrs"
            onChange={setHours}
          />
          <Slider
            label="People doing it"
            value={people}
            min={1}
            max={15}
            step={1}
            suffix=""
            onChange={setPeople}
          />
          <Slider
            label="Fully-loaded hourly cost"
            value={rate}
            min={15}
            max={150}
            step={5}
            suffix=" /hr"
            onChange={setRate}
          />
        </div>

        <div className="mt-9 space-y-4 border-t border-hairline pt-7">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm text-muted">You spend annually</span>
            <span className="font-display text-2xl font-bold text-ink">
              {fmt(annualCost)}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm text-muted">
              Recoverable at a conservative 70%
            </span>
            <span className="font-display text-3xl font-bold text-accent md:text-4xl">
              {fmt(recovered)}
            </span>
          </div>
        </div>

        <p className="mt-6 font-mono text-[11px] leading-relaxed text-faint">
          Estimate based on your inputs — not a quote, and not a client result. We
          give you a real number on the call.
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
