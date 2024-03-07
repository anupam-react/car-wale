import React from "react";
import Select from "../common/Select";
import CheckBox from "../common/CheckBox";
import GoogleMapPage from "./GoogleMapPage";
import CarCard from "../common/CarCard";
import Swipper from "../common/Swipper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../common/index.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CarDetails = () => {
  const overviewData = [
    { text: "Body", value: "Sedan" },
    { text: "Condition", value: "Used" },
    { text: "Mileage", value: 250 },
    { text: "Engine Size", value: 4.0 },
    { text: "Fuel Type", value: "Petrol" },
    { text: "Door", value: "4 Doors" },
    { text: "Year", value: 2021 },
    { text: "Cylinder", value: 12 },
    { text: "Transmission", value: "Manual" },
    { text: "Color", value: "Black" },
    { text: "Drive Type", value: "Rear-Wheel Drive" },
    { text: "VIN", value: "FCB123792" },
  ];
  const featureData1 = [
    { text: "Air Conditioner", value: "" },
    { text: "Digital Odometer", value: "" },
    { text: "Heater", value: "" },
    { text: "Leather Seats", value: "" },
    { text: "Panoramic Moonroof", value: "" },
    { text: "Tachometer", value: "" },
    { text: "Touchscreen Display", value: "" },
  ];
  const featureData2 = [
    { text: "Anti-lock Braking", value: "" },
    { text: "Brake Assist", value: "" },
    { text: "Child Safety Locks", value: "" },
    { text: "Driver Air Bag", value: "" },
    { text: "Power Door Locks", value: "" },
    { text: "Stability Control", value: "" },
    { text: "Traction Control", value: "" },
  ];
  const featureData3 = [
    { text: "Fog Lights Front", value: "" },
    { text: "Rain Sensing Wiper", value: "" },
    { text: "Rear Spoiler", value: "" },
    { text: "Windows - Electric", value: "" },
  ];
  const featureData4 = [
    { text: "Android Auto", value: "" },
    { text: "Apple CarPlay", value: "" },
    { text: "Bluetooth", value: "" },
    { text: "HomeLink", value: "" },
    { text: "Power Steering", value: "" },
    { text: "Vanity Mirror", value: "" },
  ];
  const capacity = [
    { text: "Length", value: "4950mm" },
    { text: "Width", value: "2140mm" },
    { text: "Height", value: "1776mm" },
    { text: "Width (including mirrors)", value: "2240mm" },
    { text: "Wheelbase", value: "2984mm" },
    { text: "Gross Vehicle Weight (kg)", value: 1550 },
    { text: "Height (including roof rails)", value: "1876mm" },
    { text: "Max. Loading Weight (kg)", value: 1200 },
    { text: "Luggage Capacity (Seats Up - Litres)", value: 450 },
    { text: "Max. Roof Load (kg)", value: 350 },
    { text: "Luggage Capacity (Seats Down - Litres)", value: 850 },
    { text: "No. of Seats", value: 5 },
  ];
  const transmission = [
    { text: "Fuel Tank Capacity (Litres)", value: 100 },
    { text: "Minimum Kerbweight (kg)", value: 350 },
    { text: "Max. Towing Weight - Braked (kg)", value: "1776mm" },
    { text: "Turning Circle - Kerb to Kerb(m)", value: "2240mm" },
    { text: "Max. Towing Weight - Unbraked (kg)", value: "2984mm" },
  ];

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
        <div className="flex justify-between items-end">
          <div>
            <p className="font-semibold text-2xl pb-2">Hyundai S Turbo uMT</p>
            <p className="text-sm">
              2.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate
            </p>
            <div className="flex gap-4 mt-6">
              <div
                className="flex items-center gap-1 px-4 py-2 w-fit rounded-full"
                style={{ backgroundColor: "#CEE4FF" }}
              >
                <img src="./carbon_location.svg" alt="" className="h-5" />
                <p className="text-sm" style={{ color: "#063266" }}>
                  Delhi
                </p>
              </div>
              <div
                className="flex items-center gap-1 px-4 py-2 w-fit rounded-full"
                style={{ backgroundColor: "#CEE4FF" }}
              >
                <img
                  src="./solar_transmission-bold.svg"
                  alt=""
                  className="h-5"
                />
                <p className="text-sm" style={{ color: "#063266" }}>
                  Manual
                </p>
              </div>
              <div
                className="flex items-center gap-1 px-4 py-2 w-fit rounded-full"
                style={{ backgroundColor: "#CEE4FF" }}
              >
                <img src="./bi_speedometer2.svg" alt="" className="h-5" />
                <p className="text-sm" style={{ color: "#063266" }}>
                  Petrol
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <p>Share</p>
              <img
                src="./pepicons-pencil_share-ios-circle.svg"
                alt=""
                className="cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2">
              <p>Update</p>
              <img
                src="./Group 1000003135.svg"
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-between ">
          <div>
            <video
              width="70%"
              className="videoPlayer w-[45vw] rounded-lg"
              style={{}}
              src="./React Tutorial for Beginners.mp4"
              controls
            ></video>
            <div className="mt-4">
              <p className="text-2xl font-medium">Car Overview</p>
              <div className="grid grid-cols-2 gap-6 mt-6">
                {overviewData?.map((data, i) => (
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{data?.text}</p>
                    <p className="text-sm w-20" style={{ color: "#616161" }}>
                      {data?.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{ border: "1px solid #C3C3C3" }}
            className="px-6 py-4 rounded-lg h-fit text-sm font-medium"
          >
            <p className="text-sm">Our Price</p>
            <div className="flex items-end gap-1 mb-2">
              <p>
                Rs.<span className="line-through">1,80,000</span>
              </p>
              <p className="text-xl font-semibold">Rs.1,65,000</p>
            </div>
            <p className="pb-6">Instant Saving: Rs.15000</p>
            <button
              type="submit"
              style={{ backgroundColor: "#063266" }}
              className="w-full text-whitefont-medium text-sm text-white px-16 py-2.5 text-center rounded-3xl"
            >
              <div className="flex justify-center gap-2">
                Check Breakdown Price
              </div>
            </button>
          </div>
        </div>
        <div className="mt-8 mb-8">
          <p className="text-2xl font-semibold pb-6">Description</p>
          <p>
            Etiam sit amet ex pharetra, venenatis ante vehicula, gravida sapien.
            Fusce eleifend vulputate nibh, non cursus augue placerat
            pellentesque. Sed venenatis risus nec felis mollis, in pharetra urna
            euismod. Morbi aliquam ut turpis sit amet ultrices. Vestibulum
            mattis blandit nisl, et tristique elit scelerisque nec. Fusce
            eleifend laoreet dui eget aliquet. Ut rutrum risus et nunc pretium
            scelerisque.
          </p>
        </div>
        <div className="rounded-xl px-8 py-4 bg-gray-200">
          <p className="text-xl font-semibold pb-6">Features</p>
          <div className="flex justify-between">
            <div>
              <p className="pb-4">Interior</p>
              <div className="flex flex-col gap-2">
                {featureData1?.map((data, i) => (
                  <CheckBox text={data?.text} />
                ))}
              </div>
            </div>
            <div>
              <p className="pb-4">Safety</p>
              <div className="flex flex-col gap-2">
                {featureData2?.map((data, i) => (
                  <CheckBox text={data?.text} />
                ))}
              </div>
            </div>
            <div>
              <p className="pb-4">Exterior</p>
              <div className="flex flex-col gap-2">
                {featureData3?.map((data, i) => (
                  <CheckBox text={data?.text} />
                ))}
              </div>
            </div>
            <div>
              <p className="pb-4">Confort & Convenience</p>
              <div className="flex flex-col gap-2">
                {featureData4?.map((data, i) => (
                  <CheckBox text={data?.text} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-medium">Dimensions & Capacity</p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            {capacity?.map((data, i) => (
              <div className="flex items-center justify-between">
                <p className="font-semibold">{data?.text}</p>
                <p className="text-sm w-20" style={{ color: "#616161" }}>
                  {data?.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-2xl font-medium">Engine and Transmission</p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            {transmission?.map((data, i) => (
              <div className="flex items-center justify-between">
                <p className="font-semibold">{data?.text}</p>
                <p className="text-sm w-20" style={{ color: "#616161" }}>
                  {data?.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <p className="text-2xl font-medium pb-4">Location</p>
          <p>Sector 18, Noida, Dadri, Uttar Pradesh, 201301, Indiav</p>
          <div className="flex gap-4 mt-2">
            <p style={{ color: "#063266" }}>Get Direction </p>
            <img src="./Arrow 1.svg" alt="" />
          </div>
          <div className="mt-4" l>
            <GoogleMapPage />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-2xl font-medium pb-4">Related Listings</p>
            <p
              className="text-lg cursor-pointer font-medium pb-4"
              style={{ color: "#063266" }}
            >
              View All
            </p>
          </div>
          <div className="flex gap-4 w-[70vw] overflow-auto">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              slidesPerView={2}
            >
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
              <SwiperSlide>
                <CarCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
            </div>
  );
};

export default CarDetails;
