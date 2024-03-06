import React from "react";

const CarCard = () => {
  return (
    <div
      className="flex gap-4 p-4"
      style={{ backgroundColor: "#F9F9F9", borderRadius: "30px" }}
    >
      <div className=" w-56 h-48">
        <img src="./Rectangle 56.svg" alt="" className="rounded-lg w-56 h-48" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <img src="./Ellipse 2.svg" alt=""  className="rounded-full w-14 h-14"/>
            <p className="font-semibold text-xl">admin</p>
          </div>
          <img src="./material-symbols_bookmark-outline.svg" alt="" className=" w-8 h-8"/>
        </div>
        <p className="font-semibold">Hyundai S Turbo uMT</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src="./solar_transmission-bold.svg" alt="" />
            <p>Manual</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="./bi_speedometer2.svg" alt="" />
            <p>Petrol</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="./carbon_location.svg" alt="" />
            <p>Dubai</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
           Style:
            <p className="font-semibold">Hyunda</p>
          </div>
          <div className="flex items-center gap-1">
            RTO:
            <p className="font-semibold">KAOS</p>
          </div>
          <div className="flex items-center gap-1">
            Spend:
            <p className="font-semibold">15.8km/hr</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p style={{ color: "#063266", fontWeight: 600 }}>Rs. 680,000</p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
            <img src="./wpf_edit.svg" alt=""  className="rounded-full w-5 h-5"/>
            <p className="font-semibold" style={{color:"#393939"}}>Edit</p>
          </div>
            <div className="flex items-center gap-2">
            <img src="./mdi_delete.svg" alt=""  className="rounded-full w-5 h-5"/>
            <p className="font-semibold" style={{color:"#393939"}}>Delete</p>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
