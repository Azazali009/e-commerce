import { useProductContext } from "@/app/context/ProductContext";
import React from "react";

const FilterStockTabs = () => {
  const { setStockValue, stockValue } = useProductContext();
  const handleStockClick = (e) => {
    setStockValue(e.target.value);
  };
  return (
    <div
      role="tablist"
      className="tabs-boxed tabs tabs-sm bg-gray-200 sm:tabs-md  "
    >
      <button
        onClick={handleStockClick}
        value={"All"}
        role="tab"
        className={`tab px-2 text-xs capitalize text-black sm:px-4 sm:text-base ${
          stockValue === "All" && "bg-primaryBlue"
        }`}
      >
        All
      </button>
      <button
        onClick={handleStockClick}
        value={"instock"}
        role="tab"
        className={`tab whitespace-nowrap px-2 text-xs capitalize text-black sm:px-4 sm:text-base ${
          stockValue === "instock" && "bg-primaryBlue"
        }`}
      >
        in stock
      </button>
      <button
        onClick={handleStockClick}
        value={"outstock"}
        role="tab"
        className={`tab whitespace-nowrap px-2 text-xs capitalize text-black sm:px-4 sm:text-base ${
          stockValue === "outstock" && "bg-primaryBlue"
        }`}
      >
        leading
      </button>
    </div>
  );
};

export default FilterStockTabs;
