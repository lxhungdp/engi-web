import { defineField, defineType } from "sanity";

const productCategories = [
  { title: "Drone", value: "Drone" },
  { title: "Station", value: "Station" },
  { title: "Software", value: "Software" },
] as const;

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "details", title: "Details" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "content",
      description: "Display name, e.g. AQUILA-2",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      description: "URL path: /product/{slug} — must match existing slugs when migrating",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "content",
      options: { list: [...productCategories], layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      description: "Bullet points shown on product detail page",
    }),
    defineField({
      name: "applications",
      title: "Applications",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      description: "Use cases / application areas",
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      description: "Main product image on list cards and detail hero",
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      group: "media",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Optional image gallery (AQUILA-2, argosALES)",
    }),
    defineField({
      name: "specs",
      title: "Key Specs",
      type: "array",
      group: "details",
      of: [{ type: "specItem" }],
      description: "Summary spec table on detail page",
    }),
    defineField({
      name: "detailSections",
      title: "Detail Sections",
      type: "array",
      group: "details",
      of: [{ type: "detailSection" }],
      description: "Expandable sections with title, description, optional specs and image",
    }),
    defineField({
      name: "highlighted",
      title: "Highlighted on homepage",
      type: "boolean",
      group: "settings",
      initialValue: false,
      description: "Show in homepage product preview section",
    }),
  ],
  orderings: [
    {
      title: "Name A–Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
    {
      title: "Category",
      name: "categoryAsc",
      by: [
        { field: "category", direction: "asc" },
        { field: "name", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "image",
      highlighted: "highlighted",
    },
    prepare({ title, subtitle, media, highlighted }) {
      return {
        title: highlighted ? `${title} ★` : title,
        subtitle,
        media,
      };
    },
  },
});
