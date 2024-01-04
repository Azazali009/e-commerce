import DetailProduct from "@/app/components/detailProduct/DetailProduct";
import Left from "@/app/components/detailProduct/Left";
import Right from "@/app/components/detailProduct/Right";

import React from "react";

const ProductDetailsCarousel = ({ params }) => {
  const { productId } = params;

  return (
    <section className=" relative flex flex-col justify-center gap-20 px-8 py-20 lg:flex-row lg:gap-6 ">
      <DetailProduct productId={productId} />
    </section>
  );
};

export default ProductDetailsCarousel;
