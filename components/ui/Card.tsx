import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
        shadow-lg
        transition-all
        duration-300

        ${
          hover
            ? "hover:border-yellow-400/40 hover:-translate-y-1 hover:shadow-yellow-400/10"
            : ""
        }

        ${className}
      `}
    >
      {children}
    </div>
  );
}
