import type { Collection } from "tinacms";

export const EventCollection: Collection = {

  name: "event",
  label: "Events",
  path: "tina/content/events",
  format: "json",
  ui: {
    filename: {
      showFirst: true,
      description: "The filename field is used internally by the content management system and is visible only to you, not to visitors.",
    },
  },
  defaultItem: {
    title: "Example Event Title: Themes and Topics",
    institution: "Department or Hosting Institution",
    type: "Seminar",
    date: "2025-01-01",
    time: "4:00 pm",
    location: "Room 101, Example University / Online",
    description: "A brief description of the event, outlining its focus, participants, and broader significance.",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "rich-text",
    },
    {
      name: 'institution',
      label: 'Institution',
      type: 'string',
    },
    {
      name: 'type',
      label: 'Type of event',
      type: 'string',
    },
    {
      name: 'date',
      label: 'Date',
      type: 'datetime',
    },
    {
      name: 'time',
      label: 'Time (optional)',
      type: 'string',
    },
    {
      name: 'location',
      label: 'Location',
      type: 'string',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'rich-text',
    },
    {
      name: 'publicWork',
      label: 'Linked Public Writing or Media (optional)',
      description: 'If this event has an associated Public Writings & Media entry, link the associated work here (e.g. for interviews, radio appearances, etc.).',
      type: 'reference',
      collections: ['publicWork'],
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
