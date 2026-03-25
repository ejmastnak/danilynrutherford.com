import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const PublicAnthropologyPageCollection: Collection = {

  name: "publicAnthropologyPage",
  label: "Public Anthropology Page",
  path: "tina/content/ui/pages/publicAnthropology",
  format: "json",

  ui: {
    router: () => "/public-anthropology/",
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
      name: 'intro',
      label: 'Introductory text',
      type: 'rich-text',
    },
    {
      name: 'reflectionsHeading',
      label: 'Reflections heading',
      type: 'string',
    },
    {
      name: 'reflectionsDescription',
      label: 'Reflections description',
      type: 'rich-text',
    },
    {
      name: 'interventionsHeading',
      label: 'Interventions heading',
      type: 'string',
    },
    {
      name: 'interventionsDescription',
      label: 'Interventions description',
      type: 'rich-text',
    },
    {
      name: 'interviewsHeading',
      label: 'Interviews heading',
      type: 'string',
    },
    {
      name: 'interviewsDescription',
      label: 'Interviews description',
      type: 'rich-text',
    },
  ]
};
