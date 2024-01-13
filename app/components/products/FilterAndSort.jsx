import React from "react";
import FilterStockTabs from "./FilterStockTabs";
import Sorting from "./Sorting";

const FilterAndSort = () => {
  return (
    <div className="flex flex-col  justify-between gap-4 px-4 sm:flex-row sm:gap-0 md:mb-8">
      <FilterStockTabs />
      <div>
        <Sorting />
      </div>
    </div>
  );
};

export default FilterAndSort;
