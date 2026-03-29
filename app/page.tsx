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
  ["Cloud Solution Architecture", "Lead end-to-end solution design across cloud platforms, enterprise infrastructure, identity, security, and operational delivery."],
  ["Azure And Microsoft Platform Delivery", "Translate business requirements into deployable Azure and Microsoft platform solutions that balance speed, governance, and operational readiness."],
  ["Technical Leadership And People Management", "Coach technical teams, set delivery expectations, remove blockers, and maintain high standards across customer-facing execution."],
  ["Customer Success And Stakeholder Alignment", "Build credibility with technical decision makers and executive stakeholders by connecting architecture choices to measurable outcomes."],
  ["Enterprise AI Transformation", "Help organizations move from isolated AI capabilities to governed implementation patterns, workflow redesign, and scalable adoption."],
  ["Project And Portfolio Execution", "Oversee complex initiatives from architecture through implementation, coordinating delivery, risk management, and cross-functional accountability."],
  ["Business-To-Technology Translation", "Bridge strategy, technical architecture, and delivery execution so priorities become actionable plans and shipped outcomes."],
  ["Governance, Security, And Operating Model Design", "Align platform decisions with identity, compliance, and operational controls so transformation scales with trust."]
] as const;

const evolution = [
  ["Technical Foundations", "Built deep enterprise technical credibility across infrastructure, messaging, collaboration platforms, and large-scale platform operations supporting global organizations."],
  ["Enterprise Architecture", "Evolved into architecture leadership aligning identity, governance, security, and modernization strategy to business goals and enterprise transformation priorities."],
  ["Delivery Leadership", "Led enterprise modernization efforts across workforce productivity, platform execution, stakeholder alignment, and customer-facing transformation work."],
  ["Cloud And AI Leadership", "Focused on connecting architecture, execution, and organizational change so cloud and AI initiatives produce durable business outcomes."]
] as const;

const enterpriseExpertise = [
  "Cloud solution architecture and technical delivery leadership",
  "Azure, Microsoft platform, and enterprise infrastructure modernization",
  "Customer-facing architecture, stakeholder management, and executive alignment",
  "People leadership, coaching, and high-performance team development",
  "Enterprise AI transformation, Copilot strategy, and workflow enablement",
  "Identity, governance, security, and operating model design",
  "Program execution, risk removal, and cross-functional coordination"
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
            <p className="kicker">Cloud Solution Architecture · Enterprise AI Transformation · Technical Leadership</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">Carl Drechsel</h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">Technical Leader | Cloud Solution Architecture | Customer Success Execution</p>
            <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Leading cloud, platform, and AI delivery from strategy through hands-on execution.</h2>
            <p className="section-intro mt-5">With more than two decades of experience across enterprise infrastructure, Microsoft platforms, identity modernization, architecture, and transformation delivery, Carl helps organizations move complex initiatives from whiteboard strategy to production execution with strong stakeholder alignment and measurable business impact.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/resume.pdf" eventName="resume_download" className="btn-primary">Download Resume</TrackLink>
              <TrackLink href="#featured" eventName="featured_work_nav" className="btn-secondary">View Featured Work</TrackLink>
              <TrackLink href="https://www.linkedin.com/in/carldrechsel/" eventName="linkedin_click" label="hero_linkedin" className="btn-secondary" target="_blank" rel="noreferrer">Connect on LinkedIn</TrackLink>
            </div>
          </div>
          <aside id="resume" className="surface-card scroll-mt-28 p-7 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Where I Lead</p>
            <p className="mt-3 text-sm font-medium text-zinc-700">Customer-facing cloud architecture, technical delivery leadership, and enterprise AI execution.</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              {enterpriseExpertise.map((item) => (
                <li key={item} className="border-l-2 border-zinc-200 pl-3">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-zinc-600">I help organizations connect architecture, delivery execution, governance, and team leadership so cloud and AI investments turn into real customer outcomes.</p>
          </aside>
        </section>

        <section id="about" className="section-block !pt-10 !pb-0">
          <h2 className="section-title">About</h2>
          <div className="mt-5 max-w-4xl space-y-5 text-lg text-zinc-600">
            <p>Carl Drechsel is a technical leader focused on cloud solution architecture, enterprise platform transformation, and customer-facing execution.</p>
            <p>Over the course of a 20+ year career spanning engineering, enterprise architecture, strategic advisory work, and delivery leadership, he has helped organizations modernize platforms, strengthen identity and security foundations, and execute complex technology initiatives across large enterprise environments.</p>
            <p>His background across infrastructure, Microsoft platforms, governance, and AI transformation gives him a practical foundation for roles that require both technical depth and leadership range. Carl is most effective where customer outcomes depend on strong architecture, hands-on problem solving, team coaching, and disciplined execution across stakeholders.</p>
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
            <p><strong>Technical leadership creates value when strategy, execution, and accountability move together.</strong></p>
            <p>In large enterprises, successful cloud and AI initiatives depend on more than architecture diagrams. They require delivery discipline, clear stakeholder alignment, operational readiness, and leaders who can switch comfortably between customer conversations and hands-on technical problem solving.</p>
            <p>That is the environment where Carl does his best work: guiding teams, removing blockers, shaping architecture, and helping customers move high-value initiatives into real execution.</p>
            <p>When those elements move together, cloud and AI become more than technology investments. They become engines for customer success and enterprise performance.</p>
          </div>
        </section>

        <section id="featured" className="section-block !pt-10 !pb-0">
          <h2 className="section-title">Featured Work</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">Concepts and frameworks exploring enterprise AI transformation, Copilot adoption, and modern knowledge work.</p>
          <article className="surface-card mt-8 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">AI Transformation Model</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">One integrated model across strategy, implementation, and application</h3>
            <p className="mt-3 max-w-4xl text-zinc-600">
              The AI-focused featured concepts are connected as one progression: Enterprise AI Productivity Framework,
              AI Productivity Tool Accelerator, and SalesInsight.
            </p>
            <p className="mt-3 max-w-4xl text-zinc-600">
              Alongside that progression, the Cloud Delivery Acceleration Model extends the portfolio into customer-facing
              execution, delivery leadership, and architecture-to-implementation oversight.
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
          <p className="mt-4 max-w-3xl text-zinc-600">Carl is open to leadership conversations focused on cloud solution architecture, customer success, Azure and Microsoft platform delivery, and enterprise AI transformation.</p>
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
