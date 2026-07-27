import Image from "next/image";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function PageHeroBanner({
  highlight,
  rest,
  description,
  cta,
  note,
  imageLabel,
  image,
}: {
  /** Highlighted first line of the headline (gets the marker background). */
  highlight: string;
  /** Plain second line of the headline. */
  rest: string;
  description: string;
  cta?: React.ReactNode;
  note?: string;
  imageLabel: string;
  /** Real image to show instead of the placeholder, e.g. "/images/ride-share.png". */
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-jamogo-ink-900">
      <div className="relative h-140 sm:h-155 md:h-175 lg:h-190">
        {image ? (
          <Image
            src={image}
            alt={imageLabel}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <ImagePlaceholder
            bare
            width={1920}
            height={1080}
            label={imageLabel}
            className="absolute inset-0 h-full w-full"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-jamogo-ink-900 via-jamogo-ink-900/70 to-jamogo-ink-900/20" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 pb-16">
          <h1 className="max-w-2xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="inline-block bg-jamogo-green-500 px-2 py-1 text-jamogo-ink-900">
              {highlight}
            </span>
            <br />
            <span className="text-white">{rest}</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-white/70">
            {description}
          </p>
          {cta && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {cta}
            </div>
          )}
          {note && <p className="mt-4 text-sm text-white/50">{note}</p>}
        </div>
      </div>
    </section>
  );
}
