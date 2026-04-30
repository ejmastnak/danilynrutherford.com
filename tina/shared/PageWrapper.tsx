import Wrapper from '@tina/shared/Wrapper.tsx'
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: Props) {
  return (
    <Wrapper className={`py-10 md:py-16 ${className ?? ''}`}>
      {children}
    </Wrapper>
  );
}
