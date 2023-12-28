import Link from "next/link";
import React from "react";
import { smooch } from "../components/utils/SmoochFont";
import Navbar from "../components/navbar/Navbar";

const Header = () => {
  return (
    <header className="navbar flex justify-between bg-slate-900 text-white">
      <div className=" flex gap-6">
        <h2
          className={
            " flex gap-2 text-3xl font-bold capitalize text-yellow-500"
          }
        >
          <span className={smooch.className}>Awan</span>
          <span>LLC</span>
        </h2>
        <Navbar />
      </div>
      <p>cart</p>
    </header>
  );
};

export default Header;
