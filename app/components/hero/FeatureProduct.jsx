import Card from "@/app/ui/Card";
import React from "react";
import { useFeaturedProduct } from "./useFeaturedProduct";

const FeatureProduct = () => {
  const { featuredProduct, isLoading, isError } = useFeaturedProduct();
  if (isLoading) return <p>loading...</p>;
  return (
    <div className=" mt-12 grid grid-cols-[repeat(auto-fit,minmax(10rem,18rem))] justify-center gap-2 gap-x-5 gap-y-7">
      <div className="text-center [grid-column:1/-1]">
        <p className="text-center text-green-500">check now</p>
        <h1 className="  text-3xl font-semibold ">
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
