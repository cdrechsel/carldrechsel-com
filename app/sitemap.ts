import type { MetadataRoute } from "next";
import { sanityFetch } from "@/lib/sanity/client";
import { insightSlugsQuery } from "@/lib/sanity/queries";
import { featuredWorkSlugs } from "@/content/featuredWork";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://carldrechsel.com";
  const slugs = (await sanityFetch<{ slug: string }[]>({ query: insightSlugsQuery, tags: ["post"] })) || [];

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/featured-work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${baseUrl}/ai-transformation-model`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...featuredWorkSlugs.map((slug) => ({
      url: `${baseUrl}/featured-work/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75
    })),
    ...slugs.map((item) => ({
      url: `${baseUrl}/insights/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7
    }))
  ];
}
