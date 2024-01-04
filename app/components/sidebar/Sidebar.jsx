"use client";
import React from "react";
import Category from "./Category";
import Colors from "./Colors";
import ClearAllFilter from "./ClearAllFilter";
import PriceRange from "./PriceRange";

const Sidebar = ({
  category,
  setCategory,
  searchValue,
  setSearchValue,
  colorValue,
  setColorValue,
  priceValue,
  setPriceValue,
  maxPriceValue,
  Products,
  isLoading,
}) => {
  return (
    <aside className="sticky top-0 z-20  flex min-h-96 flex-col gap-4 rounded-xl border bg-white p-3">
      <input
        type="text"
        value={searchValue}
        disabled={isLoading}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="search product..."
        className="input input-bordered input-warning input-sm w-full max-w-[15rem]"
      />
      <Category
        Products={Products}
        category={category}
        setCategory={setCategory}
        isLoading={isLoading}
      />
      <Colors
        Products={Products}
        colorValue={colorValue}
        setColorValue={setColorValue}
      />
      <PriceRange
        priceValue={priceValue}
        setPriceValue={setPriceValue}
        maxPriceValue={maxPriceValue}
      />
      <ClearAllFilter
        setSearchValue={setSearchValue}
        setCategory={setCategory}
        setColorValue={setColorValue}
        setPriceValue={setPriceValue}
        maxPriceValue={maxPriceValue}
      />
    </aside>
  );
};

export default Sidebar;
