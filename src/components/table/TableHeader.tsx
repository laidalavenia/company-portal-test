import { SortField, SortDirection } from "@/types";

interface TableHeaderProps {
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

interface SortButtonProps {
  field: SortField;
  label: string;
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

// ✅ FIXED: Component declared OUTSIDE of render
function SortButton({
  field,
  label,
  sortField,
  sortDirection,
  onSort,
}: SortButtonProps) {
  return (
    <button
      onClick={() => onSort(field)}
      className="flex items-center gap-2 font-semibold text-gray-700 hover:text-blue-600 transition-colors text-sm"
    >
      {label}
      {sortField === field && (
        <svg
          className={`w-4 h-4 transition-transform ${
            sortDirection === "desc" ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      )}
    </button>
  );
}

export function TableHeader({
  sortField,
  sortDirection,
  onSort,
}: TableHeaderProps) {
  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        <th className="px-4 py-3 text-left">
          <SortButton
            field="name"
            label="Name"
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={onSort}
          />
        </th>
        <th className="px-4 py-3 text-left hidden sm:table-cell">
          <SortButton
            field="industry"
            label="Industry"
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={onSort}
          />
        </th>
        <th className="px-4 py-3 text-left hidden md:table-cell">
          <SortButton
            field="country"
            label="Location"
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={onSort}
          />
        </th>
        <th className="px-4 py-3 text-left hidden lg:table-cell">
          <SortButton
            field="employeeCount"
            label="Employees"
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={onSort}
          />
        </th>
      </tr>
    </thead>
  );
}
