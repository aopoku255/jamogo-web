import { ImagePlaceholder } from "./ImagePlaceholder";
import { Pill } from "./Pill";
import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
  imageLabel,
  imageWidth = 1120,
  imageHeight = 840,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: React.ReactNode;
  imageLabel: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  return (
    <section className="bg-jamogo-green-50">
      <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          {eyebrow && <Pill>{eyebrow}</Pill>}
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-jamogo-ink-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-jamogo-gray-700">
            {description}
          </p>
          {cta && <div className="mt-8 flex flex-wrap gap-3">{cta}</div>}
        </div>
        <ImagePlaceholder
          width={imageWidth}
          height={imageHeight}
          label={imageLabel}
        />
      </Container>
    </section>
  );
}
