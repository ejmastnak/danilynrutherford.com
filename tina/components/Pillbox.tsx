import type { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Pillbox({className, children}: Props) {
  return (
    <span className={`inline-flex items-center w-fit rounded-full bg-theme-lightblue px-2 py-1 text-xs font-medium text-theme-darkblue ring-1 ring-inset ring-theme-darkblue/10 ${className ?? ""}`}>{children}</span>
  );
}
