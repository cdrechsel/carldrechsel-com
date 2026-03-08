import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

const expertiseItems = [
  {
    title: "AI Adoption & Copilot Strategy",
    description:
      "Translate AI ambition into measurable outcomes through governance, enablement, and practical rollout plans."
  },
  {
    title: "Microsoft 365 Transformation",
    description:
      "Modernize collaboration with secure, scalable Microsoft 365 architecture and adoption strategies."
  },
  {
    title: "Enterprise Collaboration Architecture",
    description:
      "Design robust collaboration foundations that align user experience, governance, and operations."
  },
  {
    title: "Identity & Zero Trust Alignment",
    description:
      "Integrate identity, access controls, and policy-based security into a cohesive enterprise model."
  },
  {
    title: "Digital Workplace Experience",
    description:
      "Create modern work experiences that improve productivity, communication, and operational resilience."
  }
];

const projects = [
  {
    title: "SalesInsight",
    description:
      "AI-powered system that turns meetings into structured sales intelligence and proposal generation.",
    href: "#"
  },
  {
    title: "AI Productivity Framework",
    description:
      "A practical framework for organizations adopting AI tools like ChatGPT and Copilot.",
    href: "#"
  },
  {
    title: "Copilot Strategy Accelerator",
    description:
      "Enterprise readiness model for deploying Microsoft Copilot.",
    href: "#"
  }
];

const insights = [
  "Why AI Adoption Fails Without Workflow Redesign",
  "The Real Challenge of Copilot: Changing How People Work",
  "Agentic AI: The Next Shift in Digital Productivity"
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Carl Drechsel is an AI enablement and digital workplace transformation leader focused on Microsoft Copilot and enterprise modernization."
};

export default function HomePage() {
  return (
    <>
      <section className="border-b border-zinc-200 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div className="container-shell">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-600">
            Carl Drechsel
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-zinc-900 sm:text-6xl">
            AI Enablement | Microsoft Copilot Strategy | Digital Workplace Transformation
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl">
            Enterprise architect helping organizations modernize work with AI, Microsoft 365, and secure productivity platforms.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 no-underline hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 no-underline hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <Section
        id="about"
        title="About"
        intro="Technical Solutions Architect with enterprise transformation experience across collaboration, productivity, and security platforms."
      >
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="prose prose-zinc max-w-none">
            <p>
              Carl Drechsel leads AI adoption and digital workplace transformation initiatives that align business outcomes with secure, scalable technology strategy.
            </p>
            <p>
              His work spans Microsoft 365 modernization, Copilot strategy, governance, identity, and enterprise architecture with a focus on practical adoption at scale.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-base font-semibold text-zinc-900">Focus Areas</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>Microsoft 365</li>
              <li>Copilot</li>
              <li>Zero Trust</li>
              <li>Digital Workplace</li>
              <li>Enterprise Architecture</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="expertise" title="Expertise / Services" intro="Core areas where Carl helps organizations execute high-impact transformation.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseItems.map((item) => (
            <article key={item.title} className="rounded-xl border border-zinc-200 p-6">
              <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" intro="Representative initiatives focused on enterprise AI, productivity, and transformation outcomes.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} description={project.description} href={project.href} />
          ))}
        </div>
      </Section>

      <Section id="writing" title="Writing / Insights" intro="Selected perspectives on AI enablement and organizational change.">
        <div className="rounded-xl border border-zinc-200 p-6">
          <ul className="space-y-3">
            {insights.map((article) => (
              <li key={article}>
                <a
                  href="#"
                  className="text-base font-medium text-zinc-900 no-underline hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                >
                  {article}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="contact" title="Contact" intro="Let’s build the future of work.">
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:carl@carldrechsel.com"
            className="rounded-xl border border-zinc-200 p-6 no-underline hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Email</h3>
            <p className="mt-2 text-lg font-medium text-zinc-900">carl@carldrechsel.com</p>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-200 p-6 no-underline hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">LinkedIn</h3>
            <p className="mt-2 text-lg font-medium text-zinc-900">Connect on LinkedIn</p>
          </a>
        </div>
      </Section>
    </>
  );
}
