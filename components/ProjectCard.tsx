type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ProjectCard({ title, description, href }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
      <p className="mt-3 text-zinc-600">{description}</p>
      <a
        href={href}
        className="mt-5 inline-block text-sm font-medium text-zinc-900 no-underline hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
      >
        View details →
      </a>
    </article>
  );
}
