import React from "react";

const CheckBox = ({text}) => {
  return (
    <div class="flex items-center">
      <input
        id="checked-checkbox"
        type="checkbox"
        value=""
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
