import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"textarea">;

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm !text-base ${className ?? ""}`}
        {...props}
      />
    );
  }
);

export default TextArea;
