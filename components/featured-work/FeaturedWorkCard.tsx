import TrackLink from "@/components/site/TrackLink";
import { FeaturedWorkConcept } from "@/content/featuredWork";

type FeaturedWorkCardProps = {
  concept: FeaturedWorkConcept;
  eventName?: string;
};

export default function FeaturedWorkCard({ concept, eventName = "featured_work_click" }: FeaturedWorkCardProps) {
  return (
    <TrackLink
      href={`/featured-work/${concept.slug}`}
      eventName={eventName}
      label={concept.title}
      className="surface-card group block p-6 no-underline transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"
    >
      <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">{concept.title}</h3>
      <p className="mt-4 text-[1.02rem] leading-relaxed text-zinc-700">{concept.shortDescription}</p>
      <p className="mt-3 border-l-2 border-zinc-200 pl-3 text-sm leading-relaxed text-zinc-500">{concept.summary}</p>
      <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Leadership Relevance</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-700">{concept.roleRelevance}</p>
      </div>
      <span className="mt-5 inline-block text-sm font-semibold text-zinc-900 group-hover:text-zinc-700">Explore concept →</span>
    </TrackLink>
  );
}
