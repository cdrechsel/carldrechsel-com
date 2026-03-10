import { insightsForFeedQuery } from "@/lib/sanity/queries";
import { sanityFetch } from "@/lib/sanity/client";

type FeedPost = {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  excerpt?: string;
  publishedAt: string;
  updatedAt?: string;
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = (await sanityFetch<FeedPost[]>({ query: insightsForFeedQuery, tags: ["post"] })) || [];

  const items = posts
    .map(
      (post) => `\n<item>\n  <title>${escapeXml(post.title)}</title>\n  <link>https://carldrechsel.com/insights/${post.slug.current}</link>\n  <guid>https://carldrechsel.com/insights/${post.slug.current}</guid>\n  <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>\n  <description>${escapeXml(post.excerpt || post.description)}</description>\n</item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0">\n<channel>\n<title>Carl Drechsel Insights</title>\n<link>https://carldrechsel.com/insights</link>\n<description>Enterprise AI transformation, Copilot strategy, and digital workplace leadership insights.</description>\n${items}\n</channel>\n</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
