import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"input">;

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border-gray-300 focus:border-theme-darkblue focus:ring-theme-darkblue rounded-md shadow-sm ${className ?? ""}`}
        {...props}
      />
    )
  }
)

export default TextInput
