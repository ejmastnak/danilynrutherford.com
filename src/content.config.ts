import { defineCollection, z } from "astro:content";
import client from "../tina/__generated__/client";

const books = defineCollection({
  loader: async () => {
    const response = await client.queries.bookConnection();

    return response.data.bookConnection.edges
      ?.filter((edge) => !!edge?.node)
      .map((edge) => {
        const node = edge!.node!;

        return {
          ...node,
          id: node._sys.relativePath.replace(/\.json$/, ""),
          tinaInfo: node._sys,
        };
      });
  },

  schema: z.object({
    tinaInfo: z.object({
      filename: z.string(),
      basename: z.string(),
      path: z.string(),
      relativePath: z.string(),
    }),
    head: z.object({
      title: z.string(),
      description: z.string(),
    }),
    title: z.string().nullish(),
    subtitle: z.string().nullish(),
    publisher: z.string().nullish(),
    year: z.string().nullish(),
    image: z.string().nullish(),
    imageAlt: z.string().nullish(),
    link: z.string().nullish(),
    publisherLinkButtonText: z.string().nullish(),
    description: z.any().nullish(),
    reviewsHeading: z.string().nullish(),
    reviews: z.array(
      z.object({
        review: z.any().nullish(),
        reviewer: z.any().nullish(),
      })
    ).nullish(),
  }),
});

const publicAnthropology = defineCollection({
  loader: async () => {
    const response = await client.queries.publicAnthropologyConnection();

    return response.data.publicAnthropologyConnection.edges
      ?.filter((edge) => !!edge?.node)
      .map((edge) => {
        const node = edge!.node!;

        return {
          ...node,
          id: node._sys.relativePath.replace(/\.json$/, ""),
          tinaInfo: node._sys,
        };
      });
  },

  schema: z.object({
    tinaInfo: z.object({
      filename: z.string(),
      basename: z.string(),
      path: z.string(),
      relativePath: z.string(),
    }),
    head: z.object({
      title: z.string(),
      description: z.string(),
    }),
    title: z.string().nullish(),
    featuredImage: z.string().nullish(),
    featuredImageAlt: z.string().nullish(),
    date: z.coerce.date().nullish(),
    type: z.string().nullish(),
    link: z.string().nullish(),
    body: z.any().nullish(),
    event: z.any().nullish(),
  }),
});

export const collections = { books, publicAnthropology };
