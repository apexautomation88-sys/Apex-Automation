// Single source of truth for business facts used across the page.
// PLACEHOLDER entries are unverified — replace with real data before launch.

export const site = {
  name: "Apex Automation",
  email: "apexautomation88@gmail.com",
  calendly: "https://calendly.com/apexautomation88/30min",
  tagline: "AI systems for fire & life safety contractors.",
} as const;

/**
 * Canonical origin, used for metadata, the sitemap, and social preview URLs.
 * On Vercel this resolves to the production domain automatically — including a custom
 * domain once one is assigned. Set NEXT_PUBLIC_SITE_URL only to override it.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const legal = {
  // PLACEHOLDER — replace with the exact name registered with the Texas Secretary of
  // State, then set entityConfirmed to true to drop the placeholder styling.
  entity: "[LLC legal name]",
  entityConfirmed: false,
  state: "Texas",
  effectiveDate: "September 13, 2026",
} as const;

export const CTA = "Book a teardown call";
