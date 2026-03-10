export default function SalesInsightPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Featured Concept</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">SalesInsight</h1>
        <p className="mt-3 text-xl text-zinc-600">AI-Driven Sales Intelligence from Real Conversations</p>
        <p className="mt-4 text-lg font-medium text-zinc-900">Turning sales conversations into structured deal intelligence.</p>
        <div className="mt-6 space-y-4 text-zinc-700">
          <p>SalesInsight emerged from a pattern I repeatedly observed in enterprise sales environments.</p>
          <p>
            Critical deal intelligence was being generated in conversations, from discovery calls to internal strategy
            sessions and customer meetings, but much of that intelligence was lost as teams attempted to reconstruct
            context through fragmented notes, email threads, and CRM updates.
          </p>
          <p>
            As deals became more complex, the gap between conversation and execution slowed sales teams and weakened
            strategic alignment.
          </p>
          <p>SalesInsight was designed to address that gap.</p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Shift 01</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Conversation to intelligence</p>
            <p className="mt-1 text-sm text-zinc-600">Convert unstructured dialogue into standardized deal context.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Shift 02</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Intelligence to strategy</p>
            <p className="mt-1 text-sm text-zinc-600">Surface risks, priorities, and signals that shape execution choices.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Shift 03</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Strategy to execution</p>
            <p className="mt-1 text-sm text-zinc-600">Produce actionable briefs and next actions immediately after meetings.</p>
          </div>
        </div>
      </header>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Challenge Identified</h2>
        <p className="mt-4 text-zinc-700">
          Enterprise sales teams often spend significant time reconstructing conversations after meetings rather than
          advancing deal strategy.
        </p>
        <p className="mt-4 text-zinc-700">Important signals become fragmented across multiple systems:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-700">
          <li>meeting transcripts</li>
          <li>call notes</li>
          <li>email threads</li>
          <li>CRM updates</li>
        </ul>
        <p className="mt-5 text-zinc-700">As a result:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-700">
          <li>stakeholder priorities become unclear</li>
          <li>risks and objections surface late</li>
          <li>competitive dynamics are missed</li>
          <li>teams spend time rebuilding context instead of moving the deal forward</li>
        </ul>

        <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-sm font-semibold text-zinc-900">Strategic impact of the problem</p>
          <p className="mt-2 text-zinc-700">
            When context reconstruction becomes a recurring task, strategy quality drops, response time slows, and deal
            execution becomes inconsistent across stakeholders.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Solution Designed</h2>
        <p className="mt-4 text-zinc-700">
          SalesInsight applies AI to convert unstructured sales conversations into structured deal intelligence.
        </p>
        <p className="mt-4 text-zinc-700">
          Instead of manually summarizing discussions, teams receive a structured Sales Intelligence Brief immediately
          after a conversation.
        </p>
        <p className="mt-4 text-zinc-700">The system extracts and organizes key insights such as:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-700">
          <li>deal context and business drivers</li>
          <li>stakeholder roles and priorities</li>
          <li>emerging risks and objections</li>
          <li>competitive positioning signals</li>
          <li>recommended next actions</li>
        </ul>
        <p className="mt-5 text-zinc-700">
          This transforms raw conversation data into a shared strategic artifact that helps sales teams align faster.
        </p>

        <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-sm font-semibold text-zinc-900">Design principle</p>
          <p className="mt-2 text-zinc-700">
            The goal is not another summary tool. The goal is a decision artifact that translates conversation signals
            into execution-ready intelligence.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Implementation and Workflow</h2>
        <p className="mt-4 text-zinc-700">
          SalesInsight was implemented as a repeatable workflow that moves teams from conversation to intelligence to
          action.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Step 1</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Capture</p>
            <p className="mt-1 text-sm text-zinc-700">Ingest meeting conversation signals from enterprise sales interactions.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Step 2</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Structure</p>
            <p className="mt-1 text-sm text-zinc-700">Extract business drivers, stakeholder dynamics, risks, and priorities.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Step 3</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Synthesize</p>
            <p className="mt-1 text-sm text-zinc-700">Generate a Sales Intelligence Brief with recommendations and next actions.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Step 4</p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">Execute</p>
            <p className="mt-1 text-sm text-zinc-700">Use structured outputs to accelerate reviews, proposals, and deal planning.</p>
          </div>
        </div>
        <p className="mt-4 text-zinc-700">The workflow enables:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-700">
          <li>faster sales strategy development</li>
          <li>accelerated proposal preparation</li>
          <li>structured deal reviews</li>
          <li>improved pipeline insight and forecasting</li>
          <li>stronger account intelligence</li>
        </ul>
        <p className="mt-5 text-zinc-700">
          Instead of rebuilding context after every meeting, teams can immediately focus on advancing deal strategy.
        </p>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight">Why It Matters</h2>
        <p className="mt-4 text-zinc-700">
          Enterprise selling increasingly depends on the ability to interpret complex conversations and coordinate
          across teams.
        </p>
        <p className="mt-4 text-zinc-700">
          SalesInsight demonstrates how AI can transform conversational data into structured intelligence that supports
          faster alignment and better decisions.
        </p>
        <p className="mt-4 text-zinc-700">
          By reducing the gap between discussion, insight, and execution, teams increase decision velocity and improve
          how deals move forward.
        </p>
        <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
          <p className="text-sm font-semibold text-zinc-900">Enterprise takeaway</p>
          <p className="mt-2 text-zinc-700">
            AI creates commercial value when conversation data is converted into a standardized operating asset that
            teams can trust, share, and act on quickly.
          </p>
        </div>
      </section>
    </div>
  );
}
