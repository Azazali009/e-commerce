import React from "react";

const LeftLoader = () => {
  return (
    <div className="flex gap-2">
      <div className=" flex flex-col gap-2">
        <div className=" skeleton h-12 w-12 rounded-md"></div>
        <div className=" skeleton h-12 w-12 rounded-md"></div>
        <div className=" skeleton h-12 w-12 rounded-md"></div>
        <div className=" skeleton h-12 w-12 rounded-md"></div>
      </div>
      <div className=" skeleton h-96 w-[400px]"></div>
    </div>
  );
};

export default LeftLoader;
