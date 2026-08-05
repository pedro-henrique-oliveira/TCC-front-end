interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold text-white">{title}</h2>

      {subtitle && <p className="mt-3 text-zinc-400 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
