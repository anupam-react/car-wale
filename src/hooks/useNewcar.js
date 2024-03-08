import React, { useState } from "react";

const initialState = {
  title: "",
  tag: "",
  category: "",
  label: "",
  condition: "",
  type: "",
  make: "",
  model: "",
  year: "",
  drive: "",
  transmission: "",
  fuel: "",
  mileage: "",
  engine: "",
  cylinder: "",
  color: "",
  door: "",
  vin: "",
  offer: "",
  description: "",
  price: "",
  pricePre: "",
  priceSuffix: "",
  priceCustom: "",
  air: false,
  odometer: false,
  heater: false,
  leather: false,
  panoramic: false,
  tachometer: false,
  touchscreen: false,
  antilock: false,
  assist: false,
  childSafetyLocks: false,
  driverAirBag: false,
  powerDoorLocks: false,
  stabilityControl: false,
  tractionControl: false,
  fogLights: false,
  rainSensing: false,
  rearSpoiler: false,
  Electric: false,
  androidAuto: false,
  appleCarPlay: false,
  bluetooth: false,
  homeLink: false,
  powerSteering: false,
  vanityMirror: false,
  length: "",
  height: "",
  width: "",
  wheelbase: "",
  roofHeight: "",
  mirrorsWidth: "",
  grossVehicleWeight: "",
  loadingWeight: "",
  roofLoad: "",
  seats: "",
  luggageCapacityDown: "",
  luggageCapacityUp: "",
  fuelTankCapacity: "",
  towingWeightBraked: "",
  towingWeightUnbraked: "",
  kerbweight: "",
  turningCircle: "",
  featuresImage: "",
  gallery: "",
  attachments: "",
  videoLink: "",
  friendlyAddress: "",
  mapLocation: "",
};

const useNewcar = () => {
  const [newCar, setNewCar] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", newCar);
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCar({
      ...newCar,
      [name]: value,
    });
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setNewCar({ ...newCar, [name]: checked });
  };
  return { newCar, handleInputChange, handleCheckboxChange, handleSubmit };
};

export default useNewcar;
