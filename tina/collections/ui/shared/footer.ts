import type { Collection } from "tinacms";

export const FooterCollection: Collection = {

  name: "footer",
  label: "Footer",
  path: "tina/content/ui/shared/footer",
  format: "json",

  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
    },
    {
      name: 'blueskyLink',
      label: 'Bluesky profile link',
      description: 'e.g. https://bsky.app/profile/danilynrutherford.bsky.social',
      type: 'string',
    },
    {
      name: 'instagramLink',
      label: 'Instagram profile link',
      description: 'e.g. https://www.instagram.com/rutherforddanilyn/',
      type: 'string',
    },
    {
      name: 'xLink',
      label: 'X profile link',
      description: 'e.g. https://x.com/@danilynfox',
      type: 'string',
    },
    {
      name: 'facebookLink',
      label: 'Facebook profile link',
      description: 'e.g. https://www.facebook.com/danilyn.rutherford',
      type: 'string',
    },
    {
      name: 'threadsLink',
      label: 'Threads profile link',
      description: 'e.g. https://www.threads.com/@danilyn.rutherford',
      type: 'string',
    },
    {
      name: 'linkedinLink',
      label: 'LinkedIn profile link',
      description: 'e.g. https://www.linkedin.com/in/danilyn-rutherford-8b717722/',
      type: 'string',
    },
  ],
};
