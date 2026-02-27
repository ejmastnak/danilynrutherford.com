import type { Collection } from "tinacms";

export const NavCollection: Collection = {

  name: "nav",
  label: "Nav",
  path: "tina/content/ui/shared/nav",
  format: "json",

  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "navLinks",
      label: "Nav Links",
      type: "object",
      list: true,
      itemProps: (item) => {
        return { label: item?.text };
      },
      defaultItem: {
        text: "Example",
        href: "/example",
      },
      fields: [
        {
          name: "href",
          label: "Link",
          type: "string",
        },
        {
          name: "text",
          label: "Link text",
          type: "string",
        },
      ],
    }
  ],
};
