import type { ReactNode } from "react";
import TableOfContents from '@tina/components/TableOfContents.tsx'
import MobileTableOfContents from '@tina/components/MobileTableOfContents.tsx'

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  headings?: Heading[];
  className: string;
  children: ReactNode;
}

export default function Wrapper({ headings, className, children }: Props) {
  return (
    <div className={`max-w-6xl mx-auto flex gap-x-8 px-6 md:px-10 ${className ?? ""}`} >
      {/* Magic value: top-24 to push TOC under nav */}
      {/* Magic value: 100vh-20rem keeps nav from colliding into footer at bottom of page and scrolling off screen at top */}
      {headings && <TableOfContents className="hidden lg:block w-60 top-24 max-h-[calc(100vh-20rem)]" headings={headings} /> }
      <div className="overflow-x-auto">
        {children}
      </div>
    </div>
  );
}
