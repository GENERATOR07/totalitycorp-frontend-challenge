import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartContextProvider from "./context/cart-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
