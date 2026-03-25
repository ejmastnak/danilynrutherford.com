import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'
import { formatDateString } from '@src/lib/date.js'

import type { Intervention, InterventionQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: InterventionQueryVariables;
  data: InterventionQuery;
  query: string;
};

export default function Intervention(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const intervention = data.intervention;

  return (
    <PageWrapper>
      <div className="text-center mx-auto">
        <h1 data-tina-field={tinaField(intervention, "title")} className="text-4xl">{intervention.title}</h1>
        <p className="mt-2" data-tina-field={tinaField(intervention, "date")}>{formatDateString(intervention.date)}</p>
        <p className="mt-1" data-tina-field={tinaField(intervention, "type")}>Intervention</p>

        <img
          className="my-10 w-full mx-auto h-72 max-w-md md:w-96 object-cover rounded-md"
          src={intervention.featuredImage}
          alt={intervention.featuredImageAlt}
        />

      </div>

      <article data-tina-field={tinaField(intervention, "body")} className="prose mx-auto">
        <TinaMarkdown content={intervention.body} />
      </article>
    </PageWrapper>
  );
}
