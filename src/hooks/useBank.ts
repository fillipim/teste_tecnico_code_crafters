import { useContext } from "react";
import { BankContextType } from "@/types/banks";
import { BankContext } from "@/contexts/BankContext";

export const useBankContext = (): BankContextType => {
  const context = useContext(BankContext);
  if (!context) {
    throw new Error("useBankContext deve ser usado dentro de um BankProvider");
  }
  return context;
};
