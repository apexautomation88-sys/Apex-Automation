# BUILD PROMPT — Apex Automation Website

> Paste this at the start of any session. It encodes every decision already made.
> Anything in `[[DOUBLE BRACKETS]]` is unresolved data you must ask the user for —
> **never invent it**, especially proof and metrics.

---

## 1. Role

You are building the primary revenue asset for **Apex Automation**, an AI automation
implementation agency. This is not a brochure. It is a sales instrument whose only job
is to convert a stranger into a booked call.

Judge every decision by one question: *does this make a qualified buyer more likely to
book?* If a section, animation, or sentence doesn't, cut it.

## 2. The single conversion goal

**A booked call on Calendly.** Nothing else competes with it.

- No newsletter signup, no "download our guide", no social icons above the fold.
- The CTA text is identical everywhere: one verb, one promise.
- The Calendly embed is **inline on the page**, never a redirect off-domain.
- The CTA appears: hero, after proof, after offer, in the FAQ close, and a sticky
  bar that activates after the user scrolls past the hero on mobile.

## 3. Positioning

- **Audience:** horizontal — any business with expensive manual work. Do not name a
  single vertical in the headline.
- **Proof strategy:** the case studies span *several different industries*. This is
  deliberate and is itself the argument: **"the same method works across wildly
  different businesses."** Frame it that way — it converts a weakness into a moat.
- **Core promise:** implementation, not advice. Apex *builds and ships* the system.
  Hammer the contrast with consultants who deliver a slide deck.

## 4. Design system — dark technical

Engineering-credible. The visual argument is "we actually build software," not
"we resell ChatGPT wrappers."

**Color** — never use default Tailwind palette values.
```
--bg-base       #0A0A0B   page canvas
--bg-elevated   #121214   cards
--bg-floating   #1A1A1D   popovers, hover states
--hairline      #26262B   1px borders — the primary structural device
--text-primary  #EDEDEF
--text-muted    #8A8A94
--accent        #B8FF3C   signal lime — "system online"
--accent-dim    #7FB329   hover/pressed
```
Accent is a scalpel, not a paintbrush: CTA fill, live data, one word in the headline,
active diagram nodes. Never a full-width accent section.

**Typography** — two distinct families minimum (hard rule).
- Display: tight geometric grotesk, `letter-spacing: -0.03em` at large sizes
- Body: clean sans, `line-height: 1.7`
- Mono: eyebrow labels, metrics, diagram nodes, timeline steps
- Self-host via `next/font`. **No font CDN.**

**Depth** — three z-planes: base → elevated → floating. Never let everything sit flat.
Shadows are layered and accent-tinted at very low opacity. Never bare `shadow-md`.

**Texture** — layered radial gradients plus an SVG noise/grain filter. A flat
near-black page reads cheap; grain reads considered.

**Motion** — animate `transform` and `opacity` only. Spring easing. Never
`transition-all`. Respect `prefers-reduced-motion`.

**States** — every interactive element gets hover, `focus-visible`, and active. No
exceptions. `focus-visible` must be clearly visible against the dark canvas.

## 5. Page structure

One long page. Each section has a conversion job — if it isn't doing its job, it goes.

| # | Section | Job |
|---|---------|-----|
| 1 | **Hero** | Name the expensive problem in one line. Promise a specific outcome and timeline. CTA. |
| 2 | **Proof band** | Hard numbers immediately, before any pitch. Buys the right to keep talking. |
| 3 | **Problem** | Make the cost of the status quo concrete and quantified. Agitate with arithmetic, not adjectives. |
| 4 | **What we build** | 3–4 concrete system archetypes. Specific enough to picture. No "AI-powered synergy." |
| 5 | **Method** | Numbered, dated process. Kills "will this be another stalled project?" |
| 6 | **Case studies** | Real clients. Structure: situation → what we built → measured result. |
| 7 | **Why Apex** | Implementation vs. advice. Differentiation, short. |
| 8 | **Offer** | What you get, timeline, what happens on the call. |
| 9 | **FAQ** | Kill the top 6 objections: price, time, "our data is messy", "will it break", "do we need staff", "what if it doesn't work". |
| 10 | **Booking** | Inline Calendly. Restate the promise directly above it. |

**The hero must not be a generic gradient.** Build a real visual: an animated system
diagram showing data moving through an automation pipeline. It demonstrates the
product in the first three seconds — far stronger than a stock illustration.

## 6. Copy rules

- Specific beats clever. "Cut invoice processing from 6 hours to 20 minutes" destroys
  "Unlock your business potential."
- Second person. "Your team," not "businesses."
- **Never fabricate** a metric, logo, testimonial, or client name. If real proof is
  missing, use a visibly-marked placeholder and tell the user it needs filling.
- Ban: *leverage, synergy, unlock, empower, transform your business, cutting-edge,
  game-changing, revolutionary, seamless.*
- Every claim is falsifiable or it doesn't ship.

## 7. Technical

- Next.js 16 App Router, TypeScript, Tailwind 4, `src/` dir
- Mobile-first. Design the 390px view first — most traffic lands there.
- Semantic HTML, real landmarks, WCAG AA contrast minimum on the dark canvas
- Full SEO metadata + OG image; JSON-LD `ProfessionalService` schema
- No layout shift; no render-blocking third-party scripts
- Calendly embed lazy-loads on scroll — it must never block first paint
- Target Lighthouse ≥95 performance, 100 accessibility

## 8. QA loop — mandatory, not optional

1. Start dev server on localhost. **Never screenshot a `file:///` URL.**
2. `node screenshot.mjs http://localhost:3000 <label>` — saved auto-incremented to
   `temporary screenshots/`, never overwritten
3. Read the PNG back and analyze it directly
4. Critique in measurements, not vibes: *"hero h1 is 44px, should be ~64px at this
   breakpoint"*, *"card gap 16px, should be 24px"*, *"muted text on elevated bg is
   3.1:1, fails AA"*
5. Fix → re-screenshot. **Minimum 2 full rounds.** Check both 390px and 1440px.
6. Stop only when no visible defects remain.

## 9. Unresolved — ask, never invent

- `[[CALENDLY URL]]`
- `[[CASE STUDY 1: client, industry, before → after, measured result]]`
- `[[CASE STUDY 2: same]]`
- `[[CLIENT LOGOS — which names are cleared for public display]]`
- `[[DOMAIN]]`
- `[[CONTACT EMAIL — default apexautomation88@gmail.com]]`
- `[[LOGO / existing brand assets, if any]]`

## 10. Definition of done

- Loads at 390px and 1440px with zero visual defects across 2+ screenshot rounds
- Every interactive element has hover + focus-visible + active
- Zero fabricated proof
- One CTA, repeated, inline Calendly, no exit paths
- A stranger understands what Apex does within five seconds of landing
