import { getOptions } from "@/app/helpers/getOptions";
import React from "react";

const Category = ({ category, setCategory, Products, isLoading }) => {
  const categories = getOptions(Products, "category");

  return (
    <div className=" border-b pb-3">
      <h3 className="mb-2 font-semibold capitalize text-slate-900">category</h3>
      <ul className=" flex flex-col gap-1">
        {isLoading
          ? [...new Array(3)]?.map((_, i) => {
              return (
                <div key={i} className=" space-y-4">
                  <div className="skeleton h-4 w-28"></div>
                </div>
              );
            })
          : categories?.map((curItem) => {
              return (
                <li key={curItem}>
                  <button
                    onClick={() => setCategory(curItem)}
                    className={` ${
                      curItem?.replace("_", " ") === category
                        ? " text-yellow-500"
                        : "text-black"
                    } text-sm capitalize hover:text-yellow-500`}
                  >
                    {curItem}
                  </button>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default Category;