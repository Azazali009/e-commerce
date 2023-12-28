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
        className="h-[20rem] w-full object-contain"
        src={src}
        alt="car!"
      />
      <div className="absolute left-4 top-4 z-10 flex aspect-square w-56 animate-pulse flex-col items-center justify-center gap-2 rounded-full bg-yellow-600 text-7xl font-bold">
        <span className="  text-white">50%</span>
        <span className=" capitalize text-red-500">off</span>
      </div>

      <div className="absolute right-4 top-4 z-10 flex animate-bounce flex-col items-center justify-center gap-3 rounded-full bg-slate-900/[.7] px-24 py-4 text-3xl font-bold text-white">
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
        className={` ${smooch.className} absolute bottom-0 left-0 flex w-full items-center justify-center bg-yellow-400/[.5] text-7xl font-bold uppercase text-slate-600`}
      >
        joggers
      </div>
    </div>
  );
};

export default Banner;
