import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Accessibility Statement — ${site.name}`,
  description: `${site.name}’s commitment to an accessible website, what we have done, and how to report a barrier.`,
};

const email = <a href={`mailto:${site.email}`}>{site.email}</a>;

const sections: LegalSection[] = [
  {
    id: "commitment",
    title: "Our commitment",
    content: (
      <p>
        {legal.entity} wants everyone to be able to use this website, including people
        who rely on screen readers, keyboard navigation, magnification, or reduced
        motion. We aim to meet the{" "}
        <a href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines
        (WCAG) 2.2</a> at Level AA.
      </p>
    ),
  },
  {
    id: "status",
    title: "Conformance status",
    content: (
      <p>
        <strong>Partially conformant.</strong> The pages we build are designed and tested
        against WCAG 2.2 Level AA. The site is described as partially conformant because
        it embeds a third-party scheduler we don’t control, and because we have not yet
        completed testing with screen readers. Both are explained below.
      </p>
    ),
  },
  {
    id: "features",
    title: "What we’ve built in",
    content: (
      <ul>
        <li>A “Skip to content” link as the first item on every page</li>
        <li>Semantic page structure with landmarks and an ordered heading hierarchy</li>
        <li>
          Every link, button, and control works by keyboard, with a clearly visible focus
          indicator
        </li>
        <li>
          Body and label text meets a contrast ratio of at least 4.5:1 against its
          background
        </li>
        <li>
          Calculator sliders have text labels, and updated results are announced to
          screen readers
        </li>
        <li>
          The animated diagram has a text description and a pause button, and all motion
          stops when your system is set to reduce motion
        </li>
        <li>
          Color is never the only way information is conveyed — severity tags carry
          written labels
        </li>
        <li>Layouts adapt to narrow screens and browser zoom without sideways scrolling</li>
      </ul>
    ),
  },
  {
    id: "limitations",
    title: "Known limitations",
    content: (
      <>
        <h3>The Calendly booking scheduler</h3>
        <p>
          Our booking calendar is provided by Calendly and loaded in an embedded frame. We
          don’t control its code, so we can’t guarantee it meets WCAG 2.2 AA. If you have
          trouble with it, use <a href={site.calendly}>Calendly’s own booking page</a>, or
          email {email} and we’ll schedule the call with you directly.
        </p>
        <h3>Screen reader testing</h3>
        <p>
          We have tested the site with automated tools and by keyboard, but we have not
          yet completed a full review with screen readers such as JAWS, NVDA, or
          VoiceOver. If something doesn’t read correctly, please tell us.
        </p>
      </>
    ),
  },
  {
    id: "testing",
    title: "How we tested",
    content: (
      <>
        <p>This site was last assessed in September 2026 using:</p>
        <ul>
          <li>Automated testing with axe-core against WCAG 2.0, 2.1, and 2.2 A and AA rules</li>
          <li>Keyboard-only navigation checks, including focus order and focus visibility</li>
          <li>Measured color contrast for every text color on every background surface</li>
          <li>Layout checks at narrow widths down to 320 pixels</li>
        </ul>
        <p>
          Our assessment is our own. It has not been independently audited.
        </p>
      </>
    ),
  },
  {
    id: "feedback",
    title: "Report a barrier",
    content: (
      <>
        <p>
          If you run into any barrier on this site, or need information in a different
          format, email {email}. Please tell us the page, what you were trying to do, and
          the browser or assistive technology you were using, if you’re comfortable
          sharing it.
        </p>
        <p>
          We aim to reply within five business days. If a barrier prevents you from
          booking a call, we’ll make another way to reach us available right away.
        </p>
      </>
    ),
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      path="/accessibility"
      intro={
        <p>
          We aim for WCAG 2.2 Level AA. Here’s what we’ve done, where we still fall short,
          and how to tell us about a barrier.
        </p>
      }
      sections={sections}
    />
  );
}
