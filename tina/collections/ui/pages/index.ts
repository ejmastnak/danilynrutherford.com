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
  ],
};
