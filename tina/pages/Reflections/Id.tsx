import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'
import { formatDateString } from '@src/lib/date.js'

import type { Reflection, ReflectionQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: ReflectionQueryVariables;
  data: ReflectionQuery;
  query: string;
};

export default function Reflection(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const reflection = data.reflection;

  return (
    <PageWrapper>
      <div className="text-center mx-auto">
        <h1 data-tina-field={tinaField(reflection, "title")} className="text-4xl">{reflection.title}</h1>
        <p className="mt-2" data-tina-field={tinaField(reflection, "date")}>{formatDateString(reflection.date)}</p>
        <p className="mt-1" data-tina-field={tinaField(reflection, "type")}>Reflection</p>

        <img
          className="my-10 w-full mx-auto h-72 max-w-md md:w-96 object-cover rounded-md"
          src={reflection.featuredImage}
          alt={reflection.featuredImageAlt}
        />
      </div>

      <article data-tina-field={tinaField(reflection, "body")} className="prose mx-auto">
        <TinaMarkdown content={reflection.body} />
      </article>
    </PageWrapper>
  );
}
