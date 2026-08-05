import { TextareaHTMLAttributes } from "react";

export default function Textarea({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
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
        resize-none
        focus:border-yellow-400
        ${className}
      `}
      {...props}
    />
  );
}
