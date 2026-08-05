import { SelectHTMLAttributes } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

export default function Select({
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <select
      className={`
        w-full
        rounded-xl
        border
        border-zinc-700
        bg-zinc-900
        px-4
        py-3
        text-white
        outline-none
        transition
        focus:border-yellow-400
        ${className}
      `}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
