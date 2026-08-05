import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Inbox size={60} className="mb-6 text-zinc-600" />

      <h2 className="text-xl font-bold text-white">{title}</h2>

      <p className="mt-3 text-zinc-500">{description}</p>
    </div>
  );
}
