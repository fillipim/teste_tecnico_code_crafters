import {
  BankEditRequest,
  BanksResponse,
  CreateBankRequest,
} from "@/types/banks";
import api from "./api";

export const getBanks = (page: number, pageSize: number) =>
  api.get(`?PageNumber=${page}&PageSize=${pageSize}`);

export const createBank = async (
  formData: CreateBankRequest
): Promise<BanksResponse> => {
  const { data } = await api.post("/banck-account", formData);
  return data;
};

export const updateBank = async (formData: BankEditRequest): Promise<void> => {
  await api.put("/banck-account", formData);
};

export const deleteBank = async (id: string): Promise<void> => {
  await api.delete(`/banck-account?Id=${id}`);
};
