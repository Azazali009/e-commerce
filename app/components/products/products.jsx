"use client";

import React, { useState } from "react";
import Sorting from "@/app/components/products/Sorting";
import Card from "@/app/ui/Card";
import ErrorMessage from "@/app/ui/ErrorMessage";
import { useProducts } from "./useProducts";
import Sidebar from "../sidebar/Sidebar";
import PageSkeleton from "./PageSkeleton";

const Products = () => {
  const [category, setCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [colorValue, setColorValue] = useState("All");
  const { Products, isLoading, isError } = useProducts();

  let colors = Products?.map((product) => JSON.parse(product.colors));
  colors = [...new Set(colors?.[0])];

  // Filter by category
  let filtureProduct = Products?.filter((product) =>
    category === "All"
      ? product
      : product.category === category?.replace("_", " "),
  );

  // filter by colors
  filtureProduct = filtureProduct?.filter((product) => {
    let isMatch;
    if (colorValue === "" || colorValue === "All") {
      return product;
    } else {
      isMatch = JSON.parse(product.colors)
        ?.map((color) => color.value)
        ?.includes(colorValue);
      return isMatch ? product : null;
    }
  });
  // searching
  filtureProduct = filtureProduct?.filter((product) => {
    return !searchValue
      ? product
      : product.title
          ?.toLocaleLowerCase()
          ?.includes(searchValue?.toLocaleLowerCase());
  });

  // sorting
  const [field, direction] = sortValue?.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortProducts = filtureProduct?.sort(
    (a, b) => (a[field] - b[field]) * modifier,
  );

  if (isLoading) return <PageSkeleton />;
  if (isError) return <ErrorMessage heading={"Products"} />;
  return (
    <div className=" relative my-12 grid grid-cols-1 items-start gap-x-4 lg:grid-cols-[20rem_1fr]">
      <Sidebar
        category={category}
        setCategory={setCategory}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        colorValue={colorValue}
        setColorValue={setColorValue}
        Products={Products}
        isLoading={isLoading}
      />
      <div>
        <div className=" mb-8 flex justify-between px-4">
          <div>filter</div>
          <div>
            <Sorting sortValue={sortValue} setSortValue={setSortValue} />
          </div>
        </div>
        <div className=" grid grid-cols-[repeat(auto-fit,minmax(10rem,18rem))] justify-center gap-2 gap-x-5 gap-y-7">
          <div className="[grid-column:1/-1]">
            <p className=" flex h-8 w-48 items-center justify-center rounded-full bg-gray-100 text-center text-sm font-bold capitalize text-slate-600 ">
              {" "}
              <span className=" mr-1 text-2xl text-red-600">
                {filtureProduct?.length}
              </span>{" "}
              products found
            </p>
          </div>

          {sortProducts?.length > 0 ? (
            sortProducts?.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <div className=" flex items-center justify-center [grid-column:1/-1]">
              <h3 className=" text-center font-semibold text-slate-700">
                No items found at the moment.
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
