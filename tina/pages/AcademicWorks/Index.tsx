import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import { renderChicagoCitation } from '@src/lib/renderChicagoCitation.jsx'

import type { MyAcademicWorksPageQuery, MyAcademicWorksPageQueryVariables, AcademicWork } from "@tina/__generated__/types";
type Props = {
  variables: MyAcademicWorksPageQueryVariables;
  data: MyAcademicWorksPageQuery;
  query: string;
  academicWorks: Array<AcademicWork>;
};

export default function AcademicWorksPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const academicWorksPage = data.academicWorksPage;

  const academicWorksByDisplayType = props.academicWorks.reduce((acc, item) => {
    (acc[item.displayType] ||= []).push(item);
    return acc;
  }, {});

  return (
    <PageWrapper>
      <h1 className="text-5xl">{academicWorksPage.h1}</h1>
      <div className="mt-5 prose">
        <TinaMarkdown content={academicWorksPage.intro} />
      </div>

      <div className="mt-10 flex flex-col gap-y-10">
        {Object.keys(academicWorksByDisplayType).map((type) => (
          <div>
            <h2 className="text-2xl">{type}</h2>
            <ul className="flex flex-col -mx-6 sm:mx-0 divide-y w-fit max-w-2xl">
              {academicWorksByDisplayType[type].sort((a, b) => b.year - a.year).map((publication) => (
                <li key={publication.id}>
                  <div className="p-6 rounded-lg hover:bg-gray-50 max-w-3xl">
                    <div className="font-medium">{renderChicagoCitation(publication)}</div>
                    {publication.formatType}
                    {publication.href && 
                      <a href={publication.href} target="_blank" rel="noopener noreferrer" className="mt-3 w-fit text-gray-700 font-medium flex items-center hover:text-gray-900 hover:underline">Link</a>
                    }
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>


    </PageWrapper>
  );
}
