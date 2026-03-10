const modelCards = [
  {
    eyebrow: "Strategic Framework",
    title: "Enterprise AI Productivity Framework",
    descriptor: "Redesigning knowledge work for the AI era.",
    body:
      "Problem: AI adoption efforts were tool-centric and lacked a clear model for improving real work. Solution: This framework defined where AI should reduce cognitive friction, accelerate workflows, and improve decision velocity across enterprise knowledge work. Result: Teams gained a strategic blueprint for redesigning work, which became the foundation for implementation in Phase 2.",
    listLabel: "Focus areas",
    points: [
      "Decision velocity",
      "Workflow design",
      "Collaboration environments",
      "AI operating models"
    ],
    connectorText: "Applying AI assistants to real knowledge workflows"
  },
  {
    eyebrow: "Implementation Layer",
    title: "AI Productivity Tool Accelerator",
    subtitle: "Copilot • ChatGPT • Gemini",
    descriptor: "Operationalizing AI assistants within enterprise workflows.",
    body:
      "Problem: Teams had access to powerful assistants, but usage was inconsistent and outcomes were unclear. Solution: The accelerator introduced repeatable prompt patterns and role-based workflow methods across Copilot, ChatGPT, and Gemini for research, writing, synthesis, analysis, and decision support. Result: Workflow acceleration became structured and governable, producing a reusable implementation layer that could be embedded directly into dedicated systems in Phase 3.",
    listLabel: "Focus areas",
    points: [
      "AI-assisted research and synthesis",
      "Prompt patterns for repeatable workflows",
      "Workflow acceleration",
      "Responsible AI usage and information handling"
    ],
    connectorText: "Embedding repeatable workflows into operational systems",
    featured: true
  },
  {
    eyebrow: "Operational Systems",
    title: "SalesInsight",
    descriptor: "AI-powered sales intelligence platform.",
    body:
      "In Phase 3, SalesInsight operationalizes the workflow patterns established in Phase 2 within a specific business process. It converts unstructured sales conversations into structured deal intelligence and transforms meeting content into actionable strategy briefs, risks, next steps, and sales insights that help teams move faster from conversation to execution.",
    listLabel: "Capabilities",
    points: [
      "Conversation intelligence extraction",
      "Opportunity and risk detection",
      "AI-generated strategy briefs",
      "Automated follow-up support"
    ]
  }
];

const practiceExamples = [
  {
    layer: "Enterprise AI Productivity Framework",
    scenario: "Strategic alignment",
    inPractice:
      "Defines where AI should improve decision-making, workflow speed, and collaboration quality before tool rollout begins.",
    outcome:
      "Leadership teams align on operating model priorities, adoption scope, and measurable value targets."
  },
  {
    layer: "AI Productivity Tool Accelerator",
    scenario: "Workflow implementation",
    inPractice:
      "Builds repeatable prompt patterns and role-based usage motions across Copilot, ChatGPT, and Gemini for research, synthesis, drafting, and planning.",
    outcome:
      "Teams move from one-off prompting to consistent workflow acceleration with clearer governance and usage patterns."
  },
  {
    layer: "AI-Embedded Workflow Systems",
    scenario: "Operational system execution",
    inPractice:
      "Builds dedicated AI-embedded tools that operationalize the workflows defined in the previous layer; SalesInsight is one example that converts meeting conversations into structured intelligence briefs, risks, and next actions.",
    outcome:
      "Teams move from workflow acceleration into system-level execution with faster alignment, stronger consistency, and measurable operational impact."
  }
];

