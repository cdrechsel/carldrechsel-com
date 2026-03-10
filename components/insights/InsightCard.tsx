import { SanityPost } from "@/lib/sanity/types";
import { formatDate } from "@/lib/utils/date";
import TrackLink from "@/components/site/TrackLink";

type InsightCardProps = {
  post: SanityPost;
  eventName?: string;
};

export default function InsightCard({ post, eventName }: InsightCardProps) {
  const primaryCategory = post.categories?.[0]?.title || "Insights";
  const href = `/insights/${post.slug.current}`;

  return (
    <article className="surface-card p-6 transition-colors hover:border-zinc-300">
      <div className="flex items-center gap-3 text-xs text-zinc-500">
        <span className="chip">{primaryCategory}</span>
        <span>{formatDate(post.publishedAt)}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight">{post.title}</h3>
      <p className="mt-3 leading-relaxed text-zinc-600">{post.excerpt || post.description}</p>
      <TrackLink
        href={href}
        eventName={eventName || "insight_click"}
        label={post.title}
        className="mt-5 inline-block text-sm font-semibold no-underline hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
      >
        Read insight →
      </TrackLink>
    </article>
  );
}
