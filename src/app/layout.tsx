import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} — AI systems for fire & life safety contractors`,
  description:
    "Your techs find the deficiencies. Most never become proposals. Apex Automation builds the deficiency-to-quote, after-hours voice, and access-coordination systems that close the gap — using your price book and your signature.",
  keywords: [
    "fire protection automation",
    "fire alarm inspection software automation",
    "NFPA 25 ITM",
    "deficiency to quote",
    "fire and life safety contractor AI",
    "sprinkler inspection automation",
    "fire alarm monitoring RMR",
  ],
  openGraph: {
    title: `${site.name} — AI systems for fire & life safety contractors`,
    description:
      "You're not losing money on inspections. You're losing it after the report is filed.",
    url: siteUrl,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI systems for fire & life safety contractors`,
    description:
      "You're not losing money on inspections. You're losing it after the report is filed.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "AI automation implementation for fire & life safety contractors — deficiency-to-quote, after-hours call handling, inspection scheduling and AHJ report QA.",
  url: siteUrl,
  email: site.email,
  serviceType: "AI automation for fire protection and life safety contractors",
  areaServed: "Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-base antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Grain overlay — sits above the canvas, below all content. */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-base transition-transform duration-200 focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
