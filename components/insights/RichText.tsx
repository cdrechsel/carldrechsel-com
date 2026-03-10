import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-6 text-lg leading-8 text-zinc-700">{children}</p>,
    h2: ({ children }) => <h2 className="mt-10 text-3xl font-semibold tracking-tight text-zinc-900">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-900">{children}</h3>
  },
  list: {
    bullet: ({ children }) => <ul className="mt-6 list-disc space-y-2 pl-6 text-zinc-700">{children}</ul>
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4"
          rel={external ? "noreferrer" : undefined}
          target={external ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    }
  }
};

export default function RichText({ value }: { value: any[] }) {
  return <PortableText value={value} components={components} />;
}
