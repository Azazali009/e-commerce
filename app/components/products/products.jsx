"use client";

import React from "react";

import ErrorMessage from "@/app/ui/ErrorMessage";
import Sidebar from "../sidebar/Sidebar";
import PageSkeleton from "./PageSkeleton";
import MobileSidebar from "../sidebar/MobileSidebar";
import { useProductContext } from "@/app/context/ProductContext";
import SidebarOpenButton from "../sidebar/SidebarOpenButton";
import MainProductsPage from "./MainProductsPage";

const Products = () => {
  const { isLoading, isError, showSidebar } = useProductContext();

  if (isLoading) return <PageSkeleton />;
  if (isError) return <ErrorMessage heading={"Products"} />;

  return (
    <div className=" relative grid grid-cols-1 items-start gap-x-4 py-7 lg:grid-cols-[15rem_1fr]">
      {/* Filter sidebar toogle */}
      {!showSidebar && <SidebarOpenButton />}
      {showSidebar && <MobileSidebar />}

      {/* sidebar */}
      <div className=" sticky top-0 hidden lg:block">
        <Sidebar />
      </div>
      {/* main products section */}
      <MainProductsPage />
    </div>
  );
};

export default Products;
