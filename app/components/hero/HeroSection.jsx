"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
          showStatus={true}
          showThumbs={false}
          interval={3000}
          width="100%"
          dynamicHeight={true}
          className=" mt-7"
        >
          <Banner
            src={"https://m.media-amazon.com/images/I/817bH6OU80L._SX522_.jpg"}
            title={"Thalgo"}
          />
          <Banner
            src={"https://m.media-amazon.com/images/I/81e9eXvoAcL._SX679_.jpg"}
            title={"makeup sponge"}
          />
          <Banner
            src={
              "https://m.media-amazon.com/images/I/91+Sri9TlgL._AC_SX679_.jpg"
            }
            title={"smart oven"}
          />
          <Banner
            src={"https://m.media-amazon.com/images/I/71P6h4i-EHL._SX679_.jpg"}
            title={"Dove soap"}
          />
        </Carousel>
      </div>
      <FeatureProduct />
    </div>
  );
};

export default HeroBanner;
