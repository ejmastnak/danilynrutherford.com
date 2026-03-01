import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyEventsPageQuery, MyEventsPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyEventsPageQueryVariables;
  data: MyEventsPageQuery;
  query: string;
};

export default function EventsPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const eventsPage = data.eventsPage;

  return (
    <PageWrapper>
      This is the Events page!
    </PageWrapper>
  );
}
