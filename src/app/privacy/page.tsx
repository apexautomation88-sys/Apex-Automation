import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How ${legal.entity} collects, uses, and protects information on this website.`,
};

const email = <a href={`mailto:${site.email}`}>{site.email}</a>;

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "Scope",
    content: (
      <>
        <p>
          This policy covers this website and the information you share with us when
          you book a call or email us. It is operated by {legal.entity}, a {legal.state}{" "}
          limited liability company (“Apex,” “we,” “us”).
        </p>
        <p>
          It does <strong>not</strong> cover data we process while delivering services
          to a client — inspection records, customer contacts, call recordings, or
          anything else inside a client’s systems. That data is governed by the written
          service agreement with that client, which controls if it conflicts with this
          policy.
        </p>
      </>
    ),
  },
  {
    id: "collect",
    title: "What we collect",
    content: (
      <>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>When you book a call</strong> through our embedded Calendly
            scheduler: your name, email address, the time you choose, and any answers
            you give to booking questions. Calendly collects this and makes it
            available to us.
          </li>
          <li>
            <strong>When you email us</strong>: your email address and whatever you
            choose to include in the message.
          </li>
          <li>
            <strong>During a call</strong>: business information you choose to share
            about your operation.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <p>
          Our hosting provider, Vercel, records standard server logs when your browser
          requests a page: IP address, browser and device type, the page requested,
          the referring page, and a timestamp. These logs are used to operate and
          secure the site.
        </p>

        <h3>What we don’t collect</h3>
        <ul>
          <li>
            We use <strong>no analytics, advertising pixels, or tracking tools</strong>,
            and our own code sets no cookies. See the{" "}
            <Link href="/cookies">Cookie Policy</Link>.
          </li>
          <li>
            The deficiency calculator runs entirely in your browser.{" "}
            <strong>The numbers you enter are never sent to us</strong> or anyone else.
          </li>
          <li>
            Our fonts are hosted on our own site, so loading a page doesn’t send your
            IP address to a font provider.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use it",
    content: (
      <>
        <ul>
          <li>To schedule, prepare for, and hold the call you booked</li>
          <li>To respond to your messages and follow up on your inquiry</li>
          <li>To prepare a proposal if you ask for one</li>
          <li>To operate, secure, and troubleshoot the website</li>
          <li>To comply with legal obligations and enforce our terms</li>
        </ul>
        <p>
          If you book a call, we may email you about it and about the inquiry that led
          to it. You can ask us to stop at any time by replying or writing to {email},
          and we will.
        </p>
      </>
    ),
  },
  {
    id: "share",
    title: "Who we share it with",
    content: (
      <>
        <p>
          <strong>We do not sell your personal information</strong>, and we do not share
          it for targeted or cross-context behavioral advertising.
        </p>
        <p>We share it only with service providers that help us run the business:</p>
        <ul>
          <li>
            <strong>Vercel</strong> — website hosting and server logs (
            <a href="https://vercel.com/legal/privacy-policy">privacy policy</a>)
          </li>
          <li>
            <strong>Calendly</strong> — call scheduling (
            <a href="https://calendly.com/legal/privacy-notice">privacy notice</a>)
          </li>
          <li>
            <strong>Google</strong> — our email is hosted on Google’s Gmail service
          </li>
          <li>
            <strong>The video-conferencing provider</strong> named in your meeting
            invitation, when a call takes place
          </li>
        </ul>
        <p>
          We may also disclose information when the law requires it, to protect our
          rights or someone’s safety, or as part of a merger, acquisition, or sale of
          the business — in which case this policy would continue to apply to it.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    content: (
      <p>
        We keep booking and inquiry information for as long as we need it for the
        purposes above. If we don’t go on to work together, we delete it within 24
        months of our last contact, unless the law requires us to keep it longer.
        Server log retention is set by Vercel.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your choices and rights",
    content: (
      <>
        <p>
          Depending on where you live, privacy laws such as the Texas Data Privacy and
          Security Act and the California Consumer Privacy Act may give you the right
          to:
        </p>
        <ul>
          <li>Confirm whether we process your personal information, and access it</li>
          <li>Correct inaccurate information</li>
          <li>Delete information you provided or that we hold about you</li>
          <li>Receive a portable copy of it</li>
          <li>Opt out of sale, targeted advertising, or profiling — which we don’t do</li>
        </ul>
        <p>
          <strong>We honor these requests for anyone who asks</strong>, whether or not a
          specific law applies to us or to you. Email {email} with your request. We may
          need to confirm your identity first, and we respond within 45 days. We will
          not treat you differently for making a request.
        </p>
        <p>
          If we decline a request, you can appeal by replying to our decision with
          “Appeal” in the subject line. We respond to appeals within 60 days. If you
          remain unsatisfied, you may contact your state attorney general.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        The site is served only over encrypted HTTPS, and we use reputable providers
        with their own security programs. No method of transmitting or storing data is
        completely secure, so we can’t guarantee absolute security — but if we learn of
        a breach affecting your information, we will notify you as the law requires.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children",
    content: (
      <p>
        This site is for businesses. It is not directed to children under 13, and we do
        not knowingly collect their personal information. If you believe a child has
        given us information, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "location",
    title: "Where data is processed",
    content: (
      <p>
        We are based in the United States and the site is intended for visitors in the
        United States. Information is processed in the U.S. by us and our service
        providers.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We will update the effective date at the top of this page whenever we change
        this policy. If a change materially affects how we use information you have
        already given us, we will tell you before it takes effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        Questions or requests about your privacy: {email}. {legal.entity},{" "}
        {legal.state}.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      intro={
        <p>
          The short version: this site doesn’t track you. We collect what you give us
          when you book a call or email us, use it to talk to you about your business,
          and never sell it.
        </p>
      }
      sections={sections}
    />
  );
}
