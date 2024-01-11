import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { PAGE_SIZE } from "../pageSize";
import { useProductContext } from "@/app/context/ProductContext";

const Pagination = () => {
  const { count } = useProductContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);
  const handleNext = () => {
    const next = curPage === pageCount ? curPage : curPage + 1;
    router.push(`?page=${next}`, { scroll: false });
  };
  const handlePrev = () => {
    const prev = curPage === 1 ? curPage : curPage - 1;
    router.push(`?page=${prev}`, { scroll: false });
  };
  return (
    <div className=" flex items-center justify-end rounded-xl border  px-8 py-4">
      <button
        disabled={curPage === 1}
        onClick={handlePrev}
        className="flex items-center gap-1 rounded px-4 py-1 font-semibold capitalize text-slate-700 transition-all duration-300 disabled:btn-neutral hover:bg-indigo-700 hover:text-indigo-200 disabled:cursor-not-allowed disabled:bg-transparent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" h-3 w-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <span>prev</span>
      </button>
      <button
        disabled={curPage === pageCount}
        onClick={handleNext}
        className="flex items-center gap-1 rounded px-4 py-1 font-semibold capitalize text-slate-700 transition-all duration-300 disabled:btn-neutral hover:bg-indigo-700 hover:text-indigo-200 disabled:cursor-not-allowed disabled:bg-transparent"
      >
        <span>next</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-3 w-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
