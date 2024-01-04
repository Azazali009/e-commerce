import { formateCurrency } from "@/app/helpers/formateCurrency";
import React from "react";

const PriceRange = ({
  priceValue,
  setPriceValue,
  maxPriceValue,
  dark = false,
}) => {
  return (
    <div className=" mt-8">
      <h3
        className={`mb-2 font-semibold capitalize ${
          dark ? " text-white" : "text-slate-900 "
        }`}
      >
        price
      </h3>
      <p className={` ${dark ? " text-white" : "text-slate-900 "}`}>
        USD: <span className=" text-sm">(${priceValue})</span>
      </p>
      <input
        type="range"
        min={0}
        max={maxPriceValue}
        value={priceValue}
        onChange={(e) => setPriceValue(e.target.value)}
        className={`range ${
          dark ? " range-primary" : "range-warning"
        } range-xs`}
      />
    </div>
  );
};

export default PriceRange;
