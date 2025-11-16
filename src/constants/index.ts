export const API_ENDPOINTS = {
  COMPANIES: "https://json-placeholder.mock.beeceptor.com/companies",
} as const;

export const ITEMS_PER_PAGE = 5;

export const INDUSTRY_OPTIONS = [
  { value: "technology", label: "Technology" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail" },
  { value: "education", label: "Education" },
  { value: "entertainment", label: "Entertainment" },
] as const;

export const EMPLOYEE_SIZE_OPTIONS = [
  { value: "1-50", label: "1-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "200+", label: "200+ employees" },
] as const;

export const CAROUSEL_SLIDES = [1, 2, 3, 4, 5] as const;
export const CAROUSEL_INTERVAL = 4000;
