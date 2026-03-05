import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import { formatDateString } from '@src/lib/date.js'

import type { MyPublicWorksPageQuery, MyPublicWorksPageQueryVariables, PublicWork } from "@tina/__generated__/types";
type Props = {
  variables: MyPublicWorksPageQueryVariables;
  data: MyPublicWorksPageQuery;
  query: string;
  publicWorks: Array<PublicWork>,
};

export default function PublicWorksPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const publicWorksPage = data.publicWorksPage;

  const publicWorksByType = props.publicWorks.reduce((acc, item) => {
    (acc[item.type] ||= []).push(item);
    return acc;
  }, {});

  return (
    <PageWrapper>
      <h1 className="text-5xl">{publicWorksPage.h1}</h1>

      <div className="mt-5 prose">
        <TinaMarkdown content={publicWorksPage.description} />
      </div>

      <div className="mt-8">
        {Object.keys(publicWorksByType).map((publicWorkType) => (
          <div>
            <h2 className="text-3xl text-center md:text-left border-b border-gray-300 pb-1 w-fit mx-auto md:mx-0 md:ml-5">{publicWorkType}</h2>
            <ul className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
              {publicWorksByType[publicWorkType].sort((a, b) => new Date(b.date) - new Date(a.date)).map((publicWork) => (
                <li key={publicWork.id}>
                  <a href={`/public-writings-and-media/${publicWork._sys.filename}`} className="text-center">
                    <img src={publicWork.featuredImage} alt={publicWork.featuredImageAlt} className="object-cover w-full max-w-sm sm:w-56 h-56 rounded-md mx-auto hover:outline hover:outline-1 hover:outline-gray-300 hover:shadow-md"/>
                    <p className="mt-1 text-sm text-gray-600">{formatDateString(publicWork.date)}</p>
                    <p className="mt-px font-medium hover:underline">{publicWork.title}</p>
                  </a>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>



    </PageWrapper>
  );
}
