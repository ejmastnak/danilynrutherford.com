import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

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

  return (
    <PageWrapper>
      This is the PublicWorks page!

      <ul className="mt-5">
        {props.publicWorks.sort((a, b) => new Date(b.date) - new Date(a.date)).map((publicWork) => (
          <li key={publicWork.id}>
            <a href={`/public-writings-and-media/${publicWork._sys.filename}`} className="text-blue-500 hover:text-blue-600 hover:underline">{publicWork.title}</a>
          </li>
        ))}
      </ul>

    </PageWrapper>
  );
}
