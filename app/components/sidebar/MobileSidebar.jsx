import React from "react";
import Category from "./Category";
import PriceRange from "./PriceRange";
import ClearAllFilter from "./ClearAllFilter";

import SearchInput from "./SearchInput";

const MobileSidebar = ({ setShowsidebar }) => {
  return (
    <div className={`fixed inset-0 z-30 bg-gray-700/[.4]`}>
      <div
        className={`animate-in absolute left-0 top-0
        z-30 flex flex-col gap-3 bg-black px-3 pb-8 pt-6`}
      >
        <button
          onClick={() => setShowsidebar(false)}
          className="btn btn-circle btn-xs absolute -right-3 top-2 border-none lg:hidden "
        >
          {/* <input type="checkbox" checked={showSidebar} /> */}

          {/* close icon */}
          {/* <div className="flex items-center justify-center"> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-3 w-3"
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
