import { getProductById } from "@/app/services/productApi";
import { useQuery } from "@tanstack/react-query";

export function useProduct(id) {
  const {
    data: Product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Product", id],
    queryFn: () => getProductById(id),
  });

  return { Product, isLoading, isError };
}
