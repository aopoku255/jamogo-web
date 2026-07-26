import Link from "next/link";
import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { Button } from "@/components/Button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBanner } from "@/components/CtaBanner";
import {
  TagIcon,
  UsersIcon,
  ChatIcon,
  RouteIcon,
  WalletIcon,
  ShieldIcon,
  CarIcon,
} from "@/components/icons";
import { CITIES } from "@/data/cities";
import { FAQ } from "@/data/faq";
import { NOTIFY_MAILTO } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-jamogo-green-50">
        <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Pill>Now in Ghana 🇬🇭</Pill>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-jamogo-ink-900 sm:text-5xl">
              Name your fare.
              <br />
              Ride smarter.
            </h1>
            <p className="mt-5 max-w-md text-lg text-jamogo-gray-700">
              Jamogo matches you with drivers going your way. Set the price
              you want to pay, ride solo or share to save, and get there
              safely.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={NOTIFY_MAILTO}>Get notified at launch</Button>
              <Button href="/ride" variant="secondary">
                See how it works
              </Button>
            </div>
            <p className="mt-4 text-sm text-jamogo-gray-400">
              We&apos;re not live on the App Store or Google Play yet.
            </p>
          </div>
          <ImagePlaceholder
            width={640}
            height={1280}
            label="Phone mockup - app home screen with a fare-offer card"
          />
        </Container>
      </section>

      {/* Services */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="One app, ride your way"
            title="Built around how Ghana moves"
            description="Whether you want a private trip or the cheapest way across town, Jamogo gives you control over the price and the ride."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <FeatureCard
              icon={<UsersIcon />}
              title="Solo rides"
              description="A private trip, just for you. Name your fare and get matched with a nearby driver."
            />
            <FeatureCard
              icon={<TagIcon />}
              title="Pool rides"
              description="Share your route with riders headed the same way and save up to 40% on fare."
            />
            <FeatureCard
              icon={<ChatIcon />}
              title="Drive & earn"
              description="Set your own hours and accept the offers that work for you. No forced dispatch."
            />
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-jamogo-gray-100 py-20">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Three steps to your next ride"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <RouteIcon />,
                title: "Set pickup & destination",
                description:
                  "Drop your pin and tell us where you're headed - across town or across Kumasi.",
              },
              {
                icon: <TagIcon />,
                title: "Name your fare",
                description:
                  "Offer what you're willing to pay. Drivers accept or counter - no surge pricing.",
              },
              {
                icon: <CarIcon />,
                title: "Ride & pay with mobile money",
                description:
                  "Track your trip live and pay straight from your Jamogo wallet.",
              },
            ].map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-jamogo-green-600 shadow-[0_8px_24px_rgba(14,26,19,0.06)]">
                  {step.icon}
                </div>
                <span className="mt-4 block text-sm font-semibold text-jamogo-green-600">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 font-heading text-lg font-semibold text-jamogo-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-jamogo-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Safety teaser */}
      <section className="py-20">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <ImagePlaceholder
            width={960}
            height={720}
            label="Illustration - driver ID check and live trip sharing"
            className="md:order-2"
          />
          <div className="md:order-1">
            <Pill>Safety</Pill>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-jamogo-ink-900 sm:text-4xl">
              Your safety is non-negotiable
            </h2>
            <p className="mt-4 max-w-md text-jamogo-gray-500">
              Every driver goes through ID and KYC verification. Every rider
              can see who they&apos;re riding with, share their trip live,
              and reach emergency help in one tap.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-jamogo-gray-700">
              <li className="flex items-center gap-3">
                <ShieldIcon className="text-jamogo-green-600" /> Verified
                driver IDs and safety pledge
              </li>
              <li className="flex items-center gap-3">
                <ShieldIcon className="text-jamogo-green-600" /> Live trip
                sharing with trusted contacts
              </li>
              <li className="flex items-center gap-3">
                <ShieldIcon className="text-jamogo-green-600" /> One-tap SOS
                and RideCheck
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/safety"
                className="font-semibold text-jamogo-green-600 hover:underline"
              >
                See all safety features →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Cities teaser */}
      <section className="bg-jamogo-gray-100 py-20">
        <Container>
          <SectionHeading
            eyebrow="Where we're headed"
            title="Launching city by city across Ghana"
            description="We're starting in Kumasi and rolling out to more regional capitals as we grow."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {CITIES.slice(0, 8).map((city) => (
              <span
                key={city.name}
                className={`rounded-full border px-4 py-2 text-sm font-medium ${
                  city.status === "launch"
                    ? "border-jamogo-green-500 bg-jamogo-green-500 text-white"
                    : "border-jamogo-gray-300 bg-white text-jamogo-gray-700"
                }`}
              >
                {city.name}
                {city.status === "launch" && " - launching first"}
              </span>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/cities"
              className="font-semibold text-jamogo-green-600 hover:underline"
            >
              See the full city list →
            </Link>
          </div>
        </Container>
      </section>

      {/* Mobile money */}
      <section className="py-20">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Pill>Pay your way</Pill>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-jamogo-ink-900 sm:text-4xl">
              Top up and ride without touching cash
            </h2>
            <p className="mt-4 max-w-md text-jamogo-gray-500">
              Fund your Jamogo wallet with MTN Mobile Money, Telecel Cash, or
              your bank card, and pay for every ride straight from the app.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm font-medium text-jamogo-gray-700">
              <WalletIcon className="text-jamogo-green-600" />
              In-app wallet, no cash handling
            </div>
          </div>
          <ImagePlaceholder
            width={960}
            height={640}
            label="Screenshot - in-app wallet and mobile money top-up flow"
          />
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-jamogo-gray-100 py-20">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          <div className="mt-12">
            <FaqAccordion items={FAQ} />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
