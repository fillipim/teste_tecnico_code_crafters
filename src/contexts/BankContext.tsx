import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { Bank, BankContextType, BanksResponse } from "@/types/banks";

import { getBanks } from "@/services/bank.service";
import { queryClient } from "@/index";

export const BankContext = createContext<BankContextType | undefined>(
  undefined
);

export const BankProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: banks,
    isPlaceholderData,
    isLoading,
  } = useQuery({
    queryKey: ["banks", page, pageSize],
    queryFn: () => getBanks(page, pageSize),
  });

  useEffect(() => {
    if (!isPlaceholderData) {
      queryClient.prefetchQuery({
        queryKey: ["projects", page + 1],
        queryFn: () => getBanks(page + 1, pageSize),
      });
    }
  }, [banks, isPlaceholderData, page, pageSize]);

  return (
    <BankContext.Provider
      value={{
        banks: banks?.data || { result: [], pagination: { totalElements: 0 } },
        isLoading,
        setPage,
        setPageSize,
        page,
        pageSize,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};
