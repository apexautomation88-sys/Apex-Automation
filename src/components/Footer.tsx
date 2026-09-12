import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-14 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-2 w-2 rotate-45 bg-accent" />
          <span className="font-display text-[15px] font-bold tracking-tight">
            {site.name}
          </span>
        </div>

        <p className="font-mono text-xs text-faint">
          AI automation, built and shipped. © {new Date().getFullYear()}
        </p>

        <a
          href={`mailto:${site.email}`}
          className="font-mono text-xs text-muted underline decoration-hairline-bright underline-offset-4 transition-colors hover:text-accent"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}
