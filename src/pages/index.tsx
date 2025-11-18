import { useState, FormEvent } from "react";
import Head from "next/head";
import { SortField, SortDirection } from "@/types";
import { useCompanies, useSearch, usePagination, useToast } from "@/hooks";
import {
  Header,
  Navigation,
  Carousel,
  CompanyTable,
  CompanyForm,
  Toast,
} from "@/components";

export default function Home() {
  // View state
  const [activeView, setActiveView] = useState<"table" | "form">("table");

  // Search & Sort state
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  // Fetch companies
  const { companies, loading, error, refetch } = useCompanies();

  // Search & filter
  const filteredCompanies = useSearch({
    data: companies,
    searchQuery,
    sortField,
    sortDirection,
  });

  // Pagination
  const { currentPage, totalPages, currentItems, goToPage } = usePagination({
    items: filteredCompanies,
  });

  // Toast notification
  const { toast, showToast, hideToast } = useToast();

  // Sort handler
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Form submit handler
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast("Company registered successfully!", "success");
    e.currentTarget.reset();
  };

  return (
    <>
      <Head>
        <title>Company Portal - Enterprise Management</title>
        <meta name="description" content="Company management portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />

        <Carousel />

        <Navigation activeView={activeView} onViewChange={setActiveView} />

        <div className="container mx-auto px-4 pb-12">
          {activeView === "table" ? (
            <CompanyTable
              companies={currentItems}
              totalCount={filteredCompanies.length}
              loading={loading}
              error={error}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={handleSort}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
              onRetry={refetch}
            />
          ) : (
            <CompanyForm onSubmit={handleFormSubmit} />
          )}
        </div>

        <Toast {...toast} onClose={hideToast} />
      </div>
    </>
  );
}
