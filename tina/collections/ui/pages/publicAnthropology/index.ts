import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const PublicAnthropologyPageCollection: Collection = {

  name: "publicAnthropologyPage",
  label: "Public Anthropology Page",
  path: "tina/content/ui/pages/publicAnthropology",
  format: "json",

  ui: {
    router: () => "/public-anthropology",
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
      name: 'reflectionsHeading',
      label: 'Reflections heading',
      type: 'string',
    },
    {
      name: 'interventionsHeading',
      label: 'Writings heading',
      type: 'string',
    },
    {
      name: 'interviewsHeading',
      label: 'Interviews heading',
      type: 'string',
    },
  ]
};
