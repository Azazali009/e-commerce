import Image from "next/image";
import React from "react";
import { smooch } from "../utils/SmoochFont";
import { formateCurrency } from "@/app/helpers/formateCurrency";

const Banner = ({ src }) => {
  return (
    <div className=" relative">
      <Image
        width={500}
        height={500}
        className=" h-40 w-full object-contain sm:h-[20rem]"
        src={src}
        alt="car!"
      />
      <div className="absolute left-4 top-0 z-10 flex aspect-square w-20 animate-pulse flex-col items-center justify-center rounded-full bg-yellow-600 text-xl font-bold sm:top-4 sm:w-56 sm:gap-2 sm:text-7xl">
        <span className="  text-white">50%</span>
        <span className=" capitalize text-red-500">off</span>
      </div>

      <div className="absolute right-4 top-2 z-10 flex animate-bounce flex-col items-center justify-center rounded-full bg-slate-900/[.7] px-8 py-1.5 text-sm font-bold text-white sm:top-4 sm:gap-3 sm:px-24 sm:py-4 sm:text-3xl">
        <p>
          Rs:
          <del className="  text-red-500">{formateCurrency(45)}</del>
        </p>
        <p>
          Rs:
          <span className=" capitalize ">{formateCurrency(30)}</span>
        </p>
      </div>
      <div
        className={` ${smooch.className} absolute bottom-0 left-0 flex w-full items-center justify-center bg-yellow-400/[.5] text-2xl font-bold uppercase text-slate-600 sm:text-7xl`}
      >
        joggers
      </div>
    </div>
  );
};

export default Banner;
