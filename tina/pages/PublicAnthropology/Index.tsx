import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import { formatDateString } from '@src/lib/date.js'

import type { MyPublicAnthropologyPageQuery, MyPublicAnthropologyPageQueryVariables, Reflection, Intervention, Interview } from "@tina/__generated__/types";
type Props = {
  variables: MyPublicAnthropologyPageQueryVariables;
  data: MyPublicAnthropologyPageQuery;
  query: string;
  reflections: Array<Reflection>,
  interventions: Array<Intervention>,
  interviews: Array<interviews>,
};

export default function PublicAnthropologyPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const publicAnthropologyPage = data.publicAnthropologyPage;

  return (
    <PageWrapper>
      <h1 data-tina-field={tinaField(publicAnthropologyPage, "h1")} className="text-5xl">{publicAnthropologyPage.h1}</h1>
      <div data-tina-field={tinaField(publicAnthropologyPage, "intro")} className="mt-5 prose">
        <TinaMarkdown content={publicAnthropologyPage.intro} />
      </div>

      {/* Reflections */}
      <section className="mt-16">
        <h2 data-tina-field={tinaField(publicAnthropologyPage, "reflectionsHeading")} className="text-4xl text-center mx-auto md:mx-0 md:ml-5">{publicAnthropologyPage.reflectionsHeading}</h2>
      <div className="mt-5 prose max-w-2xl w-fit mx-auto">
        <TinaMarkdown content={publicAnthropologyPage.reflectionsDescription} />
      </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
          {props.reflections.sort((a, b) => new Date(b.date) - new Date(a.date)).map((reflection) => (
            <div key={reflection.id}>
              <a href={`/reflections/${reflection._sys.filename}`} className="text-center">
                <img src={reflection.featuredImage} alt={reflection.featuredImageAlt} className="object-cover w-full max-w-sm sm:w-56 h-56 rounded-md mx-auto hover:outline hover:outline-1 hover:outline-gray-300 hover:shadow-md"/>
                <p className="mt-1 text-sm text-gray-600">{formatDateString(reflection.date)}</p>
                <p className="mt-px font-medium hover:underline">{reflection.title}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Interventions */}
      <section className="mt-16">
        <h2 data-tina-field={tinaField(publicAnthropologyPage, "interventionsHeading")} className="text-4xl text-center mx-auto md:mx-0 md:ml-5">{publicAnthropologyPage.interventionsHeading}</h2>
        <div className="mt-5 prose max-w-2xl w-fit mx-auto">
          <TinaMarkdown content={publicAnthropologyPage.interventionsDescription} />
        </div>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
          {props.interventions.sort((a, b) => new Date(b.date) - new Date(a.date)).map((intervention) => (
            <div key={intervention.id}>
              <a href={`/interventions/${intervention._sys.filename}`} className="text-center">
                <img src={intervention.featuredImage} alt={intervention.featuredImageAlt} className="object-cover w-full max-w-sm sm:w-56 h-56 rounded-md mx-auto hover:outline hover:outline-1 hover:outline-gray-300 hover:shadow-md"/>
                <p className="mt-1 text-sm text-gray-600">{formatDateString(intervention.date)}</p>
                <p className="mt-px font-medium hover:underline">{intervention.title}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

    </PageWrapper>
  );
}
