import React from "react";
import ErrorSvg from "./ErrorSvg";
import { useRouter } from "next/navigation";

const ErrorMessage = ({ heading }) => {
  const router = useRouter();
  return (
    <div className=" mt-3 flex flex-col gap-3 text-center text-slate-700 ">
      <ErrorSvg />

      <h1 className=" text-lg font-bold capitalize text-red-500  sm:text-2xl">
        Failed to load {heading}
      </h1>
      <p className=" text-xs  sm:text-lg">
        There was an unknown error on the server while fetching {heading}.
        Please try again.
      </p>
      <div>
        <button
          onClick={() => router.back()}
          className=" cursor-pointer rounded border-none bg-gray-200 px-4 py-1.5 font-medium shadow-md duration-200 hover:scale-95 hover:shadow-none"
        >
          Back &larr;
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
