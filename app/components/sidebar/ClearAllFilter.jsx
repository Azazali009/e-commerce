import { useProductContext } from "@/app/context/ProductContext";
import React from "react";

const ClearAllFilter = ({ dark = false }) => {
  const { setSearchValue, setCategory, setPriceValue, maxPriceValue } =
    useProductContext();
  const handleClick = () => {
    setSearchValue("");
    setCategory("All");

    setPriceValue(maxPriceValue);
  };
  return (
    <div className={`${dark && "border-t-gray-900"} mt-6 border-t pt-4`}>
      <button
        onClick={handleClick}
        className={` btn  ${
          dark ? "btn-primary" : "btn-error"
        } btn-sm rounded font-normal capitalize shadow-lg`}
      >
        clear filters
      </button>
    </div>
  );
};

export default ClearAllFilter;
