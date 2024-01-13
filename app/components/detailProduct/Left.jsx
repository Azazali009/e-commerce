"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BackSvg from "@/app/ui/BackSvg";
import { useRouter } from "next/navigation";

const Left = ({ Product }) => {
  const router = useRouter();
  const imageArr = JSON.parse(Product?.images);

  return (
    <div className="sticky top-4 mx-auto w-full max-w-[1360px] text-[20px] text-white">
      <button
        onClick={() => router.back()}
        className=" fixed left-2 top-20 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-yellow-600 shadow-xl hover:text-red-500 hover:shadow-inner"
      >
        <BackSvg />
      </button>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {imageArr?.map((image) => {
          return (
            <picture key={image?.src}>
              <source srcSet={image?.src} type="image/webp" />
              <img
                src={image?.src}
                alt="pic"
                className=" max-h-80 object-contain"
              />
            </picture>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Left;
