// Layout.js
import React, { useState } from "react";
import Sidebar from "./components/common/Sidebar";
import Navbar from "./components/common/Navbar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex gap-2">
      <Sidebar isOpen={isOpen} />
      <div className="flex-1">
        <Navbar handleOpen={handleOpen} />
        <div className="p-4" style={{ backgroundColor: "#F9F9F9" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
