import { useCart } from "@/app/context/CartContext";
import React from "react";
import Cartitem from "./Cartitem";
import Subtotal from "./Subtotal";
import Link from "next/link";
import EmptyCart from "./EmptyCart";

const ShoppingCart = () => {
  const { cart, handleClearCart } = useCart();
  return (
    <>
      {/* <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    @layer utilities {\n    input[type="number"]::-webkit-inner-spin-button,\n    input[type="number"]::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n',
        }}
      /> */}
      {cart?.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="min-h-dvh bg-gray-100 pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className=" no-scrollbar max-h-[400px] overflow-y-scroll rounded-lg md:w-2/3">
              {cart?.map((cartItem) => (
                <Cartitem key={cartItem.id} {...cartItem} />
              ))}
            </div>
            {/* Sub total */}
            <Subtotal />
          </div>
          <div className=" mx-auto flex justify-center gap-4 py-6 ">
            <Link
              href={"/products"}
              className="btn btn-sm rounded-md border-none bg-primaryBlue capitalize text-blue-50 transition-all duration-200 hover:bg-opacity-80 active:scale-90"
            >
              continue shopping
            </Link>
            <button
              onClick={handleClearCart}
              className="btn btn-sm rounded-md border-none bg-red-600 capitalize text-white transition-all duration-200 hover:bg-opacity-80 active:scale-90"
            >
              clear cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
