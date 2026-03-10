import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/lib/sanity/client";

const builder = projectId
  ? imageUrlBuilder({
      projectId,
      dataset
    })
  : null;

export function urlFor(source: unknown) {
  if (!builder || !source) return null;
  return builder.image(source);
}
