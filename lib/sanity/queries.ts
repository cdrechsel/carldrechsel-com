import groq from "groq";

const postProjection = `{
  _id,
  title,
  slug,
  description,
  excerpt,
  publishedAt,
  updatedAt,
  featured,
  categories[]-> { _id, title, slug },
  author-> { _id, name, role, image, bio },
  coverImage,
  seoTitle,
  seoDescription,
  ogImage,
  body
}`;

export const featuredInsightsQuery = groq`*[
  _type == "post" &&
  !(_id in path("drafts.**")) &&
  defined(slug.current) &&
  defined(publishedAt) &&
  featured == true
] | order(publishedAt desc)[0...3] ${postProjection}`;

export const insightsQuery = groq`*[
  _type == "post" &&
  !(_id in path("drafts.**")) &&
  defined(slug.current) &&
  defined(publishedAt) &&
  (!defined($categorySlug) || $categorySlug == "all" || $categorySlug in categories[]->slug.current)
] | order(publishedAt desc) ${postProjection}`;

export const categoriesQuery = groq`*[_type == "category"] | order(title asc){ _id, title, slug }`;

export const insightBySlugQuery = groq`*[
  _type == "post" &&
  !(_id in path("drafts.**")) &&
  slug.current == $slug
][0] ${postProjection}`;

export const relatedInsightsQuery = groq`*[
  _type == "post" &&
  !(_id in path("drafts.**")) &&
  slug.current != $slug &&
  count((categories[]->slug.current)[@ in $categorySlugs]) > 0
] | order(publishedAt desc)[0...3] ${postProjection}`;

export const insightSlugsQuery = groq`*[
  _type == "post" &&
  !(_id in path("drafts.**")) &&
  defined(slug.current)
]{ "slug": slug.current }`;

export const insightsForFeedQuery = groq`*[
  _type == "post" &&
  !(_id in path("drafts.**")) &&
  defined(slug.current) &&
  defined(publishedAt)
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  excerpt,
  publishedAt,
  updatedAt,
  categories[]-> { title, slug }
}`;
