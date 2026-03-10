const modelLayers = [
  {
    title: "Platform Readiness",
    description: "Prepare identity, knowledge, and collaboration environments for secure assistant-enabled work.",
    labels: ["Identity and access", "Knowledge architecture", "Collaboration platforms", "Security posture"]
  },
  {
    title: "Information Governance",
    description: "Apply guardrails for responsible usage, exposure control, and compliance.",
    labels: ["Responsible AI", "Data protection", "Policy controls", "Oversight"]
  },
  {
    title: "Workflow Enablement",
    description: "Embed assistants into real workflows across roles and teams.",
    labels: ["Role-based use cases", "Prompt patterns", "Work redesign", "Enablement"]
  },
  {
    title: "Productivity Intelligence",
    description: "Measure workflow impact, decision acceleration, and execution outcomes.",
    labels: ["Time savings", "Quality signals", "Adoption insights", "Decision velocity"]
  }
];

export default function AIProductivityToolAcceleratorPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Featured Framework</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">AI Productivity Tool Accelerator</h1>
        <p className="mt-3 text-xl text-zinc-600">A Practical Model for Enterprise AI Assistant Adoption</p>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-zinc-500">Copilot • ChatGPT • Gemini</p>

        <div className="mt-6 space-y-4 text-zinc-700">
          <p>
            Enterprise teams now have access to powerful AI assistants, but access alone does not create operating
            impact. Productivity gains emerge when assistants are embedded into repeatable workflows tied to real
            decisions and execution outcomes.
          </p>
          <p>
            Many organizations still run assistant adoption as isolated experimentation: users test prompts, compare
            outputs, and share tips informally. That approach produces scattered wins but rarely scales into consistent
            team behavior.
          </p>
          <p>
            The AI Productivity Tool Accelerator was designed to solve that gap. It provides a structured model for
            operationalizing assistants such as Copilot, ChatGPT, and Gemini within enterprise workflow, governance,
            and measurement systems.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Pattern 01</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Tool-first adoption</p>
            <p className="mt-1 text-sm text-zinc-600">Teams get access to assistants before workflows and governance are defined.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Pattern 02</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Inconsistent execution</p>
            <p className="mt-1 text-sm text-zinc-600">Prompt quality, usage behavior, and output reliability vary widely by team.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Pattern 03</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Weak measurement loops</p>
            <p className="mt-1 text-sm text-zinc-600">Leaders cannot clearly connect assistant usage to measurable productivity outcomes.</p>
          </div>
        </div>
      </header>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Why This Framework Exists</h2>
        <div className="mt-4 space-y-4 text-zinc-700">
          <p>
            The AI Productivity Tool Accelerator builds on the Enterprise AI Productivity Framework and translates it
            into practical implementation for assistant-enabled work.
          </p>
          <p>
            Rather than centering one vendor, this model focuses on how organizations use assistants across environments,
            including Copilot, ChatGPT, and Gemini, to improve the quality and speed of knowledge work.
          </p>
          <p>Assistant adoption intersects with multiple enterprise systems simultaneously:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Identity and access controls determine what assistants can retrieve.</li>
            <li>Information governance determines what assistants should access.</li>
            <li>Collaboration platforms determine where assistant support appears in daily work.</li>
            <li>Workflow design determines where assistant outputs actually improve execution.</li>
            <li>Enablement and change leadership determine whether adoption scales.</li>
          </ul>
        </div>
        <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-sm font-semibold text-zinc-900">Strategic implication</p>
          <p className="mt-2 text-zinc-700">
            Assistant performance is not only a model-quality issue. It is an operating-model issue shaped by
            governance discipline, workflow clarity, and adoption design.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">The Implementation Gap</h2>
        <div className="mt-4 space-y-4 text-zinc-700">
          <p>
            In practice, assistant adoption often reveals existing enterprise gaps that predate AI but become more
            visible once assistant usage begins.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Inconsistent information governance and overshared repositories.</li>
            <li>Weak knowledge architecture and unclear content ownership.</li>
            <li>Limited workflow definition at role and team level.</li>
            <li>Low confidence in output quality and reuse.</li>
            <li>Insufficient mechanisms for outcome measurement.</li>
          </ul>
          <p>
            The AI Productivity Tool Accelerator organizes this challenge into four coordinated pillars that move from
            foundations to measurable outcomes.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">The AI Productivity Tool Accelerator Model</h2>
        <p className="mt-2 text-sm text-zinc-500">Four pillars for scalable enterprise assistant adoption</p>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900">AI Productivity Tool Accelerator</h3>
          <p className="mt-1 text-sm text-zinc-500">A practical model for scaling Copilot, ChatGPT, and Gemini in enterprise workflows</p>

          <div className="mt-6 flex flex-col items-center space-y-4">
            {modelLayers.map((layer, index) => (
              <div key={layer.title} className="w-full max-w-2xl">
                <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <h4 className="text-xl font-semibold tracking-tight text-zinc-900">{layer.title}</h4>
                  <p className="mt-2 text-zinc-700">{layer.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {layer.labels.map((label) => (
                      <span key={label} className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-600">
                        {label}
                      </span>
                    ))}
                  </div>
                </article>
                {index < modelLayers.length - 1 ? <div className="mx-auto h-5 w-px bg-zinc-300" aria-hidden /> : null}
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-zinc-600">
            Adoption scales when platform readiness, governance, workflow integration, and measurement are designed as
            one coordinated system.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Outcome</h2>
        <div className="mt-4 space-y-4 text-zinc-700">
          <p>
            The AI Productivity Tool Accelerator reframes assistant adoption from experimentation into a structured
            transformation of enterprise knowledge work.
          </p>
          <p>Successful implementations typically produce three outcomes:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Teams integrate assistants into repeatable workflows rather than ad hoc prompting.</li>
            <li>Organizations maintain responsible, secure, and governable assistant usage.</li>
            <li>Leaders gain measurable evidence of productivity and decision-velocity improvement.</li>
          </ul>
          <p>
            This is how assistants become part of the operating fabric of work, not a parallel productivity experiment.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Where I Use This Framework</h2>
        <p className="mt-4 text-zinc-700">
          I use the AI Productivity Tool Accelerator to help organizations define role-based adoption motions, align
          governance and workflow priorities, and scale practical use cases across assistants such as Copilot, ChatGPT,
          and Gemini.
        </p>
      </section>
    </div>
  );
}
