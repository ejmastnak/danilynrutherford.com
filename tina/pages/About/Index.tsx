import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyAboutPageQuery, MyAboutPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyAboutPageQueryVariables;
  data: MyAboutPageQuery;
  query: string;
};

export default function AboutPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const aboutPage = data.aboutPage;

  return (
    <PageWrapper>
      <h1 data-tina-field={tinaField(aboutPage, "h1")} className="text-5xl mx-auto text-center">{aboutPage.h1}</h1>

      <img className="object-cover max-w-md mx-auto rounded-md" data-tina-field={tinaField(aboutPage, "image")} src={aboutPage.image} alt={aboutPage.imageAlt}/>

      <div data-tina-field={tinaField(aboutPage, "body")} className="prose mx-auto text-center">
        <TinaMarkdown content={aboutPage.body} />
      </div>

      <div className="w-fit mx-auto">
        <LinkButton href={aboutPage.cv}>
          {aboutPage.cvButtonText}
        </LinkButton>
      </div>

    </PageWrapper>
  );
}
