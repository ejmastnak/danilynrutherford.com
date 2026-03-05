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
      <h1 data-tina-field={tinaField(booksPage, "h1")} className="text-5xl text-center md:text-left mx-auto md:mx-0 w-fit border-b border-gray-300 pb-1 md:border-none">{booksPage.h1}</h1>

      <ul className="mt-12 flex flex-col gap-y-20">
        {props.books.map((book) => (
          <li key={book.id} className="border-b border-gray-300 pb-20">
            <div className="md:flex gap-x-16">
              <a href={`/books/${book._sys.filename}`} className="hover:outline hover:shadow-md hover:outline-1 hover:outline-gray-300 h-fit rounded-md">

                {/* Mobile title/subtitle */}
                <div className="md:hidden text-center mx-auto mb-6">
                  <a href={`/books/${book._sys.filename}`} className="hover:underline"><h2 className="text-3xl font-medium">{book.title}</h2></a>
                  <p className="text-lg mt-0.5">{book.subtitle}</p>
                </div>

                <img
                  src={book.image}
                  alt={book.imageAlt}
                  className="shrink-0 w-full max-w-xs sm:max-w-sm h-full mx-auto md:w-80 lg:w-96 object-cover rounded-md border bordery-gray-200"
                />
              </a>
              <div className="mt-6 md:mt-2 text-gray-800">

                {/* Desktop title/subtitle */}
                <div className="hidden md:block">
                  <a href={`/books/${book._sys.filename}`} className="hover:underline"><h2 className="text-3xl font-medium">{book.title}</h2></a>
                  <p className="text-lg">{book.subtitle}</p>
                </div>

                <div className="mt-4 prose line-clamp-5 max-w-lg md:max-w-xl mx-auto md:mx-0">
                  <TinaMarkdown content={book.description} />
                </div>

                <div className="mt-6 w-fit mx-auto md:mx-0">
                  <LinkButton href={`/books/${book._sys.filename}`} className="text-nowrap">
                    More <span className="md:hidden lg:inline">about <span className="italic">{book.title}</span></span>
                  </LinkButton>
                </div>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
