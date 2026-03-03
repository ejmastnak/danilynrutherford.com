import type { Collection } from "tinacms";
import publicationTypes from "@src/assets/data/publicationTypes.json";

export const AcademicWorkCollection: Collection = {
  name: "academicWork",
  label: "Academic Writings Collection",
  path: "tina/content/academicWorks",
  format: "json",
  ui: {
    filename: {
      showFirst: true,
      description: "The filename field is used internally by the content management system and is visible only to you, not to visitors.",
    },
  },
  defaultItem: {
    title: "Markets, Morality, and the State",
    type: Object.values(publicationTypes)[0],
    authors: [ { givenName: "Danilyn", familyName: "Rutherford" } ],
    containerTitle: "Example Journal of Social Theory"
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
    },
    {
      name: 'formatType',
      label: 'Format type',
      type: 'string',
      options: Object.values(publicationTypes),
    },
    {
      name: 'displayType',
      label: 'Display type',
      type: 'string',
    },
    {
      name: 'authors',
      label: 'Author(s)',
      type: 'object',
      list: true,
      ui: {
        itemProps: (editor) => {
          return { label: (editor.givenName ? editor.givenName + ", " : "") + editor.familyName };
        },
      },
      fields: [
        {
          name: 'givenName',
          label: 'Given name',
          type: 'string',
        },
        {
          name: 'familyName',
          label: 'Family name',
          type: 'string',
        },
      ],
    },
    {
      name: 'editors',
      label: 'Editor(s) (optional)',
      type: 'object',
      list: true,
      ui: {
        itemProps: (editor) => {
          return { label: (editor.givenName ? editor.givenName + ", " : "") + editor.familyName };
        },
      },
      defaultItem: {
        givenName: "John",
        familyName: "Doe"
      },
      fields: [
        {
          name: 'givenName',
          label: 'Given name',
          type: 'string',
        },
        {
          name: 'familyName',
          label: 'Family name',
          type: 'string',
        },
      ],
    },
    {
      name: 'containerTitle',
      label: 'Journal/book/etc.',
      description: "Title of the journal, book, encyclopedia, newspaper, etc. in which this work was published",
      type: 'string',
    },
    {
      name: 'publisher',
      label: 'Publisher',
      type: 'string',
    },
    {
      name: 'volume',
      label: 'Volume',
      type: 'string',
    },
    {
      name: 'issue',
      label: 'Issue',
      type: 'string',
    },
    {
      name: 'pages',
      label: 'Pages (e.g. 234-242)',
      type: 'string',
    },
    {
      name: 'year',
      label: 'Year',
      type: 'string',
    },
    {
      name: 'href',
      label: 'Link',
      type: 'string',
    },
  ],
};
