import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'
import { condenseAst } from '@src/lib/ast.js'

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
      <div className="flex flex-col md:flex-row-reverse gap-y-6 gap-x-12">
        <div className="w-full max-w-2xl">

          <div className="text-center md:text-left">
            <h1 data-tina-field={tinaField(book, "title")} className="text-4xl">{book.title}</h1>
            <p data-tina-field={tinaField(book, "subtitle")} className="mt-2 text-xl sm:text-2xl text-gray-800">{book.subtitle}</p>
            <p className="mt-2 text-gray-800"><span data-tina-field={tinaField(book, "publisher")}>{book.publisher}</span>, <span data-tina-field={tinaField(book, "year")}>{book.year}</span></p>
          </div>

          {/* Desktop body and link button */}
          <div className="mt-6 hidden md:block ">
            <LinkButton data-tina-field={tinaField(book, "publisherLinkButtonText")} href={book.link}>
              {book.publisherLinkButtonText}
            </LinkButton>
            <div data-tina-field={tinaField(book, "description")} className="prose mt-6 pt-6 border-t border-gray-300">
              <TinaMarkdown content={book.description} />
            </div>
          </div>
        </div>
        <img data-tina-field={tinaField(book, "image")} className="shrink-0 h-full mx-auto w-56 md:w-80 lg:w-96 object-cover rounded-md" src={book.image} alt={book.imageAlt}/>
      </div>

      {/* Mobile body and link button */}
      <div className="mt-6 md:hidden ">
        <div className="mx-auto w-fit">
          <LinkButton data-tina-field={tinaField(book, "publisherLinkButtonText")} href={book.link}>
            {book.publisherLinkButtonText}
          </LinkButton>
        </div>
        <div data-tina-field={tinaField(book, "description")} className="mt-5 prose">
          <TinaMarkdown content={book.description} />
        </div>
      </div>

      {/* Reviews */}
      <div className="pt-16 mt-16 border-t border-gray-200">
        <h2 data-tina-field={tinaField(book, "reviewsHeading")} className="text-4xl">{book.reviewsHeading}</h2>
        <div className="mt-8 flex flex-col gap-y-10">
          {book.reviews.map((review, idx) => (
            <div key={condenseAst(review.reviewer)} className={(idx % 2 == 1) ? 'ml-auto' : ''}>
              <div data-tina-field={tinaField(review, "review")} className="max-w-3xl font-medium text-gray-800 leading-relaxed"><TinaMarkdown content={review.review} /></div>
              <div data-tina-field={tinaField(review, "reviewer")} className="mt-2"><TinaMarkdown content={review.reviewer} /></div>
            </div>
          ))}
        </div>
      </div>

    </PageWrapper>
  );
}
