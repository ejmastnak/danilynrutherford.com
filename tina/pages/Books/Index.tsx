import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyBooksPageQuery, MyBooksPageQueryVariables, Book } from "@tina/__generated__/types";
type Props = {
  variables: MyBooksPageQueryVariables;
  data: MyBooksPageQuery;
  query: string;
  books: Array<Book>,
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

      <ul className="mt-5">
        {props.books.map((book) => (
          <li key={book.id}>
            <a href={`/books/${book._sys.filename}`} className="text-blue-500 hover:text-blue-600 hover:underline">{book.title}</a>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
