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
      name: 'interventionsHeading',
      label: 'Writings heading',
      type: 'string',
    },
    {
      name: 'interventionsLinkButtonText',
      label: 'Writings entry link text',
      description: 'To include publisher in the link text, use the magic sequence "{{publisher}}", which will be replaced with the publisher of each writing. E.g. "Read in {{publisher}}" would render links like "Read in TIME", "Read in Salon", etc. You can of course just use plain text like "Read" or "More".',
      type: 'string',
    },
    {
      name: 'interviewsHeading',
      label: 'Interviews heading',
      type: 'string',
    },
    {
      name: 'interviewsLinkButtonText',
      label: 'Interviews entry link text',
      description: 'To include publisher in the link text, use the magic sequence "{{publisher}}", which will be replaced with the publisher of each writing. E.g. "Listen in {{publisher}}" would render links like "Listen in NPR", "Listen in WUNC News ", etc.',
      type: 'string',
    },
  ]
};
