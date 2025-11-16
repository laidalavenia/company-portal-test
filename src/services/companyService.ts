import { Company } from "@/types";
import { fetchApi } from "./api";
import { API_ENDPOINTS } from "@/constants";

export const companyService = {
  async getAll(): Promise<Company[]> {
    return fetchApi<Company[]>(API_ENDPOINTS.COMPANIES);
  },

  async getById(id: number): Promise<Company | undefined> {
    const companies = await this.getAll();
    return companies.find((c) => c.id === id);
  },
};
