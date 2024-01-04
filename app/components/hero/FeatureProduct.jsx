import Card from "@/app/ui/Card";
import React from "react";
import { useFeaturedProduct } from "./useFeaturedProduct";
import ErrorMessage from "@/app/ui/ErrorMessage";
import HeroLoader from "./HeroLoader";

const FeatureProduct = () => {
  const { featuredProduct, isLoading, isError } = useFeaturedProduct();
  if (isLoading) return <HeroLoader />;
  if (isError)
    return (
      <div className=" flex items-center justify-center py-12">
        <ErrorMessage heading={"Feature products"} />
      </div>
    );
  return (
    <div className=" grid grid-cols-3 justify-center gap-2 gap-x-1 gap-y-7 px-1 py-12 sm:gap-x-5 sm:px-0 md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]">
      <div className="mb-8 text-center [grid-column:1/-1]">
        <p className="text-center text-xs text-green-500 sm:text-base">
          check now
        </p>
        <h1 className="  text-xs font-semibold sm:text-3xl ">
          <span className=" capitalize">our featured products</span> &rarr;
          <span className=" text-yellow-500">one step away</span>
        </h1>
      </div>

      {featuredProduct?.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default FeatureProduct;
