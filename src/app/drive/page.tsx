import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CtaBanner } from "@/components/CtaBanner";
import { Button } from "@/components/Button";
import {
  ClockIcon,
  TagIcon,
  CoinsIcon,
  ShieldIcon,
  DocumentCheckIcon,
  CarIcon,
} from "@/components/icons";
import { DRIVER_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Drive",
  description:
    "Drive with Jamogo and earn on your terms. Set your own hours, accept the offers that work for you, and get paid straight to mobile money.",
};

const REQUIREMENTS = [
  "Valid Ghanaian driving licence, held for at least 1 year",
  "A roadworthy vehicle registered in Ghana, 2010 model or newer",
  "Valid vehicle roadworthy certificate and insurance",
  "National ID (Ghana Card) for identity verification",
  "A smartphone running Android 9+ or iOS 15+",
];

export default function DrivePage() {
  return (
    <>
      <PageHero
        eyebrow="For drivers"
        title="Drive with Jamogo. Earn on your terms."
        description="Set your own hours, accept the fare offers that work for you, and get paid straight to mobile money - no forced dispatch, no hidden commission surprises."
        cta={
          <Button href={DRIVER_MAILTO}>Sign up as a driver</Button>
        }
        imageLabel="Phone mockup - driver app with incoming ride offer"
        imageWidth={640}
        imageHeight={1280}
      />

      {/* Why drive */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Why drive with Jamogo"
            title="Flexibility, transparency, control"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <FeatureCard
              icon={<ClockIcon />}
              title="Your schedule"
              description="Go online whenever suits you. No shifts, no quotas, no penalties for logging off."
            />
            <FeatureCard
              icon={<TagIcon />}
              title="You set the price"
              description="Counter a rider's offer if it doesn't work for you, or accept the ones that do."
            />
            <FeatureCard
              icon={<CoinsIcon />}
              title="Fast mobile money payouts"
              description="Earnings land in your mobile money wallet - track every trip and payout in the app."
            />
          </div>
        </Container>
      </section>

      {/* How to join */}
      <section className="bg-jamogo-gray-100 py-20">
        <Container>
          <SectionHeading
            eyebrow="Getting started"
            title="From sign-up to your first trip"
          />
          <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
            <ol className="space-y-8">
              {[
                {
                  icon: <DocumentCheckIcon />,
                  title: "Sign up & submit documents",
                  description:
                    "Register with your phone number and upload your licence, Ghana Card, and vehicle documents.",
                },
                {
                  icon: <ShieldIcon />,
                  title: "Verification & background check",
                  description:
                    "Our team verifies your identity and vehicle before you're approved to drive.",
                },
                {
                  icon: <CarIcon />,
                  title: "Go online",
                  description:
                    "Once approved, switch on the driver app and start receiving nearby ride requests.",
                },
                {
                  icon: <TagIcon />,
                  title: "Accept offers that work for you",
                  description:
                    "Review each rider's fare offer, counter if you'd like, and accept the trips you want.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-jamogo-green-600 shadow-[0_8px_24px_rgba(14,26,19,0.06)]">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-jamogo-green-600">
                      Step {i + 1}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-jamogo-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-jamogo-gray-500">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <ImagePlaceholder
              width={720}
              height={960}
              label="Screenshot - driver document upload & verification flow"
            />
          </div>
        </Container>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <ImagePlaceholder
            width={960}
            height={720}
            label="Photo - driver next to their car in Kumasi"
          />
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-jamogo-ink-900 sm:text-4xl">
              What you&apos;ll need
            </h2>
            <ul className="mt-6 space-y-3">
              {REQUIREMENTS.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-3 text-sm text-jamogo-gray-700"
                >
                  <ShieldIcon className="mt-0.5 shrink-0 text-jamogo-green-600" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Applications open soon"
        description="Register your interest now and we'll email you as soon as driver applications open in your city."
        ctaLabel="Sign up as a driver"
        ctaHref={DRIVER_MAILTO}
      />
    </>
  );
}