const deepDive = [
  {
    layer: "Layer 1 - Strategic Framework",
    title: "Enterprise AI Productivity Framework",
    why:
      "Organizations often introduce AI without a shared model for how work should change, which leads to fragmented adoption and unclear value.",
    how:
      "This layer defines the productivity architecture: where AI should accelerate decisions, reduce cognitive friction, and improve collaboration flow.",
    outputs: [
      "Priority workflow domains for AI intervention",
      "Decision-velocity targets by role",
      "Operating model assumptions for adoption and governance"
    ],
    impact:
      "Creates strategic alignment before tools are deployed, so implementation has clear direction and measurable intent."
  },
  {
    layer: "Layer 2 - Implementation Layer",
    title: "AI Productivity Tool Accelerator",
    why:
      "Even when strategy is clear, teams struggle to translate AI tools into repeatable execution inside real workflows.",
    how:
      "This layer operationalizes Copilot, ChatGPT, and Gemini through role-based prompt patterns, workflow playbooks, and responsible usage guardrails.",
    outputs: [
      "Repeatable assistant-enabled workflow patterns",
      "Role-based implementation motions",
      "Governance-aligned usage practices"
    ],
    impact:
      "Turns one-off prompting into consistent workflow acceleration and prepares the organization for system-level operationalization."
  },
  {
    layer: "Layer 3 - Operational Systems",
    title: "AI-Embedded Workflow Systems",
    why:
      "To produce durable business value, assistant-enabled workflows must be embedded into dedicated systems aligned to specific business processes.",
    how:
      "This layer operationalizes the prior layers by converting unstructured workflow activity into structured intelligence artifacts and execution-ready outputs.",
    outputs: [
      "AI-generated strategy briefs and next actions",
      "Risk and opportunity signal extraction",
      "Execution-ready deal intelligence outputs"
    ],
    impact:
      "Moves teams from workflow acceleration to operational execution with faster alignment, stronger consistency, and measurable performance improvement."
  }
];

