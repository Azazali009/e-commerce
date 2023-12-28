import Left from "@/app/components/detailProduct/Left";
import Right from "@/app/components/detailProduct/Right";

import React from "react";

const ProductDetailsCarousel = ({ params }) => {
  const { productId } = params;

  return (
    <section className=" relative flex flex-col justify-center gap-20 px-8 py-20 lg:flex-row lg:gap-6 ">
      <div className="mx-auto w-full max-w-[500px] flex-[1.5] md:w-auto lg:mx-0 lg:max-w-full">
        <Left productId={productId} />
      </div>
      <div className="flex-[2]">
        <Right productId={productId} />
      </div>
    </section>
  );
};

export default ProductDetailsCarousel;
