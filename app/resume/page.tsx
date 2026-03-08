import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Resume",
  description: "Career highlights and resume download for Carl Drechsel."
};

const highlights = [
  "Technical Solutions Architect with extensive enterprise transformation delivery.",
  "Led AI adoption initiatives across Microsoft 365 and Copilot programs.",
  "Designed secure digital workplace architectures with Zero Trust principles.",
  "Built cross-functional operating models for collaboration and productivity modernization."
];

export default function ResumePage() {
  return (
    <Section
      title="Resume"
      intro="Career highlights, leadership focus, and practical delivery across AI enablement and digital workplace modernization."
    >
      <div className="rounded-xl border border-zinc-200 p-6 sm:p-8">
        <ul className="space-y-3 text-zinc-700">
          {highlights.map((item) => (
            <li key={item} className="list-disc ml-5">
              {item}
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          className="mt-8 inline-flex items-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
        >
          Download /resume.pdf
        </a>
      </div>
    </Section>
  );
}
