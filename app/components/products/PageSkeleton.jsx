import CardSkeleton from "@/app/ui/CardSkeleton";
import React from "react";

const PageSkeleton = () => {
  return (
    <div className=" px-1 py-8">
      <div className=" grid grid-cols-1 md:grid-cols-[24rem_1fr]">
        <div className="skeleton h-full w-full bg-gray-200"></div>
        <div className=" grid grid-cols-3 justify-center gap-2 gap-y-7 md:grid-cols-[repeat(auto-fit,minmax(10rem,15rem))]">
          <div className="flex justify-between [grid-column:1/-1]">
            <div className="skeleton h-6 w-40"></div>
            <div className="skeleton h-6 w-56"></div>
          </div>
          <div className="skeleton h-6 w-52 [grid-column:1/-1]"></div>
          {[...new Array(3)]?.map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
