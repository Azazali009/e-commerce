import React from "react";

const Select = ({
  label,
  defaultValue,
  options,
  size = {},
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm capitalize text-slate-900">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className={`select ${
          error ? " select-error bg-red-500" : "select-warning"
        } ${
          size === "mini"
            ? " select-sm w-full max-w-[10rem]"
            : "select-sm w-full max-w-xs "
        } w-full max-w-xs`}
      >
        <option selected value="">
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
      {error && (
        <span className=" flex h-6 animate-bounce items-center justify-center rounded-full bg-red-200 text-center text-sm text-red-700">
          This field is required.
        </span>
      )}
    </div>
  );
};

export default Select;
