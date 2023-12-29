import React from "react";
import Category from "./Category";
import Colors from "./Colors";

const MobileSidebar = ({
  showSidebar,
  setShowsidebar,
  searchValue,
  setSearchValue,
  isLoading,
  Products,
  category,
  setCategory,
  colorValue,
  setColorValue,
}) => {
  return (
    <div className=" fixed inset-0 z-30 bg-gray-700/[.4]">
      <div
        className={`${
          !showSidebar
            ? " pointer-events-none invisible -translate-x-12 opacity-0"
            : "pointer-events-auto visible translate-x-0 opacity-100"
        } absolute left-0 top-0 z-30 flex min-h-screen flex-col gap-3 bg-red-500 px-3 pt-2 transition-all duration-700`}
      >
        <label
          onClick={() => setShowsidebar(false)}
          className="btn btn-circle swap swap-rotate btn-xs mb-2 ml-2 border-none bg-yellow-500 lg:hidden "
        >
          <input type="checkbox" checked={showSidebar} />

          {/* close icon */}
          <div className=" swap-on flex items-center justify-center">
            <svg
              className=" fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </div>
        </label>
        <input
          type="text"
          value={searchValue}
          disabled={isLoading}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="search product..."
          className="input input-bordered input-warning input-sm w-[90%]"
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
      </div>
    </div>
  );
};

export default MobileSidebar;
