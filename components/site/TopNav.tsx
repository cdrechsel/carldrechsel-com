const nav = [
  ["Home", "/"],
  ["Featured Work", "/featured-work"],
  ["Insights", "/insights"],
  ["Resume", "/resume.pdf"],
  ["Contact", "/#contact"]
] as const;

export default function TopNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex items-center justify-between">
          <a
            href="/#top"
            className="text-sm font-semibold tracking-tight no-underline hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
          >
            Carl Drechsel
          </a>
          <ul className="hidden items-center gap-5 text-sm text-zinc-600 md:flex">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="no-underline hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-3 flex gap-4 overflow-x-auto pb-1 text-sm text-zinc-600 md:hidden" aria-label="Mobile primary">
          {nav.map(([label, href]) => (
            <li key={`${href}-mobile`} className="shrink-0">
              <a
                href={href}
                className="no-underline hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
