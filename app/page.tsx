import TopNav from "@/components/site/TopNav";
import SiteFooter from "@/components/site/SiteFooter";
import TrackLink from "@/components/site/TrackLink";
import FeaturedWorkCard from "@/components/featured-work/FeaturedWorkCard";
import { featuredInsightsQuery } from "@/lib/sanity/queries";
import { sanityFetch } from "@/lib/sanity/client";
import { SanityPost } from "@/lib/sanity/types";
import { formatDate } from "@/lib/utils/date";
import { featuredWorkConcepts } from "@/content/featuredWork";

export const revalidate = 0;

const expertise = [
  ["AI Enablement & Transformation", "Design enterprise AI adoption models that connect technology investment to measurable productivity improvements, workflow change, and decision advantage."],
  ["Microsoft Copilot Strategy", "Shape readiness, governance, adoption, and value realization strategies that enable Copilot to integrate into real enterprise operating environments."],
  ["Digital Workplace Transformation", "Modernize workforce productivity environments across collaboration tools, process design, and digital employee experience."],
  ["Enterprise Collaboration Architecture", "Design collaboration ecosystems across Microsoft 365 that align governance, knowledge flow, platform architecture, and workforce needs."],
  ["Microsoft 365 Strategy", "Define Microsoft 365 architecture and service models that support secure, scalable modernization across large enterprise environments."],
  ["Zero Trust-Aligned Productivity", "Integrate identity, security, and usability so modern security controls remain practical for real work and sustainable adoption."],
  ["Business-to-Technology Translation", "Bridge executive priorities and technical architecture into executable transformation strategies, operating models, and roadmaps."],
  ["AI Operating Model Alignment", "Align governance, workflow ownership, platform controls, and change execution so AI adoption scales with consistency and trust."]
] as const;

const evolution = [
  ["Technical Foundations", "Built deep enterprise technical credibility across infrastructure, messaging, collaboration platforms, and large-scale platform operations supporting global organizations."],
  ["Enterprise Architecture", "Evolved into architecture leadership aligning identity, governance, security, and modernization strategy to business goals and enterprise transformation priorities."],
  ["Digital Workplace Transformation", "Led workforce productivity and end-user computing modernization initiatives that improved collaboration, user experience, security posture, and operational efficiency at scale."],
  ["AI Transformation Leadership", "Focused on helping organizations translate emerging AI capabilities into real operating change through workflow redesign, governance alignment, and enterprise adoption strategy."]
] as const;

const enterpriseExpertise = [
  "Enterprise AI enablement strategy and operating model execution",
  "Microsoft 365 architecture, service design, and collaboration platform modernization",
  "Copilot readiness, adoption strategy, and workflow integration planning",
  "Identity modernization, access governance, and Zero Trust-aligned productivity",
  "Digital workplace transformation and end-user experience improvement",
  "Enterprise architecture alignment across business priorities and technical delivery",
  "Governance, risk, compliance, and responsible AI usage controls"
];

