import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="section-pad scroll-mt-24">
      <div className="container-shell">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-3 text-base text-zinc-600 sm:text-lg">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
