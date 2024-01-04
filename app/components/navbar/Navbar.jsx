import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden sm:block">
      <ul className=" flex gap-3">
        <li className=" capitalize transition-all duration-200 hover:text-yellow-500">
          <Link href={"/"}>home</Link>
        </li>
        <li className=" capitalize transition-all duration-200 hover:text-yellow-500">
          <Link href={"/products"}>products</Link>
        </li>
        <li className=" capitalize transition-all duration-200 hover:text-yellow-500">
          <Link href={"/contact"}>contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
