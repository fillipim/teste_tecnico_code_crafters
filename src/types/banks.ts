import { UseMutateFunction } from "@tanstack/react-query";

export interface Bank {
  id: string;
  name: string;
  account: number;
  branch: number;
  balance: number;
}

export interface BankContextType {
  banks: BanksResponse;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  page: number;
  pageSize: number;
  isLoading: boolean;
  deleteBankMutation: UseMutateFunction<void, Error, string, unknown>;
  isDeleting: boolean;
}

export interface CreateBankRequest {
  name: string;
  account: number;
  branch: number;
  balance: number;
}

export interface BanksResponse {
  result: Bank[];
  errors: any[];
  isValid: boolean;
  pagination: Pagination;
}

export interface Pagination {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export interface BankEditRequest {
  id?: string;
  name?: string;
  account?: number;
  branch?: number;
  balance?: number;
}
