import Select from "@/app/ui/Select";
import React from "react";

const Colors = ({ colorValue, setColorValue, Products, dark = false }) => {
  // let colors = Products?.map((product) => JSON.parse(product.colors));
  // // colors = [...new Set(colors)];
  // console.log(colors[0]);
  return (
    <div>
      <h3
        className={`mb-2 font-semibold capitalize ${
          dark ? " text-white" : "text-slate-900 "
        }`}
      >
        colors
      </h3>
      <Select
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
        defaultValue={"All"}
        size={"mini"}
        options={[
          { value: "red" },
          { value: "green" },
          { value: "blue" },
          { value: "gray" },
          { value: "yellow" },
        ]}
      />
    </div>
  );
};

export default Colors;
