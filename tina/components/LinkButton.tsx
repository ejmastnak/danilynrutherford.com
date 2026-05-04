import type { ComponentPropsWithoutRef } from "react";
import { ChevronRightIcon } from '@heroicons/react/24/outline'

type Props = ComponentPropsWithoutRef<"a"> & {
  tinaField?: string;
};

export default function LinkButton({ tinaField, className, children, ...props }: Props) {

  return (
    <a
      data-tina-field={tinaField}
      className={`inline-flex gap-x-1 items-center text-center rounded-full bg-theme-orange px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-theme-darkorange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-darkorange text-nowrap ${className ?? ""}`}
      {...props}
    >
      {children}
      <ChevronRightIcon className="size-5 shrink-0"/>
    </a>
  );

}
