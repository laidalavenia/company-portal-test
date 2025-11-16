export * from "./company";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  show: boolean;
  onClose: () => void;
}
