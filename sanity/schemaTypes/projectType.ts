import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "array", of: [defineArrayMember({ type: "block" })] }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "externalUrl", title: "External URL", type: "url" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [defineArrayMember({ type: "string" })] })
  ]
});
