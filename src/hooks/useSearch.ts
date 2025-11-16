import { useMemo } from "react";
import { Company, SortField, SortDirection } from "@/types";

interface UseSearchProps {
  data: Company[];
  searchQuery: string;
  sortField: SortField;
  sortDirection: SortDirection;
}

export function useSearch({
  data,
  searchQuery,
  sortField,
  sortDirection,
}: UseSearchProps) {
  return useMemo(() => {
    const filtered = data.filter(
      (company) =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.country.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (typeof aVal === "string") {
        aVal = aVal.toLowerCase();
        bVal = (bVal as string).toLowerCase();
      }

      if (sortDirection === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    return filtered;
  }, [data, searchQuery, sortField, sortDirection]);
}
