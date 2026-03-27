import type { Collection } from "tinacms";
import { CMS_HTML_HEAD_FIELD_DESCRIPTION, CMS_HTML_HEAD_TITLE_FIELD_DESCRIPTION, CMS_HTML_HEAD_DESCRIPTION_FIELD_DESCRIPTION, } from "@src/assets/config.ts";

export const HomePageCollection: Collection = {

  name: "homePage",
  label: "Home Page",
  path: "tina/content/ui/pages/index",
  format: "json",

  ui: {
    router: () => "/",
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
      name: 'heroImage',
      label: 'Main image',
      type: 'image',
    },
    {
      name: 'heroImageAlt',
      label: 'Main image alt text',
      type: 'string',
    },
    {
      name: 'h1',
      label: 'Main page heading',
      type: 'string',
    },
    {
      name: 'aboutText',
      label: 'About text',
      description: 'A short paragraph introducing Danilyn and her work',
      type: 'rich-text',
    },
    {
      name: 'featuredBook',
      label: 'Featured book',
      description: 'This book is featured prominently on the home page',
      type: 'reference',
      collections: ['book'],
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
    },
    {
      name: 'featuredBookDescription',
      label: 'Featured book description',
      description: 'A paragraph or so description of the main featured book',
      type: 'rich-text',
    },
    {
      name: 'featuredBookLinkText',
      label: 'Featured book link text',
      type: 'rich-text',
    },
    {
      name: 'academicBooksHeading',
      label: 'Academic books heading',
      type: 'string',
    },
    {
      name: 'featuredAcademicBooks',
      label: 'featuredAcademicBooks',
      type: 'object',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.book.replace(/^tina\/content\/books\//, "").replace(/\.json$/, "") };
        },
      },
      fields: [
        {
          name: 'book',
          label: 'book',
          type: 'reference',
          collections: ['book'],
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
    },
    {
      name: 'featuredEssaysHeading',
      label: 'Featured essays heading',
      type: 'string',
    },
    {
      name: 'featuredEssays',
      label: 'Featured essays',
      type: 'object',
      list: true,
      ui: {
        itemProps: (essay) => {
          return { label: essay.title };
        },
      },
      fields: [
        {
          name: 'title',
          label: 'Essay title',
          type: 'string',
        },
        {
          name: 'link',
          label: 'Link to essay',
          description: 'E.g., to the journal/publisher\'s page where the essay can be viewed',
          type: 'string',
        },
        {
          name: 'description',
          label: 'Description of essay',
          description: 'A few sentences describing the essay',
          type: 'rich-text',
        },
      ],
    },
    {
      name: 'praiseHeading',
      label: 'Praise heading',
      type: 'string',
    },
    {
      name: 'featuredPraise',
      label: 'Featured praise',
      type: 'object',
      list: true,
      ui: {
        itemProps: (praise) => {
          return { label: praise.reviewer + " on " + praise.work};
        },
      },
      defaultItem: {
        review: "...consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        reviewer: "John Doe",
        work: "Beautiful Mystery",
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
          description: 'The name of the person or entity giving the praise',
          type: 'string',
        },
        {
          name: 'work',
          label: 'Work',
          description: 'The work being reviewed, e.g. "Beautiful Mystery"',
          type: 'string',
        },
      ],
    },
    {
      name: 'eventsHeading',
      label: 'Events heading',
      type: 'string',
    },
    {
      name: 'eventsLinkText',
      label: 'Events link button text',
      type: 'string',
    },
  ],
};
