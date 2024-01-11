import { useProductContext } from "@/app/context/ProductContext";
import React from "react";

const SearchInput = () => {
  const { searchValue, isLoading, setSearchValue } = useProductContext();

  return (
    <input
      type="text"
      value={searchValue}
      disabled={isLoading}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="search product..."
      className="input input-bordered input-warning input-sm w-full max-w-[15rem] bg-white"
    />
  );
};

export default SearchInput;
