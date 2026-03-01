import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyAboutPageQuery, MyAboutPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyAboutPageQueryVariables;
  data: MyAboutPageQuery;
  query: string;
};

export default function AboutPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const aboutPage = data.aboutPage;

  return (
    <PageWrapper>
      This is the About page!
    </PageWrapper>
  );
}
