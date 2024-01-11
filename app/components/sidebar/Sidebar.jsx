"use client";
import React from "react";
import Category from "./Category";
import ClearAllFilter from "./ClearAllFilter";
import PriceRange from "./PriceRange";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 z-20  flex min-h-96 flex-col gap-4 rounded-xl border bg-white p-3">
      <SearchInput />
      <Category />
      <PriceRange />
      <ClearAllFilter />
    </aside>
  );
};

export default Sidebar;
