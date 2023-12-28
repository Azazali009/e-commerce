import Select from "@/app/ui/Select";
import React from "react";

const Colors = ({ colorValue, setColorValue, Products }) => {
  let colors = Products?.map((product) => JSON.parse(product.colors));
  colors = [...new Set(colors?.[0])];
  return (
    <div>
      <h3 className="mb-2 font-semibold capitalize text-slate-900">colors</h3>
      <Select
        value={colorValue}
        onChange={setColorValue}
        defaultValue={"All"}
        size={"mini"}
        options={colors}
      />
    </div>
  );
};

export default Colors;
