import React from "react";
import CheckBox from "../common/CheckBox";
import useNewcar from "../../hooks/useNewcar";

const ListingForm = () => {
  const { newCar, handleInputChange, handleCheckboxChange, handleSubmit } = useNewcar();

  const featureData1 = [
    {
      text: "Air Conditioner",
      value: newCar?.air,
      name: "air",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Digital Odometer",
      value: newCar?.odometer,
      name: "odometer",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Heater",
      value: newCar?.heater,
      name: "heater",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Leather Seats",
      value: newCar?.leather,
      name: "leather",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Panoramic Moonroof",
      value: newCar?.panoramic,
      name: "panoramic",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Tachometer",
      value: newCar?.tachometer,
      name: "tachometer",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Touchscreen Display",
      value: newCar?.touchscreen,
      name: "touchscreen",
      handleCheckboxChange: handleCheckboxChange,
    },
  ];
  const featureData2 = [
    {
      text: "Anti-lock Braking",
      value: newCar?.antilock,
      name: "antilock",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Brake Assist",
      value: newCar?.assist,
      name: "assist",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Child Safety Locks",
      value: newCar?.childSafetyLocks,
      name: "childSafetyLocks",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Driver Air Bag",
      value: newCar?.driverAirBag,
      name: "driverAirBag",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Power Door Locks",
      value: newCar?.powerDoorLocks,
      name: "powerDoorLocks",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Stability Control",
      value: newCar?.stabilityControl,
      name: "stabilityControl",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Traction Control",
      value: newCar?.tractionControl,
      name: "tractionControl",
      handleCheckboxChange: handleCheckboxChange,
    },
  ];
  const featureData3 = [
    {
      text: "Fog Lights Front",
      value: newCar?.fogLights,
      name: "fogLights",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Rain Sensing Wiper",
      value: newCar?.rainSensing,
      name: "rainSensing",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Rear Spoiler",
      value: newCar?.rearSpoiler,
      name: "rearSpoiler",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Windows - Electric",
      value: newCar?.Electric,
      name: "Electric",
      handleCheckboxChange: handleCheckboxChange,
    },
  ];
  const featureData4 = [
    {
      text: "Android Auto",
      value: newCar?.androidAuto,
      name: "androidAuto",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Apple CarPlay",
      value: newCar?.appleCarPlay,
      name: "appleCarPlay",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Bluetooth",
      value: newCar?.bluetooth,
      name: "bluetooth",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "HomeLink",
      value: newCar?.homeLink,
      name: "homeLink",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Power Steering",
      value: newCar?.powerSteering,
      name: "powerSteering",
      handleCheckboxChange: handleCheckboxChange,
    },
    {
      text: "Vanity Mirror",
      value: newCar?.vanityMirror,
      name: "vanityMirror",
      handleCheckboxChange: handleCheckboxChange,
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-semibold">Listing</p>
          <p>Get your latest update for the last 7 days</p>
        </div>
        <div className="flex gap-4">
          <button
            className="px-5 h-10"
            style={{
              color: "#FFFF",
              border: "2px solid #063266",
              borderRadius: "10px",
            }}
          >
            <div className="flex items-center gap-2">
              <img src="./fluent_add-12-regular.svg" alt="" />
              <p className="font-semibold" style={{ color: "#063266" }}>
                Add Listing
              </p>
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
      <div className="shadow-xl bg-white rounded-xl shadow-blue-gray-900/5 px-6 py-6 mt-4">
        <p className="text-2xl">Add New Lisiting</p>
        <div
          style={{ border: "1px solid #C3C3C3" }}
          className="rounded-xl p-4 my-4"
        >
          <p className="text-xl pb-4">Car Details</p>

          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label
                for="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Listing Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                value={newCar?.title}
                onChange={handleInputChange}
                name="title"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="tag"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tagline
              </label>
              <input
                type="text"
                id="tag"
                value={newCar?.tag}
                onChange={handleInputChange}
                name="tag"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                value={newCar?.category}
                onChange={handleInputChange}
                name="category"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="label"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Label
              </label>
              <input
                type="text"
                id="label"
                value={newCar?.label}
                onChange={handleInputChange}
                name="label"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="condition"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Condition
              </label>
              <input
                type="text"
                id="condition"
                value={newCar?.condition}
                onChange={handleInputChange}
                name="condition"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Type
              </label>
              <input
                type="text"
                id="type"
                value={newCar?.type}
                onChange={handleInputChange}
                name="type"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="make"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Make
              </label>
              <input
                type="text"
                id="make"
                value={newCar?.make}
                onChange={handleInputChange}
                name="make"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="model"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Model
              </label>
              <input
                type="text"
                id="model"
                value={newCar?.model}
                onChange={handleInputChange}
                name="model"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="year"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Year
              </label>
              <input
                type="text"
                id="year"
                value={newCar?.year}
                onChange={handleInputChange}
                name="year"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="drive"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Drive Type
              </label>
              <input
                type="text"
                id="drive"
                value={newCar?.drive}
                onChange={handleInputChange}
                name="drive"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="transmission"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Transmission
              </label>
              <input
                type="text"
                id="transmission"
                value={newCar?.transmission}
                onChange={handleInputChange}
                name="transmission"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="fuel"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fuel Type
              </label>
              <input
                type="text"
                id="fuel"
                value={newCar?.fuel}
                onChange={handleInputChange}
                name="fuel"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="mileage"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mileage
              </label>
              <input
                type="text"
                id="mileage"
                value={newCar?.mileage}
                onChange={handleInputChange}
                name="mileage"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="engine"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Engine Size
              </label>
              <input
                type="text"
                id="engine"
                value={newCar?.engine}
                onChange={handleInputChange}
                name="engine"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="cylinder"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cylinder
              </label>
              <input
                type="text"
                id="cylinder"
                value={newCar?.cylinder}
                onChange={handleInputChange}
                name="cylinder"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="Color"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Color
              </label>
              <input
                type="text"
                id="Color"
                value={newCar?.color}
                onChange={handleInputChange}
                name="color"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="door"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Door
              </label>
              <input
                type="text"
                id="door"
                value={newCar?.door}
                onChange={handleInputChange}
                name="door"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="VIN"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                VIN
              </label>
              <input
                type="text"
                id="VIN"
                value={newCar?.vin}
                onChange={handleInputChange}
                name="vin"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="Offer"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Offer Type
              </label>
              <input
                type="text"
                id="Offer"
                value={newCar?.offer}
                onChange={handleInputChange}
                name="offer"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label
              for="desc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Listing Description<span className="text-red-500">*</span>
            </label>
            <textarea
              id="desc"
              rows="4"
              value={newCar?.description}
              onChange={handleInputChange}
              name="description"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write car description here..."
            ></textarea>
          </div>
        </div>
        <div
          style={{ border: "1px solid #C3C3C3" }}
          className="rounded-xl p-4 my-4"
        >
          <p className="text-xl pb-4">Price</p>

          <div className="grid gap-6 mb-6 grid-cols-1">
            <div>
              <label
                for="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                value={newCar?.price}
                onChange={handleInputChange}
                name="price"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="prefix"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price Prefix
              </label>
              <input
                type="text"
                id="prefix"
                value={newCar?.pricePre}
                onChange={handleInputChange}
                name="pricePre"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="suffix"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price Suffix
              </label>
              <input
                type="text"
                id="suffix"
                value={newCar?.priceSuffix}
                onChange={handleInputChange}
                name="priceSuffix"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price Custom
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.priceCustom}
                onChange={handleInputChange}
                name="priceCustom"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div
          style={{ border: "1px solid #C3C3C3" }}
          className="rounded-xl p-4 my-4"
        >
          <p className="text-xl pb-4">Features</p>

          <div className="flex justify-between">
            <div>
              <p className="pb-4">Interior</p>
              <div className="flex flex-col gap-2">
                {featureData1?.map((data, i) => (
                  <CheckBox
                    text={data?.text}
                    value={data?.value}
                    name={data?.name}
                    handleCheckboxChange={data?.handleCheckboxChange}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="pb-4">Safety</p>
              <div className="flex flex-col gap-2">
                {featureData2?.map((data, i) => (
                  <CheckBox
                    text={data?.text}
                    value={data?.value}
                    name={data?.name}
                    handleCheckboxChange={data?.handleCheckboxChange}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="pb-4">Exterior</p>
              <div className="flex flex-col gap-2">
                {featureData3?.map((data, i) => (
                  <CheckBox
                    text={data?.text}
                    value={data?.value}
                    name={data?.name}
                    handleCheckboxChange={data?.handleCheckboxChange}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="pb-4">Confort & Convenience</p>
              <div className="flex flex-col gap-2">
                {featureData4?.map((data, i) => (
                  <CheckBox
                    text={data?.text}
                    value={data?.value}
                    name={data?.name}
                    handleCheckboxChange={data?.handleCheckboxChange}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ border: "1px solid #C3C3C3" }}
          className="rounded-xl p-4 my-4"
        >
          <p className="text-xl pb-4">Dimensions & Capacity</p>

          <div className="grid gap-6 mb-6 grid-cols-3">
            <div>
              <label
                for="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Length
              </label>
              <input
                type="text"
                id="price"
                value={newCar?.length}
                onChange={handleInputChange}
                name="length"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="prefix"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Height
              </label>
              <input
                type="text"
                id="prefix"
                value={newCar?.height}
                onChange={handleInputChange}
                name="height"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="suffix"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Width
              </label>
              <input
                type="text"
                id="suffix"
                value={newCar?.width}
                onChange={handleInputChange}
                name="width"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Wheelbase
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.wheelbase}
                onChange={handleInputChange}
                name="wheelbase"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Height (including roof rails)
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.roofHeight}
                onChange={handleInputChange}
                name="roofHeight"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Width (including mirrors)
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.mirrorsWidth}
                onChange={handleInputChange}
                name="mirrorsWidth"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gross Vehicle Weight (kg)
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.grossVehicleWeight}
                onChange={handleInputChange}
                name="grossVehicleWeight"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Max. Loading Weight (kg)
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.loadingWeight}
                onChange={handleInputChange}
                name="loadingWeight"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Max. Roof Load (kg)
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.roofLoad}
                onChange={handleInputChange}
                name="roofLoad"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                No. of Seats
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.seats}
                onChange={handleInputChange}
                name="seats"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Luggage Capacity (Seats Down - Litres)
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.luggageCapacityDown}
                onChange={handleInputChange}
                name="luggageCapacityDown"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Luggage Capacity (Seats Up - Litres)
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.luggageCapacityUp}
                onChange={handleInputChange}
                name="luggageCapacityUp"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div
          style={{ border: "1px solid #C3C3C3" }}
          className="rounded-xl p-4 my-4"
        >
          <p className="text-xl pb-4">Engine and Transmission</p>

          <div className="grid gap-6 mb-6 grid-cols-3">
            <div>
              <label
                for="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fuel Tank Capacity (Litres)
              </label>
              <input
                type="text"
                id="price"
                value={newCar?.fuelTankCapacity}
                onChange={handleInputChange}
                name="fuelTankCapacity"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="prefix"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Max. Towing Weight - Braked (kg)
              </label>
              <input
                type="text"
                id="prefix"
                value={newCar?.towingWeightBraked}
                onChange={handleInputChange}
                name="towingWeightBraked"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="suffix"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Max. Towing Weight - Unbraked (kg)
              </label>
              <input
                type="text"
                id="suffix"
                value={newCar?.towingWeightUnbraked}
                onChange={handleInputChange}
                name="towingWeightUnbraked"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Minimum Kerbweight (kg)
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.kerbweight}
                onChange={handleInputChange}
                name="kerbweight"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Turning Circle - Kerb to Kerb (m)
              </label>
              <input
                type="text"
                id="custom"
                value={newCar?.turningCircle}
                onChange={handleInputChange}
                name="turningCircle"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div
          style={{ border: "1px solid #C3C3C3" }}
          className="rounded-xl p-4 my-4"
        >
          <p className="text-xl pb-4">Media</p>

          <div className="grid gap-6 mb-6 grid-cols-1">
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Featured Image
              </label>
              <div class="flex w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-48 h-48 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <img src="./Group.svg" alt="" />
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      Upload Files
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    value={newCar?.featuresImage}
                    name="featuresImage"
                  />
                </label>
              </div>
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gallery
              </label>
              <div class="flex w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-48 h-48 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <img src="./Group.svg" alt="" />
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      Upload Files
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    value={newCar?.gallery}
                    name="gallery"
                  />
                </label>
              </div>
            </div>
            <div>
              <label
                for="custom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Attachments
              </label>
              <div class="flex w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-48 h-48 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <img src="./Group.svg" alt="" />
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      Upload Files
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    value={newCar?.attachments}
                    name="attachments"
                  />
                </label>
              </div>
            </div>
            <div>
              <label
                for="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Video Link
              </label>
              <input
                type="text"
                id="price"
                placeholder="Enter YouTube  or Vimeo url."
                value={newCar?.videoLink}
                name="videoLink"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div
          style={{ border: "1px solid #C3C3C3" }}
          className="rounded-xl p-4 my-4"
        >
          <p className="text-xl pb-4">Location</p>

          <div className="grid gap-6 mb-6 grid-cols-1">
            <div>
              <label
                for="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Friendly Address
              </label>
              <input
                type="text"
                id="price"
                value={newCar?.friendlyAddress}
                onChange={handleInputChange}
                name="friendlyAddress"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Map Location
              </label>
              <input
                type="text"
                id="price"
                value={newCar?.mapLocation}
                onChange={handleInputChange}
                name="mapLocation"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex justify-center items-center border border-gray-300 h-48 text-gray-900 text-sm rounded-lg">
              <p className="">Map</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="text-white px-6 py-2 rounded-lg"
            style={{ backgroundColor: "#063266" }}
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingForm;
