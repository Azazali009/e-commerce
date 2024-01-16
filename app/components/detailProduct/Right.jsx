"use client";
import Select from "@/app/ui/Select";
import Link from "next/link";
import React, { useState } from "react";
import ReactStars from "react-stars";
import { formateCurrency } from "@/app/helpers/formateCurrency";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { formateNumber } from "@/app/helpers/formateNumber";

const Right = ({ Product }) => {
  const router = useRouter();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const { handleAddToCart, cart, setCart } = useCart();
  const {
    id,
    title,
    rating,
    images,
    reviews,
    description,
    price,
    category,
    isSizeAble,
  } = Product;
  // const colorsArr = JSON?.parse(colors);
  const image = JSON?.parse(images)[0]?.src;

  const handleClick = () => {
    const isInCart = cart?.find(
      (curItem) =>
        curItem.id === id + selectedColor + selectedSize &&
        curItem.color === selectedColor &&
        curItem.size === selectedSize,
    );
    if (isInCart) {
      let updatedProducts = cart?.map((curItem) => {
        if (curItem.id === id) {
          return {
            ...curItem,
            quantity: Number(curItem.quantity) + Number(selectedQuantity),
          };
        } else return curItem;
      });
      toast.success("Cart updated successfully");
      return setCart(updatedProducts);
    } else {
      handleAddToCart({
        id: id + selectedColor + selectedSize,
        title,
        image,
        price,
        category,
        quantity: selectedQuantity,
        color: selectedColor,
        size: selectedSize,
      });
      router.push("/cart");
      toast.success("item added to the cart");
    }
  };

  return (
    <div className=" flex flex-col gap-6">
      <h2 className="text-sm font-semibold capitalize text-slate-900 sm:text-2xl ">
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
          (<span className=" font-semibold">{formateNumber(reviews)} </span>
          reviews)
        </span>
      </div>
      <p className="font-semibold capitalize text-slate-500">
        category:{" "}
        <Link className="font-normal hover:text-yellow-500" href={""}>
          {category}
        </Link>{" "}
      </p>
      <p className=" text-xl font-medium text-slate-900 sm:text-2xl">
        {formateCurrency(price)}
      </p>
      <p className=" text-xs sm:text-sm">{description}</p>
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* color */}
        {/* <Select
          defaultValue={"choose color"}
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target?.value)}
          label={"color"}
          options={colorsArr}
        /> */}

        {/* quantity */}
        <Select
          label={"quantity"}
          onChange={(e) => Number(setSelectedQuantity(e.target?.value))}
          value={selectedQuantity}
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
        {isSizeAble && (
          <Select
            defaultValue={"choose size"}
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target?.value)}
            label={"size"}
            options={[
              { value: "S" },
              { value: "M" },
              { value: "L" },
              { value: "XL" },
            ]}
          />
        )}
      </div>
      <button
        disabled={isSizeAble && selectedSize === ""}
        onClick={handleClick}
        className="btn btn-primary border-primaryBlue bg-primaryBlue capitalize text-blue-50 shadow-lg duration-300 hover:bg-transparent hover:text-slate-900 hover:shadow-none "
      >
        add to cart
      </button>
      <button
        disabled={isSizeAble && selectedSize === ""}
        className="btn btn-secondary capitalize shadow-lg duration-300 hover:bg-transparent hover:text-slate-900 hover:shadow-none "
      >
        add to wishlist
      </button>
    </div>
  );
};

export default Right;
