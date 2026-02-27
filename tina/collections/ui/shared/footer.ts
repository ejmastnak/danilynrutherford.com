import type { Collection } from "tinacms";

export const FooterCollection: Collection = {

  name: "footer",
  label: "Footer",
  path: "tina/content/ui/shared/footer",
  format: "json",

  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
    },
    {
      name: "footerLinks",
      label: "Footer Links",
      type: "object",
      list: true,
      itemProps: (item) => {
        return { label: item?.text };
      },
      defaultItem: {
        href: "/example",
        text: "Example",
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
    },
    {
      name: "socialLinks",
      label: "Social Links",
      type: "object",
      list: true,
      itemProps: (item) => {
        return { label: item?.site };
      },
      defaultItem: {
        site: "Bluesky",
        href: "https://bsky.app/profile/danilynrutherford.bsky.social",
      },
      fields: [
        {
          name: "site",
          label: "Site",
          type: "string",
        },
        {
          name: "href",
          label: "href",
          type: "string",
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'image',
        },
      ],
    },
  ],
};
