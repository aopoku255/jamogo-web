import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CtaBanner } from "@/components/CtaBanner";
import { Button } from "@/components/Button";
import { CITIES } from "@/data/cities";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cities",
  description:
    "Jamogo is launching first in Kumasi, with more cities across Ghana to follow.",
};

const requestCityMailto = `mailto:${SITE.emails.hello}?subject=${encodeURIComponent(
  "Bring Jamogo to my city"
)}&body=${encodeURIComponent(
  "Hi Jamogo,\n\nPlease bring the app to my city.\n\nMy city:\nMy email: "
)}`;

export default function CitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we ride"
        title="Available in major cities across Ghana"
        description="We're launching first in Kumasi and expanding to regional capitals as we grow. Don't see your city yet? Let us know and we'll keep you posted."
        cta={<Button href="/notify">Get notified at launch</Button>}
        imageLabel="Photo - Kumasi city skyline or street scene"
        imageWidth={1120}
        imageHeight={840}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((city) => (
              <div
                key={city.name}
                className="overflow-hidden rounded-2xl border border-jamogo-gray-200 bg-white"
              >
                <ImagePlaceholder
                  width={600}
                  height={400}
                  label={`Photo - ${city.name} street or landmark`}
                  className="border-b border-jamogo-gray-200"
                  bare
                />
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-jamogo-ink-900">
                      {city.name}
                    </h3>
                    <p className="text-sm text-jamogo-gray-500">
                      {city.region}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                      city.status === "launch"
                        ? "bg-jamogo-green-500 text-white"
                        : "bg-jamogo-gray-100 text-jamogo-gray-500"
                    }`}
                  >
                    {city.status === "launch" ? "Launching first" : "Coming soon"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Don't see your city?"
        description="Tell us where you'd like to ride, and we'll factor it into where we expand next."
        ctaLabel="Request your city"
        ctaHref={requestCityMailto}
      />
    </>
  );
}
