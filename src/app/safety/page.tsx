import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CtaBanner } from "@/components/CtaBanner";
import { Button } from "@/components/Button";
import {
  DocumentCheckIcon,
  ShieldIcon,
  RouteIcon,
  SosIcon,
  UsersIcon,
  ChatIcon,
  ClockIcon,
  TagIcon,
} from "@/components/icons";
import { NOTIFY_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Safety",
  description:
    "Verified drivers, live trip sharing, one-tap SOS, and more - the safety features built into every Jamogo ride.",
};

const FEATURES = [
  {
    icon: <DocumentCheckIcon />,
    title: "ID & KYC verification",
    description:
      "Every driver submits a licence, Ghana Card, and vehicle documents that are verified before they can accept trips.",
  },
  {
    icon: <ShieldIcon />,
    title: "Safety pledge",
    description:
      "Every rider and driver agrees to a safety pledge at signup, setting clear expectations for respectful, safe rides.",
  },
  {
    icon: <UsersIcon />,
    title: "Accept who you ride with",
    description:
      "See your driver's name, photo, rating, and vehicle before you confirm - and see your co-riders on Pool trips too.",
  },
  {
    icon: <RouteIcon />,
    title: "Live trip sharing",
    description:
      "Share your live location and trip status with trusted contacts, from pickup to drop-off.",
  },
  {
    icon: <SosIcon />,
    title: "One-tap SOS",
    description:
      "Reach emergency help in a single tap from anywhere in the app during an active trip.",
  },
  {
    icon: <ChatIcon />,
    title: "Encrypted messaging",
    description:
      "In-app messages between riders and drivers are encrypted, so you never have to share your personal number.",
  },
  {
    icon: <TagIcon />,
    title: "Verify-PIN",
    description:
      "Confirm you're getting into the right car with a one-time PIN shared between rider and driver.",
  },
  {
    icon: <ClockIcon />,
    title: "RideCheck",
    description:
      "Unusual stops or long delays trigger an automatic check-in, prompting you to confirm you're okay.",
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety"
        title="Your safety is non-negotiable"
        description="We put real effort into making every ride with Jamogo safe - for riders, drivers, and co-riders, every time."
        cta={<Button href={NOTIFY_MAILTO}>Get notified at launch</Button>}
        imageLabel="Illustration - verified driver and rider safety check"
        imageWidth={960}
        imageHeight={720}
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Built in, not bolted on"
            title="Safety features in every ride"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-jamogo-gray-100 py-20">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <ImagePlaceholder
            width={960}
            height={720}
            label="Screenshot - SOS button and trusted contacts screen"
          />
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-jamogo-ink-900 sm:text-4xl">
              Help, one tap away
            </h2>
            <p className="mt-4 max-w-md text-jamogo-gray-500">
              If something feels wrong, the SOS button shares your live
              location and trip details with your trusted contacts and
              Jamogo&apos;s safety team, so you&apos;re never navigating a
              bad situation alone.
            </p>
            <p className="mt-4 max-w-md text-sm text-jamogo-gray-400">
              In an emergency, always contact local emergency services
              directly first - Jamogo&apos;s safety tools are there to help
              alongside that, not replace it.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Safety-first, from day one"
        description="Leave your email and we'll let you know the moment Jamogo launches in your city."
      />
    </>
  );
}
