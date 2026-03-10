const modelLayers = [
  {
    title: "Platform Readiness",
    description: "Prepare the Microsoft 365 environment for secure, effective AI-driven information access.",
    labels: ["Entra ID", "Microsoft Graph", "SharePoint / Teams", "Security posture"]
  },
  {
    title: "Information Governance",
    description: "Apply guardrails for responsible AI usage, exposure control, and compliance.",
    labels: ["Responsible AI", "Data protection", "Compliance", "Oversight"]
  },
  {
    title: "Workflow Enablement",
    description: "Embed Copilot into real knowledge workflows across roles and teams.",
    labels: ["Role-based use cases", "Prompt patterns", "Work redesign", "Employee enablement"]
  },
  {
    title: "Productivity Intelligence",
    description: "Measure workflow impact, decision acceleration, and productivity gains.",
    labels: ["Time savings", "Quality improvement", "Adoption insights", "Decision velocity"]
  }
];

export default function CopilotStrategyAcceleratorPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Featured Framework</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Copilot Strategy Accelerator</h1>
        <p className="mt-3 text-xl text-zinc-600">A Practical Model for Enterprise Copilot Adoption</p>

        <div className="mt-6 space-y-4 text-zinc-700">
          <p>
            Microsoft Copilot represents a major shift in enterprise productivity technology. By embedding generative AI directly into Microsoft 365 applications such as Teams, Outlook, Word, Excel, and PowerPoint, Copilot introduces the ability for AI to participate directly in everyday knowledge work.
          </p>
          <p>
            However, many organizations approach Copilot adoption as a software rollout rather than an operational transformation.
          </p>
          <p>Licenses are assigned. Features are demonstrated. Pilot users experiment with prompts.</p>
          <p>But the underlying structure of work remains unchanged.</p>
          <p>As a result, many Copilot initiatives struggle to move beyond early experimentation.</p>
          <p>
            Usage becomes inconsistent across teams. Security and data governance concerns slow expansion. Employees are unsure where Copilot meaningfully improves their work. Productivity improvements remain anecdotal rather than measurable.
          </p>
          <p>
            Through enterprise work across Microsoft 365 architecture, identity, governance, collaboration, and workplace productivity, I observed a consistent pattern: Copilot adoption succeeds when organizations treat it as a workplace transformation initiative, not simply a tool deployment.
          </p>
          <p>
            The Copilot Strategy Accelerator is a structured framework designed to help organizations prepare for, implement, and scale enterprise Copilot adoption.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Pattern 01</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Rollout-first motion</p>
            <p className="mt-1 text-sm text-zinc-600">Licensing and feature demos happen before workflow and operating-model design.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Pattern 02</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Adoption friction</p>
            <p className="mt-1 text-sm text-zinc-600">Governance concerns and unclear use cases prevent consistent team-level integration.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Pattern 03</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Value ambiguity</p>
            <p className="mt-1 text-sm text-zinc-600">Productivity gains remain anecdotal because measurement and refinement loops are missing.</p>
          </div>
        </div>
      </header>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Why This Framework Exists</h2>
        <div className="mt-4 space-y-4 text-zinc-700">
          <p>
            The Copilot Strategy Accelerator builds on the principles of the Enterprise AI Productivity Framework, which explains how artificial intelligence improves knowledge work by accelerating workflows and decision-making.
          </p>
          <p>
            While the Enterprise AI Productivity Framework describes how AI transforms the structure of work, the Copilot Strategy Accelerator focuses specifically on how organizations operationalize those changes within the Microsoft 365 ecosystem.
          </p>
          <p>Copilot adoption intersects with multiple enterprise systems simultaneously:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Identity and access controls determine what Copilot can see</li>
            <li>Data governance determines what Copilot should access</li>
            <li>Collaboration platforms determine where Copilot appears in daily work</li>
            <li>Employee workflows determine how Copilot is actually used</li>
            <li>Change leadership determines whether adoption succeeds</li>
          </ul>
          <p>
            The result is that Copilot adoption is rarely just a licensing exercise. It is a cross-functional transformation effort spanning platform readiness, governance, enablement, and value measurement.
          </p>
        </div>
        <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-sm font-semibold text-zinc-900">Strategic implication</p>
          <p className="mt-2 text-zinc-700">
            Copilot performance is an outcome of enterprise system quality. Identity design, information architecture,
            governance policy, and workflow maturity collectively determine whether value scales.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">The Copilot Adoption Gap</h2>
        <div className="mt-4 space-y-4 text-zinc-700">
          <p>In practice, Copilot adoption is influenced by several interconnected enterprise systems.</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Microsoft Entra ID identity architecture governs access to organizational information.</li>
            <li>SharePoint and Teams information architecture shape the knowledge Copilot can retrieve.</li>
            <li>Microsoft Graph provides the underlying signals Copilot uses to generate responses.</li>
            <li>Security and compliance policies determine which data sources are visible to AI systems.</li>
            <li>Employee workflows determine where Copilot meaningfully improves productivity.</li>
          </ul>
          <p>
            When these elements are not aligned, Copilot often surfaces underlying issues that already exist in the environment:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Inconsistent data governance</li>
            <li>Overshared content repositories</li>
            <li>Weak information architecture</li>
            <li>Limited workflow clarity</li>
            <li>Low employee confidence in AI usage</li>
          </ul>
          <p>
            Organizations frequently discover that Copilot success depends on simultaneous alignment across identity, data governance, collaboration platforms, and workforce enablement.
          </p>
          <p>The Copilot Strategy Accelerator organizes that work into four coordinated pillars.</p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">What breaks first</p>
            <p className="mt-1 text-sm text-zinc-700">Information access and governance quality.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">What stalls next</p>
            <p className="mt-1 text-sm text-zinc-700">Workflow adoption and role-level enablement.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">What remains unclear</p>
            <p className="mt-1 text-sm text-zinc-700">Measured impact on productivity and decision velocity.</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">The Copilot Strategy Accelerator Model</h2>
        <p className="mt-2 text-sm text-zinc-500">Four pillars for scalable enterprise Copilot adoption</p>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900">Copilot Strategy Accelerator</h3>
          <p className="mt-1 text-sm text-zinc-500">A practical model for scalable Microsoft Copilot adoption</p>
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
            Copilot adoption succeeds when platform foundations, governance, workflow integration, and measurement are designed as a coordinated system.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Pillar 01</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">Platform Readiness</h3>
            <p className="mt-3 text-zinc-700">
              Before Copilot can operate effectively, the Microsoft 365 environment must be prepared for AI-driven information discovery.
            </p>
            <p className="mt-3 text-zinc-700">
              Copilot interacts with enterprise data through Microsoft Graph, which reflects identity permissions and collaboration platform structure. If identity governance or information architecture is inconsistent, Copilot responses may expose overshared information or produce weak results.
            </p>
            <p className="mt-3 text-zinc-700">
              Platform readiness focuses on validating the technical foundations that allow Copilot to operate securely and effectively.
            </p>
            <p className="mt-4 text-sm font-semibold text-zinc-900">Key focus areas</p>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-zinc-700">
              <li>Microsoft Entra ID identity and access architecture</li>
              <li>Conditional Access and security posture</li>
              <li>SharePoint and Teams information architecture</li>
              <li>Data classification and sensitivity labeling</li>
              <li>Microsoft Graph exposure patterns</li>
              <li>Microsoft 365 licensing and Copilot configuration readiness</li>
            </ul>
            <p className="mt-3 rounded-lg border border-zinc-200 bg-white p-3 text-sm text-zinc-700">
              Without this pillar, Copilot quality is inconsistent because retrieval context and permission boundaries are unstable.
            </p>
          </article>

          <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Pillar 02</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">Information Governance</h3>
            <p className="mt-3 text-zinc-700">
              Generative AI introduces new governance requirements around data exposure, responsible usage, and content protection.
            </p>
            <p className="mt-3 text-zinc-700">
              Traditional IT governance models were built for applications and infrastructure. Copilot introduces governance considerations for AI-assisted knowledge work.
            </p>
            <p className="mt-3 text-zinc-700">
              Information governance defines the guardrails that allow organizations to safely enable AI across collaboration platforms.
            </p>
            <p className="mt-4 text-sm font-semibold text-zinc-900">Key focus areas</p>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-zinc-700">
              <li>Responsible AI usage policies</li>
              <li>Data protection and information exposure controls</li>
              <li>Employee guidance for prompts and AI interaction</li>
              <li>Security monitoring and auditing</li>
              <li>Compliance alignment for regulated content</li>
              <li>Oversight for high-risk use cases</li>
            </ul>
            <p className="mt-3 rounded-lg border border-zinc-200 bg-white p-3 text-sm text-zinc-700">
              Without this pillar, adoption slows as risk concerns override usability and trust in AI outputs declines.
            </p>
          </article>

          <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Pillar 03</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">Workflow Enablement</h3>
            <p className="mt-3 text-zinc-700">
              The success of Copilot ultimately depends on how employees integrate AI capabilities into their daily work.
            </p>
            <p className="mt-3 text-zinc-700">
              Many organizations struggle with adoption because employees are shown product features but are not guided toward meaningful use cases inside real workflows.
            </p>
            <p className="mt-3 text-zinc-700">
              Workflow enablement focuses on identifying where Copilot can improve the way work actually happens.
            </p>
            <p className="mt-4 text-sm font-semibold text-zinc-900">Representative use cases</p>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-zinc-700">
              <li>Executive briefing and synthesis</li>
              <li>Sales opportunity preparation</li>
              <li>Project reporting and coordination</li>
              <li>Document drafting and summarization</li>
              <li>Meeting preparation and recap generation</li>
              <li>Research and analysis acceleration</li>
            </ul>
            <p className="mt-3 text-zinc-700">
              Enablement should help employees develop a practical mental model for working with Copilot as part of their normal workflow, not as a separate novelty tool.
            </p>
            <p className="mt-3 rounded-lg border border-zinc-200 bg-white p-3 text-sm text-zinc-700">
              Without this pillar, Copilot remains a peripheral assistant instead of becoming part of daily execution behavior.
            </p>
          </article>

          <article className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Pillar 04</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">Productivity Intelligence</h3>
            <p className="mt-3 text-zinc-700">
              Many AI initiatives struggle because productivity gains remain anecdotal.
            </p>
            <p className="mt-3 text-zinc-700">
              The final pillar focuses on measuring, refining, and scaling the value created by Copilot adoption.
            </p>
            <p className="mt-3 text-zinc-700">
              Productivity intelligence establishes mechanisms for evaluating how AI improves work across roles and teams.
            </p>
            <p className="mt-4 text-sm font-semibold text-zinc-900">Measurement examples</p>
            <ul className="mt-2 list-disc space-y-2 pl-6 text-zinc-700">
              <li>Time saved in research and drafting</li>
              <li>Reduction in meeting preparation time</li>
              <li>Faster proposal and presentation creation</li>
              <li>Improved decision cycle speed</li>
              <li>Reduced repetitive knowledge work</li>
            </ul>
            <p className="mt-3 text-zinc-700">
              The goal is not simply higher AI usage. The goal is measurable improvement in how work is performed.
            </p>
            <p className="mt-3 rounded-lg border border-zinc-200 bg-white p-3 text-sm text-zinc-700">
              Without this pillar, Copilot remains a perceived productivity benefit rather than a measurable operating capability.
            </p>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Outcome</h2>
        <div className="mt-4 space-y-4 text-zinc-700">
          <p>
            The Copilot Strategy Accelerator reframes Copilot adoption from a software deployment into a structured transformation of enterprise knowledge work.
          </p>
          <p>
            When organizations align platform readiness, governance, workflow enablement, and productivity intelligence, Copilot evolves from a productivity assistant into a core capability of the modern digital workplace.
          </p>
          <p>Successful Copilot initiatives ultimately achieve three outcomes:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Employees integrate AI into everyday workflows</li>
            <li>Organizations maintain secure and responsible AI usage</li>
            <li>Leaders gain measurable improvements in productivity and decision velocity</li>
          </ul>
          <p>
            Copilot adoption succeeds when AI becomes part of the operating fabric of enterprise work rather than an isolated technology experiment.
          </p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Outcome 01</p>
            <p className="mt-1 text-sm text-zinc-700">Copilot usage aligns to role-specific workflows, not generic prompt experimentation.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Outcome 02</p>
            <p className="mt-1 text-sm text-zinc-700">Security, governance, and adoption move in parallel instead of creating competing priorities.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Outcome 03</p>
            <p className="mt-1 text-sm text-zinc-700">Leadership gains clearer evidence of productivity impact and decision-speed improvement.</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Where I Use This Framework</h2>
        <p className="mt-4 text-zinc-700">
          I use the Copilot Strategy Accelerator to help organizations evaluate readiness, identify governance priorities, define adoption motions, and structure practical use cases for Microsoft Copilot across the digital workplace.
        </p>
      </section>
    </div>
  );
}
