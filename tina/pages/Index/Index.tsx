import { useTina, tinaField } from "tinacms/dist/react";
import { useEffect, useState } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import EventComponent from '@tina/components/Event.tsx'
import Wrapper from '@tina/shared/Wrapper.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'

import type { MyHomePageQuery, MyHomePageQueryVariables, Book, Event } from "@tina/__generated__/types";
type Props = {
  variables: MyHomePageQueryVariables;
  data: MyHomePageQuery;
  query: string;
  events: Array<Event>;
};

export default function HomePage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const homePage = data.homePage;

  const EVENTS_TO_DISPLAY = 2

  function sortAsc(a, b) {
    return new Date(a.date) - new Date(b.date);
  }

  function sortDesc(a, b) {
    return new Date(b.date) - new Date(a.date);
  }

  function splitEvents(events, today) {
    const upcoming = [];
    const past = [];

    events.forEach((e) => {
      const date = new Date(e.date);
      if (date >= today) upcoming.push(e);
        else past.push(e);
    });

    return {
      upcoming: upcoming.sort(sortAsc),
      past: past.sort(sortDesc),
    };
  }

  // SSG fallback (runs at build time) 
  const initial = splitEvents(props.events, new Date());

  // Runs during SSG, and also client-side if JS enabled
  const [upcomingEvents, setUpcomingEvents] = useState(initial.upcoming);
  const [pastEvents, setPastEvents] = useState(initial.past);

  useEffect(() => {
    const { upcoming, past } = splitEvents(props.events, new Date());
    setUpcomingEvents(upcoming);
    setPastEvents(past);
  }, [props.events]);

  return (
    <div>

      <img data-tina-field={tinaField(homePage, "heroImage")} className="mx-auto object-cover w-full h-[360px] sm:h-[440px] lg:h-[700px] xl:h-[750px] md:rounded-md" src={homePage.heroImage} alt={homePage.heroImageAlt}/>

      <PageWrapper>

        <div className="pb-20 border-b border-gray-300 ">

          <h1 data-tina-field={tinaField(homePage, "h1")} className="mt-3 text-5xl sm:text-6xl mx-auto text-center">{homePage.h1}</h1>

          {/* About blurb */}
          <div data-tina-field={tinaField(homePage, "aboutText")} className="mt-8 md:mt-12 prose mx-auto text-center xxxs:text-left max-w-2xl">
            <TinaMarkdown content={homePage.aboutText} />
          </div>

        </div>

        {/* Featured book */}
        <div className="mt-24 flex flex-col md:flex-row gap-x-10 lg:gap-x-12">
          <div>
            <h1 className="text-5xl font-medium text-center md:text-left">{homePage.featuredBook.title}</h1>
            <p className="mt-0.5 md:text-lg text-gray-700 text-center md:text-left">{homePage.featuredBook.subtitle}</p>

            {/* Desktop about blurb */}
            <div className="hidden md:block mt-5">
              <div data-tina-field={tinaField(homePage, "featuredBookDescription")} className="prose">
                <TinaMarkdown content={homePage.featuredBookDescription} />
              </div>
              <LinkButton data-tina-field={tinaField(homePage, "featuredBookLinkText")} className="mt-5" href={`/books/${homePage.featuredBook._sys.filename}`}>
                <TinaMarkdown content={homePage.featuredBookLinkText} />
              </LinkButton>
            </div>

          </div>
          <a href={`/books/${homePage.featuredBook._sys.filename}`} className="h-fit">
            <img
              src={homePage.featuredBook.image}
              alt={homePage.featuredBook.imageAlt}
              className="w-full mx-auto md:mx-0 max-w-md lg:max-w-lg object-cover h-fit rounded hover:outline hover:outline-1 hover:outline-gray-300 hover:shadow-md" 
            />
          </a>

        </div>

        {/* Mobile about blurb and link button */}
        <div className="md:hidden mt-8">
          <div data-tina-field={tinaField(homePage, "featuredBookDescription")} className="prose max-w-xl">
            <TinaMarkdown content={homePage.featuredBookDescription} />
          </div>
          <div className="mt-5 w-fit mx-auto">
            <LinkButton data-tina-field={tinaField(homePage, "featuredBookLinkText")} className="mt-5" href={`/books/${homePage.featuredBook._sys.filename}`}>
              <TinaMarkdown content={homePage.featuredBookLinkText} />
            </LinkButton>
          </div>
        </div>

        {/* Academic books */}
        <section className="mt-16 md:mt-20">
          <h2 data-tina-field={tinaField(homePage, "academicBooksHeading")} className="text-5xl font-medium text-center sm:text-left">{homePage.academicBooksHeading}</h2>
          <ul className="mt-10 grid sm:grid-cols-3 gap-x-8 gap-y-12 mx-auto">
            {homePage.featuredAcademicBooks.map((item) => (
              <li key={item.book.id}>
                <a href={`/books/${item.book._sys.filename}`} className="h-fit">
                  <img
                    src={item.book.image}
                    alt={item.book.imageAlt}
                    className="w-64 sm:max-w-md object-cover w-full aspect-[2/3] mx-auto rounded-md hover:outline hover:outline-1 hover:outline-gray-300 hover:shadow-md"
                  />
                </a>
                <div className="mt-3 sm:mt-1.5 text-center">
                  <p className="text-lg font-semibold">{item.book.title}</p>
                  <p className="text-gray-600">{item.book.publisher}, {item.book.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Selected essays */}
        <section className="mt-20 md:mt-24">
          <h2 data-tina-field={tinaField(homePage, "featuredEssaysHeading")} className="text-5xl font-medium">{homePage.featuredEssaysHeading}</h2>
          <ul className="mt-8 grid md:grid-cols-2 gap-8 mx-auto">
            {homePage.featuredEssays.map((essay) => (
              <a href={essay.link} key={essay.title}>
                <li className="bg-gray-50 rounded-md py-4 px-6 border border-gray-100 hover:outline hover:outline-1 hover:outline-gray-200 hover:shadow-md">
                  <p data-tina-field={tinaField(essay, "title")} className="underline font-semibold hover:text-blue-600">
                    {essay.title}
                  </p>
                  <div data-tina-field={tinaField(essay, "description")} className="mt-2 prose">
                    <TinaMarkdown content={essay.description} />
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </section>
      </PageWrapper>

      {/* Praise */}
      <section className="mt-12 bg-theme-darkgreen text-white py-24">
        <Wrapper>
          <h2 data-tina-field={tinaField(homePage, "praiseHeading")} className="text-5xl font-medium">{homePage.praiseHeading}</h2>
          <ul className="mt-8 grid md:grid-cols-4 gap-8 mx-auto px-4">
            {homePage.featuredPraise.map((praise) => (
              <li key={praise.reviewer}>
                <div data-tina-field={tinaField(praise, "review")} className="font-semibold">
                  <TinaMarkdown content={praise.review} />
                </div>
                <p className="mt-3">— <span data-tina-field={tinaField(praise, "reviewer")}>{praise.reviewer}</span> on <span data-tina-field={tinaField(praise, "work")} className="italic">{praise.work}</span></p>
              </li>
            ))}
          </ul>
        </Wrapper>
      </section>

      {/* Events */}
      <section>
        <PageWrapper>
          <h2 data-tina-field={tinaField(homePage, "eventsHeading")} className="text-5xl font-medium">{homePage.eventsHeading}</h2>
          <ul role="list" className="mt-8 lg:mt-12 flex flex-col gap-y-8 w-fit">
            {upcomingEvents.slice(0, EVENTS_TO_DISPLAY).map((event) => (
              <li key={event.id}><EventComponent event={event}/></li>
            ))}
            <li className="border-t border-gray-300"/>
            {upcomingEvents.length < EVENTS_TO_DISPLAY && 
              pastEvents.slice(0, EVENTS_TO_DISPLAY - pastEvents.length).map((event) => (
                <li key={event.id}><EventComponent event={event}/></li>
              ))
            }
          </ul>
          <LinkButton data-tina-field={tinaField(homePage, "eventsLinkText")} className="mt-5" href="/events" >
            {homePage.eventsLinkText}
          </LinkButton>
        </PageWrapper>
      </section>

    </div>
  );
}
