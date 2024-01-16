import { useProductContext } from "@/app/context/ProductContext";
import React, { useState } from "react";

const ProductIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(false);
  const { sortProducts } = useProductContext();
  const handleChange = () => {
    setShowIndicator((show) => !show);
  };
  return (
    <div className=" flex items-center gap-2 justify-self-center [grid-column:1/-1]">
      <p
        className={` ${
          showIndicator
            ? " pointer-events-auto visible translate-x-0 scale-100 opacity-100"
            : " pointer-events-none invisible -translate-x-40 scale-0 opacity-0"
        } flex h-6 w-fit items-center justify-center rounded-full bg-gray-100 px-4 text-center text-[9px] font-bold capitalize text-slate-600 transition-all duration-1000 sm:h-8 sm:w-48 sm:px-0 sm:text-base `}
      >
        {" "}
        <span className=" text-primaryBlue mr-1 text-lg sm:text-2xl">
          {sortProducts?.length}
        </span>{" "}
        products found
      </p>

      <div className="form-control ">
        <label className="label flex cursor-pointer gap-2">
          <span className="label-text text-[9px] font-semibold capitalize text-slate-600 sm:text-base">
            {showIndicator ? "close" : "show"} indicator
          </span>
          <input
            type="checkbox"
            onChange={handleChange}
            className="toggle toggle-primary toggle-sm bg-gray-500 opacity-30 transition-opacity duration-300 sm:toggle-md checked:bg-[#4DC4FF] checked:opacity-100"
          />
        </label>
      </div>
    </div>
  );
};

export default ProductIndicator;
