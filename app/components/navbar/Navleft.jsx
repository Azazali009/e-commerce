import CartAvg from "@/app/ui/CartAvg";
import Link from "next/link";
import React from "react";

const Navleft = () => {
  return (
    <ul>
      <li>
        <Link href={"/cart"}>
          <CartAvg />
        </Link>
      </li>
    </ul>
  );
};

export default Navleft;
