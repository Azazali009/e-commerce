import Link from "next/link";
import React from "react";

const EmptyCart = () => {
  return (
    <div className=" flex min-h-[50vh] items-center justify-center ">
      <div className=" flex flex-col items-center space-y-3 rounded-md p-8 shadow-xl transition-all duration-300 hover:shadow-none">
        <h3 className=" text-sm font-medium sm:text-base">
          No items found in the cart. Go to products and add some favourite
          product to the cart
        </h3>
        <Link
          href={"/products"}
          className="btn btn-sm rounded-sm border-none bg-blue-600 capitalize text-white transition-all duration-200 hover:bg-opacity-80 active:scale-90"
        >
          continue shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
