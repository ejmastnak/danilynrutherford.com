import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = ComponentPropsWithoutRef<"input"> & {
  label: ReactNode;
};

const RadioInput = forwardRef<HTMLInputElement, Props>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className={`flex items-center ${className ?? ""}`}>
        <input
          ref={ref}
          type="radio"
          {...props}
        />
        <span className="ml-2.5 block text-sm/6 font-medium text-gray-900">
          {label}
        </span>
      </label>
    );
  }
);

export default RadioInput;
