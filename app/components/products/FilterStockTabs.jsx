import { useProductContext } from "@/app/context/ProductContext";
import React from "react";

const FilterStockTabs = () => {
  const { setStockValue, stockValue } = useProductContext();
  const handleStockClick = (e) => {
    setStockValue(e.target.value);
  };
  return (
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
  );
};

export default FilterStockTabs;
