import { useProductContext } from "@/app/context/ProductContext";
import { getOptions } from "@/app/helpers/getOptions";
import React from "react";

const Category = ({ dark = false }) => {
  const { category, setCategory, Products, isLoading } = useProductContext();
  const categories = getOptions(Products, "category");
  console.log(Products);

  return (
    <div className={` ${dark && " border-b-gray-900"} border-b pb-3`}>
      <h3
        className={`mb-2 font-semibold capitalize ${
          dark ? " text-white" : "text-slate-900 "
        }`}
      >
        category
      </h3>
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
                    } text-sm capitalize hover:text-yellow-500 ${
                      dark ? "text-white" : " text-black"
                    }`}
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
