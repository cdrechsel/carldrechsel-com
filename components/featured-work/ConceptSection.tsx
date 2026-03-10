import { ConceptSection as ConceptSectionType } from "@/content/featuredWork";

type ConceptSectionProps = {
  section: ConceptSectionType;
};

export default function ConceptSection({ section }: ConceptSectionProps) {
  return (
    <section className="surface-card-padded">
      <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
      <p className="mt-4 leading-relaxed text-zinc-700">{section.body}</p>
      {section.bullets?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-zinc-700">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.pillars?.length ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {section.pillars.map((item, i) => (
            <article key={item.title} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Pillar 0{i + 1}</p>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
