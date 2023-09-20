import React from "react";
import ReactDOM from "react-dom/client";
import router from "./App";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import CartContextProvider from "./context/cart-context";
export const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
