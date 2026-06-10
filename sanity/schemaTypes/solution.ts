import { defineField, defineType } from "sanity";

const solutionIcons = [
  { title: "Shield (Public Safety)", value: "Shield" },
  { title: "Route (Highway)", value: "Route" },
  { title: "Building (Facility)", value: "Building2" },
  { title: "Map (Surveying)", value: "Map" },
] as const;

export const solution = defineType({
  name: "solution",
  title: "Solution",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      description: "Anchor on /solution page: /solution#{slug}",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "problem",
      title: "Problem / Context",
      type: "text",
      rows: 4,
      group: "content",
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "technology",
      title: "Related Products",
      type: "string",
      group: "content",
      description: 'Shown as "Related Products:" on the website',
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "text",
      rows: 2,
      group: "content",
      description: "Stored for future use; not shown on the site yet",
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
    }),
    defineField({
      name: "videos",
      title: "YouTube Videos",
      type: "array",
      group: "media",
      of: [{ type: "solutionVideo" }],
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      group: "settings",
      options: { list: [...solutionIcons], layout: "dropdown" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "Display Order",
      type: "number",
      group: "settings",
      description: "Lower numbers appear first on /solution (1 = top)",
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      group: "settings",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
      media: "image",
      sortOrder: "sortOrder",
    },
    prepare({ title, subtitle, media, sortOrder }) {
      return {
        title: sortOrder ? `${sortOrder}. ${title}` : title,
        subtitle,
        media,
      };
    },
  },
});
