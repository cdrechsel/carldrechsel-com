import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 4 }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime", validation: (rule) => rule.required() }),
    defineField({ name: "updatedAt", title: "Updated At", type: "datetime" }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })]
    }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text", rows: 3 }),
    defineField({ name: "ogImage", title: "OG Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          marks: {
            annotations: [
              defineField({
                name: "link",
                type: "object",
                title: "Link",
                fields: [defineField({ name: "href", type: "url", title: "URL" })]
              })
            ]
          }
        })
      ],
      validation: (rule) => rule.required()
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt"
    }
  }
});
