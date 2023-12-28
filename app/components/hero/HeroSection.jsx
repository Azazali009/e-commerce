"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import FeatureProduct from "./FeatureProduct";
import Banner from "./Banner";

const HeroBanner = () => {
  return (
    <div className="mx-auto max-w-6xl ">
      <div className="relative flex justify-center border-b border-gray-300 pb-20">
        <Carousel
          autoPlay
          infiniteLoop
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={3000}
          width="100%"
          dynamicHeight={true}
          className=" mt-7"
        >
          <Banner
            src={
              "https://m.media-amazon.com/images/I/51fKCa1Fn6L._AC_SY695_.jpg"
            }
          />
          <Banner
            src={
              "https://m.media-amazon.com/images/I/51zjlRGdDaL._AC_SY695_.jpg"
            }
          />
        </Carousel>
      </div>
      <FeatureProduct />
    </div>
  );
};

export default HeroBanner;
