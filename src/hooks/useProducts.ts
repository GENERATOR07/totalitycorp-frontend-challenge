import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/product-api";

export const useProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products"], fetchProducts);

  return { products, isLoading, isError };
};
