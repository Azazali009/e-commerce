import { useCart } from "@/app/context/CartContext";
import { formateCurrency } from "@/app/helpers/formateCurrency";
import Image from "next/image";
import React, { useState } from "react";

const Cartitem = ({
  id,
  image,
  title,
  size,
  color,
  price,
  quantity: curQuantity,
}) => {
  const [quantity, setQuantity] = useState(curQuantity);
  const { handleDelete } = useCart();
  return (
    <div className="mb-6  justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <figure className=" h-20 w-20">
        <Image
          src={image}
          width={200}
          height={200}
          alt="product-image"
          className=" h-full w-full rounded-lg object-contain"
        />
      </figure>
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">
            {title?.slice(0, 20)}...
          </h2>
          {color && (
            <p className="mt-1 text-xs text-gray-700">
              {" "}
              <span className="font-semibold capitalize">color:</span> {color}
            </p>
          )}
          {size && (
            <p className="mt-1 text-xs text-gray-700">
              {" "}
              <span className="font-semibold capitalize">size:</span> {size}
            </p>
          )}
        </div>
        <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
          <div className="flex items-center border-gray-100">
            <button className="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {" "}
              -{" "}
            </button>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target?.value)}
            />
            <button className="cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50">
              {" "}
              +{" "}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">{formateCurrency(price)}</p>
            <button onClick={() => handleDelete(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
