import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightCard from "@/components/insights/InsightCard";
import RichText from "@/components/insights/RichText";
import SiteFooter from "@/components/site/SiteFooter";
import TopNav from "@/components/site/TopNav";
import TrackLink from "@/components/site/TrackLink";
import { sanityFetch } from "@/lib/sanity/client";
import { insightBySlugQuery, insightSlugsQuery, relatedInsightsQuery } from "@/lib/sanity/queries";
import { SanityPost } from "@/lib/sanity/types";
import { formatDate } from "@/lib/utils/date";
import { getReadingTime } from "@/lib/utils/reading-time";
import { urlFor } from "@/lib/sanity/image";

type InsightPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = (await sanityFetch<{ slug: string }[]>({ query: insightSlugsQuery, tags: ["post"] })) || [];
  return slugs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const post = await sanityFetch<SanityPost>({
    query: insightBySlugQuery,
    params: { slug: params.slug },
    tags: ["post"]
  });

  if (!post) {
    return { title: "Insight not found" };
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.description;
  const ogImage = post.ogImage ? urlFor(post.ogImage)?.width(1200).height(630).url() : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      url: `https://carldrechsel.com/insights/${post.slug.current}`,
      images: ogImage ? [{ url: ogImage }] : undefined
    }
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const post = await sanityFetch<SanityPost>({
    query: insightBySlugQuery,
    params: { slug: params.slug },
    tags: ["post"]
  });

  if (!post) notFound();

  const categorySlugs = post.categories?.map((item) => item.slug?.current).filter(Boolean) as string[];

  const related =
    (await sanityFetch<SanityPost[]>({
      query: relatedInsightsQuery,
      params: { slug: params.slug, categorySlugs },
      tags: ["post"]
    })) || [];

  const readingTime = getReadingTime(post.body);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <TopNav />
      <main id="main-content" className="mx-auto max-w-4xl px-4 pb-20 pt-14 sm:px-6 lg:pt-20">
        <article className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-12">
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
            <span className="rounded-full border border-zinc-200 px-2.5 py-1">{post.categories?.[0]?.title || "Insights"}</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>{readingTime} min read</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-xl text-zinc-600">{post.description}</p>
          {post.body?.length ? <RichText value={post.body} /> : null}
        </article>

        <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">Continue the conversation</h2>
          <p className="mt-3 text-zinc-600">Open to recruiting conversations, consulting engagements, and executive discussions on enterprise AI transformation and digital workplace strategy.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/resume.pdf" eventName="resume_download" label="post_cta_resume" className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-zinc-700">Download Resume</TrackLink>
            <TrackLink href="https://www.linkedin.com/in/carldrechsel/" eventName="linkedin_click" label="post_cta_linkedin" className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold no-underline hover:bg-zinc-100" target="_blank" rel="noreferrer">LinkedIn</TrackLink>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight">Related Insights</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <InsightCard key={item._id} post={item} eventName="related_insight_click" />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}
