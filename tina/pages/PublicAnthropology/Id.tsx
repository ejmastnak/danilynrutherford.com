import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'
import { formatDateString } from '@src/lib/date.js'

import type { PublicAnthropology, PublicAnthropologyQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: PublicAnthropologyQueryVariables;
  data: PublicAnthropologyQuery;
  query: string;
};

// Extracts a string value from the reviewer rich text's
// Abstract Syntax Tree to use as a loop key.
function extractReviewerKeyfromAst(reviewer) {
  return reviewer?.children[0]?.children[0]?.text || (reviewer?.children[0]?.text)
}

export default function PublicAnthropology(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const publicAnthropologyItem = data.publicAnthropology;

  return (
    <PageWrapper>
      <div className="text-center mx-auto">
        <h1 data-tina-field={tinaField(publicAnthropologyItem, "title")} className="text-4xl">{publicAnthropologyItem.title}</h1>
        <p className="mt-2" data-tina-field={tinaField(publicAnthropologyItem, "date")}>{formatDateString(publicAnthropologyItem.date)}</p>
        <p className="mt-1" data-tina-field={tinaField(publicAnthropologyItem, "type")}>{publicAnthropologyItem.type}</p>

        <img
          className="my-10 w-full mx-auto h-72 max-w-md md:w-96 object-cover rounded-md"
          src={publicAnthropologyItem.featuredImage}
          alt={publicAnthropologyItem.featuredImageAlt}
        />

      </div>

      <article data-tina-field={tinaField(publicAnthropologyItem, "body")} className="prose mx-auto">
        <TinaMarkdown content={publicAnthropologyItem.body} />
      </article>
    </PageWrapper>
  );
}
