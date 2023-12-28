import { getFeaturedProducts } from "@/app/services/productApi";
import { useQuery } from "@tanstack/react-query";

export function useFeaturedProduct() {
  const {
    data: featuredProduct,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["FeaturedProduct"],
    queryFn: getFeaturedProducts,
  });

  return { featuredProduct, isLoading, isError };
}
