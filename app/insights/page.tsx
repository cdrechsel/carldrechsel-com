import type { Metadata } from "next";
import InsightCard from "@/components/insights/InsightCard";
import SiteFooter from "@/components/site/SiteFooter";
import TopNav from "@/components/site/TopNav";
import { sanityEnabled, sanityFetch } from "@/lib/sanity/client";
import { categoriesQuery, insightsQuery } from "@/lib/sanity/queries";
import { SanityCategory, SanityPost } from "@/lib/sanity/types";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Executive insights on enterprise AI transformation, Microsoft Copilot strategy, digital workplace modernization, and architecture-led adoption."
};

type InsightsPageProps = {
  searchParams?: {
    category?: string;
  };
};

export default async function InsightsPage({ searchParams }: InsightsPageProps) {
  const selectedCategory = searchParams?.category || "all";

  const [posts, categories] = await Promise.all([
    sanityFetch<SanityPost[]>({
      query: insightsQuery,
      params: { categorySlug: selectedCategory },
      tags: ["post"]
    }),
    sanityFetch<SanityCategory[]>({ query: categoriesQuery, tags: ["category"] })
  ]);

  const featuredPosts = (posts || []).filter((post) => post.featured);
  const regularPosts = (posts || []).filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <TopNav />
      <main id="main-content" className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Authority Insights</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Insights</h1>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600">Strategic perspectives on enterprise AI transformation, Microsoft Copilot adoption, digital workplace modernization, and architecture-led execution.</p>
        </section>

        <section className="mt-10 flex flex-wrap gap-2">
          <a
            href="/insights?category=all"
            className={`rounded-full border px-3 py-1.5 text-sm no-underline ${
              selectedCategory === "all" ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            All
          </a>
          {(categories || []).map((category) => {
            const slug = category.slug?.current;
            if (!slug) return null;
            const active = selectedCategory === slug;
            return (
              <a
                key={category._id}
                href={`/insights?category=${slug}`}
                className={`rounded-full border px-3 py-1.5 text-sm no-underline ${
                  active ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {category.title}
              </a>
            );
          })}
        </section>

        {!sanityEnabled ? (
          <section className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-600 shadow-sm">
            Sanity is not configured yet. Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to load Insights content.
          </section>
        ) : null}

        {featuredPosts.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight">Featured Insights</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <InsightCard key={post._id} post={post} eventName="featured_insight_click" />
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">All Insights</h2>
          {regularPosts.length > 0 ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <InsightCard key={post._id} post={post} eventName="insight_click" />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-600 shadow-sm">
              No additional insights yet.
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
