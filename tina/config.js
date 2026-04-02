const { defineConfig } = require("tinacms");

module.exports = defineConfig({
  clientId: "0524ef42-cc73-4396-a012-07647f6de215",
  token: "2e46a94c08986f81889e294af88a1ba05aa07048",
  branch: "main",
  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },
  schema: {
    collections: [
      {
        name: "resources",
        label: "Resources",
        path: "data/resources",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "category", label: "Category", options: ["articles","videos","tools"] },
          { type: "string", name: "tag", label: "Tag" },
          { type: "string", name: "tagColor", label: "Tag Colour", options: ["green","orange","blue","purple","red","teal"] },
          { type: "string", name: "source", label: "Source" },
          { type: "string", name: "note", label: "Your note" },
          { type: "string", name: "url", label: "Link URL" },
          { type: "string", name: "icon", label: "Icon emoji" },
        ],
      },
      {
        name: "courses",
        label: "Courses",
        path: "data/courses",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Course Name", required: true },
          { type: "string", name: "by", label: "Platform / Instructor" },
          { type: "string", name: "status", label: "Status", options: ["Completed","In progress","Exploring"] },
        ],
      },
    ],
  },
});
