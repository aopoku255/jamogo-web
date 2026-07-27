import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { NotifyForm } from "@/components/NotifyForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Get notified",
  description:
    "Leave your details and we'll let you know the moment Jamogo launches in your city.",
  path: "/notify",
});

export default function NotifyPage() {
  return (
    <section className="bg-jamogo-green-50 py-16 md:py-24">
      <Container className="mx-auto max-w-lg text-center">
        <Pill>Coming soon</Pill>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-jamogo-ink-900 sm:text-5xl">
          Be first to ride with Jamogo
        </h1>
        <p className="mt-4 text-jamogo-gray-700">
          We&apos;re not live on the App Store or Google Play yet. Leave your
          details and we&apos;ll email you the moment Jamogo launches in your
          city.
        </p>

        <div className="mt-8 rounded-2xl border border-jamogo-gray-200 bg-white p-8 text-left">
          <NotifyForm />
        </div>
      </Container>
    </section>
  );
}
