import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"h2">;

{/* For h2s that will serve as anchor tags */}
{/* Magic value: scroll-mt pushes h2 below absolutely placed top nav so anchor links work */}
{/* Larger small screen value accomodates additional mobile toc */}
export default function H2Anchorable({ className, ...props }: Props) {
  return (
    <h2
      {...props}
      className={`scroll-mt-36 md:scroll-mt-24 ${className ?? ""}`}
    />
  );
}
