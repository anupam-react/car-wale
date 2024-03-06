import React from "react";

const Navbar = ({ handleOpen }) => {
  return (
    <div className="flex items-center justify-between shadow-xl shadow-blue-gray-900/5 p-2">
      <img
        src="./Group 2.svg"
        alt=""
        className="cursor-pointer"
        onClick={handleOpen}
      />

      <div className="flex items-center gap-20 mr-4">
        <div
          className="flex px-2 py-1 border border-1"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "30px",
          }}
        >
          <input
            type="text"
            className="border-none bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none w-80"
            placeholder="Search here..."
          />
          <img src="./carbon_search.svg" alt="search" />
        </div>
        <div className="flex items-center gap-6">
          <div className="cursor-pointer">
            <img src="./Group 44.svg" alt="Notification" />
          </div>
          <img
            src="./Ellipse 2.svg"
            alt="profile"
            className="rounded-full w-14 h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
