import { LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The terms that govern your use of the Jamogo app and website.",
  path: "/terms",
});

const TOC = [
  { id: "eligibility", label: "Eligibility & accounts" },
  { id: "nature-of-service", label: "Nature of the Service" },
  { id: "fares", label: "Fares, negotiation & ride modes" },
  { id: "payments", label: "Payments & wallet" },
  { id: "cancellations", label: "Cancellations & no-shows" },
  { id: "conduct", label: "User conduct" },
  { id: "safety", label: "Safety features" },
  { id: "ratings", label: "Ratings & feedback" },
  { id: "ip", label: "Intellectual property" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnification" },
  { id: "suspension", label: "Suspension & termination" },
  { id: "governing-law", label: "Governing law & disputes" },
  { id: "changes", label: "Changes to these Terms" },
  { id: "contact", label: "Contact us" },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="22 July 2026"
      intro={`These Terms & Conditions ("Terms") govern your access to and use of the Jamogo mobile app and website (together, the "Service"), operated by Jamogo ("Jamogo", "we", "us", or "our"). By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.`}
      toc={TOC}
    >
      <LegalSection id="eligibility" title="1. Eligibility & accounts">
        <p>
          You must be at least 18 years old and able to form a binding
          contract to use the Service. You must register with an accurate
          phone number and verify it via a one-time code. You are
          responsible for keeping your account credentials secure and for
          all activity under your account.
        </p>
      </LegalSection>

      <LegalSection id="nature-of-service" title="2. Nature of the Service">
        <p>
          Jamogo provides a technology platform that connects riders with
          independent drivers for point-to-point and shared (pooled) trips.
          Jamogo is not a transportation carrier and does not itself provide
          transportation services. Drivers using the Service are independent
          and are solely responsible for the trips they provide, compliance
          with applicable transport and licensing laws, and the condition
          and safe operation of their vehicles.
        </p>
      </LegalSection>

      <LegalSection id="fares" title="3. Fares, negotiation & ride modes">
        <ul>
          <li>
            When requesting a ride, you propose a fare for your trip.
            Drivers may accept your offer or send a counter-offer, and you
            may counter in return. A trip is only booked once both parties
            agree on a fare.
          </li>
          <li>
            You may choose to ride <strong>Solo</strong> (a private trip) or{" "}
            <strong>Pool</strong> (shared with other riders travelling a
            similar route) at the fare and terms shown before you confirm
            the trip.
          </li>
          <li>
            Any &quot;recommended&quot; fare range shown in the app is an
            estimate only and is not a guaranteed or fixed price.
          </li>
          <li>
            Once a fare is accepted by both parties, it is binding for that
            trip, subject to reasonable adjustments for verified changes in
            route or trip parameters.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="payments" title="4. Payments & wallet">
        <p>
          Rides are paid for using your in-app wallet, which you top up via
          supported mobile money channels. Wallet top-ups are subject to
          the terms of the relevant mobile money or payment provider. Wallet
          balances are non-transferable and, except where required by law
          or expressly stated in the app, non-refundable. You are
          responsible for any fees charged by your mobile money provider.
        </p>
      </LegalSection>

      <LegalSection id="cancellations" title="5. Cancellations & no-shows">
        <p>
          Either party may cancel a trip before it begins. Repeated late
          cancellations or no-shows, by either riders or drivers, may
          result in a cancellation charge, temporary restrictions, or
          account suspension, as disclosed in the app at the time.
        </p>
      </LegalSection>

      <LegalSection id="conduct" title="6. User conduct">
        <p>You agree not to:</p>
        <ul>
          <li>Provide false identity, contact, or payment information.</li>
          <li>Use the Service for any unlawful, fraudulent, or abusive purpose.</li>
          <li>Harass, threaten, or endanger other users, including co-riders and drivers.</li>
          <li>Manipulate fares, ratings, or offers in bad faith.</li>
          <li>Interfere with the operation or security of the Service.</li>
        </ul>
        <p>
          We may investigate and take action, including warnings,
          suspension, or termination, in response to violations of this
          section.
        </p>
      </LegalSection>

      <LegalSection id="safety" title="7. Safety features">
        <p>
          The Service includes optional safety tools such as live trip
          sharing with trusted contacts and an emergency SOS button. These
          tools are provided to assist you and do not replace contacting
          local emergency services directly where appropriate. Jamogo does
          not guarantee any particular response time or outcome from use of
          these features.
        </p>
      </LegalSection>

      <LegalSection id="ratings" title="8. Ratings & feedback">
        <p>
          Riders and drivers may rate each other after a trip. Ratings and
          feedback must be honest and are used to maintain the quality and
          safety of the Service. We may use ratings to restrict access for
          users who fall below acceptable standards.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="9. Intellectual property">
        <p>
          The Service, including its design, branding, and underlying
          software, is owned by Jamogo or its licensors and is protected by
          applicable intellectual property laws. You may not copy, modify,
          or distribute any part of the Service without our prior written
          consent.
        </p>
      </LegalSection>

      <LegalSection id="disclaimers" title="10. Disclaimers">
        <p>
          The Service is provided &quot;as is&quot; and &quot;as
          available&quot; without warranties of any kind, express or
          implied, including warranties of merchantability, fitness for a
          particular purpose, or non-infringement. Jamogo does not warrant
          that the Service will be uninterrupted, timely, secure, or
          error-free, or that any driver or rider will meet your
          expectations.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="11. Limitation of liability">
        <p>
          To the fullest extent permitted by law, Jamogo shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of data, revenue, or goodwill,
          arising from your use of the Service or any trip arranged through
          it. Jamogo&apos;s total liability for any claim arising out of
          these Terms shall not exceed the amount you paid through the
          Service in the three months preceding the claim.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" title="12. Indemnification">
        <p>
          You agree to indemnify and hold Jamogo harmless from any claims,
          losses, liabilities, and expenses (including legal fees) arising
          from your use of the Service, your breach of these Terms, or your
          violation of any law or the rights of a third party.
        </p>
      </LegalSection>

      <LegalSection id="suspension" title="13. Suspension & termination">
        <p>
          We may suspend or terminate your access to the Service at any
          time, with or without notice, for violation of these Terms,
          suspected fraud or abuse, or as required by law. You may stop
          using the Service and request account deletion at any time.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="14. Governing law & disputes">
        <p>
          These Terms are governed by the laws of the Republic of Ghana,
          without regard to conflict-of-law principles. Any dispute arising
          from these Terms or the Service shall first be addressed through
          good-faith negotiation, and if unresolved, submitted to the
          exclusive jurisdiction of the courts of Ghana.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="15. Changes to these Terms">
        <p>
          We may update these Terms from time to time. We will notify you
          of material changes through the app or by other reasonable means
          before they take effect. Continued use of the Service after
          changes take effect constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="16. Contact us">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${SITE.emails.legal}`}>{SITE.emails.legal}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
