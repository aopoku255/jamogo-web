import { Container } from "./Container";
import { Button } from "./Button";
import { NOTIFY_MAILTO } from "@/lib/site";

export function CtaBanner({
  title = "We're not live in Ghana just yet",
  description = "Leave your email and we'll let you know the moment Jamogo launches in your city.",
  ctaLabel = "Get notified at launch",
  ctaHref = NOTIFY_MAILTO,
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-jamogo-ink-900">
      <Container className="flex flex-col items-center gap-6 py-16 text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-jamogo-gray-300">{description}</p>
        <Button href={ctaHref} variant="primary">
          {ctaLabel}
        </Button>
      </Container>
    </section>
  );
}
