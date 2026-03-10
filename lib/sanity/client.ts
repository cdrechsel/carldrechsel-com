import { QueryParams, createClient } from "next-sanity";

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-09";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token =
  process.env.SANITY_API_READ_TOKEN ||
  (process.env.NODE_ENV !== "production" ? process.env.SANITY_API_WRITE_TOKEN : undefined);

export const sanityEnabled = Boolean(projectId);

export const client = sanityEnabled
  ? createClient({
      apiVersion,
      dataset,
      projectId,
      // Prefer consistency over edge-cached lag for authority content pages.
      useCdn: false,
      perspective: "published",
      token
    })
  : null;

export async function sanityFetch<T>({
  query,
  params = {},
  tags = []
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  if (!client) return null as T | null;

  try {
    return await client.fetch<T>(query, params, {
      next: {
        revalidate: 60,
        tags
      }
    });
  } catch (error) {
    // Keep pages resilient but expose the failure for production debugging.
    console.error("[sanityFetch] Failed query", {
      tags,
      hasParams: Object.keys(params || {}).length > 0,
      error
    });
    return null as T | null;
  }
}
