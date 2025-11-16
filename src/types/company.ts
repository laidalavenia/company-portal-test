export interface Company {
  id: number;
  name: string;
  address: string;
  zip: string;
  country: string;
  employeeCount: number;
  industry: string;
  marketCap: number;
  domain: string;
  logo: string;
  ceoName: string;
}

export interface CompanyFormData {
  name: string;
  industry: string;
  employeeSize: string;
  email: string;
  city: string;
  website?: string;
  phone?: string;
  description?: string;
  agreeToTerms: boolean;
}

export type SortField = "name" | "industry" | "country" | "employeeCount";
export type SortDirection = "asc" | "desc";
