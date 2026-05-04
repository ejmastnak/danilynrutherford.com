import { useTina, tinaField } from "tinacms/dist/react";
import { slugify } from '@src/lib/slugify.js'
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
      <h1 className="text-4xl" data-tina-field={tinaField(publicAnthropologyPage, "h1")} className="text-5xl">{publicAnthropologyPage.h1}</h1>

      <div data-tina-field={tinaField(publicAnthropologyPage, "intro")} className="mt-5 prose">
        <TinaMarkdown content={publicAnthropologyPage.intro} components={components} />
      </div>

      {/* Interventions */}
      <section className="mt-20 w-full min-w-fit bg-theme-lightblue/10 px-6 py-12 rounded-lg">
        <h2 id={slugify(publicAnthropologyPage.interventionsHeading)} data-tina-field={tinaField(publicAnthropologyPage, "interventionsHeading")} className="anchor text-4xl text-center mx-auto md:mx-0 md:ml-5">{publicAnthropologyPage.interventionsHeading}</h2>

        <ul className="mt-12 flex flex-col gap-y-12 max-w-3xl mx-auto border-t pt-12 border-gray-300">
          {props.interventions.sort((a, b) => new Date(b.date) - new Date(a.date)).map((intervention, idx) => (
            <li key={intervention.id} className={`border-gray-300 pb-12 ${idx < props.interventions.length - 1 ? 'border-b' : ''}`}>
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
      <section className="mt-24 md:mt-28 lg:mt-32 w-full min-w-fit bg-theme-lightblue/10 px-6 py-10 rounded-lg">
        {/* Magic value: -mt with +pt pushes h2 below absolutely placed top nav so anchor links work */}
        <h2 id={slugify(publicAnthropologyPage.interviewsHeading)} data-tina-field={tinaField(publicAnthropologyPage, "interviewsHeading")} className="anchor text-4xl text-center mx-auto md:mx-0 md:ml-5">{publicAnthropologyPage.interviewsHeading}</h2>

        {props.interviews.length
          ? 
          <ul className="mt-12 flex flex-col gap-y-12 max-w-3xl mx-auto border-t pt-12 border-gray-300">
            {props.interviews.sort((a, b) => new Date(b.date) - new Date(a.date)).map((interview, idx) => (
              <li key={interview.id} className={`border-gray-300 pb-12 ${idx < props.interviews.length - 1 ? 'border-b' : ''}`}>
                <a href={interview.link} className="block">
                  <p className="mt-px font-medium hover:underline text-lg">{interview.title}</p>
                </a>
                <p className="mt-px text-gray-600">{formatDateString(interview.date)}</p>
                <Pillbox className="mt-2">{interview.publisher}</Pillbox>
                <div className="my-4 prose text-gray-800">
                  <TinaMarkdown content={interview.body} components={components} />
                </div>
                <div>
                  {/* Custom LinkButton */}
                  <ExternalLinkButton href={interview.link} >
                    Link ({interview.publisher})
                  </ExternalLinkButton>
                </div>
              </li>
            ))}
          </ul>
          :
          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">No interviews published yet—check back soon!</p>
        }

      </section>

      {/* Reflections */}
      <section className="mt-24 md:mt-28 lg:mt-32 w-full min-w-fit bg-theme-lightblue/10 px-6 py-10 rounded-lg">
        {/* Magic value: -mt with +pt pushes h2 below absolutely placed top nav so anchor links work */}
        <h2 id={slugify(publicAnthropologyPage.reflectionsHeading)} data-tina-field={tinaField(publicAnthropologyPage, "reflectionsHeading")} className="anchor text-4xl text-center mx-auto md:mx-0 md:ml-5">{publicAnthropologyPage.reflectionsHeading}</h2>
        <ul className="mt-12 grid mx-auto sm:grid-cols-3 gap-8 max-w-4xl">
          {props.reflections.sort((a, b) => new Date(b.date) - new Date(a.date)).map((reflection) => (
            <li key={reflection.id}>
              <a href={`/reflections/${reflection._sys.filename}`} className="text-center">
                <img src={reflection.featuredImage} alt={reflection.featuredImageAlt} className="object-cover w-full max-w-sm aspect-square rounded-md mx-auto hover:outline hover:outline-1 hover:outline-gray-300 hover:shadow-md"/>
                <p className="mt-1 text-sm text-gray-600">{formatDateString(reflection.date)}</p>
                <p className="mt-px font-medium hover:underline">{reflection.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>




    </PageWrapper>
  );
}
