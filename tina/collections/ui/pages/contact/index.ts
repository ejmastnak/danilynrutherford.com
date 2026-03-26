import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const ContactPageCollection: Collection = {

  name: "contactPage",
  label: "Contact Page",
  path: "tina/content/ui/pages/contact",
  format: "json",

  ui: {
    router: () => "/contact",
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
      name: 'intro',
      label: 'Introductory text',
      type: 'rich-text',
    },
    {
      name: 'addressHeading',
      label: 'Address heading',
      type: 'string',
    },
    {
      name: 'address',
      label: 'Address',
      type: 'rich-text',
    },
    {
      name: 'emailHeading',
      label: 'Email heading',
      type: 'string',
    },
    {
      name: 'primaryEmail',
      label: 'Primary email',
      type: 'string',
    },
    {
      name: 'secondaryEmail',
      label: 'Secondary email',
      type: 'string',
    },
  ],
};
