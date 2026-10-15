import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllSlugs } from "@/sanity/fetch";
import { categories } from "@/data/mock";

const BASE = SITE_URL;

// Rebuild hourly so newly published articles show up without a deploy.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE}/category/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = slugs.map((s) => ({
    url: `${BASE}/${s}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
