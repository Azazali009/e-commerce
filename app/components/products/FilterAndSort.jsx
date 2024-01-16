import React from "react";
import FilterStockTabs from "./FilterStockTabs";
import Sorting from "./Sorting";

const FilterAndSort = () => {
  return (
    <div className="flex items-center justify-between gap-1 px-0 sm:gap-0 sm:px-4 md:mb-8">
      <FilterStockTabs />
      <div>
        <Sorting />
      </div>
    </div>
  );
};

export default FilterAndSort;
