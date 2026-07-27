import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CtaBanner } from "@/components/CtaBanner";
import { Button } from "@/components/Button";
import { TagIcon, ShieldIcon, UsersIcon } from "@/components/icons";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Jamogo - \"Jack make we go\" - is a ride-pooling app built for Ghana, where riders name their fare and share the road to save.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Jack make we go."
        description="Jamogo takes its name from the Ghanaian pidgin for 'let's go, together.' We're building a fairer way to move around Ghana - one where you set the price and choose who you ride with."
        cta={<Button href="/notify">Get notified at launch</Button>}
        imageLabel="Photo - riders and driver in Kumasi street"
        imageWidth={1120}
        imageHeight={840}
      />

      <section className="py-20">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-jamogo-ink-900 sm:text-4xl">
              Ride together, pay less
            </h2>
            <p className="mt-4 max-w-md text-jamogo-gray-500">
              Getting around Ghanaian cities shouldn&apos;t mean guessing
              whether a fare is fair. Jamogo lets riders name the price
              they&apos;re willing to pay and lets drivers respond - solo or
              shared with others heading the same way - so everyone gets a
              deal they agreed to.
            </p>
            <p className="mt-4 max-w-md text-jamogo-gray-500">
              We&apos;re starting in Kumasi, building with safety and trust at
              the core, and growing city by city from there.
            </p>
          </div>
          <ImagePlaceholder
            width={960}
            height={720}
            label="Photo - team working, or map of Ghana with route lines"
          />
        </Container>
      </section>

      <section className="bg-jamogo-gray-100 py-20">
        <Container>
          <SectionHeading eyebrow="What we believe" title="Our values" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <FeatureCard
              icon={<TagIcon />}
              title="Fairness"
              description="Fares are agreed between riders and drivers - not set unilaterally or inflated by surge."
            />
            <FeatureCard
              icon={<ShieldIcon />}
              title="Safety first"
              description="Verification, live trip sharing, and SOS are built into every ride from day one, not added later."
            />
            <FeatureCard
              icon={<UsersIcon />}
              title="Community"
              description="Pooling isn't just cheaper - it means more people share the road and get where they're going together."
            />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
