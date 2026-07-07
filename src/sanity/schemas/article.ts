import { defineField, defineType } from "sanity";

export const articleSchema = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      description: "The bit after the / in the URL. Click 'Generate' from title.",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "1-2 sentence hook shown on cards. Keep it punchy.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "category",
      title: "Category",
      description: "Which course on the menu?",
      type: "string",
      options: {
        list: [
          { title: "Appetizers (quick reads)", value: "Appetizers" },
          { title: "Main Course (deep dives)", value: "Main Course" },
          { title: "Comfort Food (relatable)", value: "Comfort Food" },
          { title: "Spicy Takes (opinions)", value: "Spicy Takes" },
          { title: "Desserts (light & fun)", value: "Desserts" },
          { title: "Chef's Table (personal)", value: "Chef's Table" },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mood",
      title: "Mood",
      description: "Sets the vibe tag on the article card.",
      type: "string",
      options: {
        list: [
          { title: "🎉 Fun", value: "fun" },
          { title: "📖 Deep / serious", value: "serious" },
          { title: "🌶️ Spicy", value: "spicy" },
        ],
        layout: "radio",
      },
      initialValue: "serious",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read time",
      description: 'Like "5 min read" or "7 min read"',
      type: "string",
      initialValue: "5 min read",
    }),
    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image (optional)",
      description: "Shown at the top of the article and on cards.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage?",
      description: 'Pick ONE article to show as "Today\'s Special" on the homepage.',
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "body",
      title: "Article body",
      description: "Write your article here. Use headings, lists, quotes, images.",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text (for accessibility)",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption (optional)",
            },
          ],
        },
        {
          type: "object",
          name: "callout",
          title: "Callout box",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              initialValue: "Try This Today",
            },
            {
              name: "text",
              type: "text",
              rows: 3,
              title: "Body",
            },
          ],
          preview: {
            select: { title: "title", subtitle: "text" },
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Published date, newest first",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "heroImage",
    },
  },
});
