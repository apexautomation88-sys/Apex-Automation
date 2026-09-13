import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Service — ${site.name}`,
  description: `The terms that govern your use of the ${site.name} website.`,
};

const email = <a href={`mailto:${site.email}`}>{site.email}</a>;

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    content: (
      <>
        <p>
          These terms govern your use of this website, which is operated by{" "}
          {legal.entity}, a {legal.state} limited liability company (“Apex,” “we,”
          “us”). By using the site, you agree to them. If you don’t agree, please don’t
          use the site.
        </p>
        <p>
          If you use the site on behalf of a company, you confirm you have authority to
          accept these terms for it.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "The website versus our services",
    content: (
      <p>
        This site describes what we do. It is not an offer to provide services. Any
        engagement — including its scope, price, deliverables, timeline, data handling,
        and any guarantee — is governed solely by a separate written agreement signed by
        both parties. If that agreement conflicts with these terms, the agreement
        controls.
      </p>
    ),
  },
  {
    id: "not-advice",
    title: "Not code, engineering, or legal advice",
    content: (
      <>
        <p>
          Nothing on this site is an interpretation of any fire or life safety code, an
          engineering opinion, or legal advice. References to NFPA standards,
          inspection frequencies, jurisdictional requirements, or regulatory events are
          general information only.
        </p>
        <p>
          Requirements vary by jurisdiction and by the edition of each standard that
          your Authority Having Jurisdiction has adopted. <strong>Always rely on your
          AHJ and your own certified professionals</strong> for compliance decisions.
        </p>
      </>
    ),
  },
  {
    id: "estimates",
    title: "Estimates, benchmarks, and guarantees",
    content: (
      <>
        <ul>
          <li>
            <strong>The deficiency calculator</strong> produces illustrative estimates
            from the numbers you enter. It is not a quote, a forecast, or a promise of
            any result.
          </li>
          <li>
            <strong>Industry figures</strong> on this site are drawn from third-party
            research about the fire and life safety trade. They are not results
            achieved by Apex clients, and we don’t guarantee their accuracy.
          </li>
          <li>
            <strong>Any guarantee</strong> described on this site, including a results
            or money-back guarantee, applies only as defined in a signed written
            agreement, and only on the terms and conditions stated there.
          </li>
        </ul>
        <p>Actual results depend on your business, your data, and many other factors.</p>
      </>
    ),
  },
  {
    id: "use",
    title: "Acceptable use",
    content: (
      <>
        <p>When using the site, you agree not to:</p>
        <ul>
          <li>Break any law, or use the site to infringe anyone’s rights</li>
          <li>
            Attempt to gain unauthorized access to, disrupt, or overload the site or its
            infrastructure
          </li>
          <li>
            Use automated tools to copy or harvest the site’s content in bulk, other
            than standard search-engine indexing
          </li>
          <li>Upload or transmit malicious code</li>
          <li>Misrepresent your identity or affiliation when contacting us</li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    content: (
      <p>
        The site’s content — including its text, design, graphics, and code — belongs to
        Apex or its licensors and is protected by intellectual property laws. You may
        view and share pages for your own business evaluation. You may not copy,
        modify, republish, or commercially exploit the content without our written
        permission.
      </p>
    ),
  },
  {
    id: "trademarks",
    title: "Third-party names and trademarks",
    content: (
      <p>
        The site refers to standards bodies, software products, and companies —
        including NFPA, Inspect Point, ServiceTrade, BuildOps, The Compliance Engine,
        IROL, Calendly, and telecommunications carriers — only to describe the systems
        we work with. Those names are trademarks of their respective owners. Their
        mention does not mean they are affiliated with, sponsor, or endorse Apex.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services and links",
    content: (
      <p>
        The site embeds and links to services run by other companies, including
        Calendly for scheduling. Your use of those services is governed by their own
        terms and privacy policies. We aren’t responsible for their content, security,
        or availability.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of warranties",
    content: (
      <p>
        The site is provided “as is” and “as available.” To the fullest extent the law
        allows, we disclaim all warranties, express or implied, including warranties of
        merchantability, fitness for a particular purpose, accuracy, and
        non-infringement. We don’t promise the site will be uninterrupted, error-free,
        or free of harmful components.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <>
        <p>
          To the fullest extent the law allows, Apex will not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or for lost profits,
          revenue, or data, arising from your use of — or inability to use — this site.
        </p>
        <p>
          Our total liability for any claim arising from your use of the site will not
          exceed one hundred U.S. dollars ($100). This section does not limit liability
          that cannot be limited under applicable law, and it does not govern any signed
          service agreement.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnification",
    content: (
      <p>
        You agree to defend and indemnify Apex against claims, losses, and expenses,
        including reasonable attorneys’ fees, arising from your breach of these terms
        or your misuse of the site.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    content: (
      <p>
        These terms are governed by the laws of the State of {legal.state}, without
        regard to its conflict-of-law rules. Any dispute arising from them or from your
        use of the site will be brought exclusively in the state or federal courts
        located in {legal.state}, and you consent to those courts’ jurisdiction.
      </p>
    ),
  },
  {
    id: "general",
    title: "General",
    content: (
      <>
        <p>
          If any part of these terms is found unenforceable, the rest remains in effect.
          Our failure to enforce a provision is not a waiver of it. These terms, together
          with our <Link href="/privacy">Privacy Policy</Link> and{" "}
          <Link href="/cookies">Cookie Policy</Link>, are the entire agreement about
          your use of the site.
        </p>
        <p>
          We may update these terms. The effective date at the top of this page shows
          when they last changed, and continuing to use the site after a change means you
          accept the updated terms.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <p>
        Questions about these terms: {email}. {legal.entity}, {legal.state}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      intro={
        <p>
          The rules for using this website. Any work we do together is covered by a
          separate signed agreement, and nothing here is code or compliance advice.
        </p>
      }
      sections={sections}
    />
  );
}
