import { useState } from "react";
import { Company, SortField, SortDirection } from "@/types";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { ErrorMessage } from "../ui/ErrorMessage";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { Pagination } from "./Pagination";

interface CompanyTableProps {
  companies: Company[];
  totalCount: number;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onRetry: () => void;
}

export function CompanyTable({
  companies,
  totalCount,
  loading,
  error,
  searchQuery,
  onSearchChange,
  sortField,
  sortDirection,
  onSort,
  currentPage,
  totalPages,
  onPageChange,
  onRetry,
}: CompanyTableProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={onRetry} />;
  }

  // Check if there's ANY data (before filtering)
  const hasAnyData = totalCount > 0 || companies.length > 0;

  // Check if search result is empty but there's data
  const isSearchEmpty = companies.length === 0 && searchQuery !== "";

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* ALWAYS SHOW SEARCH BAR */}
      <div className="p-5 border-b border-gray-200 bg-white">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Company Directory
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              {totalCount} {totalCount === 1 ? "company" : "companies"}{" "}
              registered
            </p>
          </div>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search companies..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* EMPTY STATE - No data from API */}
      {!hasAnyData && companies.length === 0 && !searchQuery && (
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            No Companies Yet
          </h3>
          <p className="text-sm text-gray-500">
            Start by registering your first company
          </p>
        </div>
      )}

      {/* SEARCH RESULT EMPTY - Data exists but search found nothing */}
      {isSearchEmpty && (
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            No Results Found
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            No companies match "
            <span className="font-medium text-gray-700">{searchQuery}</span>"
          </p>
          <button
            onClick={() => onSearchChange("")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Clear Search
          </button>
        </div>
      )}

      {/* TABLE - Show when there's data */}
      {companies.length > 0 && (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              <TableHeader
                sortField={sortField}
                sortDirection={sortDirection}
                onSort={onSort}
              />
              <tbody className="divide-y divide-gray-200">
                {companies.map((company) => (
                  <TableRow key={company.id} company={company} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
}
