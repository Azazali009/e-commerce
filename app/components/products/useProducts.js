import { getAllProducts } from "@/app/services/productApi";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const {
    isLoading,
    data: Products,
    isError,
  } = useQuery({
    queryKey: ["Products"],
    queryFn: getAllProducts,
  });

  return { isLoading, Products, isError };
}
