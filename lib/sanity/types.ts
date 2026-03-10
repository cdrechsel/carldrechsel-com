export type SanitySlug = { current: string };

export type SanityCategory = {
  _id: string;
  title: string;
  slug?: SanitySlug;
};

export type SanityAuthor = {
  _id: string;
  name: string;
  role?: string;
  image?: unknown;
  bio?: string;
};

export type SanityPost = {
  _id: string;
  title: string;
  slug: SanitySlug;
  description: string;
  excerpt?: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  categories?: SanityCategory[];
  author?: SanityAuthor;
  coverImage?: unknown;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: unknown;
  body?: unknown[];
};

export type SanityProject = {
  _id: string;
  title: string;
  slug: SanitySlug;
  summary: string;
  description?: string;
  featured?: boolean;
  externalUrl?: string;
  tags?: string[];
};
