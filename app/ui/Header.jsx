"use client";
import Link from "next/link";
import React, { useState } from "react";
import { smooch } from "../components/utils/SmoochFont";
import Navbar from "../components/navbar/Navbar";
import Navleft from "../components/navbar/Navleft";
import MobileNavbar from "../components/navbar/MobileNavbar";

const Header = () => {
  const [mobNav, setMobNav] = useState(false);
  return (
    <header className="navbar relative flex justify-between bg-slate-900 px-6 text-white">
      <div className=" flex gap-6">
        <Link href={""}>
          <h2
            className={
              " flex gap-2 text-3xl font-bold capitalize text-yellow-500"
            }
          >
            <span className={smooch.className}>Awan</span>
            <span>LLC</span>
          </h2>
        </Link>

        <Navbar />
      </div>
      <div className=" flex gap-4">
        <button onClick={() => setMobNav(true)} className=" block sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <Navleft />
      </div>

      <MobileNavbar setMobNav={setMobNav} mobNav={mobNav} />
    </header>
  );
};

export default Header;
