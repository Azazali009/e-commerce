import React from "react";

const Select = ({
  label,
  defaultValue,
  options,
  size = {},
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm capitalize text-slate-900">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`select select-warning ${
          size === "mini"
            ? " select-sm w-full max-w-[10rem]"
            : "select-sm w-full max-w-xs "
        } w-full max-w-xs`}
      >
        <option selected value={defaultValue}>
          {defaultValue}
        </option>
        {options?.map((option) => {
          return (
            <option key={option?.value} value={option?.value}>
              {option?.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
