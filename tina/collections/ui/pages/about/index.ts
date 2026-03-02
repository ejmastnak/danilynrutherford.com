import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const AboutPageCollection: Collection = {

  name: "aboutPage",
  label: "About Page",
  path: "tina/content/ui/pages/about",
  format: "json",

  ui: {
    router: () => "/about/",
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
      name: "h1",
      label: "Heading",
      type: "string",
    },
    {
      name: 'image',
      label: 'Image',
      type: 'image',
    },
    {
      name: 'imageAlt',
      label: 'Image alt text',
      type: 'string',
    },
    {
      name: 'body',
      label: 'Body',
      type: 'rich-text',
    },
    {
      name: 'cv',
      label: 'CV PDF file',
      description: 'Your CV is in your Media Library library',
      type: 'image',
    },
    {
      name: 'cvButtonText',
      label: 'CV button text',
      type: 'string',
    },
  ],
};
