import { defineConfig } from "tinacms";

import { BookCollection } from "@tina/collections/book.ts";

import { TINA_MEDIA_ROOT, TINA_PUBLIC_FOLDER, TINA_SUPPORTED_IMAGE_MIMES } from "@src/assets/config.ts";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: TINA_PUBLIC_FOLDER,
      mediaRoot: TINA_MEDIA_ROOT,
    },
    accept: TINA_SUPPORTED_IMAGE_MIMES,
  },
  schema: {
    collections: [
      BookCollection,
    ],
  },
});
