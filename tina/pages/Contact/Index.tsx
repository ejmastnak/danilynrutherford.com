import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyContactPageQuery, MyContactPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyContactPageQueryVariables;
  data: MyContactPageQuery;
  query: string;
};

export default function ContactPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const contactPage = data.contactPage;

  return (
    <PageWrapper>
      <h1 data-tina-field={tinaField(contactPage, "h1")} className="text-4xl">{contactPage.h1}</h1>
      <div data-tina-field={tinaField(contactPage, "intro")} className="mt-4 prose">
        <TinaMarkdown content={contactPage.intro} />
      </div>

      {/* Address */}
      <div className="mt-8">
        <h2 data-tina-field={tinaField(contactPage, "addressHeading")} className="font-semibold">{contactPage.addressHeading}</h2>
        <div className="mt-1 text-gray-700" data-tina-field={tinaField(contactPage, "address")}>
          <TinaMarkdown content={contactPage.address} />
        </div>
      </div>

      {/* Email */}
      <div className="mt-6">
        <h2 data-tina-field={tinaField(contactPage, "emailHeading")} className="font-semibold">{contactPage.emailHeading}</h2>
        <ul className="mt-1 flex flex-col gap-y-1">
          <li>
            <a data-tina-field={tinaField(contactPage, "primaryEmail")} className="inline-block text-gray-700 hover:text-blue-700 hover:underline" href={`mailto:${contactPage.primaryEmail}`}>
              {contactPage.primaryEmail}
            </a>
          </li>
          <li>
            <a data-tina-field={tinaField(contactPage, "secondaryEmail")} className="inline-block text-gray-700 hover:text-blue-700 hover:underline" href={`mailto:${contactPage.secondaryEmail}`}>
              {contactPage.secondaryEmail}
            </a>
          </li>
        </ul>
      </div>

    </PageWrapper>
  );
}
