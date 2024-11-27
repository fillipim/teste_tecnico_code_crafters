import React, { createContext, useState, ReactNode } from "react";
import { Bank, BankContextType } from "@/types/banks";

export const BankContext = createContext<BankContextType | undefined>(
  undefined
);

export const BankProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [banks, setBanks] = useState<Bank[]>([]);

  const fetchBanksList = async (page: number, pageSize: number) => {};

  const addBank = async (bank: Omit<Bank, "id">) => {};

  const updateBankDetails = async (bank: Bank) => {};

  const removeBank = async (id: string) => {};

  return (
    <BankContext.Provider
      value={{
        banks,
        fetchBanksList,
        addBank,
        updateBankDetails,
        removeBank,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};
