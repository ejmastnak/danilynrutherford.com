import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import ExternalLinkButton from '@tina/components/ExternalLinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import Pillbox from '@tina/components/Pillbox.tsx'
import { formatDateString } from '@src/lib/date.js'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

import type { MyPublicAnthropologyPageQuery, MyPublicAnthropologyPageQueryVariables, Reflection, Intervention, Interview } from "@tina/__generated__/types";
type Props = {
  variables: MyPublicAnthropologyPageQueryVariables;
  data: MyPublicAnthropologyPageQuery;
  query: string;
  reflections: Array<Reflection>,
  interventions: Array<Intervention>,
  interviews: Array<interviews>,
};

const components = {
  a: (props) => (
    <a href={props.url} className="text-blue-600 font-medium hover:underline hover:text-blue-500 hover:cursor-pointer">{props.children}</a>
  ),
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
        <h2 data-tina-field={tinaField(publicAnthropologyPage, "reflectionsHeading")} className="text-4xl text-center mx-auto md:mx-0 md:ml-5 italic">{publicAnthropologyPage.reflectionsHeading}</h2>
        <div className="mt-5 prose max-w-2xl w-fit mx-auto italic">
          <TinaMarkdown content={publicAnthropologyPage.reflectionsDescription} />
        </div>
        <ul className="mt-12 grid mx-auto sm:grid-cols-3 gap-8 max-w-4xl">
          {props.reflections.sort((a, b) => new Date(b.date) - new Date(a.date)).map((reflection) => (
            <li key={reflection.id}>
              <a href={`/reflections/${reflection._sys.filename}`} className="text-center">
                <img src={reflection.featuredImage} alt={reflection.featuredImageAlt} className="object-cover w-full max-w-sm sm:w-56 h-56 rounded-md mx-auto hover:outline hover:outline-1 hover:outline-gray-300 hover:shadow-md"/>
                <p className="mt-1 text-sm text-gray-600">{formatDateString(reflection.date)}</p>
                <p className="mt-px font-medium hover:underline">{reflection.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Interventions */}
      <section className="mt-16">
        <h2 data-tina-field={tinaField(publicAnthropologyPage, "interventionsHeading")} className="text-4xl text-center mx-auto md:mx-0 md:ml-5 italic">{publicAnthropologyPage.interventionsHeading}</h2>
        <div className="mt-5 prose max-w-2xl w-fit mx-auto italic">
          <TinaMarkdown content={publicAnthropologyPage.interventionsDescription} />
        </div>
        <ul className="mt-12 flex flex-col gap-y-12 max-w-3xl mx-auto border-t pt-12 border-gray-300">
          {props.interventions.sort((a, b) => new Date(b.date) - new Date(a.date)).map((intervention) => (
            <li key={intervention.id} className="border-b border-gray-300 pb-12">
              <a href={intervention.link} className="block">
                <p className="mt-px font-medium hover:underline text-lg">{intervention.title}</p>
              </a>
              <p className="mt-px text-gray-600">{formatDateString(intervention.date)}</p>
              <Pillbox className="mt-2">Published in {intervention.publisher}</Pillbox>
              <div className="my-4 prose text-gray-800">
                <TinaMarkdown content={intervention.body} components={components} />
              </div>
              <div>
                {/* Custom LinkButton */}
                <ExternalLinkButton href={intervention.link} >
                  Read (in {intervention.publisher})
                </ExternalLinkButton>
              </div>
            </li>
          ))}
        </ul>
      </section>


      {/* Interviews */}
      <section className="mt-16">
        <h2 data-tina-field={tinaField(publicAnthropologyPage, "interviewsHeading")} className="text-4xl text-center mx-auto md:mx-0 md:ml-5 italic">{publicAnthropologyPage.interviewsHeading}</h2>
        <div className="mt-5 prose max-w-2xl w-fit mx-auto italic">
          <TinaMarkdown content={publicAnthropologyPage.interviewsDescription} />
        </div>
        <div className="mt-10 flex flex-col gap-y-12 max-w-3xl mx-auto">
          Interviews will appear here.
        </div>
      </section>

    </PageWrapper>
  );
}
