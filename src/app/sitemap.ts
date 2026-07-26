import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/ride", priority: 0.8, changeFrequency: "monthly" },
  { path: "/drive", priority: 0.8, changeFrequency: "monthly" },
  { path: "/safety", priority: 0.7, changeFrequency: "monthly" },
  { path: "/cities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE.domain}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
