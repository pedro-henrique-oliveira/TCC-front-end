import { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
  header?: boolean;
}

export default function TableCell({
  children,
  header = false,
}: TableCellProps) {
  if (header) {
    return (
      <th
        className="
          px-6
          py-4
          text-left
          text-sm
          font-semibold
          text-zinc-300
        "
      >
        {children}
      </th>
    );
  }

  return (
    <td
      className="
        px-6
        py-4
        text-zinc-400
      "
    >
      {children}
    </td>
  );
}
