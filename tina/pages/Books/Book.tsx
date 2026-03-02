import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { Book, BookQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: BookQueryVariables;
  data: BookQuery;
  query: string;
};

export default function Book(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const book = data.book;

  return (
    <PageWrapper>
      {book.title}
    </PageWrapper>
  );
}
