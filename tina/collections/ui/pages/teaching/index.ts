import type { Collection } from "tinacms";

export const TeachingPageCollection: Collection = {

  name: "teachingPage",
  label: "Teaching Page",
  path: "tina/content/ui/pages/teaching",
  format: "json",

  ui: {
    router: () => "/teaching/",
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "head",
      label: "HTML head",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          type: "string",
        },
      ],
    },
    {
      name: "h1",
      label: "Heading",
      type: "string",
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'rich-text',
      required: true,
    },
    {
      name: 'press',
      label: 'Press',
      type: 'rich-text',
    },
    {
      name: 'coursesTaughtHeading',
      label: 'Courses taught heading',
      type: 'string',
      required: true,
    },
    {
      name: 'syllabusAvailability',
      label: 'Syllabus availability',
      type: 'string',
      required: true,
    },
    {
      name: 'princetonCoursesHeading',
      label: 'Princeton courses heading',
      type: 'string',
      required: true,
    },
    {
      name: 'princetonCourses',
      label: 'Princeton courses',
      type: 'object',
      list: true,
      ui: {
        itemProps: (course) => {
          return { label: course?.name };
        },
      },
      defaultItem: {
        name: "Course Title",
      },
      fields: [
        {
          name: 'name',
          label: 'Course name',
          type: 'string',
          required: true,
        },
      ]
    },
    {
      name: 'uciCoursesHeading',
      label: 'UCI courses heading',
      type: 'string',
      required: true,
    },
    {
      name: 'uciCourses',
      label: 'UCI courses',
      type: 'object',
      list: true,
      ui: {
        itemProps: (course) => {
          return { label: course?.name };
        },
      },
      defaultItem: {
        name: "Course Title",
      },
      fields: [
        {
          name: 'name',
          label: 'Course name',
          type: 'string',
          required: true,
        },
      ]
    },
    {
      name: 'nyuCoursesHeading',
      label: 'NYU courses heading',
      type: 'string',
      required: true,
    },
    {
      name: 'nyuCourses',
      label: 'NYU courses',
      type: 'object',
      list: true,
      ui: {
        itemProps: (course) => {
          return { label: course?.name };
        },
      },
      defaultItem: {
        name: "Course Title",
      },
      fields: [
        {
          name: 'name',
          label: 'Course name',
          type: 'string',
          required: true,
        },
      ]
    },
  ],
};
