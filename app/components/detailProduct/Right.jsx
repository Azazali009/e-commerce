"use client";
import Select from "@/app/ui/Select";
import Link from "next/link";
import React from "react";
import ReactStars from "react-stars";
import { useProduct } from "./useProduct";
import { formateCurrency } from "@/app/helpers/formateCurrency";
import RightLoader from "./RightLoader";
import ErrorMessage from "@/app/ui/ErrorMessage";

const Right = ({ productId }) => {
  const { Product, isLoading, isError } = useProduct(productId);
  if (isLoading) return <RightLoader />;
  if (isError) return <ErrorMessage heading={"content"} />;
  const { title, rating, reviews, description, price, category, colors } =
    Product;
  const colorsArr = JSON?.parse(colors);
  console.log(colorsArr);
  return (
    <div className=" flex flex-col gap-6">
      <h2 className="text-2xl font-semibold capitalize text-slate-900 ">
        {title}
      </h2>
      <div className=" flex items-center gap-2">
        <ReactStars
          count={5}
          // onChange={ratingChanged}
          size={35}
          value={rating}
          color2={"#ffd700"}
          edit={false}
        />
        <span>{rating}</span>
        <span className="text-sm">
          {" "}
          (<span className=" font-semibold">{reviews}</span>
          reviews)
        </span>
      </div>
      <p className="font-semibold capitalize text-slate-500">
        category:{" "}
        <Link className="font-normal hover:text-red-300" href={""}>
          {category}
        </Link>{" "}
      </p>
      <p className=" text-2xl font-medium text-slate-900">
        {formateCurrency(price)}
      </p>
      <p className=" text-sm">{description}</p>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* color */}
        <Select
          defaultValue={"choose color"}
          label={"color"}
          options={colorsArr}
        />

        {/* quantity */}
        <Select
          label={"quantity"}
          defaultValue={"1"}
          options={[
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
            { value: 7 },
            { value: 8 },
          ]}
        />
        {/* size */}
        <Select
          defaultValue={"choose size"}
          label={"size"}
          options={[
            { value: "4xl" },
            { value: "5xl" },
            { value: "6xl" },
            { value: "7xl" },
            { value: "8xl" },
            { value: "9xl" },
            { value: "10xl" },
          ]}
        />
      </div>
      <button className="btn btn-primary capitalize duration-300 hover:bg-transparent hover:text-slate-900 ">
        add to cart
      </button>
      <button className="btn btn-secondary capitalize duration-300 hover:bg-transparent hover:text-slate-900 ">
        add to wishlist
      </button>
    </div>
  );
};

export default Right;
