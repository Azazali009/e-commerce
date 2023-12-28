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
      <span className=" absolute right-3 top-3 z-10 inline-block rounded-full bg-slate-900/[.9] px-4 py-1.5 text-sm capitalize text-white">
        {category}
      </span>
      <figure className=" ">
        <Image
          width={200}
          height={200}
          className="h-[300px] w-full  object-contain transition-all duration-300 group-hover:scale-105 "
          src={firstImage}
          alt="car!"
        />
      </figure>
      <div className="flex flex-col justify-between gap-4 px-6 py-3">
        <h2 className="card-title">{title?.slice(0, 15)}...</h2>
        <div className=" flex gap-2">
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={15}
            value={3.5}
            color2={"#ffd700"}
            edit={false}
          />
          <span className=" text-sm">{rating}</span>
        </div>
        <p className=" lowercase">{description?.slice(0, 40)}...</p>
        <p className="flex gap-2 font-bold capitalize">
          <span className={`${stock > 0 ? "text-black" : " text-red-500"}`}>
            {stock > 0 ? "Instock" : "out of stock"}
          </span>{" "}
          :
          <span className="  font-normal">
            {stock > 0 ? <VerifiedSvg /> : <CloseSvg />}
          </span>{" "}
        </p>
        <p className=" mb-8 font-bold capitalize">
          {" "}
          price : <span className=" font-normal">
            {formateCurrency(price)}
          </span>{" "}
        </p>
        <div className=" absolute bottom-3 right-2 ">
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert("hi");
            }}
            className="btn btn-sm rounded bg-slate-900 capitalize text-white transition-all duration-200 hover:scale-90 hover:bg-slate-800"
          >
            add to cart!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
