import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const PublicWorkCollection: Collection = {
  name: "publicWork",
  label: "Public Writings & Media Collection",
  path: "tina/content/public-work",
  format: "json",
  ui: {
    router({ document }) {
      return `/public-writings-and-media/${document._sys.filename}`;
    },
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
      required: true,
      isTitle: true,
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
      required: true,
    }
    {
      name: 'type',
      label: 'The type of work',
      description: 'E.g. "Interview", "Essay", "Podcast", etc.',
      type: 'string',
    },
    {
      name: 'href',
      label: 'External link (optional)',
      type: 'string',
    },
    {
      name: 'introduction',
      label: 'Introductory text (optional)',
      description: 'A few sentences introducing the work.',
      type: 'rich-text',
    },
    {
      name: 'body',
      label: 'Body text',
      description: 'Use this field for the work\'s main content',
      type: 'rich-text',
    },
    {
      name: 'event',
      label: 'Linked event (optional)',
      description: 'If this work has an associated Events entry with date/time/venue and related logistical information, link the Event here (e.g. for interviews, radio appearances, etc.).',
      type: 'reference',
      collections: ['event'],
      ui: {
        optionComponent: (
          props: {
            title: string,
          },
          _internalSys: { path: string }
        ) => {
          return props.title;
        }
      }
    }
  ],
};
