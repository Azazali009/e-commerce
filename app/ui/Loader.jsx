import React from "react";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className=" mt-16 flex flex-col items-center justify-center gap-2">
      <Circles height={60} width={60} color="#E3A008" />
      <p className=" animate-pulse font-semibold">Loading....</p>
    </div>
  );
};

export default Loader;
