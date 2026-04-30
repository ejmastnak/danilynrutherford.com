import { useTina, tinaField } from "tinacms/dist/react";
import { useEffect, useState } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { MyEventsPageQuery, MyEventsPageQueryVariables, Event } from "@tina/__generated__/types";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'
import Event from '@tina/components/Event.tsx'

type Props = {
  variables: MyEventsPageQueryVariables;
  data: MyEventsPageQuery;
  query: string;
  events: Array<Event>;
};

export default function EventsPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const eventsPage = data.eventsPage;

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

  // Runs client-side if JS enabled
  const [upcomingEvents, setUpcomingEvents] = useState(initial.upcoming);
  const [pastEvents, setPastEvents] = useState(initial.past);

  useEffect(() => {
    const { upcoming, past } = splitEvents(props.events, new Date());
    setUpcomingEvents(upcoming);
    setPastEvents(past);
  }, [props.events]);

  return (
    <PageWrapper>
      <h1 data-tina-field={tinaField(eventsPage, "h1")} className="text-4xl ">{eventsPage.h1}</h1>

      {/* Upcoming events */}
      <div className="mt-10">
        <h2 data-tina-field={tinaField(eventsPage, "upcomingEventsHeading")} className="text-2xl font-semibold">{eventsPage.upcomingEventsHeading}</h2>
        <ul role="list" className="max-w-3xl">
          {upcomingEvents.map((event) => (
            <li key={event.id} className="py-8 border-b border-gray-300"><Event event={event} /></li>
          ))}
        </ul>
        {upcomingEvents.length == 0 && 
          <div data-tina-field={tinaField(eventsPage, "noUpcomingEventsMessage")} className="mt-2 text-gray-600">
            <TinaMarkdown content={eventsPage.noUpcomingEventsMessage} />
          </div>
        }
      </div>

      {/* Past events */}
      <div className="mt-10 md:mt-16">
        <h2 data-tina-field={tinaField(eventsPage, "pastEventsHeading")} className="text-2xl font-semibold">{eventsPage.pastEventsHeading}</h2>
        <ul role="list" className="max-w-3xl">
          {pastEvents.map((event) => (
            <li key={event.id} className="py-8 border-b border-gray-300"><Event event={event} /></li>
          ))}
        </ul>
        {pastEvents.length == 0 && 
          <p className="mt-2 text-gray-600">
            No past events to display.
          </p>
        }
      </div>

    </PageWrapper>
  );
}
