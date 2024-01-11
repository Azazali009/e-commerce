import { useProductContext } from "@/app/context/ProductContext";
import React from "react";

const PriceRange = ({ dark = false }) => {
  const { priceValue, setPriceValue, maxPriceValue } = useProductContext();
  return (
    <div className=" ">
      <h3
        className={`mb-2 font-semibold capitalize ${
          dark ? " text-white" : "text-slate-900 "
        }`}
      >
        price
      </h3>
      <p
        className={` font-semibold ${dark ? " text-white" : "text-slate-900 "}`}
      >
        USD: <span className=" text-sm">(${priceValue}.00)</span>
      </p>
      <input
        type="range"
        min={0}
        max={maxPriceValue}
        value={priceValue}
        onChange={(e) => setPriceValue(e.target.value)}
        className={`range ${dark ? " range-info " : "range-warning"} range-xs`}
      />
    </div>
  );
};

export default PriceRange;
