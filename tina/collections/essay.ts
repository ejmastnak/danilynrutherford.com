import type { Collection } from "tinacms";
import citationFormats from "@src/assets/data/citationFormats.json";
import essayCategories from "@src/assets/data/essayCategories.json";

export const EssayCollection: Collection = {
  name: "essay",
  label: "Academic Essays Collection",
  path: "tina/content/essays",
  format: "json",
  ui: {
    filename: {
      showFirst: true,
      description: "The filename field is used internally by the content management system and is visible only to you, not to visitors.",
    },
  },
  defaultItem: {
    citationFormat: Object.values(citationFormats)[0],
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
      name: 'citationFormat',
      label: 'Citation format',
      description: 'This field determines the work\'s citation format (e.g. journal article, review, magazine article, etc.), and is not visible to public visitors.',
      type: 'string',
      options: Object.values(citationFormats),
    },
    {
      name: 'category',
      label: 'Category',
      description: 'This is the public-facing category shown to page visitors (e.g. Research Article, Commentary, etc.)',
      type: 'string',
      options: essayCategories,
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
      label: 'Editor(s) (if applicable)',
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
      label: 'Journal/book/container/etc.',
      description: "Title of the journal, book, encyclopedia, newspaper, etc. in which this work was published",
      type: 'string',
    },
    {
      name: 'year',
      label: 'Year',
      type: 'string',
    },
    {
      name: 'publisher',
      label: 'Publisher (if applicable)',
      type: 'string',
    },
    {
      name: 'volume',
      label: 'Volume (if applicable)',
      type: 'string',
    },
    {
      name: 'issue',
      label: 'Issue (if applicable)',
      type: 'string',
    },
    {
      name: 'pages',
      label: 'Pages (e.g. 234-242, if applicable)',
      type: 'string',
    },
    {
      name: 'href',
      label: 'Link (if applicable)',
      description: 'A link to the work on the publisher\'s page',
      type: 'string',
    },
  ],
};
