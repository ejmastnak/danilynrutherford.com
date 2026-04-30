import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

import { condenseAst } from '@src/lib/ast.js'

export const InterviewCollection: Collection = {
  name: "interview",
  label: "Interviews Collection",
  path: "tina/content/interviews",
  format: "json",
  ui: {
    filename: {
      showFirst: true,
      description: "The filename field is used internally by the content management system and is visible only to you, not to visitors.",
    },
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
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
      description: 'Name of podcast, radio show, etc.',
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
      description: 'Use this field for a short description of the interview',
      type: 'rich-text',
    },
    {
      name: 'event',
      label: 'Linked event (optional)',
      description: 'If this interview has an associated Events entry with date/time/venue and related logistical information, link the Event here (e.g. for podcasts, radio appearances, etc. scheduled ahead of time).',
      type: 'reference',
      collections: ['event'],
      ui: {
        optionComponent: (
          props: {
            title: any,
          },
          _internalSys: { path: string }
        ) => {
          return condenseAst(props.title) ?? "Linked event";
        }
      }
    }
  ],
};
