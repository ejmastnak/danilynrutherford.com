import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const ContactPageCollection: Collection = {

  name: "contactPage",
  label: "Contact Page",
  path: "tina/content/ui/pages/contact",
  format: "json",

  ui: {
    router: () => "/contact/",
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
      name: 'contactFormHeading',
      label: 'Contact Form Heading',
      type: 'string',
    },
    {
      name: 'contactForm',
      label: 'Contact form fields',
      type: 'object',
      fields: [
        {
          name: 'contactFormNameLabel',
          label: 'Name field label',
          type: 'string',
        },
        {
          name: 'contactFormNamePlaceholder',
          label: 'Name field placeholder',
          type: 'string',
        },
        {
          name: 'contactFormMessageLabel',
          label: 'Message field label',
          type: 'string',
        },
        {
          name: 'contactFormMessagePlaceholder',
          label: 'Message field placeholder',
          type: 'string',
        },
        {
          name: 'contactFormEmailLabel',
          label: 'Email field label',
          type: 'string',
        },
        {
          name: 'contactFormEmailPlaceholder',
          label: 'Email field placeholder',
          type: 'string',
        },
        {
          name: 'contactFormSubmitButtonText',
          label: 'Submit button text',
          type: 'string',
        },
      ],
    },
    {
      name: 'contactDirectlyHeading',
      label: 'Contact us directly heading',
      type: 'string',
    },
    {
      name: 'contactDirectlyText',
      label: 'Contact us directly text',
      type: 'rich-text',
    },
    {
      name: 'phoneText',
      label: 'Phone text',
      type: 'string',
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'string',
    },
    {
      name: 'emailText',
      label: 'Email text',
      type: 'string',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'string',
    },
    {
      name: 'phoneMachineReadable',
      label: 'Machine-readable phone',
      type: 'string',
    },
  ],
};
