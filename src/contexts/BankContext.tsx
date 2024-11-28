import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { BankContextType } from "@/types/banks";

import { deleteBank, getBanks } from "@/services/bank.service";
import { queryClient } from "@/index";
import { toaster } from "@/components/ui/toaster";

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
        queryKey: ["banks", page + 1],
        queryFn: () => getBanks(page + 1, pageSize),
      });
    }
  }, [banks, isPlaceholderData, page, pageSize]);

  const { mutate: deleteBankMutation, isPending: isDeleting } = useMutation({
    mutationFn: deleteBank,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["banks"],
      });
      toaster.create({
        title: "Banco deletado!",
        type: "success",
      });
    },
  });

  return (
    <BankContext.Provider
      value={{
        banks: banks?.data || { result: [], pagination: { totalElements: 0 } },
        isLoading,
        setPage,
        setPageSize,
        page,
        pageSize,
        deleteBankMutation,
        isDeleting,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};
