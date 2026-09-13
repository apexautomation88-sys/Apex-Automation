import Link from "next/link";
import { legal, site } from "@/lib/site";

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/accessibility", label: "Accessibility" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-14 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-2.5 self-start rounded-md">
            <span aria-hidden className="h-2 w-2 rotate-45 bg-accent" />
            <span className="font-display text-[15px] font-bold tracking-tight">
              {site.name}
            </span>
          </Link>

          <p className="font-mono text-xs text-faint">
            AI systems for fire &amp; life safety contractors.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="self-start font-mono text-xs text-muted underline decoration-hairline-bright underline-offset-4 transition-colors hover:text-accent md:self-auto"
          >
            {site.email}
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-hairline pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] text-faint">
            © {new Date().getFullYear()} {legal.entity}. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded font-mono text-[11px] text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
