import React, { useState } from "react";
import CarCard from "../common/CarCard";
import Filter from "../Dashboard/Filter";
import { useNavigate } from "react-router-dom";

const Newcar = ({title}) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="pt-3">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-semibold">{title}</p>
          <p>Get your latest update for the last 7 days</p>
        </div>
        <div className="flex gap-4">
          <button
            className="px-5 h-10"
            style={{
              color: "#FFFF",
              border:"2px solid #063266",
              borderRadius: "10px",
                      }}
                      onClick={()=>navigate('/add-car')}
          >
            <div className="flex items-center gap-2">
              <img src="./fluent_add-12-regular.svg" alt="" />
             <p className="font-semibold" style={{color:"#063266"}}>Add Listing</p> 
            </div>
          </button>
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
        </div>
      </div>
      <div className="shadow-xl bg-white rounded-xl shadow-blue-gray-900/5 px-4 py-6 mt-4">
        <div className="flex justify-between">
          <p className="font-semibold text-2xl">Available Cars</p>
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
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 mt-4">
          <CarCard />
          <CarCard />
        </div>
        <Filter closeDrawer={closeDrawer} open={open} />
      </div>
    </div>
  );
};

export default Newcar;
