import { defineConfig } from "tinacms";

import { HomePageCollection } from "@tina/collections/ui/pages/index/index.ts";
import { AboutPageCollection } from "@tina/collections/ui/pages/about/index.ts";
import { EssaysPageCollection } from "@tina/collections/ui/pages/essays/index.ts";
import { BooksPageCollection } from "@tina/collections/ui/pages/books/index.ts";
import { ContactPageCollection } from "@tina/collections/ui/pages/contact/index.ts";
import { EventsPageCollection } from "@tina/collections/ui/pages/events/index.ts";
import { PublicAnthropologyPageCollection } from "@tina/collections/ui/pages/publicAnthropology/index.ts";

import { NavCollection } from "@tina/collections/ui/shared/nav.ts";
import { FooterCollection } from "@tina/collections/ui/shared/footer.ts";

import { EssayCollection } from "@tina/collections/essay.ts";
import { BookCollection } from "@tina/collections/book.ts";
import { EventCollection } from "@tina/collections/event.ts";
import { ReflectionCollection } from "@tina/collections/reflection.ts";
import { InterventionCollection } from "@tina/collections/intervention.ts";
import { InterviewCollection } from "@tina/collections/interview.ts";

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
      HomePageCollection,
      AboutPageCollection,
      BooksPageCollection,
      EssaysPageCollection,
      PublicAnthropologyPageCollection,
      EventsPageCollection,
      ContactPageCollection,

      NavCollection,
      FooterCollection,

      EssayCollection,
      BookCollection,
      EventCollection,

      ReflectionCollection,
      InterventionCollection,
      InterviewCollection,

    ],
  },
});
