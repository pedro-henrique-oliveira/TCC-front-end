import { ReactNode } from "react";

interface TableHeaderProps {
  children: ReactNode;
}

export default function TableHeader({ children }: TableHeaderProps) {
  return <thead className="bg-zinc-900">{children}</thead>;
}
