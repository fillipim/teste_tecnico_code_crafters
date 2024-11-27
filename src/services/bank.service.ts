import { CreateBankRequest } from "@/types/banks";
import api from "./api";

export const fetchBanks = (page: number, pageSize: number) =>
  api.get(`?PageNumber=${page}&PageSize=${pageSize}`);

export const createBank = async (formData: CreateBankRequest): Promise<any> => {
  const { data } = await api.post("/banck-account", formData);
  console.log(data);

  return data;
};

export const updateBank = (data: any) => api.put("/banck-account", data);

export const deleteBank = (id: string) => api.delete(`/banck-account?Id=${id}`);
