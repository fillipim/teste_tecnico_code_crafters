export interface Bank {
  id: string;
  name: string;
  account: number;
  branch: number;
  balance: number;
}

export interface BankContextType {
  banks: Bank[];
  fetchBanksList: (page: number, pageSize: number) => Promise<void>;
  addBank: (bank: Omit<Bank, "id">) => Promise<void>;
  updateBankDetails: (bank: Bank) => Promise<void>;
  removeBank: (id: string) => Promise<void>;
}

export interface CreateBankRequest {
  name: string;
  account: number;
  branch: number;
  balance: number;
}
