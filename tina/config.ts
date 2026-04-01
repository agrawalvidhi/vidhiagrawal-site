import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: "0524ef42-cc73-4396-a012-07647f6de215",
  token: "2e46a94c08986f81889e294af88a1ba05aa07048",
  branch: "main",
  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: ".",
    },
  },
  schema: {
    collections: [
      {
        name: "resources",
        label: "Resources",
        path: "_data/resources",
        format: "json",
        ui: {
          allowedActions: { create: true, delete: true },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["articles", "videos", "tools"],
            required: true,
          },
          {
            type: "string",
            name: "tag",
            label: "Tag (e.g. Fintech, Psychology, History)",
            required: true,
          },
          {
            type: "string",
            name: "tagColor",
            label: "Tag Colour",
            options: ["green", "orange", "blue", "purple", "red", "teal"],
          },
          {
            type: "string",
            name: "source",
            label: "Source (e.g. TED, HBR, Coursera)",
          },
          {
            type: "string",
            name: "note",
            label: "Your note about this resource",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "url",
            label: "Link URL",
          },
          {
            type: "string",
            name: "icon",
            label: "Icon emoji (e.g. 📄 ▶️ 🛠️)",
          },
        ],
      },
      {
        name: "courses",
        label: "Courses",
        path: "_data/courses",
        format: "json",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Course Name",
            required: true,
          },
          {
            type: "string",
            name: "by",
            label: "Platform / Instructor",
          },
          {
            type: "string",
            name: "status",
            label: "Status",
            options: ["Completed", "In progress", "Exploring"],
          },
        ],
      },
      {
        name: "now",
        label: "Now Strip",
        path: "_data",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        match: { include: "now" },
        fields: [
          {
            type: "string",
            name: "text",
            label: "Currently doing / reading / thinking about",
            ui: { component: "textarea" },
          },
        ],
      },
    ],
  },
});
