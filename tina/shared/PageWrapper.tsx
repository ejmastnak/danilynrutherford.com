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
  className?: string;
}

export default function PageWrapper({ headings, children, className }: Props) {
  return (
    <Wrapper className={`py-10 md:py-16 ${className ?? ''}`} headings={headings}>
      {children}
    </Wrapper>
  );
}
