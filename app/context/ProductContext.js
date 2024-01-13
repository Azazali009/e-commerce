"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from "../components/products/useProducts";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [stockValue, setStockValue] = useState("All");
  const [sortValue, setSortValue] = useState("");
  const [maxPriceValue, setMaxPriceValue] = useState(0);
  const [showSidebar, setShowsidebar] = useState(false);

  const { isLoading, isError, Products, count } = useProducts();

  // Filter by category
  let filtureProduct = Products?.filter((product) =>
    category === "All"
      ? product
      : product.category === category?.replace("_", " "),
  );

  //   searching
  filtureProduct = filtureProduct?.filter((product) => {
    return !searchValue
      ? product
      : product.title
          ?.toLocaleLowerCase()
          ?.includes(searchValue?.toLocaleLowerCase());
  });

  //   filter by price range
  filtureProduct = filtureProduct?.filter(
    (product) => product.price <= priceValue,
  );
  // filter by stock
  filtureProduct = filtureProduct?.filter((product) => {
    if (stockValue !== "All") {
      return stockValue === "instock" ? product.stock > 0 : product.stock === 0;
    } else return product;
  });
  // sorting
  const [field, direction] = sortValue?.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortProducts = filtureProduct?.sort(
    (a, b) => (a[field] - b[field]) * modifier,
  );
  useEffect(() => {
    let maxPrice = Products?.map((product) => product.price)?.reduce(
      (acc, cur) => Math.max(acc, cur),
      0,
    );
    setMaxPriceValue(maxPrice);
    setPriceValue(maxPrice);
  }, [Products]);
  return (
    <ProductContext.Provider
      value={{
        isLoading,
        isError,
        Products,
        count,
        filtureProduct,
        setCategory,
        category,
        setSearchValue,
        searchValue,
        setPriceValue,
        priceValue,
        setStockValue,
        stockValue,
        sortProducts,
        sortValue,
        setSortValue,
        maxPriceValue,
        setMaxPriceValue,
        showSidebar,
        setShowsidebar,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
