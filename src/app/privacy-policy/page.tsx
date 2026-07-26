import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Jamogo collects, uses, and protects your data.",
};

const TOC = [
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use your information" },
  { id: "location", label: "Location data" },
  { id: "sharing", label: "How we share information" },
  { id: "safety-features", label: "Safety features (SOS & trusted contacts)" },
  { id: "payments", label: "Payments & wallet" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Security" },
  { id: "cookies", label: "Cookies" },
  { id: "your-rights", label: "Your rights & choices" },
  { id: "children", label: "Children's privacy" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="22 July 2026"
      intro={`This Privacy Policy explains how Jamogo ("Jamogo", "we", "us", or "our") collects, uses, shares, and protects information when you use the Jamogo mobile app and website (together, the "Service"). By using the Service, you agree to the collection and use of information in accordance with this policy.`}
      toc={TOC}
    >
      <LegalSection id="information-we-collect" title="1. Information we collect">
        <p>
          <strong>Information you provide:</strong>
        </p>
        <ul>
          <li>Account details - name, phone number, email address, and profile photo.</li>
          <li>Identity verification details, where required for driver accounts.</li>
          <li>Saved places (e.g. home, work) and trusted contacts you add.</li>
          <li>Payment and mobile money details used to top up your in-app wallet.</li>
          <li>Messages, ride offers, counter-offers, and support requests you send through the Service.</li>
          <li>Ratings and feedback you give or receive after a trip.</li>
        </ul>
        <p>
          <strong>Information collected automatically:</strong>
        </p>
        <ul>
          <li>
            Location data before, during, and after a trip (see{" "}
            <a href="#location">Location data</a>).
          </li>
          <li>
            Trip details - pickup and drop-off points, route, distance,
            duration, fare offered/accepted, and ride mode (Solo or Pool).
          </li>
          <li>
            Device information (device model, operating system, unique
            identifiers) and app usage data.
          </li>
          <li>
            One-time verification codes sent to your phone number via SMS to
            confirm you own the number.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-use" title="2. How we use your information">
        <ul>
          <li>To create and secure your account, and verify your phone number.</li>
          <li>
            To match riders and drivers, calculate and negotiate fares, and
            provide live trip tracking.
          </li>
          <li>To process wallet top-ups and ride payments.</li>
          <li>
            To power safety features such as live trip sharing and emergency
            SOS.
          </li>
          <li>To provide customer support and respond to enquiries or disputes.</li>
          <li>
            To detect, investigate, and prevent fraud, abuse, and violations
            of our <Link href="/terms">Terms &amp; Conditions</Link>.
          </li>
          <li>
            To improve and personalise the Service, and to comply with legal
            obligations.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="location" title="3. Location data">
        <p>
          Jamogo collects precise location data from your device when the
          app is in use, and for a limited time in the background during an
          active trip, so that we can match you with nearby drivers or
          riders, provide turn-by-turn routing, calculate fares, and support
          the safety features described below. You can control location
          permissions through your device settings, but some features of the
          Service will not work without location access.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="4. How we share information">
        <p>We share information only as needed to operate the Service:</p>
        <ul>
          <li>
            <strong>With other users:</strong> when you&apos;re matched for a
            trip, the other party (rider/driver/co-rider) sees your name,
            photo, rating, approximate location, and trip details necessary
            to complete the ride.
          </li>
          <li>
            <strong>With service providers:</strong> including our SMS
            provider (for phone verification), mobile money and payment
            processors, mapping and routing providers, and cloud hosting
            providers - each bound by confidentiality and data protection
            obligations.
          </li>
          <li>
            <strong>With trusted contacts:</strong> if you use safety
            features, as described in{" "}
            <a href="#safety-features">Safety features</a> below.
          </li>
          <li>
            <strong>For legal reasons:</strong> where required by law,
            regulation, legal process, or governmental request, or to protect
            the rights, property, or safety of Jamogo, our users, or the
            public.
          </li>
          <li>
            <strong>Business transfers:</strong> in connection with a merger,
            acquisition, or sale of assets, subject to this policy continuing
            to apply.
          </li>
        </ul>
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection
        id="safety-features"
        title="5. Safety features (SOS & trusted contacts)"
      >
        <p>
          If you add trusted contacts, you may choose to share your live
          trip status and location with them. If you trigger the emergency
          SOS feature, we share your live location and trip details with
          Jamogo&apos;s safety team and, where enabled, your trusted
          contacts, to help coordinate a response. These features are
          provided as an aid and do not guarantee a particular outcome or
          response time.
        </p>
      </LegalSection>

      <LegalSection id="payments" title="6. Payments & wallet">
        <p>
          Wallet top-ups and payments are processed through mobile money and
          payment partners. Jamogo stores transaction records (amount, date,
          status, and related trip) but does not store your mobile money
          PIN. Payment partners handle your payment credentials under their
          own privacy and security terms.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="7. Data retention">
        <p>
          We retain account and trip information for as long as your
          account is active and as needed to provide the Service, resolve
          disputes, meet legal and regulatory obligations, and enforce our
          agreements. When no longer needed, information is deleted or
          anonymised.
        </p>
      </LegalSection>

      <LegalSection id="security" title="8. Security">
        <p>
          We use administrative, technical, and physical safeguards designed
          to protect your information. No method of transmission or storage
          is 100% secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="9. Cookies">
        <p>
          Our website uses a small number of cookies and similar
          technologies:
        </p>
        <ul>
          <li>
            <strong>Necessary cookies:</strong> required for the website to
            function correctly, such as remembering your cookie
            preferences. These cannot be switched off.
          </li>
          <li>
            <strong>Analytics cookies (optional):</strong> help us
            understand how visitors use our website so we can improve it.
            These are only set if you consent to them.
          </li>
        </ul>
        <p>
          You can change your cookie preferences at any time using the
          &quot;Manage cookies&quot; link in the footer of our website.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="10. Your rights & choices">
        <ul>
          <li>Access, correct, or update your account information from within the app.</li>
          <li>
            Request a copy of, or deletion of, your personal information,
            subject to legal and operational retention requirements.
          </li>
          <li>Manage location, notification, and contacts permissions from your device settings.</li>
          <li>Delete saved places or trusted contacts at any time.</li>
        </ul>
        <p>To exercise these rights, contact us using the details below.</p>
      </LegalSection>

      <LegalSection id="children" title="11. Children's privacy">
        <p>
          The Service is not intended for anyone under the age of 18. We do
          not knowingly collect personal information from children. If you
          believe a child has provided us with personal information, please
          contact us so we can remove it.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="12. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. We will
          notify you of material changes through the app or by other
          reasonable means before they take effect. Continued use of the
          Service after changes take effect constitutes acceptance of the
          updated policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="13. Contact us">
        <p>
          If you have questions about this Privacy Policy or how we handle
          your information, contact us at{" "}
          <a href={`mailto:${SITE.emails.privacy}`}>{SITE.emails.privacy}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
