import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

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

  return (
    <PageWrapper>
      This is the AcademicWorks page!
      <pre>
        {JSON.stringify(props.academicWorks, null, 2)}
      </pre>
    </PageWrapper>
  );
}
