import React, { useState } from "react";
import Select from "../common/Select";
import CarCard from "../common/CarCard";
import Filter from "./Filter";

const Dashboard = () => {
const [open, setOpen] = useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div>
      <div className="flex justify-between items-end">
        <Select text="Location" />
        <Select text="Budget" />
        <Select text="Brand" />
        <Select text="Type" />
        <button
          className="px-24 h-10"
          style={{
            color: "#FFFF",
            backgroundColor: "#063266",
            borderRadius: "10px",
          }}
        >
          Get Car
        </button>
      </div>
      <div className="shadow-xl shadow-blue-gray-900/5 px-4 py-6 mt-4">
        <div className="flex justify-between">
          <p className="font-semibold text-2xl">Available Cars</p>
          <div className="flex gap-4">
            <button
              className="px-5 h-10"
              style={{
                color: "#FFFF",
                backgroundColor: "#063266",
                borderRadius: "10px",
              }}
            >
              <div className="flex gap-2">
                <img src="./ci_share-ios-export.svg" alt="" />
                Export
              </div>
            </button>
            <button
              className="px-5 h-10"
              style={{
                color: "#063266",
                backgroundColor: "#FFFF",
                border: "2px solid #063266",
                borderRadius: "10px",
                          }}
                          onClick={openDrawer}
            >
              <div className="flex gap-2">
                <img src="./Vector (5).svg" alt="" />
                Filter
              </div>
            </button>
          </div>
              </div>
              <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 mt-4">
                  <CarCard />
                  <CarCard />
              </div>
              <Filter closeDrawer={closeDrawer} open={open} />
      </div>
    </div>
  );
};

export default Dashboard;
