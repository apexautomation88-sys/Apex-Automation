import type { ReactNode } from "react";
import { legal } from "@/lib/site";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-6 py-[--spacing-section] md:px-10 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-accent">
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] text-gradient-ink">
      {children}
    </h2>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return <p className="mt-5 max-w-2xl text-lg text-muted">{children}</p>;
}

/**
 * Primary call to action. Rendered as an anchor because every CTA on this page
 * points at the same booking target.
 */
export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold " +
    "transition duration-200 ease-[--ease-spring] active:translate-y-px";

  const styles =
    variant === "primary"
      ? "bg-accent text-base shadow-[--shadow-accent] hover:bg-accent-dim hover:-translate-y-0.5"
      : "border border-hairline-bright bg-elevated text-ink hover:border-faint hover:bg-floating hover:-translate-y-0.5";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-200 ease-[--ease-spring] group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-hairline bg-elevated p-7 shadow-[--shadow-elevated] ${className}`}
    >
      {children}
    </div>
  );
}

/** Marks content that is not yet real, so it can never ship by accident. */
export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span
      title="PLACEHOLDER — replace with real data before launch"
      className="rounded border border-dashed border-accent-deep bg-accent/5 px-1.5 py-0.5 text-accent-dim"
    >
      {children}
    </span>
  );
}

/** The operating entity's legal name — rendered as a placeholder until it's confirmed. */
export function Entity() {
  return legal.entityConfirmed ? <>{legal.entity}</> : <Placeholder>{legal.entity}</Placeholder>;
}
