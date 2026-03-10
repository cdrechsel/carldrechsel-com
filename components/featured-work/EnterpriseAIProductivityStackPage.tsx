export default function EnterpriseAIProductivityStackPage() {
  const stack = [
    {
      title: "Operating Model",
      body: "The governance, enablement, and adoption structure that allows AI to scale across the organization.",
      labels: ["Governance", "Enablement", "Ownership", "Adoption"]
    },
    {
      title: "Platform Environment",
      body: "The collaboration and productivity environments where work already happens.",
      labels: ["Collaboration", "Knowledge flow", "Tooling", "Information access"]
    },
    {
      title: "Workflow Design",
      body: "The cognitive and operational steps where AI can reduce friction and accelerate execution.",
      labels: ["Work steps", "Cognitive load", "Process design", "Execution flow"]
    },
    {
      title: "Decision Velocity",
      body: "The ability to move from information to insight to action with greater speed and clarity.",
      labels: ["Insight speed", "Decision quality", "Action clarity", "Operational tempo"]
    }
  ];

  const roleCards = [
    {
      title: "Executive Leadership",
      body: "AI synthesizes operational reports, dashboards, and strategic updates into concise executive briefings that highlight trends, risks, and recommended actions.",
      tail: "This compresses hours of analysis into minutes and accelerates strategic decisions."
    },
    {
      title: "Product Management",
      body: "AI analyzes customer feedback, usage data, and support tickets to identify emerging product needs and roadmap opportunities.",
      tail: "Product teams move directly to prioritization decisions instead of manually reviewing hundreds of inputs."
    },
    {
      title: "Sales Teams",
      body: "AI summarizes discovery calls, extracts business drivers, identifies risks, and generates deal strategy briefs.",
      tail: "Sales teams spend less time reconstructing meeting notes and more time deciding how to win the deal."
    },
    {
      title: "Program & Operations Management",
      body: "AI analyzes project communications and delivery updates to surface schedule risks, delivery blockers, and program health indicators.",
      tail: "Leaders can quickly determine where intervention is required."
    },
    {
      title: "Legal & Compliance",
      body: "AI summarizes contracts, highlights risk clauses, and identifies deviations from standard language.",
      tail: "Legal teams move directly to negotiation strategy rather than document analysis."
    },
    {
      title: "Finance & Strategy",
      body: "AI synthesizes financial reports and identifies cost anomalies, scenario risks, and budget opportunities.",
      tail: "Leaders move faster from financial data to investment decisions."
    }
  ];

  const diagnostics = [
    {
      title: "Operating Model Questions",
      items: [
        "Who owns AI adoption in the organization?",
        "Are teams trained to integrate AI into daily workflows?",
        "Are productivity improvements being measured?"
      ]
    },
    {
      title: "Platform Environment Questions",
      items: [
        "Is AI embedded in collaboration tools?",
        "Can employees access AI within the flow of work?",
        "Is knowledge accessible to AI systems?"
      ]
    },
    {
      title: "Workflow Design Questions",
      items: [
        "Which workflows require the most cognitive effort?",
        "Where do employees spend time synthesizing information?",
        "Where could AI accelerate thinking?"
      ]
    },
    {
      title: "Decision Velocity Questions",
      items: [
        "How long does it take to move from information to decision?",
        "Are leaders receiving decision-ready summaries?",
        "Can teams quickly interpret large volumes of information?"
      ]
    }
  ];

  const frameworkIntro = {
    lead: "Most organizations introduce AI as a tool.",
    points: [
      "Employees gain access to assistants, copilots, and automation tools, but the underlying structure of work remains unchanged.",
      "As a result, adoption becomes inconsistent, productivity gains are difficult to measure, and promising experiments fail to scale.",
      "The Enterprise AI Productivity Framework reframes AI adoption as a work redesign challenge."
    ],
    outcome: "Meaningful productivity improvements occur when AI is embedded across four foundational layers of enterprise work."
  };

  const workStructurePoints = [
    "Organizations operate through governance models that define ownership, standards, and accountability.",
    "Employees perform work inside digital platforms such as collaboration tools, document systems, and workflow applications.",
    "Within those environments, teams follow repeatable workflows that structure how information is gathered, analyzed, and shared.",
    "Ultimately, these workflows exist to support decisions and actions."
  ];

  const layers: Record<string, { lead: string; points: string[] }> = {
    "Operating Model": {
      lead: "Before AI can scale, organizations must establish the right operating conditions.",
      points: [
        "This includes governance, ownership, enablement, training, change management, and success metrics.",
        "Without an operating model, AI adoption becomes fragmented and productivity gains remain isolated.",
        "The operating model turns AI into an operational capability rather than isolated experimentation."
      ]
    },
    "Platform Environment": {
      lead: "Knowledge work happens inside digital platforms such as collaboration tools, messaging systems, document repositories, and workflow systems.",
      points: [
        "These environments shape how information is created, shared, and discovered.",
        "AI delivers the strongest gains when it is embedded directly into the natural flow of work.",
        "Adoption improves when AI is available where teams already collaborate."
      ]
    },
    "Workflow Design": {
      lead: "Every knowledge role follows cognitive workflows.",
      points: [
        "Teams spend time researching, synthesizing inputs, drafting, analyzing, and coordinating.",
        "These moments of cognitive effort represent the strongest opportunity for AI.",
        "AI becomes transformative when it accelerates thinking within real workflows."
      ]
    },
    "Decision Velocity": {
      lead: "The purpose of knowledge work is not simply output. It is action.",
      points: [
        "AI accelerates movement from information to insight, from insight to decision, and from decision to execution.",
        "Shorter cycles increase enterprise responsiveness and execution quality.",
        "Decision velocity is where AI creates measurable strategic advantage."
      ]
    }
  };

  const sectionClass = "max-w-6xl mx-auto px-6 py-6 md:py-7";

  return (
    <article className="pb-4">
      <section className={sectionClass}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Featured Framework</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900">The Enterprise AI Productivity Framework</h1>
        <p className="mt-4 text-xl text-gray-600">Redesigning Knowledge Work for the AI Era</p>
        <div className="mt-6 space-y-5 text-[1.1rem] leading-9 text-gray-700">
          <p>
            Artificial intelligence has the potential to dramatically improve knowledge work. But tools alone do not
            transform organizations. Real productivity gains occur when organizations redesign how work is structured,
            how information flows, and how decisions are made.
          </p>
          <p>
            The Enterprise AI Productivity Framework is a practical framework for integrating AI into the environments,
            workflows, and decision processes that shape modern enterprise work.
          </p>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="w-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Framework Intro</p>
          <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50/50 p-6">
            <p className="text-[1.2rem] font-semibold leading-8 text-zinc-900">{frameworkIntro.lead}</p>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-[1.03rem] leading-8 text-gray-700 marker:text-zinc-500">
              {frameworkIntro.points.map((point, index) => (
                <li key={point} className={index === 1 ? "mt-4" : undefined}>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-zinc-200 pt-4 text-[1.03rem] font-semibold leading-8 text-zinc-900">
              {frameworkIntro.outcome}
            </p>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="w-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Concept</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">How Enterprise Work Is Structured</h2>
          <div className="mt-6 max-w-5xl">
            <p className="text-[1.12rem] font-medium leading-8 text-zinc-900">Enterprise work is shaped by several structural layers.</p>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-[1.03rem] leading-8 text-gray-700 marker:text-zinc-500">
              {workStructurePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-[1.03rem] font-medium leading-8 text-zinc-900">
              The Enterprise AI Productivity Framework maps these layers and shows where AI can meaningfully improve how work happens.
            </p>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Model Overview</h2>
          <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900">Enterprise AI Productivity Framework</h3>
            <p className="mt-1 text-sm text-zinc-500">A practical model for redesigning knowledge work with AI</p>
            <div className="mt-6 flex flex-col items-center space-y-4">
              {stack.map((item, index) => (
                <div key={item.title} className="w-full max-w-3xl">
                  <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                    <h4 className="text-3xl font-semibold tracking-tight text-zinc-900">{item.title}</h4>
                    <p className="mt-2 leading-relaxed text-zinc-700">{item.body}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.labels.map((label) => (
                        <span key={label} className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-600">
                          {label}
                        </span>
                      ))}
                    </div>
                  </article>
                  {index < stack.length - 1 ? <div className="mx-auto h-5 w-px bg-zinc-300" aria-hidden /> : null}
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-zinc-600">
              AI value increases when operating model, platform design, workflow integration, and decisions are coordinated as one system.
            </p>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Stack Layers</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">How Enterprise AI Scales in Practice</h2>
        </div>
        <div className="space-y-6">
          {["Operating Model", "Platform Environment", "Workflow Design", "Decision Velocity"].map((title) => (
            <article
              key={title}
              className="grid gap-8 rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm md:grid-cols-[0.85fr_1.15fr] md:gap-10"
            >
              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-gray-900">{title}</h3>
              </div>
              <div className="space-y-4 text-lg leading-8 text-gray-700">
                <p className="font-medium text-zinc-900">{layers[title].lead}</p>
                <ul className="list-disc space-y-3 pl-5 text-[1.02rem] leading-8 text-zinc-700 marker:text-zinc-500">
                  {layers[title].points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-center text-[1.03rem] leading-8 text-zinc-700">
          This is where AI creates its greatest organizational impact.
        </p>
        <div className="mx-auto mt-4 max-w-4xl rounded-2xl border border-zinc-300 bg-white px-6 py-6 text-center shadow-sm">
          <p className="text-2xl font-medium tracking-tight text-zinc-900">
            AI doesn’t just automate tasks — it accelerates decisions.
          </p>
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">AI and Decision Velocity Across Knowledge Work</h2>
        <p className="mt-4 text-lg text-gray-600">Decision velocity improvements appear differently across knowledge roles.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roleCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900">{card.title}</h3>
              <p className="mt-4 text-[1.05rem] leading-8 text-gray-700">{card.body}</p>
              <p className="mt-4 border-t border-zinc-200 pt-4 text-[1.02rem] font-semibold leading-7 text-zinc-900">{card.tail}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-5xl text-lg leading-8 text-gray-700">
          AI analytics and predictive systems help organizations convert large datasets into actionable insights that
          support faster, data-driven decisions.
        </p>
      </section>

      <section className={sectionClass}>
        <div className="w-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Decision Clarity</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Why Decision Velocity Matters</h2>
          <div className="mt-7 max-w-5xl space-y-5 text-[1.06rem] leading-8 text-gray-700 md:text-[1.12rem]">
            <p>Across most knowledge roles, the bottleneck is not producing information.</p>
            <p className="text-2xl font-semibold leading-tight text-zinc-900">It is interpreting it.</p>
            <ul className="list-disc space-y-3 pl-5 marker:text-zinc-500">
              <li>Teams spend significant time gathering data, synthesizing inputs, preparing summaries, and building presentations before a decision can be made.</li>
              <li>AI reduces that cognitive burden and accelerates movement from insight to action.</li>
              <li>Higher decision velocity makes organizations more responsive, adaptive, and execution-focused.</li>
            </ul>
            <p className="border-t border-zinc-200 pt-4 font-medium text-zinc-900">
              Modern enterprise AI efforts succeed when AI improves workflows and decision-making processes rather than simply introducing new tools.
            </p>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Assessing Your AI Productivity Stack</h2>
        <p className="mt-4 text-lg text-gray-700">
          Organizations can evaluate their AI readiness by examining each layer of the stack.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {diagnostics.map((card) => (
            <article key={card.title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900">{card.title}</h3>
              <ul className="mt-4 space-y-3 list-disc pl-5 leading-relaxed text-gray-700">
                {card.items.map((item) => (
                  <li key={item} className="text-[1.02rem]">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClass}>
        <blockquote className="mx-auto max-w-4xl rounded-2xl border border-zinc-300 bg-white px-6 py-6 text-center shadow-sm">
          <p className="text-2xl font-medium tracking-tight text-zinc-900">
            AI creates value when it is built into the structure of work.
          </p>
        </blockquote>
      </section>
    </article>
  );
}