export default function AITransformationModelSection() {
  return (
    <section className="section-block !py-10" aria-labelledby="ai-transformation-model-title">
      <h2 id="ai-transformation-model-title" className="section-title">
        AI Transformation Model
      </h2>
      <p className="mt-3 max-w-3xl text-zinc-600">
        From AI strategy to workflow acceleration to operational AI systems.
      </p>
      <p className="mt-4 max-w-4xl text-zinc-600">
        This model connects three layers of AI transformation in workplace productivity: a strategic framework for
        understanding how AI transforms knowledge work, a practical implementation layer for applying AI productivity
        tools such as Copilot, ChatGPT, and Gemini, and a productized system that operationalizes those ideas in a
        real business workflow.
      </p>
      <p className="mt-4 max-w-4xl text-zinc-600">
        The model is designed to show progression, not parallel activity. The first layer defines where AI should
        improve decision quality, workflow speed, and collaboration outcomes. The second layer translates those
        priorities into repeatable assistant-enabled workflows that teams can adopt consistently. The third layer
        converts those workflows into embedded operational systems that produce measurable business impact.
      </p>
      <p className="mt-4 max-w-4xl text-zinc-600">
        The table cards that follow represent how each layer functions in practice and how each stage strengthens the
        next, from strategy to implementation to applied system execution.
      </p>

      <div className="mt-8 max-w-5xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Model Overview</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">Three layers of AI transformation</h3>
        <p className="mt-3 max-w-4xl text-zinc-600">
          This is the high-level model before the detailed breakdown: strategy defines direction, implementation
          creates repeatable workflow behavior, and operational systems operationalize that behavior into durable
          systems.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Layer 1</p>
            <h4 className="mt-2 text-lg font-semibold text-zinc-900">Strategic Framework</h4>
            <p className="mt-1 text-sm text-zinc-600">Enterprise AI Productivity Framework</p>
          </article>
          <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Layer 2</p>
            <h4 className="mt-2 text-lg font-semibold text-zinc-900">Implementation Layer</h4>
            <p className="mt-1 text-sm text-zinc-600">AI Productivity Tool Accelerator</p>
          </article>
          <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Layer 3</p>
            <h4 className="mt-2 text-lg font-semibold text-zinc-900">Operational Systems</h4>
            <p className="mt-1 text-sm text-zinc-600">AI-Embedded Workflow Systems</p>
          </article>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
          <span>Strategy</span>
          <span aria-hidden>→</span>
          <span>Workflow Implementation</span>
          <span aria-hidden>→</span>
          <span>Operational System Execution</span>
        </div>
      </div>

      <p className="mt-6 max-w-5xl text-zinc-600">
        Together, these layers form a progression from strategic intent to operational execution. The deep dive below
        explains the specific problem each layer addresses, the mechanism it introduces, and the business impact it
        produces.
      </p>

      <div className="mt-8 max-w-5xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Layer Deep Dive</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">How each layer creates value</h3>
        <p className="mt-3 max-w-4xl text-zinc-600">
          The model is intentionally sequential. Each layer solves a different problem and produces specific outputs
          that enable the next stage of transformation.
        </p>

        <div className="mt-6 space-y-4">
          {deepDive.map((item) => (
            <article key={item.title} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{item.layer}</p>
              <h4 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900">{item.title}</h4>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-zinc-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Problem Addressed</p>
                  <p className="mt-1 text-zinc-700">{item.why}</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Mechanism</p>
                  <p className="mt-1 text-zinc-700">{item.how}</p>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Core Outputs</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-700">
                  {item.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Business Impact</p>
                <p className="mt-1 text-zinc-700">{item.impact}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 max-w-5xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Model Progression</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">How the model moves from strategy to system execution</h3>
        <p className="mt-3 max-w-3xl text-zinc-600">
          This section illustrates the model sequence: strategic framework design, workflow-level implementation, and
          operational AI system execution.
        </p>

        <div className="mt-6 space-y-4">
          {practiceExamples.map((item) => (
            <article key={item.layer} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
              <div className="grid gap-3 md:grid-cols-3 md:gap-4">
                <div className="rounded-lg border border-zinc-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Layer</p>
                  <p className="mt-1 font-semibold text-zinc-900">{item.layer}</p>
                  <p className="mt-2 text-sm text-zinc-600">{item.scenario}</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">In Practice</p>
                  <p className="mt-1 text-zinc-700">{item.inPractice}</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Outcome</p>
                  <p className="mt-1 text-zinc-700">{item.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">The Model in Practice</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">Case Study Progression: from framework design to SalesInsight</h3>
        <p className="mt-3 max-w-4xl text-zinc-600">
          The sequence below shows the model in practice in sales engineering: strategic definition first,
          workflow implementation second, and applied system execution third.
        </p>
      </div>

      <div className="mt-6 max-w-5xl space-y-4">
        {modelCards.map((card, index) => (
          <div key={card.title}>
            <article
              className={`surface-card p-6 sm:p-7 ${
                card.featured ? "border-zinc-300 bg-zinc-50/70 shadow-md" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{card.eyebrow}</p>
                <p className="text-xs font-medium text-zinc-500">Phase {index + 1} of {modelCards.length}</p>
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">{card.title}</h3>
              {card.subtitle ? (
                <p className="mt-1 text-sm font-medium text-zinc-500">{card.subtitle}</p>
              ) : null}
              <p className="mt-3 text-[1.02rem] font-medium text-zinc-900">{card.descriptor}</p>
              <p className="mt-3 leading-relaxed text-zinc-700">{card.body}</p>
              <p className="mt-4 text-sm font-semibold text-zinc-900">{card.listLabel}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {card.points.map((point) => (
                  <span key={point} className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-sm text-zinc-700">
                    {point}
                  </span>
                ))}
              </div>
            </article>

            {index < modelCards.length - 1 ? (
              <div className="py-3 text-center" aria-hidden>
                <div className="mx-auto h-5 w-px bg-zinc-300" />
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                  {card.connectorText}
                </p>
                <div className="mt-2 text-zinc-400">↓</div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <p className="mt-6 max-w-5xl text-center text-sm text-zinc-600">
        AI transformation becomes most powerful when strategy, workflow adoption, and applied systems are designed as
        part of the same operating model.
      </p>
    </section>
  );
}
