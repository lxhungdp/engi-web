import { defineField, defineType } from "sanity";

export const detailSection = defineType({
  name: "detailSection",
  title: "Detail Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "specs",
      title: "Specs (optional)",
      type: "array",
      of: [{ type: "specItem" }],
    }),
    defineField({
      name: "image",
      title: "Image (optional)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
