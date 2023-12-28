import { getFilterProducts } from "@/app/services/productApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useFilterProducts() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: getFilterProducts,
    onSuccess: () => {
      alert("find");
      queryClient.invalidateQueries({ queryKey: ["Products"] });
    },
    onError: () => alert("error"),
  });
  return { mutate };
}
