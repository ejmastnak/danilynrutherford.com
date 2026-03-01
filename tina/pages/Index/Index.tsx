import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyHomePageQuery, MyHomePageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyHomePageQueryVariables;
  data: MyHomePageQuery;
  query: string;
};

export default function HomePage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const homePage = data.homePage;

  return (
    <PageWrapper>
      This is the home page!
    </PageWrapper>
  );
}
