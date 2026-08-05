interface BadgeProps {
  children: React.ReactNode;

  color?: "green" | "yellow" | "red" | "blue";
}

export default function Badge({ children, color = "green" }: BadgeProps) {
  const colors = {
    green: "bg-green-500/20 text-green-400",

    yellow: "bg-yellow-500/20 text-yellow-400",

    red: "bg-red-500/20 text-red-400",

    blue: "bg-blue-500/20 text-blue-400",
  };

  return (
    <span
      className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ${colors[color]}
      `}
    >
      {children}
    </span>
  );
}
