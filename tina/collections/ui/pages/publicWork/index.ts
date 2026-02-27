import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const PublicWorkPageCollection: Collection = {

  name: "publicWorkPage",
  label: "Public Writings & Media Page",
  path: "tina/content/ui/pages/publicWork",
  format: "json",

  ui: {
    router: () => "/public-writings-and-media/",
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "head",
      label: "HTML head",
      description: CMS_HTML_HEAD_FIELD_DESCRIPTION, 
      type: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          description: CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION,
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          description: CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION,
          type: "string",
        },
      ],
    },
    {
      name: 'h1',
      label: 'Heading',
      type: 'string',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'rich-text',
    },
  ]
};
