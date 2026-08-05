import { ReactNode } from "react";

interface TableRowProps {
  children: ReactNode;
}

export default function TableRow({ children }: TableRowProps) {
  return (
    <tr
      className="
        border-b
        border-zinc-800
        transition
        hover:bg-zinc-900
      "
    >
      {children}
    </tr>
  );
}
