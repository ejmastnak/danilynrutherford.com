import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const InterventionCollection: Collection = {
  name: "intervention",
  label: "Interventions Collection",
  path: "tina/content/interventions",
  format: "json",
  ui: {
    filename: {
      showFirst: true,
      description: "The filename field is used internally by the content management system and is visible only to you, not to visitors.",
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
      name: 'title',
      label: 'Title',
      type: 'string',
    },
    {
      name: 'featuredImage',
      label: 'Featured Image',
      type: 'image',
    },
    {
      name: 'featuredImageAlt',
      label: 'Featured Image alt text',
      type: 'string',
    },
    {
      name: 'date',
      label: 'Date',
      type: 'datetime',
    },
    {
      name: 'publisher',
      label: 'Publisher',
      description: 'E.g. TIME, Salon, etc.',
      type: 'string',
    },
    {
      name: 'link',
      label: 'External link',
      type: 'string',
    },
    {
      name: 'body',
      label: 'Description',
      description: 'Use this field for a short description of the work',
      type: 'rich-text',
    },
  ],
};
