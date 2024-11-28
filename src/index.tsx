import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { ChakraProvider } from "@/contexts/ChakraProvider";
import { BankProvider } from "@/contexts/BankContext";
import { Toaster } from "@/components/ui/toaster";

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BankProvider>
        <BrowserRouter>
          <ChakraProvider>
            <Toaster />
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </BankProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
