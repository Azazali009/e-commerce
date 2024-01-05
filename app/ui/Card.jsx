import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ReactStars from "react-stars";
import { formateCurrency } from "../helpers/formateCurrency";
import VerifiedSvg from "./VerifiedSvg";
import CloseSvg from "./CloseSvg";

const Card = ({ product }) => {
  const router = useRouter();
  const { images, title, category, rating, description, price, stock, id } =
    product;
  const imageArr = JSON?.parse(images);
  const firstImage = imageArr?.[0]?.src;

  return (
    <div
      onClick={() => router.push(`/products/${id}`)}
      className=" group relative cursor-pointer overflow-hidden rounded-lg border-[2px] p-2 hover:border-yellow-500"
    >
      <span className=" absolute right-3 top-3 z-10 hidden rounded-full bg-slate-900/[.9] px-4 py-1.5 text-sm capitalize text-white lg:inline-block">
        {category}
      </span>
      <figure className=" flex items-center justify-center">
        <Image
          width={200}
          height={200}
          className=" h-[100px] w-[50%] object-contain transition-all duration-300 group-hover:scale-105 sm:w-full lg:h-[300px] "
          src={firstImage}
          alt="car!"
        />
      </figure>
      <div className="flex flex-col justify-between gap-2 py-3 sm:gap-4 sm:px-6">
        <h2 className=" mt-3 text-[9px] font-semibold sm:text-sm">
          {title?.slice(0, 15)}...
        </h2>
        <div className=" hidden gap-2 md:flex">
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={10}
            value={3.5}
            color2={"#ffd700"}
            edit={false}
          />
          <span className=" text-sm">{rating}</span>
        </div>
        <p className=" text-[8px] lowercase sm:text-sm">
          {description?.slice(0, 40)}...
        </p>
        <p className="flex items-center gap-2 text-[8px] font-semibold capitalize sm:text-base sm:font-bold lg:text-[13px]">
          <span className={`${stock > 0 ? "text-black" : " text-red-500"}`}>
            {stock > 0 ? "Instock" : "Leading"}
          </span>{" "}
          :
          <span className="  font-normal">
            {stock > 0 ? <VerifiedSvg /> : <CloseSvg />}
          </span>{" "}
        </p>
        <p className=" mb-8 text-[8px] font-semibold capitalize sm:text-base sm:font-bold">
          {" "}
          price : <span className=" font-normal">
            {formateCurrency(price)}
          </span>{" "}
        </p>
        <div className=" absolute bottom-3 right-2 ">
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("rukho zara abhi koi event nahi hai 😍");
            }}
            className=" flex items-center justify-center rounded bg-slate-900 px-2 py-1 text-[8px] capitalize text-white transition-all duration-200 md:btn-sm hover:scale-90 hover:bg-slate-800 sm:text-sm md:px-4 md:py-2"
          >
            add to cart!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
