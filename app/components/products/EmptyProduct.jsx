import React from "react";

const EmptyProduct = () => {
  return (
    <div className=" flex items-center justify-center [grid-column:1/-1]">
      <h3 className=" text-center font-semibold text-slate-700">
        No items found at the moment.
      </h3>
    </div>
  );
};

export default EmptyProduct;
