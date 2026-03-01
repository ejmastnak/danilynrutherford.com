import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyPublicWorksPageQuery, MyPublicWorksPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyPublicWorksPageQueryVariables;
  data: MyPublicWorksPageQuery;
  query: string;
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
    </PageWrapper>
  );
}
