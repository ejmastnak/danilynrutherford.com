import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";
import { condenseAst } from '@src/lib/ast.js'

export const BookCollection: Collection = {
  name: "book",
  label: "Books Collection",
  path: "tina/content/books",
  format: "json",
  ui: {
    router({ document }) {
      return `/books/${document._sys.filename}`;
    },
    filename: {
      showFirst: true,
      description: "The filename field is used internally by the content management system and is visible only to you, not to visitors. I suggest a format like \"beautiful-mystery\", \"living-in-the-stone-age\", etc.",
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
      name: 'subtitle',
      label: 'Subtitle',
      type: 'string',
    },
    {
      name: 'publisher',
      label: 'Publisher',
      type: 'string',
    },
    {
      name: 'year',
      label: 'Year published',
      type: 'string',
    },
    {
      name: 'image',
      label: 'Cover image',
      type: 'image',
    },
    {
      name: 'imageAlt',
      label: 'Cover image alt text',
      type: 'string',
    },
    {
      name: 'link',
      label: "Link to book page on publisher's site",
      type: 'string',
    },
    {
      name: 'publisherLinkButtonText',
      label: "Button text for link to publisher's book page",
      type: 'string',
    },
    {
      name: 'description',
      label: 'Description of the book',
      type: 'rich-text',
    },
    {
      name: 'reviewsHeading',
      label: 'Reviews heading',
      type: 'string',
    },
    {
      name: 'reviews',
      label: 'Reviews',
      type: 'object',
      list: true,
      ui: {
        itemProps: (review) => {
          return { label: condenseAst(review.reviewer) ?? "Reviews item" };
        },
      },
      defaultItem: {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        reviewer: "John Doe, Example University",
      },
      fields: [
        {
          name: 'review',
          label: 'Review text',
          type: 'rich-text',
        },
        {
          name: 'reviewer',
          label: "Reviewer",
          type: 'rich-text',
        },
      ],
    },
  ]
};
