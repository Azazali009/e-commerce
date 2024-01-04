import React from "react";

const RightLoader = () => {
  return (
    <div className=" flex flex-col gap-3 ">
      <div className="skeleton h-16 w-[300px] sm:h-24 sm:w-[550px]"></div>
      <div className="skeleton h-8 w-52"></div>
      <div className="skeleton h-8 w-40"></div>
      <div className="skeleton h-12 w-32"></div>
      <div className="space-y-2">
        <div className="skeleton h-12 w-[250px] sm:w-[470px]"></div>
        <div className="skeleton h-12 w-[200px] sm:w-[400px]"></div>
        <div className="skeleton h-12 w-[230px] sm:w-[520px]"></div>
      </div>
      <div className=" flex gap-2">
        <div className="skeleton h-12 w-20 sm:w-32"></div>
        <div className="skeleton h-12 w-20 sm:w-32"></div>
        <div className="skeleton h-12 w-20 sm:w-32"></div>
      </div>
      <div className="skeleton h-14 w-[230px] sm:w-[500px]"></div>
      <div className="skeleton h-14 w-[230px] sm:w-[500px]"></div>
    </div>
  );
};

export default RightLoader;