export default async function HomePage() {
  const featuredInsights = (await sanityFetch<SanityPost[]>({ query: featuredInsightsQuery, tags: ["post"] })) || [];
  const insights = featuredInsights.map((post) => ({
    title: post.title,
    description: post.excerpt || post.description,
    category: post.categories?.[0]?.title || "Insights",
    publishedAt: post.publishedAt,
    slug: post.slug.current
  }));

  return (
    <div className="site-shell">
      <TopNav />
      <main id="main-content" className="site-main">
        <section className="grid gap-8 lg:grid-cols-[1.25fr,0.75fr]">
          <div>
            <p className="kicker">Enterprise AI Enablement · Digital Workplace Transformation</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Carl Drechsel</h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">Technical Solutions Architect | Enterprise AI Transformation | Digital Workplace Strategy</p>
            <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Helping organizations translate AI capabilities into real operational change.</h2>
            <p className="section-intro mt-5">With more than two decades of experience across enterprise infrastructure, Microsoft 365 architecture, identity modernization, and digital workplace transformation, Carl helps organizations redesign how work happens so AI delivers measurable productivity, stronger decision-making, and scalable business value.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/resume.pdf" eventName="resume_download" className="btn-primary">Download Resume</TrackLink>
              <TrackLink href="#featured" eventName="featured_work_nav" className="btn-secondary">View Featured Work</TrackLink>
              <TrackLink href="https://www.linkedin.com/in/carldrechsel/" eventName="linkedin_click" label="hero_linkedin" className="btn-secondary" target="_blank" rel="noreferrer">Connect on LinkedIn</TrackLink>
            </div>
          </div>
          <aside id="resume" className="surface-card scroll-mt-28 p-7 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Where I Lead</p>
            <p className="mt-3 text-sm font-medium text-zinc-700">Enterprise AI transformation, digital workplace modernization, and architecture-led execution.</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              {enterpriseExpertise.map((item) => (
                <li key={item} className="border-l-2 border-zinc-200 pl-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-zinc-600">I help organizations connect enterprise architecture, governance, and workflow design so AI adoption produces measurable productivity, stronger decision velocity, and sustainable operating impact.</p>
          </aside>
        </section>

        <section id="about" className="section-block !pt-10 !pb-0">
          <h2 className="section-title">About</h2>
          <div className="mt-5 max-w-4xl space-y-5 text-lg text-zinc-600">
            <p>Carl Drechsel is a technology strategist focused on enterprise workforce transformation, digital workplace modernization, and AI-enabled productivity.</p>
            <p>Over the course of a 20+ year career spanning engineering, enterprise architecture, and strategic advisory roles, he has helped global organizations modernize collaboration platforms, strengthen security and identity foundations, and improve how work happens across large enterprise environments.</p>
            <p>His background across infrastructure, Microsoft 365 architecture, identity modernization, and digital workplace transformation gives him a practical foundation for enterprise AI leadership. Rather than treating AI as a standalone tool deployment, Carl focuses on how organizations redesign workflows, governance models, and operating environments so AI capabilities translate into meaningful productivity gains and better decision-making.</p>
          </div>
        </section>

        <section id="evolution" className="section-block !pt-10 !pb-0">
          <h2 className="section-title">Career Evolution</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {evolution.map(([title, desc], i) => (
              <article key={title} className="surface-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">0{i + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="expertise" className="section-block !pt-10 !pb-0">
          <h2 className="section-title">Expertise</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {expertise.map(([title, desc]) => (
              <article key={title} className="surface-card p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-600">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-card-padded mt-10">
          <h2 className="section-title">Enterprise Perspective</h2>
          <div className="mt-4 max-w-4xl space-y-4 text-zinc-600">
            <p><strong>Technology only transforms organizations when it transforms how work happens.</strong></p>
            <p>In large enterprises, meaningful adoption depends on how well new capabilities integrate with identity, security, governance, collaboration platforms, workflow design, operating models, and user experience.</p>
            <p>AI introduces a new layer to this same reality. Deploying AI tools alone rarely produces lasting value. Real impact emerges when workflows, decision processes, and governance evolve alongside the technology.</p>
            <p>When those elements move together, AI becomes more than a capability-it becomes a multiplier for enterprise performance.</p>
          </div>
        </section>

        <section id="featured" className="section-block !pt-10 !pb-0">
          <h2 className="section-title">Featured Work</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">Concepts and frameworks exploring enterprise AI transformation, Copilot adoption, and modern knowledge work.</p>
          <article className="surface-card mt-8 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">AI Transformation Model</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">One integrated model across strategy, implementation, and application</h3>
            <p className="mt-3 max-w-4xl text-zinc-600">
              These three featured concepts are connected as one progression: Enterprise AI Productivity Framework,
              AI Productivity Tool Accelerator, and SalesInsight.
            </p>
            <TrackLink
              href="/ai-transformation-model"
              eventName="ai_model_click"
              className="mt-5 inline-block text-sm font-semibold no-underline hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            >
              View AI Transformation Model →
            </TrackLink>
          </article>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...featuredWorkConcepts].reverse().map((concept) => (
              <FeaturedWorkCard key={concept.slug} concept={concept} eventName="featured_work_click" />
            ))}
          </div>
        </section>

        <section className="section-block !pt-10 !pb-0">
          <div className="flex items-center justify-between gap-3">
            <h2 className="section-title">Insights</h2>
            <TrackLink href="/insights" eventName="insights_archive_click" className="text-sm font-semibold no-underline hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900">View all insights →</TrackLink>
          </div>
          {insights.length > 0 ? (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {insights.map((item) => (
                <article key={item.slug} className="surface-card p-6">
                  <div className="flex items-center gap-3 text-xs text-zinc-500">
                    <span className="chip">{item.category}</span>
                    <span>{formatDate(item.publishedAt)}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-zinc-600">{item.description}</p>
                  <TrackLink href={`/insights/${item.slug}`} eventName="insight_click" label={item.title} className="mt-5 inline-block text-sm font-semibold no-underline hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900">Read insight →</TrackLink>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-600 shadow-sm">
              Insights will appear here once featured posts are published in Sanity.
            </div>
          )}
        </section>

        <section id="contact" className="surface-card-padded scroll-mt-28 mt-10">
          <h2 className="section-title">Let’s build the future of work.</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">Carl is open to recruiting conversations, consulting engagements, and executive discussions focused on enterprise AI transformation, Copilot strategy, and digital workplace modernization.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/resume.pdf" eventName="resume_download" label="contact_resume" className="btn-secondary">Download Resume</TrackLink>
            <TrackLink href="https://www.linkedin.com/in/carldrechsel/" eventName="linkedin_click" label="contact_linkedin" className="btn-secondary" target="_blank" rel="noreferrer">LinkedIn</TrackLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
