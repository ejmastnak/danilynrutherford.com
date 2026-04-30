import Wrapper from '@tina/shared/Wrapper.tsx'
import type { ReactNode } from "react";

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  headings?: Heading[];
  children: ReactNode;
}

export default function PageWrapper({ headings, children }: Props) {
  return (
    <Wrapper className="py-10 md:py-16" headings={headings}>
      {children}
    </Wrapper>
  );
}
