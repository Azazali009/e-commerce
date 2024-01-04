"use client";
import React from "react";
import Left from "./Left";
import Right from "./Right";

import { useProduct } from "./useProduct";
import LeftLoader from "./LeftLoader";
import RightLoader from "./RightLoader";
import ErrorMessage from "@/app/ui/ErrorMessage";

const DetailProduct = ({ productId }) => {
  const { Product, isLoading, isError } = useProduct(productId);
  if (isLoading)
    return (
      <div className=" flex flex-col justify-center gap-20 px-1 sm:px-8 lg:flex-row lg:gap-6">
        <LeftLoader />
        <RightLoader />
      </div>
    );
  if (isError) return <ErrorMessage heading={"resources"} />;
  return (
    <>
      <div className="mx-auto w-full max-w-[500px] flex-[1.5] md:w-auto lg:mx-0 lg:max-w-full">
        <Left Product={Product} />
      </div>
      <div className="flex-[2]">
        <Right Product={Product} />
      </div>
    </>
  );
};

export default DetailProduct;
