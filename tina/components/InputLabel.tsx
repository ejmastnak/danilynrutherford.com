import type { ComponentPropsWithoutRef } from "react";

type InputLabelProps = ComponentPropsWithoutRef<"label"> & {
  value?: string
}

export default function InputLabel({
  value,
  className,
  children,
  ...props
}: InputLabelProps) {
  return (
    <label
      className={`block font-semibold text-sm text-gray-700 ${className ?? ""}`}
      {...props}
    >
      {value ? value : children}
    </label>
  )
}
