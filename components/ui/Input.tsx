import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900
        px-4
        py-3
        text-white
        placeholder:text-zinc-500
        outline-none
        transition

        focus:border-yellow-400

        ${className}
      `}
    />
  );
}
