import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CtaBanner } from "@/components/CtaBanner";
import { Button } from "@/components/Button";
import {
  TagIcon,
  ChatIcon,
  RouteIcon,
  ClockIcon,
  WalletIcon,
  UsersIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Ride",
  description:
    "Name your fare, ride solo or pool with others heading your way, and pay with mobile money. This is how riding with Jamogo works.",
};

export default function RidePage() {
  return (
    <>
      <PageHeroBanner
        highlight="Ride your way,"
        rest="at your price."
        description="Tell us where you're headed, offer what you're willing to pay, and get matched with a nearby driver - solo or shared."
        cta={
          <>
            <Button href="/notify">Get notified at launch</Button>
            <Button href="#how-it-works" variant="secondary">
              How it works
            </Button>
          </>
        }
        imageLabel="Photo - rider hailing a Jamogo car in Kumasi"
      />

      {/* Solo vs Pool */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Choose your ride"
            title="Solo when you need it, Pool when you want to save"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-jamogo-gray-200 bg-white p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-jamogo-green-100 text-jamogo-green-600">
                <RouteIcon />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-jamogo-ink-900">
                Solo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-jamogo-gray-500">
                A private trip, just for you and whoever you&apos;re
                travelling with. Name your fare and go straight to your
                destination.
              </p>
              <ImagePlaceholder
                width={800}
                height={520}
                label="Screenshot - Solo ride confirmation screen"
                className="mt-6"
              />
            </div>
            <div className="rounded-2xl border border-jamogo-gray-200 bg-white p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-jamogo-green-100 text-jamogo-green-600">
                <UsersIcon />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-jamogo-ink-900">
                Pool
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-jamogo-gray-500">
                Share the route - and the fare - with other riders heading
                the same way. You always see who you&apos;re riding with
                before you accept.
              </p>
              <ImagePlaceholder
                width={800}
                height={520}
                label="Screenshot - Pool ride with co-rider list"
                className="mt-6"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 bg-jamogo-gray-100 py-20">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Negotiate in real time"
            description="You're always in control of what you pay."
          />
          <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
            <ImagePlaceholder
              width={720}
              height={960}
              label="Screenshot - driver offer and counter-offer chat"
            />
            <ol className="space-y-8">
              {[
                {
                  icon: <RouteIcon />,
                  title: "Set your route",
                  description:
                    "Drop your pickup pin and destination - Jamogo shows you a fair fare range for the trip.",
                },
                {
                  icon: <TagIcon />,
                  title: "Name your fare",
                  description:
                    "Offer what you want to pay. Nearby drivers see your request and respond.",
                },
                {
                  icon: <ChatIcon />,
                  title: "Accept, counter, or wait",
                  description:
                    "Counter an offer, accept one you like, or wait for a better price. A trip only books once you both agree.",
                },
                {
                  icon: <ClockIcon />,
                  title: "Track your ride live",
                  description:
                    "Follow your route from pickup to drop-off with real road-based routing and live ETAs.",
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
          </div>
        </Container>
      </section>

      {/* Payments */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Pay your way"
            title="One wallet, every ride"
            description="Top up with mobile money and pay for every trip in-app - no cash needed."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <FeatureCard
              icon={<WalletIcon />}
              title="Mobile money top-ups"
              description="Fund your wallet with MTN MoMo, Telecel Cash, or a bank card."
            />
            <FeatureCard
              icon={<TagIcon />}
              title="No surge pricing"
              description="Fares are agreed between you and the driver - never inflated automatically."
            />
            <FeatureCard
              icon={<ClockIcon />}
              title="Ride history"
              description="Every trip, fare, and receipt saved in the app for your records."
            />
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Be first in line when we launch"
        description="Leave your email and we'll let you know the moment Jamogo is live in your city."
      />
    </>
  );
}
