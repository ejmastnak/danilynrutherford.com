import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import Event from '@tina/components/Event.tsx'
import Wrapper from '@tina/shared/Wrapper.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'

import type { MyHomePageQuery, MyHomePageQueryVariables, Book, Event } from "@tina/__generated__/types";
type Props = {
  variables: MyHomePageQueryVariables;
  data: MyHomePageQuery;
  query: string;
  books: Array<Book>;
  events: Array<Event>;
};

export default function HomePage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const homePage = data.homePage;

  const BEAUTIFUL_MYSTERY_ID = "tina/content/books/beautiful-mystery.json";
  const featuredBook = props.books.find(book => book.id == BEAUTIFUL_MYSTERY_ID);
  const otherBooks = props.books.filter(book => book.id != BEAUTIFUL_MYSTERY_ID).sort((a, b) => b.year - a.year);

  const featuredEssays = [
    {
      title: "Emergency Rooms",
      href: "https://www.degruyter.com/document/doi/10.36019/9781978841413-006/html?srsltid=AfmBOoqe-QXW-gfqyQCoMYsVytg6lfnbE4bbexLFGxiQqi2vFnl-JUBh",
      body: "Who gets to be the expert when it comes to care? Mother knows best, goes one version of the saying. Should it really be up to the doctors to decide what’s wrong and what to do? But what happens when mother doesn’t know best? When that warm and caring role starts feeling like an awkward gorilla costume, soft on the outside, hot and itchy on the inside, a get-up that makes it hard to move, see, and breathe?",
    },
    {
      title: "Becoming an Operating System",
      href: "https://anthrosource.onlinelibrary.wiley.com/doi/full/10.1111/amet.13013",
      body: "What is communicated in communication? Given our assumptions about language and personhood, we Americans tend to think we know. Yet for those of us who live in the company of people like my daughter, there isn’t a clear answer to this question. We dream of depths of meaning. But our loved ones have taught us that communication is just as much a matter of surfaces, of the sensations that swirl around a touch, a sound, or a sight. "
    },
    {
      title: "Proximity to Disability",
      href: "https://muse.jhu.edu/article/757552/pdf",
      body: "Proximity can be overwhelming. Proximity can be particularly overwhelming in these modern times. When we become close to another person, we expect them to affirm our identity: to help us see ourselves for who we really are. This is as much the case for our disabled children as for lovers. But what happens when we don’t get the recognition we’ve been taught we need?",
    },
    {
      title: "Kinky Empiricism",
      href: "https://anthrosource.onlinelibrary.wiley.com/doi/full/10.1111/j.1548-1360.2012.01154.x",
      body: "It is time for anthropology to reclaim the empirical. But this reclaiming must be accompanied by a rethinking of what empiricism means. What I affirm in this article is a kind of empiricism that builds on the singular power of anthropological ways of knowing the world. A kinky empiricism: kinky, like a slinky, twisting back on itself, but also kinky, like S and M and other queer elaborations of established scenarios, relationships, and things.",
    },
  ]

  const featuredPraise = [
    {
      review: "…a highly sophisticated, polished, and at times dazzling piece of work.",
      reviewer: "Webb Keane",
      book: "Raiding the Land of the Foreigners",
    },
    {
      review: "…anthropology at its very best.",
      reviewer: "Thomas Blom Hansen",
      book: "Laughing at Leviathan",
    },
    {
      review: "…a deeply thoughtful and refreshingly programmatic book.",
      reviewer: "Patricia Spyer",
      book: "Living in the Stone Age",
    },
    {
      review: "Beautifully written and deeply moving.",
      reviewer: "Tanya Luhrmann",
      book: "Beautiful Mystery",
    },
  ]

  const today = new Date()
  const N = 2
  const upcomingEvents = props.events.filter(e => new Date(e.date) >= today).sort((a, b) => a.date >= b.date ? 1 : -1);
  const pastEvents = props.events.filter(e => new Date(e.date) < today).sort((a, b) => a.date < b.date ? 1 : -1);

  return (
    <div>

      <PageWrapper>
        {/* Featured book */}
        <div className="flex flex-col md:flex-row gap-x-10 lg:gap-x-12">
          <div className="">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-center md:text-left">Danilyn<br/>Rutherford</h1>
            <p className="mt-2 md:text-lg text-gray-700 text-center md:text-left">Anthropologist and author</p>

            {/* Desktop about blurb */}
            <div className="hidden md:block mt-8">
              <div className="prose">
                A short introductory paragraph introducing Danilyn and her work.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <LinkButton className="mt-5" href="/books/beautiful-mystery">
                New book: <span className="italic">Beautiful Mystery</span> (2025)
              </LinkButton>
            </div>

          </div>
          <img src={featuredBook.image} alt={featuredBook.imageAlt} className="w-full mx-auto md:mx-0 max-w-md lg:max-w-lg object-cover h-fit" />
        </div>

        {/* Mobile about blurb and link button */}
        <div className="md:hidden mt-8">
          <div className="prose max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="mt-5 w-fit mx-auto">
            <LinkButton href="/books/beautiful-mystery">
              New book: <span className="italic">Beautiful Mystery</span> (2025)
            </LinkButton>
          </div>
        </div>

        {/* Other books */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-5xl font-medium text-center sm:text-left">Academic books</h2>
          <ul className="mt-10 grid sm:grid-cols-3 gap-x-8 gap-y-12 mx-auto">
            {otherBooks.map((book) => (
              <li>
                <img src={book.image} alt={book.imageAlt} className="w-64 sm:max-w-md object-cover w-full aspect-[2/3] mx-auto rounded-md" />
                <div className="mt-3 sm:mt-1.5 text-center">
                  <p className="text-lg font-semibold">{book.title}</p>
                  <p className="text-gray-600">{book.publisher}, {book.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Selected essays */}
        <div className="mt-20 md:mt-24">
          <h2 className="text-5xl font-medium">Selected Essays</h2>
          <ul className="mt-8 grid md:grid-cols-2 gap-8 mx-auto">
            {featuredEssays.map((essay) => (
              <a href={essay.href} className="">
                <li className="bg-gray-50 rounded-md py-4 px-6 border border-gray-100 hover:outline hover:outline-1 hover:outline-gray-200 hover:shadow-md">
                  <p className="underline font-semibold hover:text-blue-600">
                    {essay.title}
                  </p>
                  <div className="mt-2 prose">
                    {essay.body}
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </PageWrapper>

      {/* Praise */}
      <div className="mt-12 bg-theme-darkgreen text-white py-24">
        <Wrapper>
          <h2 className="text-5xl font-medium">Praise</h2>
          <ul className="mt-8 grid md:grid-cols-4 gap-8 mx-auto px-4">
            {featuredPraise.map((praise) => (
              <li>
                <p className="font-semibold">“{praise.review}”</p>
                <p className="mt-3">— {praise.reviewer} on <span className="italic">{praise.book}</span></p>
              </li>
            ))}
          </ul>
        </Wrapper>
      </div>

      {/* Events */}
      <PageWrapper>
        <h2 className="text-5xl font-medium">Events</h2>
        <ul role="list" className="mt-8 lg:mt-12 flex flex-col gap-y-8 w-fit">
          {upcomingEvents.slice(0, N).map((event) => (
            <li key={event.id}><Event event={event}/></li>
          ))}
          <li className="border-t border-gray-300"/>
          {upcomingEvents.length < N && 
            pastEvents.slice(0, N - pastEvents.length).map((event) => (
              <li key={event.id}><Event event={event}/></li>
            ))
          }
        </ul>
        <LinkButton className="mt-5" href="/events" >
          More events
        </LinkButton>
      </PageWrapper>


    </div>
  );
}
