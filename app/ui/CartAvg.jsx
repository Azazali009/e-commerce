"use client";
import React from "react";
import { useCart } from "../context/CartContext";

const CartAvg = () => {
  const { totalCartItems, cart } = useCart();
  return (
    <div className=" relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-8 w-8 hover:text-yellow-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      {cart !== null && (
        <span className=" absolute -right-2 -top-2 flex  h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-800 hover:bg-yellow-500 hover:text-yellow-100">
          {totalCartItems}
        </span>
      )}
    </div>
  );
};

export default CartAvg;
