interface NavigationProps {
  activeView: "table" | "form";
  onViewChange: (view: "table" | "form") => void;
}

export function Navigation({ activeView, onViewChange }: NavigationProps) {
  return (
    <div className="container mx-auto px-4 mb-6">
      <div className="bg-white rounded-xl shadow-md p-2 inline-flex gap-2">
        <button
          onClick={() => onViewChange("table")}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
            activeView === "table"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span className="hidden sm:inline">Company List</span>
            <span className="sm:hidden">List</span>
          </span>
        </button>
        <button
          onClick={() => onViewChange("form")}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
            activeView === "form"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="hidden sm:inline">Register Company</span>
            <span className="sm:hidden">Register</span>
          </span>
        </button>
      </div>
    </div>
  );
}
