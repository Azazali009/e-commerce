import CardSkeleton from "@/app/ui/CardSkeleton";
import React from "react";

const HeroLoader = () => {
  return (
    <div className=" grid grid-cols-3 justify-center gap-2 gap-x-1 gap-y-7 px-1 py-12 sm:gap-x-5 sm:px-0 md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]">
      <div className="flex flex-col items-center justify-center space-y-2 text-center [grid-column:1/-1]">
        <div className=" skeleton h-6 w-40"></div>
        <div className="  skeleton h-7 w-96 "></div>
      </div>
      {[...new Array(4)]?.map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
};

export default HeroLoader;
