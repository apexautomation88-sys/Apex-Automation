import Link from "next/link";
import { CTA, site } from "@/lib/site";

const links = [
  { href: "/#systems", label: "Systems" },
  { href: "/#method", label: "Method" },
  { href: "/#governance", label: "Hard lines" },
  { href: "/#faq", label: "Objections" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline/70 bg-base/80 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10"
      >
        <Link href="/" className="flex items-center gap-2.5 rounded-md">
          <span aria-hidden className="h-2 w-2 rotate-45 bg-accent" />
          <span className="font-display text-[15px] font-bold tracking-tight">
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded text-sm text-muted transition-colors duration-200 hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#book"
          className="rounded-full border border-hairline-bright bg-elevated px-4 py-2 text-[13px] font-semibold sm:px-5 sm:text-sm transition duration-200 ease-[--ease-spring] hover:-translate-y-0.5 hover:border-accent hover:text-accent active:translate-y-0"
        >
          <span className="sm:hidden">Book a call</span>
          <span className="hidden sm:inline">{CTA}</span>
        </Link>
      </nav>
    </header>
  );
}
