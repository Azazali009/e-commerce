import Image from "next/image";
import React, { useEffect, useState } from "react";

const DealBanner = () => {
  const [secRemaining, setSecRemaining] = useState(10800);
  let mins = Math.floor(secRemaining / 60);
  mins = mins % 60;
  const seconds = Math.floor(secRemaining % 60);
  const hours = Math.floor(secRemaining / 60 / 60);

  useEffect(function () {
    const id = setInterval(function () {
      setSecRemaining((cur) => (cur > 0 ? cur - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className=" mx-auto flex min-h-32 max-w-[960px] items-center justify-between gap-6 rounded-xl bg-black px-3 text-white shadow-lg sm:min-h-40 sm:px-6">
      <div className="flex flex-[1.5] flex-col items-start gap-2  sm:flex-row  sm:items-center">
        <h3 className=" whitespace-nowrap text-sm font-semibold uppercase sm:text-lg">
          Daily deals
        </h3>
        <p className=" whitespace-nowrap rounded-full bg-red-700 px-5 text-[9px] font-light sm:px-8">
          up to <span className=" text-xs font-semibold sm:text-base">70%</span>{" "}
          off
        </p>
      </div>
      <div className="flex flex-[1] flex-col items-center gap-3 sm:flex-[2] sm:gap-6 ">
        <p className="  text-xs font-light capitalize text-gray-200 sm:-mb-2 sm:text-base">
          ending in
        </p>
        <p className=" text-xl font-medium leading-3 sm:text-4xl">
          {secRemaining > 0 ? (
            ` ${hours < 10 && "0"}${hours} : ${mins < 10 ? "0" : ""}${mins} : ${
              seconds < 10 ? "0" : ""
            }${seconds}`
          ) : (
            <span className=" inline-block animate-bounce text-red-600">
              00 : 00 : 00
            </span>
          )}
        </p>
        <p className="space-x-2 text-[9px] font-light sm:space-x-4 sm:text-sm">
          {" "}
          <span>hours</span>
          <span>minutes</span>
          <span>seconds</span>
        </p>
      </div>
      <div className="flex flex-[1] items-center justify-end justify-items-end">
        <Image
          src={"/deal.png"}
          alt="deal picture"
          width={400}
          height={400}
          className="w-12 animate-pulse"
        />
      </div>
    </div>
  );
};

export default DealBanner;
