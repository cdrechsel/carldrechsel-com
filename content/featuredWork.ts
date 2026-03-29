export type FrameworkPillar = {
  title: string;
  body: string;
};

export type ConceptSection = {
  title: string;
  body: string;
  bullets?: string[];
  pillars?: FrameworkPillar[];
};

export type FeaturedWorkConcept = {
  title: string;
  slug: string;
  shortDescription: string;
  summary: string;
  roleRelevance: string;
  eyebrow: string;
  subtitle: string;
  intro: string[];
  problem: ConceptSection;
  concept: ConceptSection;
  applications?: ConceptSection;
  whyItMatters: ConceptSection;
  seoTitle: string;
  metaDescription: string;
};

export const featuredWorkConcepts: FeaturedWorkConcept[] = [
  {
    title: "SalesInsight",
    slug: "salesinsight",
    shortDescription:
      "An applied AI concept for converting sales conversations into structured deal intelligence, opportunity insight, and execution momentum.",
    summary:
      "SalesInsight demonstrates how teams can move from conversation to intelligence to action through a repeatable, AI-enabled workflow.",
    roleRelevance:
      "Demonstrates customer-facing execution design, stakeholder alignment, and the ability to turn conversational complexity into structured delivery outcomes.",
    eyebrow: "Featured Concept",
    subtitle: "AI-Driven Sales Intelligence from Real Conversations",
    intro: [
      "Turning sales conversations into structured deal intelligence.",
      "SalesInsight emerged from a pattern I repeatedly observed in enterprise sales environments.",
      "Critical deal intelligence was being generated in conversations - discovery calls, internal strategy discussions, and customer meetings - but much of that insight was lost as teams attempted to reconstruct context through fragmented notes, email threads, and CRM updates.",
      "As deals became more complex, the gap between conversation and execution slowed sales teams and weakened strategic alignment.",
      "SalesInsight was designed to address that gap."
    ],
    problem: {
      title: "Challenge Identified",
      body: "Enterprise sales teams often spend significant time reconstructing conversations after meetings rather than advancing deal strategy.",
      bullets: [
        "meeting transcripts",
        "call notes",
        "email threads",
        "CRM updates",
        "stakeholder priorities become unclear",
        "risks and objections surface late",
        "competitive dynamics are missed",
        "teams spend time rebuilding context instead of moving the deal forward"
      ]
    },
    concept: {
      title: "Solution Designed",
      body: "SalesInsight applies AI to convert unstructured sales conversations into structured deal intelligence.",
      bullets: [
        "Instead of manually summarizing discussions, teams receive a structured Sales Intelligence Brief immediately after a conversation.",
        "The system extracts and organizes deal context and business drivers.",
        "The system extracts and organizes stakeholder roles and priorities.",
        "The system extracts and organizes emerging risks and objections.",
        "The system extracts and organizes competitive positioning signals.",
        "The system extracts and organizes recommended next actions.",
        "This transforms raw conversation data into a shared strategic artifact that helps sales teams align faster."
      ]
    },
    applications: {
      title: "Implementation and Workflow",
      body: "SalesInsight was implemented as a repeatable workflow that moves teams from conversation to intelligence to action.",
      bullets: [
        "faster sales strategy development",
        "accelerated proposal preparation",
        "structured deal reviews",
        "improved pipeline insight and forecasting",
        "stronger account intelligence",
        "Instead of rebuilding context after every meeting, teams can immediately focus on advancing deal strategy."
      ]
    },
    whyItMatters: {
      title: "Why It Matters",
      body: "Enterprise selling increasingly depends on the ability to interpret complex conversations and coordinate across teams. SalesInsight demonstrates how AI can transform conversational data into structured intelligence that supports faster alignment and better decisions. By reducing the gap between discussion, insight, and execution, teams increase decision velocity and improve how deals move forward."
    },
    seoTitle: "SalesInsight | Featured Work | Carl Drechsel",
    metaDescription:
      "SalesInsight is an AI-driven concept exploring how customer conversations can be transformed into structured sales intelligence, deal insight, and proposal acceleration."
  },
  {
    title: "Copilot Strategy Accelerator",
    slug: "copilot-strategy-accelerator",
    shortDescription:
      "A practical enterprise framework for preparing organizations to successfully adopt Microsoft Copilot.",
    summary:
      "The model focuses on readiness, governance, workflow alignment, and adoption strategy so AI capabilities translate into measurable productivity gains.",
    roleRelevance:
      "Highlights executive communication, architecture planning, governance leadership, and cross-functional readiness for enterprise-scale transformation.",
    eyebrow: "Featured Framework",
    subtitle: "A Practical Model for Enterprise Copilot Adoption",
    intro: [
      "Microsoft Copilot has the potential to reshape knowledge work across the enterprise. However, many organizations approach Copilot as a simple tool deployment rather than a workforce transformation initiative.",
      "The Copilot Strategy Accelerator is a structured framework designed to help organizations prepare for successful Copilot adoption."
    ],
    problem: {
      title: "The Adoption Gap",
      body: "Many Copilot initiatives struggle because they focus on technology rather than operating change.",
      bullets: [
        "identity and security",
        "data governance",
        "collaboration platforms",
        "workflow design",
        "change leadership",
        "workforce enablement"
      ]
    },
    concept: {
      title: "The Framework",
      body: "The Copilot Strategy Accelerator focuses on four core areas:",
      pillars: [
        {
          title: "Readiness",
          body: "Assess identity, security, data access, and platform maturity."
        },
        {
          title: "Governance",
          body: "Define policies for responsible AI usage and data protection."
        },
        {
          title: "Adoption",
          body: "Identify high-impact use cases and develop enablement strategies."
        },
        {
          title: "Value Realization",
          body: "Measure productivity impact and continuously refine AI workflows."
        }
      ]
    },
    whyItMatters: {
      title: "Outcome",
      body: "The goal is not simply deploying Copilot, but enabling organizations to integrate AI capabilities into everyday work."
    },
    seoTitle: "Copilot Strategy Accelerator | Featured Work | Carl Drechsel",
    metaDescription:
      "A practical enterprise framework for readiness, governance, adoption, and value realization for Microsoft Copilot."
  },
  {
    title: "AI Productivity Tool Accelerator",
    slug: "ai-productivity-tool-accelerator",
    shortDescription:
      "A tool-agnostic enterprise model for scaling AI assistant adoption across Copilot, ChatGPT, and Gemini.",
    summary:
      "The framework translates assistant access into repeatable workflow execution through governance, enablement, and measurement.",
    roleRelevance:
      "Shows how technical architecture, operational execution, and measurable adoption can be brought together in a reusable delivery model.",
    eyebrow: "Featured Framework",
    subtitle: "A Practical Model for Enterprise AI Assistant Adoption",
    intro: [
      "Most organizations have access to AI assistants, but access alone does not create operating impact.",
      "The AI Productivity Tool Accelerator helps teams operationalize assistants such as Copilot, ChatGPT, and Gemini through workflow design, governance alignment, and measurable execution outcomes."
    ],
    problem: {
      title: "The Implementation Gap",
      body: "Assistant adoption often begins as experimentation and stalls before it becomes repeatable execution.",
      bullets: [
        "Inconsistent usage patterns across teams",
        "Weak governance alignment",
        "Unclear workflow integration",
        "Limited confidence in output quality",
        "Anecdotal rather than measurable productivity gains"
      ]
    },
    concept: {
      title: "The Framework",
      body: "The AI Productivity Tool Accelerator organizes adoption into four coordinated pillars:",
      pillars: [
        {
          title: "Platform Readiness",
          body: "Prepare identity, collaboration, and knowledge environments for secure assistant-enabled work."
        },
        {
          title: "Information Governance",
          body: "Define guardrails for responsible usage, exposure control, and compliance."
        },
        {
          title: "Workflow Enablement",
          body: "Embed assistants into role-based workflows using repeatable prompt and execution patterns."
        },
        {
          title: "Productivity Intelligence",
          body: "Measure decision speed, output quality, and workflow impact to scale value."
        }
      ]
    },
    whyItMatters: {
      title: "Outcome",
      body: "The goal is not higher assistant usage. The goal is measurable improvement in how enterprise knowledge work is executed."
    },
    seoTitle: "AI Productivity Tool Accelerator | Featured Work | Carl Drechsel",
    metaDescription:
      "A practical enterprise framework for operationalizing Copilot, ChatGPT, and Gemini through workflow integration, governance, and measurable productivity outcomes."
  },
  {
    title: "AI Productivity Framework",
    slug: "ai-productivity-framework",
    shortDescription:
      "A structured approach for redesigning knowledge work so AI enhances decision clarity, collaboration, and operational performance.",
    summary:
      "The framework helps organizations move beyond experimenting with AI tools toward meaningful workflow transformation.",
    roleRelevance:
      "Reflects strategic architecture thinking and the ability to define implementation patterns that support scalable customer outcomes.",
    eyebrow: "Featured Framework",
    subtitle: "Redesigning Knowledge Work for the AI Era",
    intro: [
      "AI tools can dramatically improve productivity, but only when organizations rethink how knowledge work is structured.",
      "The AI Productivity Framework explores how teams can redesign workflows so AI capabilities meaningfully improve decision-making, collaboration, and execution."
    ],
    problem: {
      title: "The Challenge",
      body: "Most organizations experiment with AI tools without changing the underlying work processes.",
      bullets: [
        "AI usage remains inconsistent",
        "productivity gains are unclear",
        "adoption stalls"
      ]
    },
    concept: {
      title: "The Framework",
      body: "The AI Productivity Framework focuses on three dimensions:",
      pillars: [
        {
          title: "Workflow Design",
          body: "Identify where AI can augment thinking, research, writing, analysis, and decision-making."
        },
        {
          title: "Collaboration Integration",
          body: "Embed AI into the collaboration tools where work already happens."
        },
        {
          title: "Decision Acceleration",
          body: "Use AI to synthesize information faster and surface better insights."
        }
      ]
    },
    whyItMatters: {
      title: "Outcome",
      body: "When AI becomes part of the workflow rather than a separate tool, productivity gains become measurable and sustainable."
    },
    seoTitle: "AI Productivity Framework | Featured Work | Carl Drechsel",
    metaDescription:
      "A structured framework for redesigning knowledge work so AI improves decision clarity, collaboration, and operational performance."
  },
  {
    title: "Cloud Delivery Acceleration Model",
    slug: "cloud-delivery-acceleration-model",
    shortDescription:
      "A practical operating model for moving cloud initiatives from architecture into execution with clearer ownership, better coordination, and fewer delivery stalls.",
    summary:
      "The model brings together execution planning, delivery oversight, blocker removal, and cross-team coordination across complex cloud programs.",
    roleRelevance:
      "Shows how architectural thinking can be translated into practical delivery leadership, especially when programs involve multiple teams, dependencies, and operational risk.",
    eyebrow: "Featured Operating Model",
    subtitle: "A Practical Model For Moving Cloud Architecture Into Real Delivery",
    intro: [
      "Many cloud initiatives have a clear target state but still lose momentum during implementation. The issue is usually not the architecture itself. It is the gap between design, coordination, and day-to-day execution.",
      "The Cloud Delivery Acceleration Model is a practical operating approach for closing that gap. It focuses on how work gets sequenced, how dependencies are managed, how blockers are removed, and how teams stay aligned once delivery begins.",
      "Rather than treating architecture as a one-time design step, this model treats architecture as something that has to stay connected to execution all the way through rollout."
    ],
    problem: {
      title: "The Delivery Gap",
      body: "Cloud programs often slow down after planning because the path from approved design to delivered outcome is not managed with enough operational rigor.",
      bullets: [
        "Architecture decisions are not converted into clear implementation waves, owners, and checkpoints",
        "Dependencies across platform teams, security, networking, and operations are discovered too late",
        "Blockers persist across handoffs because ownership for removal is unclear",
        "Technical and operational risks surface during implementation instead of being managed earlier",
        "Delivery quality becomes inconsistent because execution depends too heavily on ad hoc coordination"
      ]
    },
    concept: {
      title: "The Operating Model",
      body: "The Cloud Delivery Acceleration Model organizes execution around four connected motions that keep architecture, delivery, and operational reality tied together:",
      pillars: [
        {
          title: "Delivery Ownership",
          body: "Establish clear accountability for scope, sequencing, success criteria, and overall delivery health from the start."
        },
        {
          title: "Architecture-To-Execution Translation",
          body: "Turn architecture into executable work by defining implementation waves, dependencies, decision points, and delivery checkpoints."
        },
        {
          title: "Blocker Removal And Risk Management",
          body: "Surface technical and organizational risks early, resolve blockers quickly, and keep delivery moving through active intervention."
        },
        {
          title: "Operational Feedback And Reuse",
          body: "Capture working patterns, common failure points, and implementation lessons so future projects start from stronger foundations."
        }
      ]
    },
    applications: {
      title: "How It Works In Practice",
      body: "This model is most useful when cloud programs involve several teams, shared dependencies, and a need for tighter execution control once implementation starts.",
      bullets: [
        "Use a structured intake to clarify target architecture, constraints, owners, and readiness before work begins",
        "Break delivery into implementation waves so teams know what has to happen now, next, and later",
        "Track dependencies and decision points explicitly instead of letting them remain buried in meetings and documents",
        "Run active checkpointing during delivery to surface blockers before they become schedule or quality issues",
        "Feed lessons learned back into templates, patterns, and future planning so each project improves the next one"
      ]
    },
    whyItMatters: {
      title: "Why It Matters",
      body: "Cloud success is often determined less by the target architecture than by how consistently teams can execute against it. The Cloud Delivery Acceleration Model is useful because it creates a practical bridge between solution design and delivery reality. It helps teams keep momentum, reduce avoidable friction, and turn architectural intent into implemented outcomes."
    },
    seoTitle: "Cloud Delivery Acceleration Model | Featured Work | Carl Drechsel",
    metaDescription:
      "A practical model for customer-facing cloud delivery leadership spanning architecture translation, execution oversight, blocker removal, and stakeholder alignment."
  }
];

export function getFeaturedWorkBySlug(slug: string) {
  return featuredWorkConcepts.find((item) => item.slug === slug);
}

export const featuredWorkSlugs = featuredWorkConcepts.map((item) => item.slug);
