import React from "react";
import ErrorSvg from "./ErrorSvg";

const ErrorMessage = ({ heading }) => {
  return (
    <div className=" mt-3 flex flex-col gap-3 text-center ">
      <ErrorSvg />

      <h1 className=" text-lg font-bold capitalize text-red-500 sm:text-2xl">
        Failed to load {heading}
      </h1>
      <p className=" text-xs sm:text-lg">
        There was an unknown error on the server while fetching {heading}.
        Please try again.
      </p>
    </div>
  );
};

export default ErrorMessage;
