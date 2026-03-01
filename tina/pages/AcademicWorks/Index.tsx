import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyAcademicWorksPageQuery, MyAcademicWorksPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyAcademicWorksPageQueryVariables;
  data: MyAcademicWorksPageQuery;
  query: string;
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
    </PageWrapper>
  );
}
