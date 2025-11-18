interface NavigationProps {
  activeView: "table" | "form";
  onViewChange: (view: "table" | "form") => void;
}

export function Navigation({ activeView, onViewChange }: NavigationProps) {
  return (
    <div className="container mx-auto px-4 mb-6">
      <div className="inline-flex bg-gray-100 rounded-lg p-1 gap-1">
        <button
          onClick={() => onViewChange("table")}
          className={`px-5 py-2.5 rounded-md font-medium transition-all text-sm ${
            activeView === "table"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
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
            Company List
          </span>
        </button>
        <button
          onClick={() => onViewChange("form")}
          className={`px-5 py-2.5 rounded-md font-medium transition-all text-sm ${
            activeView === "form"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
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
            Register Company
          </span>
        </button>
      </div>
    </div>
  );
}
