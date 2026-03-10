function collectText(node: unknown): string {
  if (!node || typeof node !== "object") return "";

  const item = node as { children?: unknown[]; text?: string };
  if (typeof item.text === "string") return item.text;
  if (!Array.isArray(item.children)) return "";

  return item.children
    .map((child) => {
      if (typeof child === "object" && child && "text" in child) {
        const value = (child as { text?: string }).text;
        return typeof value === "string" ? value : "";
      }
      return "";
    })
    .join(" ");
}

export function getReadingTime(body: unknown[] | undefined) {
  if (!body?.length) return 1;
  const words = body
    .map((block) => collectText(block))
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 220));
}
