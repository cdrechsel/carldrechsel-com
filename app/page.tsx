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
  ["Technology Strategy Leadership", "Shape customer technology strategy by aligning Microsoft capabilities to business priorities, industry context, measurable outcomes, and growth."],
  ["Customer AI And Security Leadership", "Lead AI and security conversations that connect platform decisions, readiness planning, and transformation priorities to real business value."],
  ["Trusted Advisor Engagement", "Build credibility with executive and technical stakeholders through strategic dialogue, constructive challenge, and practical recommendations."],
  ["Microsoft Ecosystem Architecture", "Connect Azure, Microsoft 365, identity, security, data, and partner capabilities into actionable roadmaps and solution direction."],
  ["Industry And Business Alignment", "Apply customer-industry context to shape relevant strategies that accelerate adoption, value realization, and long-term transformation."],
  ["Virtual Team And Partner Influence", "Influence customer teams, architects, delivery stakeholders, and partner ecosystems to align around the right technical strategy."],
  ["Digital Workplace And AI Enablement", "Guide organizations from readiness through Copilot enablement, use case development, adoption planning, and measurable productivity outcomes."],
  ["Security, Compliance, And Zero Trust", "Align governance, identity, compliance, and security priorities so transformation can scale with resilience and trust."]
] as const;

const evolution = [
  ["Technical Foundations", "Built deep enterprise technical credibility across infrastructure, messaging, collaboration platforms, and large-scale platform operations supporting global organizations."],
  ["Enterprise Architecture", "Evolved into architecture leadership aligning identity, governance, security, and modernization strategy to business goals and enterprise transformation priorities."],
  ["Digital Workplace Strategy", "Led modern workplace and collaboration initiatives that connected workforce productivity, compliance, and enterprise platform direction."],
  ["Strategic Advisory And AI Transformation", "Focused on executive advisory, customer-facing technology strategy, and AI enablement that turn Microsoft investments into durable business outcomes."]
] as const;

const enterpriseExpertise = [
  "Customer-facing technology strategy and roadmap engagement",
  "AI and security strategy leadership aligned to business priorities",
  "Executive stakeholder engagement and trusted advisor communication",
  "Azure, Microsoft 365, identity, collaboration, and partner solution alignment",
  "Copilot enablement, AI adoption, and value realization",
  "Security, compliance, governance, and Zero Trust alignment",
  "Cross-functional leadership across customer teams, delivery, sales, and partners"
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
            <p className="kicker">Technology Strategy · AI And Security Leadership · Microsoft Ecosystem Alignment</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Carl Drechsel</h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">Cloud, AI, And Security Transformation | Strategic Technology Leadership | Trusted Customer Advisor</p>
            <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Leading digital workplace transformation that turns strategy into adoption, organizational impact, and measurable business value.</h2>
            <p className="section-intro mt-5">With more than two decades of experience across Microsoft platforms, enterprise architecture, identity, governance, and transformation delivery, Carl helps organizations define digital workplace strategy, align technology investments to business priorities, and move complex initiatives from vision to execution with measurable outcomes.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/resume.pdf" eventName="resume_download" className="btn-primary">Download Resume</TrackLink>
              <TrackLink href="#featured" eventName="featured_work_nav" className="btn-secondary">View Featured Work</TrackLink>
              <TrackLink href="https://www.linkedin.com/in/carldrechsel/" eventName="linkedin_click" label="hero_linkedin" className="btn-secondary" target="_blank" rel="noreferrer">Connect on LinkedIn</TrackLink>
            </div>
          </div>
          <aside id="resume" className="surface-card scroll-mt-28 p-7 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Where I Lead</p>
            <p className="mt-3 text-sm font-medium text-zinc-700">Customer-facing strategy across AI, security, cloud, and digital workplace transformation.</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              {enterpriseExpertise.map((item) => (
                <li key={item} className="border-l-2 border-zinc-200 pl-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-zinc-600">I help organizations connect executive priorities, industry context, architecture strategy, and delivery execution so Microsoft investments produce adoption, resilience, and business value.</p>
          </aside>
        </section>

        <section id="about" className="section-block !pt-10 !pb-0">
          <h2 className="section-title">About</h2>
          <div className="mt-5 max-w-4xl space-y-5 text-lg text-zinc-600">
            <p>Carl Drechsel is a customer-facing technology strategist focused on AI, security, and Microsoft platform transformation across large enterprise environments.</p>
            <p>Over the course of a 20+ year career spanning engineering, enterprise architecture, strategic advisory work, product thinking, and delivery leadership, he has helped organizations modernize platforms, strengthen identity and security foundations, and execute complex technology initiatives tied to business outcomes.</p>
            <p>His background across Microsoft 365, Azure, identity, compliance, governance, digital workplace strategy, and AI enablement gives him a practical foundation for roles that require both technical depth and business alignment. Carl is most effective where customer outcomes depend on executive engagement, industry-aware strategy, trusted advisor leadership, and disciplined execution across virtual teams.</p>
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
          <h2 className="section-title">Leadership Perspective</h2>
          <div className="mt-4 max-w-4xl space-y-4 text-zinc-600">
            <p><strong>Customer value and long-term growth both improve when strategy, trust, and execution move together.</strong></p>
            <p>In large enterprises, AI and security conversations are most effective when they are grounded in business priorities, industry context, and a clear understanding of the customer technology landscape.</p>
            <p>That is the environment where Carl does his best work: engaging executives, shaping strategy, guiding the right architecture conversations, and aligning virtual teams around solutions that customers can adopt with confidence.</p>
            <p>When those elements move together, Microsoft technology becomes more than a set of offerings. It becomes a strategic platform for customer growth, resilience, and transformation.</p>
          </div>
        </section>

        <section id="featured" className="section-block !pt-10 !pb-0">
          <h2 className="section-title">Featured Work</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">Concepts and frameworks spanning AI strategy, security alignment, digital workplace transformation, and measurable customer outcomes.</p>
          <article className="surface-card mt-8 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Strategy Lens</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">Frameworks for aligning AI, security, and Microsoft platform strategy to customer priorities</h3>
            <p className="mt-3 max-w-4xl text-zinc-600">
              The featured concepts connect AI strategy, governance, workflow design, and customer-facing delivery into a practical progression,
              including Copilot adoption, applied AI product thinking, and repeatable models that support trusted advisor conversations.
            </p>
            <p className="mt-3 max-w-4xl text-zinc-600">
              Together, these frameworks show how architecture planning, stakeholder alignment, reusable models, and delivery discipline
              can help organizations activate Microsoft cloud, security, and AI capabilities inside real operating environments.
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
          <h2 className="section-title">Let’s build and deliver what matters.</h2>
          <p className="mt-4 max-w-3xl text-zinc-600">Carl is open to conversations focused on technology strategy, AI and security transformation, Microsoft ecosystem alignment, and customer-facing advisory leadership.</p>
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
