import React from "react";

const SelectInput = ({ name, value, onChange, options, placeholder }) => {
  return (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full text-[#333333] bg-white py-[10px] px-[12px] border border-[#999999] rounded appearance-none"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#999999]">
        ▼
      </div>
    </div>
  );
};

export default SelectInput;
