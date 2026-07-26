"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { ImagePlaceholder } from "./ImagePlaceholder";

export type HeroSlide = {
  /** Short label shown in the bottom tab bar, e.g. "Ride". */
  tab: string;
  /** Highlighted first line of the headline (gets the marker background). */
  highlight: string;
  /** Plain second line of the headline. */
  rest: string;
  description: string;
  cta: { label: string; href: string };
  note?: string;
  imageLabel: string;
  /** Real image to show instead of the placeholder, e.g. "/images/hero-fare.png". */
  image?: string;
};

const AUTOPLAY_MS = 6000;

export function HeroSwiper({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  return (
    <section
      className="relative isolate overflow-hidden bg-jamogo-ink-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-140 sm:h-155 md:h-175 lg:h-190">
        <div
          className="absolute inset-0"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (delta > 50) goTo(index - 1);
            else if (delta < -50) goTo(index + 1);
            touchStartX.current = null;
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.tab}
              className={`absolute inset-0 transition-opacity duration-200 ease-out ${
                i === index
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.imageLabel}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              ) : (
                <ImagePlaceholder
                  bare
                  width={1920}
                  height={1080}
                  label={slide.imageLabel}
                  className="absolute inset-0 h-full w-full"
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-jamogo-ink-900 via-jamogo-ink-900/70 to-jamogo-ink-900/20" />
              <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 pb-16">
                <h1 className="max-w-2xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                  <span className="inline-block bg-jamogo-green-500 px-2 py-1 text-jamogo-ink-900">
                    {slide.highlight}
                  </span>
                  <br />
                  <span className="text-white">{slide.rest}</span>
                </h1>
                <p className="mt-5 max-w-md text-lg text-white/70">
                  {slide.description}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href={slide.cta.href}>{slide.cta.label}</Button>
                </div>
                {slide.note && (
                  <p className="mt-4 text-sm text-white/50">{slide.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:flex"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:flex"
        >
          <ArrowIcon direction="right" />
        </button>

        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="mx-auto flex w-full max-w-6xl gap-6 overflow-x-auto px-6 sm:gap-10">
            {slides.map((slide, i) => (
              <button
                key={slide.tab}
                type="button"
                onClick={() => goTo(i)}
                aria-current={i === index}
                className="flex shrink-0 flex-col items-start gap-3 pb-5"
              >
                <span
                  className={`text-sm font-semibold transition-colors ${
                    i === index ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {slide.tab}
                </span>
                <span className="h-0.75 w-24 overflow-hidden rounded-full bg-white/20 sm:w-32">
                  {i === index && (
                    <span
                      key={index}
                      onAnimationEnd={() => goTo(index + 1)}
                      className="block h-full w-full origin-left bg-jamogo-green-500"
                      style={{
                        animation: `hero-progress ${AUTOPLAY_MS}ms linear forwards`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}
