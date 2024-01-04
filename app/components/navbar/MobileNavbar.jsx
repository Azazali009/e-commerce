import Link from "next/link";
import React from "react";

const MobileNavbar = ({ setMobNav, mobNav }) => {
  return (
    <div
      className={` ${
        mobNav
          ? " pointer-events-auto visible top-0 opacity-100 "
          : "pointer-events-none invisible -top-8 opacity-0"
      } absolute right-4 z-20 flex  w-[30%] translate-y-[50%] items-start justify-center rounded-lg bg-white text-black shadow-2xl transition-all duration-300`}
    >
      <button
        onClick={() => setMobNav(false)}
        className=" absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 hover:text-red-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-3 w-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="  flex flex-col items-center justify-center gap-4  py-6">
        <nav className="">
          <ul className=" flex flex-col gap-3">
            <li className=" text-sm capitalize transition-all duration-200 hover:text-yellow-500">
              <Link onClick={() => setMobNav(false)} href={"/"}>
                home
              </Link>
            </li>
            <li className=" text-sm capitalize transition-all duration-200 hover:text-yellow-500">
              <Link onClick={() => setMobNav(false)} href={"/products"}>
                products
              </Link>
            </li>
            <li className=" text-sm capitalize transition-all duration-200 hover:text-yellow-500">
              <Link onClick={() => setMobNav(false)} href={"/contact"}>
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
