"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // shipping fee
  const shippingFee = 200;

  // total cart items
  const totalCartItems = cart
    ?.map((curItem) => Number(curItem.quantity))
    ?.reduce((acc, cur) => acc + cur, 0);

  // total cart price
  const totalPrice = cart
    ?.map((curItem) => Number(curItem.price) * Number(curItem.quantity))
    ?.reduce((acc, cur) => acc + cur, 0);

  // handle add to cart function
  function handleAddToCart(newProduct) {
    setCart((prev) => (prev ? [...prev, newProduct] : [newProduct]));
  }

  // handle delete item
  function handleDelete(id) {
    setCart(cart?.filter((curItem) => curItem.id !== id));
  }
  // handle clear all cart

  function handleClearCart() {
    setCart([]);
  }

  useEffect(() => {
    const localCartItems = localStorage.getItem("shoppingCart");
    localCartItems !== null ? setCart(JSON.parse(localCartItems)) : [];
  }, []);
  useEffect(() => {
    return localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleDelete,
        handleClearCart,
        totalCartItems,
        totalPrice,
        shippingFee,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
