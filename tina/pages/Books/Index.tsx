import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyBooksPageQuery, MyBooksPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyBooksPageQueryVariables;
  data: MyBooksPageQuery;
  query: string;
};

export default function BooksPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const booksPage = data.booksPage;

  return (
    <PageWrapper>
      This is the Books page!
    </PageWrapper>
  );
}
