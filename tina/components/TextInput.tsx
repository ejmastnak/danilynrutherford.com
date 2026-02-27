import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"input">;

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ${className ?? ""}`}
        {...props}
      />
    )
  }
)

export default TextInput
