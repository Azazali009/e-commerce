import Card from "@/app/ui/Card";
import React from "react";
import { useFeaturedProduct } from "./useFeaturedProduct";

const FeatureProduct = () => {
  const { featuredProduct, isLoading, isError } = useFeaturedProduct();
  if (isLoading) return <p>loading...</p>;
  return (
    <div className=" mt-12 grid grid-cols-3 justify-center gap-2 gap-x-1 gap-y-7 px-1 sm:gap-x-5 sm:px-0 md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]">
      <div className="text-center [grid-column:1/-1]">
        <p className="text-center text-xs text-green-500 sm:text-base">
          check now
        </p>
        <h1 className="  text-xs font-semibold sm:text-3xl ">
          <span className=" capitalize">our featured products</span> &rarr; one
          step away
        </h1>
      </div>

      {featuredProduct?.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default FeatureProduct;
