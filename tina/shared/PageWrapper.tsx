import Wrapper from '@tina/shared/Wrapper.tsx'
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return (
    <Wrapper className="py-10 md:py-16">
      {children}
    </Wrapper>
  );
}
