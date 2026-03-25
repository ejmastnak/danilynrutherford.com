import type { ComponentPropsWithoutRef } from "react";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

type Props = ComponentPropsWithoutRef<"a"> & {
  tinaField?: string;
};

export default function LinkButton({ tinaField, className, children, ...props }: Props) {

  return (
    <a
      data-tina-field={tinaField}
      className={`inline-flex gap-x-1 items-center text-center rounded-full bg-theme-darkblue px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-theme-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-darkblue ${className ?? ""}`}
      {...props}
    >
      {children}
      <ArrowTopRightOnSquareIcon className="size-5 shrink-0"/>
    </a>
  );

}
