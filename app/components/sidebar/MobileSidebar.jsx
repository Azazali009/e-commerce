import React from "react";
import Category from "./Category";
import PriceRange from "./PriceRange";
import ClearAllFilter from "./ClearAllFilter";

import SearchInput from "./SearchInput";
import { useProductContext } from "@/app/context/ProductContext";

const MobileSidebar = () => {
  const { setShowsidebar } = useProductContext();
  return (
    <div className={`fixed  inset-0 z-30 bg-gray-700/[.4] `}>
      <div
        className={`animate-in absolute left-0 top-0 z-30 flex
        min-h-dvh w-[50%] flex-col gap-3 bg-black px-3 pb-8 pt-6`}
      >
        <button
          onClick={() => setShowsidebar(false)}
          className="btn btn-circle btn-xs absolute left-full top-2 h-8 w-8 border-none hover:scale-125 lg:hidden "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          {/* </div> */}
        </button>
        <SearchInput />
        <Category dark={true} />
        <PriceRange dark={true} />
        <ClearAllFilter dark={true} />
      </div>
    </div>
  );
};

export default MobileSidebar;
