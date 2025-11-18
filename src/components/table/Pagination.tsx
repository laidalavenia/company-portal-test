import { PaginationProps } from "@/types";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="px-5 py-4 border-t border-gray-200 bg-gray-50">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-600">
          Page <span className="font-medium">{currentPage}</span> of{" "}
          <span className="font-medium">{totalPages}</span>
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
          >
            Previous
          </button>
          <div className="hidden sm:flex items-center gap-1">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => onPageChange(idx + 1)}
                className={`w-9 h-9 text-sm font-medium rounded-md transition-colors ${
                  currentPage === idx + 1
                    ? "bg-primary-500 text-white"
                    : "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
