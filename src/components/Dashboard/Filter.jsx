import React from "react";
import { Drawer, Slider, Typography } from "@material-tailwind/react";

const Filter = ({ closeDrawer, open }) => {
  return (
    <React.Fragment>
      <Drawer
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="p-4 overflow-auto"
      >
        <div className="mb-6 flex items-center justify-between">
          <div onClick={closeDrawer}>
            <img
              src="./arrow-ios-back-outline 1.svg"
              alt=""
              className="w-10 cursor-pointer"
            />
          </div>
          <Typography variant="h5" color="blue-gray">
            Filters
          </Typography>
          <div onClick={closeDrawer}>
            <img
              src="./close-outline 1.svg"
              alt=""
              className="w-10 cursor-pointer"
            />
          </div>
        </div>
        <div
          className="flex px-2 py-1 border border-1"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <img src="./carbon_search.svg" alt="search" />
          <input
            type="text"
            className="border-none bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none w-80"
            placeholder="Search for city or property code"
          />
        </div>
        <hr className="my-4" style={{ backgroundColor: "#E3E3E5" }} />
        <div>
          <p className="font-semibold pb-4" style={{ color: "#232738" }}>
            State/City/Landmark
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 p-2 border border-gray-100 cursor-pointer rounded-md">
              <p>Mumbai</p>
              <img src="./Layer 2.svg" alt="" />
            </div>
            <div className="flex items-center gap-2 p-2 border border-gray-100 cursor-pointer">
              <p>Mumbai</p>
              <img src="./Layer 2.svg" alt="" />
            </div>
            <div className="flex items-center gap-2 p-2 border border-gray-100 cursor-pointer">
              <p>Mumbai</p>
              <img src="./Layer 2.svg" alt="" />
            </div>
          </div>
          <div className="flex gap-6 mt-4">
            <p className="underline " style={{ color: "#322651" }}>
              Locality/ Project/ landmark
            </p>
            <img src="./pin.svg" alt="" />
          </div>
        </div>
        <hr className="my-4" style={{ backgroundColor: "#E3E3E5" }} />
        <div>
          <p className="font-semibold" style={{ color: "#232738" }}>
            Budget
          </p>
          <div className="w-64 my-4">
            <Slider color="blue" defaultValue={40} />
          </div>
          <p style={{ color: "#322651" }}>Rs. 180000</p>
        </div>
        <hr className="my-4" style={{ backgroundColor: "#E3E3E5" }} />
        <div className="mt-3">
          <p className="font-semibold pb-3" style={{ color: "#232738" }}>
            Body Type
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center">
                          <img src="./suv_clr 1.svg" alt="" />
                          <p className="text-sm font-semibold">SUV</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <img src="./sedan_clr 1.svg" alt="" />
                          <p className="text-sm font-semibold">Sedan</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <img src="./hatchback_clr 1.svg" alt="" />
                          <p className="text-sm font-semibold">Hatchback</p>
                      </div>
                      
                  </div>
              </div>
              <div className="flex gap-2 mt-10">
              <button className="px-6 py-2 rounded-md" style={{color:"#063266" , border:"1px solid #063266"}}>Cancel</button>
              <button className="px-6 py-2 rounded-md" style={{backgroundColor:"#063266" , color:"#FFFF", border:"1px solid #063266"}}>Show Results</button>
              </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Filter;
