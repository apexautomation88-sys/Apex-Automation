# CLAUDE.md — Apex Automation Website

Marketing site for **Apex Automation**, an AI automation implementation agency.
Standalone project. Unrelated to the FBA Wholesale marketplace in `../FBA SAAS/` —
do not import from it, do not copy its conventions.

Full build spec: [`.claude/BUILD_PROMPT.md`](.claude/BUILD_PROMPT.md). Read it before
writing frontend code.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind 4 · `src/` dir · deploy target Vercel

This supersedes the older "single index.html + Tailwind CDN" default. Tailwind is
compiled through PostCSS — **never load Tailwind from a CDN here.**

## The one rule

The site exists to convert a stranger into a booked Calendly call. Every section,
animation, and sentence either serves that or gets cut.

## Local server

```sh
npm run dev        # http://localhost:3000
```

Next's dev server replaces the old `serve.mjs` — don't add one. Never start a second
instance if one is already running. **Never screenshot a `file:///` URL.**

## Screenshot QA loop

Puppeteer is a local devDependency (its Chrome lives in this project, not in a
user-global cache — the `C:/Users/nateh/...` paths in the old website MD were from a
different machine and do not exist here).

```sh
node screenshot.mjs http://localhost:3000 hero            # 1440px desktop
node screenshot.mjs http://localhost:3000 hero --mobile   # 390px mobile
```

Saves auto-incremented to `temporary screenshots/`, never overwriting. Read the PNG
back with the Read tool and analyze it directly.

Critique in measurements, never vibes: "h1 is 44px, should be ~64px here", "card gap
16px, should be 24px", "muted text on elevated bg is 3.1:1, fails AA". Minimum two
full rounds, at both widths. Stop only when no visible defects remain.

## Brand assets

Check `brand_assets/` before designing. If a logo or palette exists there, use it
exactly — never invent brand colors over real ones. The folder is currently empty:
no logo and no palette exist yet, so the design system below is the source of truth
until real assets arrive.

## Design system — dark technical

Never use default Tailwind palette values (no `indigo-500`, no `blue-600`).

```
--bg-base       #0A0A0B    --text-primary  #EDEDEF
--bg-elevated   #121214    --text-muted    #8A8A94
--bg-floating   #1A1A1D    --accent        #B8FF3C
--hairline      #26262B    --accent-dim    #7FB329
```

Accent is a scalpel: CTA fill, live data, one word in the headline, active diagram
nodes. Never a full-width accent section.

- **Type:** two distinct families minimum — display grotesk (`-0.03em` at large
  sizes) + clean sans body (`line-height: 1.7`) + mono for labels/metrics. Self-host
  via `next/font`. No font CDN.
- **Depth:** three planes — base → elevated → floating. Layered, accent-tinted
  shadows at low opacity. Never bare `shadow-md`.
- **Texture:** layered radial gradients + SVG noise filter. Flat near-black reads cheap.
- **Motion:** `transform` and `opacity` only. Spring easing. Never `transition-all`.
  Honor `prefers-reduced-motion`.
- **States:** every interactive element needs hover, `focus-visible`, and active.
  `focus-visible` must be clearly visible against the dark canvas.

## Copy rules

- Specific beats clever. Falsifiable claims only.
- Second person — "your team", not "businesses".
- **Never fabricate** a metric, logo, testimonial, or client name. Missing proof gets
  a visibly-marked placeholder and a note to the user — it never gets invented.
- Banned: leverage, synergy, unlock, empower, transform your business, cutting-edge,
  game-changing, revolutionary, seamless.

## Hard rules

- Mobile-first — design 390px before 1440px
- WCAG AA contrast minimum on the dark canvas
- Calendly embeds inline on-page and lazy-loads on scroll; never a redirect, never
  render-blocking
- No `transition-all`, no default Tailwind blue/indigo, no font CDN, no fabricated proof
- Don't stop after one screenshot pass

## Known gotchas (learned the hard way — don't re-discover these)

**Calendly embed.** Do not rely on Calendly's auto-scan of `.calendly-inline-widget`.
The script is injected after mount and React StrictMode runs the effect twice, which
left the container empty. `src/components/Booking.tsx` calls
`window.Calendly.initInlineWidget({ url, parentElement })` explicitly, guards on
`childElementCount` against the double-invoke, and does **not** remove the script on
cleanup — removing it mid-flight was the original bug.

Calendly's iframe is `height: 100%`, so its parent needs an **explicit height**
(700px) or the iframe collapses to zero and the fallback text shows through.

The `background_color` / `text_color` / `primary_color` URL params are **ignored on
free Calendly plans** — the embed renders white against the dark page. Either upgrade
the plan or accept the contrast.

**Screenshot QA.** `fullPage: true` stitches unreliably past ~10,000px and produces a
visually duplicated image. The DOM is fine — verify with a `scrollHeight` /
`querySelectorAll` probe rather than trusting the image. Use `shot-section.mjs
"#selector" label [--mobile]` to capture individual sections below the fold, and
`screenshot.mjs ... --viewport` for above-the-fold only.

Calendly's iframe needs ~6–9s to paint in headless Chrome. A 400ms wait screenshots
the loading state and looks like a bug.

**Turbopack root.** A stray `package-lock.json` in `C:\Users\brian` makes Next infer
the home directory as the workspace root. `next.config.ts` pins `turbopack.root`.
