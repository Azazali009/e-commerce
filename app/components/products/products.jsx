"use client";

import React, { useState } from "react";
import Sorting from "@/app/components/products/Sorting";
import Card from "@/app/ui/Card";
import ErrorMessage from "@/app/ui/ErrorMessage";
import Sidebar from "../sidebar/Sidebar";
import PageSkeleton from "./PageSkeleton";

import MobileSidebar from "../sidebar/MobileSidebar";
import Pagination from "../pagination/Pagination";
import { useProductContext } from "@/app/context/ProductContext";
import { PAGE_SIZE } from "../pageSize";

const Products = () => {
  const {
    isLoading,
    isError,
    filtureProduct,
    setStockValue,
    stockValue,
    sortProducts,
    sortValue,
    setSortValue,
    count,
  } = useProductContext();

  const [showSidebar, setShowsidebar] = useState(false);

  const pageCount = Math.ceil(count / PAGE_SIZE);
  const handleStockClick = (e) => {
    setStockValue(e.target.value);
  };
  if (isLoading) return <PageSkeleton />;
  if (isError) return <ErrorMessage heading={"Products"} />;

  return (
    <div className=" relative grid grid-cols-1 items-start gap-x-4 py-7 lg:grid-cols-[15rem_1fr]">
      {/* Filter sidebar toogle */}
      {!showSidebar && (
        <label
          onClick={() => setShowsidebar(true)}
          className="group btn btn-circle swap swap-rotate btn-xs -mt-4 mb-2 ml-2 border-none bg-gray-200 text-black lg:hidden "
        >
          <input type="checkbox" checked={showSidebar} />
          {/* hamburger icon */}
          <div className="  swap-off flex items-center justify-center">
            <svg
              className=" fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </div>

          <p className=" pointer-events-auto absolute left-full top-2 -mt-3 ml-2  translate-x-0 whitespace-nowrap rounded bg-blue-400 px-2 py-1 text-blue-900  opacity-100 group-hover:pointer-events-none group-hover:-translate-x-4 group-hover:opacity-0 ">
            sidebar filter
          </p>
          <p className=" pointer-events-none absolute left-full top-2 -mt-3 ml-4 translate-x-4 whitespace-nowrap rounded bg-slate-700 px-2 py-1 text-white opacity-0 group-hover:pointer-events-auto group-hover:translate-x-0  group-hover:opacity-100">
            filter menu
          </p>
        </label>
      )}
      {showSidebar && <MobileSidebar setShowsidebar={setShowsidebar} />}
      <div className=" sticky top-0 hidden lg:block">
        <Sidebar />
      </div>
      {/* main products section */}
      <div className="py-6">
        <div className="flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:gap-0 md:mb-8">
          <div role="tablist" className="tabs-boxed tabs bg-gray-200  ">
            <button
              onClick={handleStockClick}
              value={"All"}
              role="tab"
              className={`tab capitalize text-black ${
                stockValue === "All" && "bg-blue-500"
              }`}
            >
              All
            </button>
            <button
              onClick={handleStockClick}
              value={"instock"}
              role="tab"
              className={`tab capitalize text-black ${
                stockValue === "instock" && "bg-blue-500"
              }`}
            >
              in stock
            </button>
            <button
              onClick={handleStockClick}
              value={"outstock"}
              role="tab"
              className={`tab capitalize text-black ${
                stockValue === "outstock" && "bg-blue-500"
              }`}
            >
              leading
            </button>
          </div>
          <div>
            <Sorting sortValue={sortValue} setSortValue={setSortValue} />
          </div>
        </div>
        <div className=" grid grid-cols-3 justify-center gap-2 gap-x-5 gap-y-7 px-1 py-12 sm:px-4 md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]">
          <div className="justify-self-center [grid-column:1/-1]">
            <p className=" flex h-8 w-48 items-center justify-center rounded-full bg-gray-100 text-center text-sm font-bold capitalize text-slate-600 ">
              {" "}
              <span className=" mr-1 text-2xl text-red-600">
                {filtureProduct?.length}
              </span>{" "}
              products found
            </p>
          </div>

          {sortProducts?.length > 0 ? (
            sortProducts?.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <div className=" flex items-center justify-center [grid-column:1/-1]">
              <h3 className=" text-center font-semibold text-slate-700">
                No items found at the moment.
              </h3>
            </div>
          )}
        </div>
        {/* pagination */}
        {pageCount > 1 && <Pagination />}
      </div>
    </div>
  );
};

export default Products;
