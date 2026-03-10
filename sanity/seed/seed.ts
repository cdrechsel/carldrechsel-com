import { createClient } from "@sanity/client";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in environment.");
}

const client = createClient({
  apiVersion: "2026-03-09",
  projectId,
  dataset,
  token,
  useCdn: false
});

const categories = [
  { _id: "category.ai-transformation", _type: "category", title: "AI Transformation", slug: { _type: "slug", current: "ai-transformation" } },
  { _id: "category.copilot", _type: "category", title: "Copilot Strategy", slug: { _type: "slug", current: "copilot-strategy" } },
  { _id: "category.digital-workplace", _type: "category", title: "Digital Workplace", slug: { _type: "slug", current: "digital-workplace" } }
];

const author = {
  _id: "author.carl-drechsel",
  _type: "author",
  name: "Carl Drechsel",
  slug: { _type: "slug", current: "carl-drechsel" },
  role: "Technical Solutions Architect"
};

const postBody = (paragraphs: string[]) =>
  paragraphs.map((text) => ({
    _type: "block",
    style: "normal",
    children: [{ _type: "span", text, marks: [] }]
  }));

const posts = [
  {
    _id: "post.workflow-redesign",
    _type: "post",
    title: "Why AI Adoption Fails Without Workflow Redesign",
    slug: { _type: "slug", current: "why-ai-adoption-fails-without-workflow-redesign" },
    description: "AI initiatives stall when organizations deploy tools without redesigning how work is executed.",
    excerpt: "The bottleneck in AI adoption is usually workflow design, not model quality.",
    publishedAt: "2026-03-01T09:00:00.000Z",
    featured: true,
    categories: [{ _type: "reference", _ref: "category.ai-transformation" }],
    author: { _type: "reference", _ref: "author.carl-drechsel" },
    body: postBody([
      "Enterprise AI programs often begin with platform deployment and training plans, but little attention is given to how work should actually change.",
      "Adoption improves when teams redesign handoffs, decision checkpoints, and collaboration behaviors around AI-supported workflows.",
      "The practical objective is not tool usage. It is faster, better, more consistent execution of high-value work."
    ])
  },
  {
    _id: "post.copilot-change",
    _type: "post",
    title: "The Real Challenge of Copilot Is Change, Not Technology",
    slug: { _type: "slug", current: "the-real-challenge-of-copilot-is-change-not-technology" },
    description: "Copilot outcomes are determined by governance, operating model, and user change execution.",
    excerpt: "The hardest part of Copilot is organizational alignment, not deployment.",
    publishedAt: "2026-03-02T09:00:00.000Z",
    featured: true,
    categories: [{ _type: "reference", _ref: "category.copilot" }],
    author: { _type: "reference", _ref: "author.carl-drechsel" },
    body: postBody([
      "Most enterprises can technically deploy Copilot. The differentiator is how effectively they integrate it into real operating rhythms.",
      "Identity, security, governance, and collaboration architecture determine whether Copilot scales with trust and consistency.",
      "Successful adoption requires leadership sponsorship, role-based enablement, and practical change management."
    ])
  },
  {
    _id: "post.operating-model",
    _type: "post",
    title: "Enterprise AI Transformation Is an Operating Model Challenge",
    slug: { _type: "slug", current: "enterprise-ai-transformation-is-an-operating-model-challenge" },
    description: "AI transformation succeeds when process ownership, policy, and execution accountability are redefined.",
    excerpt: "AI value is unlocked through operating model design, not isolated pilots.",
    publishedAt: "2026-03-03T09:00:00.000Z",
    featured: false,
    categories: [{ _type: "reference", _ref: "category.ai-transformation" }],
    author: { _type: "reference", _ref: "author.carl-drechsel" },
    body: postBody([
      "Organizations frequently over-index on tooling and underinvest in execution design.",
      "AI transformation requires clear accountability across architecture, governance, risk, and business process leadership.",
      "A strong operating model converts experimentation into enterprise capability."
    ])
  },
  {
    _id: "post.copilot-alignment",
    _type: "post",
    title: "Copilot Success Depends on Identity, Governance, and Workflow Alignment",
    slug: { _type: "slug", current: "copilot-success-depends-on-identity-governance-and-workflow-alignment" },
    description: "Copilot outcomes are strongest when security controls and workflow design evolve together.",
    excerpt: "Identity and governance alignment are prerequisites for scalable Copilot adoption.",
    publishedAt: "2026-03-04T09:00:00.000Z",
    featured: false,
    categories: [{ _type: "reference", _ref: "category.copilot" }],
    author: { _type: "reference", _ref: "author.carl-drechsel" },
    body: postBody([
      "Copilot amplifies existing strengths and weaknesses in enterprise environments.",
      "If identity, information governance, and role design are unresolved, Copilot introduces inconsistency rather than productivity gains.",
      "The most reliable path is integrated planning across security, collaboration, and user workflow owners."
    ])
  },
  {
    _id: "post.eux-lessons",
    _type: "post",
    title: "What Enterprise User Experience Taught Me About AI Adoption",
    slug: { _type: "slug", current: "what-enterprise-user-experience-taught-me-about-ai-adoption" },
    description: "Enterprise UX principles provide the foundation for practical AI-enabled productivity.",
    excerpt: "AI adoption accelerates when user experience is treated as strategic architecture.",
    publishedAt: "2026-03-05T09:00:00.000Z",
    featured: false,
    categories: [{ _type: "reference", _ref: "category.digital-workplace" }],
    author: { _type: "reference", _ref: "author.carl-drechsel" },
    body: postBody([
      "Enterprise user experience work makes one point clear: behavior change follows friction reduction.",
      "AI adoption should prioritize workflow clarity, trust, and role relevance rather than feature exposure alone.",
      "Designing for how people work is what turns AI potential into sustained enterprise impact."
    ])
  }
];

async function seed() {
  for (const category of categories) await client.createOrReplace(category);
  await client.createOrReplace(author);
  for (const post of posts) await client.createOrReplace(post);
  console.log(`Seeded ${categories.length} categories, 1 author, and ${posts.length} posts.`);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
