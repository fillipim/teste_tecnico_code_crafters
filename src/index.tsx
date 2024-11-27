import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { ChakraProvider } from "@/contexts/ChakraProvider";
import { BankProvider } from "@/contexts/BankContext";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChakraProvider>
          <Toaster />
          <BankProvider>
            <App />
          </BankProvider>
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
