import React from "react";

const LeftLoader = () => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row ">
      <div className=" flex flex-row gap-2 sm:flex-col">
        <div className=" skeleton h-12 w-12 rounded-md"></div>
        <div className=" skeleton h-12 w-12 rounded-md"></div>
        <div className=" skeleton h-12 w-12 rounded-md"></div>
        <div className=" skeleton h-12 w-12 rounded-md"></div>
      </div>
      <div className=" skeleton -order-1 h-96  w-[300px] sm:order-[0] sm:w-[400px]"></div>
    </div>
  );
};

export default LeftLoader;
