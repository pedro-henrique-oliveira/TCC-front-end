interface PaginationProps {
  page: number;
  totalPages: number;
  onPrevious?: () => void;
  onNext?: () => void;
}

export default function Pagination({
  page,
  totalPages,
  onPrevious,
  onNext,
}: PaginationProps) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <button
        onClick={onPrevious}
        disabled={page === 1}
        className="
          rounded-lg
          bg-zinc-800
          px-4
          py-2
          text-white
          transition
          hover:bg-zinc-700
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Anterior
      </button>

      <span className="text-zinc-400">
        Página {page} de {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="
          rounded-lg
          bg-yellow-400
          px-4
          py-2
          font-semibold
          text-black
          transition
          hover:bg-yellow-300
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Próxima
      </button>
    </div>
  );
}
