"use client";
import { useCart } from "@/app/context/CartContext";
import { formateCurrency } from "@/app/helpers/formateCurrency";
import React from "react";

const Subtotal = () => {
  const { shippingFee, totalPrice } = useCart();
  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">{formateCurrency(totalPrice)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">{formateCurrency(shippingFee)}</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">
            {formateCurrency(totalPrice + shippingFee)}
          </p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-primaryBlue py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        Check out
      </button>
    </div>
  );
};

export default Subtotal;
