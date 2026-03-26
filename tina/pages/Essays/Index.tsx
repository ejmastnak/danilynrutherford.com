import { useTina, tinaField } from "tinacms/dist/react";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import { renderChicagoCitation } from '@src/lib/renderChicagoCitation.jsx'
import essayCategories from '@src/assets/data/essayCategories.json'

import type { MyEssaysPageQuery, MyEssaysPageQueryVariables, Essay } from "@tina/__generated__/types";
type Props = {
  variables: MyEssaysPageQueryVariables;
  data: MyEssaysPageQuery;
  query: string;
  essays: Array<Essay>;
};

export default function EssaysPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const essaysPage = data.essaysPage;

  const essaysByCategory = essayCategories.reduce((acc, category) => {
    acc[category] = [];
    return acc;
  }, {});

  for (const essay of props.essays) {
    if (essaysByCategory[essay.category]) {
      essaysByCategory[essay.category].push(essay);
    }
  }

  return (
    <PageWrapper>
      <h1 className="text-5xl">{essaysPage.h1}</h1>
      <div className="mt-5 prose">
        <TinaMarkdown content={essaysPage.intro} />
      </div>

      <div className="mt-10 flex flex-col gap-y-10">
        {essayCategories
          .filter(category => essaysByCategory[category].length > 0)
          .map((category) => (
            <div>
              <h2 className="text-2xl">{category}</h2>
              <ul className="flex flex-col -mx-6 sm:mx-0 divide-y w-fit max-w-2xl">
                {essaysByCategory[category].sort((a, b) => b.year - a.year).map((publication) => (
                  <li key={publication.id}>
                    <div className="p-6 rounded-lg max-w-3xl">
                      <div className="font-medium">{renderChicagoCitation(publication)}</div>
                      <p className="mt-0.5">{publication.formatType}</p>
                      {publication.href && 
                        <a href={publication.href} target="_blank" rel="noopener noreferrer" className="mt-3 w-fit text-gray-700 font-medium inline-flex items-center gap-x-1 hover:text-gray-900 hover:underline">Link <ArrowTopRightOnSquareIcon className="size-5 shrink-0"/></a>
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
