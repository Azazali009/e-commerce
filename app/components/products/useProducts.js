"use client";
import { getAllProducts } from "@/app/services/productApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { PAGE_SIZE } from "../pageSize";

export function useProducts() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
    isLoading,
    data: { Products, count } = {},
    isError,
  } = useQuery({
    queryKey: ["Products", page],
    queryFn: () => getAllProducts({ page }),
  });
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["Products", page + 1],
      queryFn: () => getAllProducts({ page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["Products", page - 1],
      queryFn: () => getAllProducts({ page: page - 1 }),
    });
  }

  return { isLoading, Products, isError, count };
}
