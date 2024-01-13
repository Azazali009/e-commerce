import Card from "@/app/ui/Card";
import React from "react";
import Pagination from "../pagination/Pagination";
import { useProductContext } from "@/app/context/ProductContext";
import { PAGE_SIZE } from "../pageSize";
import FilterAndSort from "./FilterAndSort";
import ProductIndicator from "./ProductIndicator";
import EmptyProduct from "./EmptyProduct";

const MainProductsPage = () => {
  const { sortProducts, count } = useProductContext();
  const pageCount = Math.ceil(count / PAGE_SIZE);
  const isProducts = sortProducts?.length > 0;

  return (
    <div className="py-6 sm:py-0">
      <FilterAndSort />
      <div className=" grid grid-cols-3 justify-center gap-2 gap-x-1 gap-y-7 px-2 py-12 sm:gap-x-5 sm:px-4 md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]">
        <ProductIndicator />
        {isProducts ? (
          sortProducts?.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <EmptyProduct />
        )}
      </div>
      {/* pagination */}
      {pageCount > 1 && sortProducts?.length > 0 && <Pagination />}
    </div>
  );
};

export default MainProductsPage;
