import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { Entity } from "@/components/ui";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Cookie Policy — ${site.name}`,
  description: `Which cookies the ${site.name} website uses, and how to control them.`,
};

const email = <a href={`mailto:${site.email}`}>{site.email}</a>;

const ROWS = [
  {
    source: "Apex Automation (this site)",
    what: "None. Our code sets no cookies and stores nothing in your browser.",
    when: "—",
  },
  {
    source: "Calendly (embedded scheduler)",
    what: "Cookies and similar technologies Calendly uses to run the scheduler, keep it secure, and monitor its performance and errors.",
    when: "When the booking section scrolls into or near view — before you click anything.",
  },
];

const sections: LegalSection[] = [
  {
    id: "summary",
    title: "The summary",
    content: (
      <p>
        <strong>This site does not set its own cookies.</strong> We use no analytics,
        advertising, or tracking cookies. The only cookies you may receive come from the
        Calendly scheduler embedded in our booking section.
      </p>
    ),
  },
  {
    id: "what",
    title: "What cookies are",
    content: (
      <p>
        Cookies are small text files a website stores in your browser. Similar
        technologies, such as local storage, work the same way. Sites use them to
        remember settings, keep services secure, or — on many sites, though not this
        one — track visitors for analytics and advertising.
      </p>
    ),
  },
  {
    id: "list",
    title: "Cookies on this site",
    content: (
      <>
        <div className="mt-2 overflow-x-auto rounded-xl border border-hairline">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <caption className="sr-only">Cookies used on this website</caption>
            <thead>
              <tr className="border-b border-hairline bg-elevated">
                <th scope="col" className="px-4 py-3 font-mono text-[10px] font-normal uppercase tracking-[0.14em] text-faint">
                  Set by
                </th>
                <th scope="col" className="px-4 py-3 font-mono text-[10px] font-normal uppercase tracking-[0.14em] text-faint">
                  What and why
                </th>
                <th scope="col" className="px-4 py-3 font-mono text-[10px] font-normal uppercase tracking-[0.14em] text-faint">
                  When
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.source} className="border-b border-hairline last:border-b-0">
                  <th scope="row" className="px-4 py-4 align-top font-semibold text-ink">
                    {r.source}
                  </th>
                  <td className="px-4 py-4 align-top">{r.what}</td>
                  <td className="px-4 py-4 align-top">{r.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Calendly decides which specific cookies it sets and may change them. For
          details, see{" "}
          <a href="https://calendly.com/legal/privacy-notice">Calendly’s privacy notice</a>.
        </p>
      </>
    ),
  },
  {
    id: "not-used",
    title: "What we don’t use",
    content: (
      <ul>
        <li>No analytics cookies (such as Google Analytics)</li>
        <li>No advertising or retargeting pixels (such as Meta or LinkedIn)</li>
        <li>No session recording or heatmap tools</li>
        <li>
          No third-party font requests — our fonts are served from this site
        </li>
      </ul>
    ),
  },
  {
    id: "logs",
    title: "Server logs are not cookies",
    content: (
      <p>
        Our host, Vercel, records standard server logs — including your IP address —
        whenever a page is requested. That happens on the server and doesn’t place
        anything in your browser. The <Link href="/privacy">Privacy Policy</Link>{" "}
        explains how those logs are used.
      </p>
    ),
  },
  {
    id: "control",
    title: "How to control cookies",
    content: (
      <>
        <p>
          You can block or delete cookies in your browser settings. Because our own site
          sets none, blocking cookies won’t affect anything except the scheduler:
          blocking Calendly’s cookies may stop the booking calendar from loading or
          working.
        </p>
        <p>
          If that happens, you can book on{" "}
          <a href={site.calendly}>Calendly’s own page</a> instead, or email us at{" "}
          {email} to arrange a time.
        </p>
      </>
    ),
  },
  {
    id: "gpc",
    title: "Global Privacy Control",
    content: (
      <p>
        We treat Global Privacy Control and similar browser signals as a valid request
        to opt out of the sale of personal information and targeted advertising. We do
        neither, so honoring the signal requires no change in how the site behaves for
        you.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes and contact",
    content: (
      <p>
        If we ever add cookies of our own, we will update this policy and its effective
        date before doing so. Questions: {email}. <Entity />, {legal.state}.
      </p>
    ),
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookies"
      intro={
        <p>
          This site sets no cookies of its own. The only ones you may get come from the
          Calendly scheduler we embed for booking calls.
        </p>
      }
      sections={sections}
    />
  );
}
