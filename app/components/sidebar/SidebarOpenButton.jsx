import { useProductContext } from "@/app/context/ProductContext";
import React from "react";

const SidebarOpenButton = () => {
  const { showSidebar, setShowsidebar } = useProductContext();
  return (
    <label
      onClick={() => setShowsidebar(true)}
      className="group btn btn-circle swap swap-rotate btn-xs -mt-4 mb-2 ml-2 border-none bg-gray-200 text-black hover:text-white lg:hidden "
    >
      <input type="checkbox" checked={showSidebar} />
      {/* hamburger icon */}
      <div className=" swap-off flex items-center justify-center ">
        <svg
          className=" fill-current "
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </div>

      <p className=" pointer-events-auto absolute left-full top-2 -mt-3 ml-2  translate-x-0 whitespace-nowrap rounded bg-blue-200 px-2 py-1 text-blue-700  opacity-100 group-hover:pointer-events-none group-hover:-translate-x-4 group-hover:opacity-0 ">
        sidebar filter
      </p>
      <p className=" pointer-events-none absolute left-full top-2 -mt-3 ml-4 translate-x-4 whitespace-nowrap rounded bg-slate-700 px-2 py-1 text-white opacity-0 group-hover:pointer-events-auto group-hover:translate-x-0  group-hover:opacity-100">
        filter menu
      </p>
    </label>
  );
};

export default SidebarOpenButton;
