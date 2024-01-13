"use client";
import { useProductContext } from "@/app/context/ProductContext";
import React from "react";

const Sorting = () => {
  const { sortValue, setSortValue } = useProductContext();
  const handleChange = (e) => {
    setSortValue(e.target.value);
  };
  return (
    <div className=" flex items-center gap-2 whitespace-nowrap">
      <p className=" text-xs capitalize text-slate-600 sm:text-base">
        sort by :
      </p>
      <select
        className="select select-info select-xs w-full max-w-[15rem] bg-white capitalize text-slate-700  sm:select-sm"
        value={sortValue}
        onChange={handleChange}
      >
        <option value="" selected>
          features
        </option>
        <option value="stock-asc">stock low - high (low stock first)</option>
        <option value="stock-dsc">stock high - low (high stock first)</option>
        <option value="price-asc">price low - high (low price first)</option>
        <option value="price-dsc">price high - low (high price first)</option>
        <option value="rating-asc">rating low - high (low rating first)</option>
        <option value="rating-dsc">
          rating high - low (high rating first)
        </option>
      </select>
    </div>
  );
};

export default Sorting;
