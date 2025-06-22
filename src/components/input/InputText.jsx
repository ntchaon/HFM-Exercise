import React from "react";

const TextInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  return (
    <input
      className={`w-full p-[10px] border border-[#999999] rounded ${className}`}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
