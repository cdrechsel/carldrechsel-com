import type { Metadata } from "next";
import FeaturedWorkCard from "@/components/featured-work/FeaturedWorkCard";
import SiteFooter from "@/components/site/SiteFooter";
import TopNav from "@/components/site/TopNav";
import { featuredWorkConcepts } from "@/content/featuredWork";

export const metadata: Metadata = {
  title: "Featured Work",
  description:
    "Strategic concepts and frameworks demonstrating cloud architecture thinking, enterprise AI transformation, customer-facing execution, and delivery leadership."
};

export default function FeaturedWorkPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <TopNav />
      <main id="main-content" className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Strategic Concepts</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Featured Work</h1>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600">Concepts and frameworks demonstrating technical leadership, customer-centered architecture, enterprise AI transformation, and execution thinking across complex environments.</p>
        </section>

        <section className="mt-8">
          <article className="surface-card p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">AI Transformation Model</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">One integrated model across strategy, implementation, and application</h2>
            <p className="mt-3 max-w-4xl text-zinc-600">
              The AI-focused featured concepts are connected as one progression: Enterprise AI Productivity Framework,
              AI Productivity Tool Accelerator, and SalesInsight.
            </p>
            <p className="mt-3 max-w-4xl text-zinc-600">
              Alongside that progression, the Cloud Delivery Acceleration Model shows how I think about customer-facing
              execution, delivery oversight, and translating architecture into coordinated outcomes.
            </p>
            <a
              href="/ai-transformation-model"
              className="mt-5 inline-block text-sm font-semibold no-underline hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            >
              View AI Transformation Model →
            </a>
          </article>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...featuredWorkConcepts].reverse().map((concept) => (
            <FeaturedWorkCard key={concept.slug} concept={concept} eventName="featured_work_index_click" />
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
