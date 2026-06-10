import { defineField, defineType } from "sanity";

export const solutionVideo = defineType({
  name: "solutionVideo",
  title: "YouTube Video",
  type: "object",
  fields: [
    defineField({
      name: "youtubeId",
      title: "YouTube Video ID",
      type: "string",
      description: "ID from youtube.com/watch?v=ID or youtu.be/ID",
      validation: (rule) => rule.required(),
    }),
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
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "youtubeId" },
  },
});
