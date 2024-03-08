import React from "react";

const CheckBox = ({ text, name, value, handleCheckboxChange }) => {
  console.log(value)
  return (
    <div class="flex items-center">
      <input
        id="checked-checkbox"
        type="checkbox"
        name={name}
        onChange={handleCheckboxChange}
        checked={value || false}
        className="w-4 h-4 bg-gray-100 border-gray-300 "
      />
      <label
        for="checked-checkbox"
        class="ms-2 text-sm font-medium"
      >
       {text}
      </label>
    </div>
  );
};

export default CheckBox;
