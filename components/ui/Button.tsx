import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-300",

    secondary: "bg-zinc-800 text-white hover:bg-zinc-700",

    danger: "bg-red-600 text-white hover:bg-red-500",
  };

  return (
    <button
      {...props}
      className={`
        rounded-lg
        px-5
        py-3
        font-semibold
        transition
        duration-200
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
