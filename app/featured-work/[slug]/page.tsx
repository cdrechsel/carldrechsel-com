import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AIProductivityToolAcceleratorPage from "@/components/featured-work/AIProductivityToolAcceleratorPage";
import ConceptSection from "@/components/featured-work/ConceptSection";
import CopilotStrategyAcceleratorPage from "@/components/featured-work/CopilotStrategyAcceleratorPage";
import EnterpriseAIProductivityStackPage from "@/components/featured-work/EnterpriseAIProductivityStackPage";
import FeaturedWorkCTA from "@/components/featured-work/FeaturedWorkCTA";
import SalesInsightPage from "@/components/featured-work/SalesInsightPage";
import SiteFooter from "@/components/site/SiteFooter";
import TopNav from "@/components/site/TopNav";
import { featuredWorkSlugs, getFeaturedWorkBySlug } from "@/content/featuredWork";

type FeaturedWorkDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return featuredWorkSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: FeaturedWorkDetailPageProps): Metadata {
  const concept = getFeaturedWorkBySlug(params.slug);

  if (!concept) {
    return {
      title: "Featured Work"
    };
  }

  return {
    title: concept.seoTitle,
    description: concept.metaDescription,
    openGraph: {
      title: concept.seoTitle,
      description: concept.metaDescription,
      url: `https://carldrechsel.com/featured-work/${concept.slug}`,
      type: "article"
    }
  };
}

export default function FeaturedWorkDetailPage({ params }: FeaturedWorkDetailPageProps) {
  const concept = getFeaturedWorkBySlug(params.slug);
  if (!concept) notFound();

  if (concept.slug === "ai-productivity-framework") {
    return (
      <div className="min-h-screen bg-zinc-50 text-zinc-900">
        <TopNav />
        <main id="main-content">
          <div className="max-w-6xl mx-auto px-6 pt-14 lg:pt-20">
            <a href="/featured-work" className="text-sm font-semibold no-underline hover:text-zinc-700">← Back to Featured Work</a>
          </div>
          <EnterpriseAIProductivityStackPage />
          <div className="max-w-6xl mx-auto px-6 pb-20">
            <FeaturedWorkCTA />
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  if (concept.slug === "copilot-strategy-accelerator") {
    return (
      <div className="min-h-screen bg-zinc-50 text-zinc-900">
        <TopNav />
        <main id="main-content" className="mx-auto max-w-4xl px-4 pb-20 pt-14 sm:px-6 lg:pt-20">
          <a href="/featured-work" className="text-sm font-semibold no-underline hover:text-zinc-700">← Back to Featured Work</a>
          <div className="mt-5">
            <CopilotStrategyAcceleratorPage />
          </div>
          <div className="mt-8">
            <FeaturedWorkCTA />
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  if (concept.slug === "ai-productivity-tool-accelerator") {
    return (
      <div className="min-h-screen bg-zinc-50 text-zinc-900">
        <TopNav />
        <main id="main-content" className="mx-auto max-w-4xl px-4 pb-20 pt-14 sm:px-6 lg:pt-20">
          <a href="/featured-work" className="text-sm font-semibold no-underline hover:text-zinc-700">← Back to Featured Work</a>
          <div className="mt-5">
            <AIProductivityToolAcceleratorPage />
          </div>
          <div className="mt-8">
            <FeaturedWorkCTA />
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  if (concept.slug === "salesinsight") {
    return (
      <div className="min-h-screen bg-zinc-50 text-zinc-900">
        <TopNav />
        <main id="main-content" className="mx-auto max-w-4xl px-4 pb-20 pt-14 sm:px-6 lg:pt-20">
          <a href="/featured-work" className="text-sm font-semibold no-underline hover:text-zinc-700">← Back to Featured Work</a>
          <div className="mt-5">
            <SalesInsightPage />
          </div>
          <div className="mt-8">
            <FeaturedWorkCTA />
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <TopNav />
      <main id="main-content" className="mx-auto max-w-4xl px-4 pb-20 pt-14 sm:px-6 lg:pt-20">
        <a href="/featured-work" className="text-sm font-semibold no-underline hover:text-zinc-700">← Back to Featured Work</a>

        <header className="mt-5 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{concept.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{concept.title}</h1>
          <p className="mt-3 text-xl text-zinc-600">{concept.subtitle}</p>
          <div className="mt-6 space-y-4 text-zinc-700">
            {concept.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <div className="mt-8 space-y-6">
          <ConceptSection section={concept.problem} />
          <ConceptSection section={concept.concept} />
          {concept.applications ? <ConceptSection section={concept.applications} /> : null}
          <ConceptSection section={concept.whyItMatters} />
          <FeaturedWorkCTA />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
