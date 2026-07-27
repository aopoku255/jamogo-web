import type { Metadata } from "next";
import { SITE } from "./site";

/**
 * Next doesn't apply the root title template to openGraph/twitter titles, so
 * pages that only set `title`/`description` end up sharing the root layout's
 * OG/Twitter tags. This builds all of them consistently for a given page.
 */
export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} - ${SITE.name}`;

  return {
    title,
    description,
    alternates: { canonical: path || "/" },
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE.domain}${path}`,
    },
    twitter: {
      title: fullTitle,
      description,
    },
  };
}
