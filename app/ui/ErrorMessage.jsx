import React from "react";
import ErrorSvg from "./ErrorSvg";

const ErrorMessage = ({ heading }) => {
  return (
    <div className=" flex flex-col gap-3 ">
      <ErrorSvg />

      <h1 className=" text-2xl font-bold capitalize text-red-500">
        Failed to load {heading}
      </h1>
      <p>
        There was an unknown error on the server while fetching {heading}.
        Please try again.
      </p>
    </div>
  );
};

export default ErrorMessage;
