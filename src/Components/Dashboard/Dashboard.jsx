import React, { useState } from "react";
import ImportBulkOrder from './Bulk'; // Assuming Bulk.js contains the ImportBulkOrder component
import QuickShipmentForm from "./QuickShipment";

const ShipmentTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: "Single shipment" },
    { name: "Bulk orders" },
    { name: "Quick Shipment" },
  ];

  return (
    <div className="flex space-x-4 bg-white p-2 rounded-lg shadow-md">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`px-4 py-2 rounded ${
            activeTab === tab.name
              ? "bg-green-500 text-white"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

const SingleShipment = () => {
  const [activeTab, setActiveTab] = useState("Single shipment");
  const [activeFormTab, setActiveFormTab] = useState("Buyer Details");

  const formTabs = [
    "Buyer Details",
    "Pick up Address",
    "Order details",
    "Package Details",
  ];

  return (
    <div className="p-6">
      {/* Shipment Tabs */}
      <ShipmentTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Single shipment" && (
        <>
          <h1 className="text-2xl font-semibold mb-4 mt-6">Single Shipment</h1>

          {/* Form Tabs */}
          <div className="flex space-x-8 border-b border-gray-300">
            {formTabs.map((tab) => (
              <button
                key={tab}
                className={`pb-2 ${
                  activeFormTab === tab
                    ? "text-green-500 border-b-4 border-green-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveFormTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form Content */}
          {activeFormTab === "Buyer Details" && (
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <h2 className="text-lg font-semibold mb-4">Buyer Details</h2>
              <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Buyer Details form fields */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Buyer's Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Buyer's name"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Phone number"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Alternate Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Alternate number"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email id"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Complete Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the complete Address"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Land mark
                  </label>
                  <input
                    type="text"
                    placeholder="Enter land mark"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter City"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="Enter State"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    value="India"
                    readOnly
                    className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the company name"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    GSTIN Number (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the GSTIN Number"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="col-span-4 flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="billingSameAsShipping"
                    className="h-4 w-4 text-green-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="billingSameAsShipping"
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    Billing address same as shipping address
                  </label>
                </div>
              </form>
            </div>
          )}

          {activeFormTab === "Pick up Address" && (
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <h2 className="text-lg font-semibold mb-4">Pick up Address</h2>
              <div className="mb-6">
                <div className="border border-gray-300 rounded-lg p-4">
                  <h3 className="text-md font-semibold mb-2">Primary</h3>
                  <p className="text-sm text-gray-600">
                    129 Vidya nagar, Bhiwani Haryana India
                  </p>
                  <button className="mt-2 px-4 py-2 bg-green-100 text-green-500 font-semibold rounded-lg">
                    Select
                  </button>
                </div>
              </div>
              <hr className="my-4" />
              <h3 className="text-md font-semibold mb-2">More address</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg p-4 flex flex-col items-center"
                  >
                    <p className="text-sm text-gray-600 text-center">
                      129 Vidya nagar, Bhiwani Haryana India
                    </p>
                    <button className="mt-2 px-4 py-2 bg-green-100 text-green-500 font-semibold rounded-lg">
                      Select
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg">
                  Back
                </button>
                <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg">
                  Next
                </button>
              </div>
            </div>
          )}

          {activeFormTab === "Order details" && (
          <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <h2 className="text-lg font-semibold mb-4">Order Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Order ID
                    </label>
                    <input
                      type="text"
                      value="13845738942"
                      readOnly
                      className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Order Type
                    </label>
                    <select
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Order Date
                    </label>
                    <input
                      type="text"
                      placeholder="DD-MM-YYYY"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div className="flex items-end">
                    <button className="mt-1 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg">
                      Add product
                    </button>
                  </div>
                </div>
          
                <h2 className="text-lg font-semibold mb-4">Product Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Product Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter product name"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Quantity
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Qty"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Unit Price
                    </label>
                    <input
                      type="text"
                      placeholder="Enter unit price"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Product Category
                    </label>
                    <input
                      type="text"
                      placeholder="Enter product category"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">SKU</label>
                    <input
                      type="text"
                      placeholder="Enter SKU"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">HSN</label>
                    <input
                      type="text"
                      placeholder="Enter HSN"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Tax Rate
                    </label>
                    <input
                      type="text"
                      placeholder="Enter tax rate"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Discount (optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter discount"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                </div>
          
                <h2 className="text-lg font-semibold mb-4">Payment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        value="COD"
                        className="h-4 w-4 text-green-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700">COD</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="payment"
                        value="Prepaid"
                        className="h-4 w-4 text-green-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        Prepaid
                      </span>
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Shipping
                    </label>
                    <input
                      type="text"
                      placeholder="Enter shipping"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gift Wrap
                    </label>
                    <input
                      type="text"
                      placeholder="Enter gift wrap"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Transaction
                    </label>
                    <input
                      type="text"
                      placeholder="Enter transaction"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Discount
                    </label>
                    <input
                      type="text"
                      placeholder="Enter discount"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                </div>
              </div>

          )}
            {activeFormTab === "Package Details" && (
          <div className="bg-gray-50 p-6 rounded-lg mt-4">
          <h2 className="text-lg font-semibold mb-4">Package Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <div className="flex-grow">
                <label className="block text-sm font-medium text-gray-700">
                  Weight
                </label>
                <input
                  type="text"
                  placeholder="Enter weight"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
                <p className="text-xs text-gray-500 mt-1">
                  (Max 3 digits after decimal place)
                </p>
              </div>
              <span className="ml-2 bg-green-500 text-white px-4 py-2 rounded">
                Kg
              </span>
            </div>

            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Enter Dimensions
              </label>
              <div className="grid grid-cols-3 gap-4 mt-1">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="L"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <span className="ml-2 bg-green-500 text-white px-4 py-2 rounded">
                    CM
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="B"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <span className="ml-2 bg-green-500 text-white px-4 py-2 rounded">
                    CM
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="H"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <span className="ml-2 bg-green-500 text-white px-4 py-2 rounded">
                    CM
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-700 mb-6">
            Note: the minimum chargeable weight is 0.50 kg
          </p>

          <h2 className="text-lg font-semibold mb-4">Package details</h2>
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700">Volumetric Weight</p>
            <p className="text-xl font-semibold">0Kg</p>
          </div>

          <div className="flex justify-between">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg">
              Back
            </button>
            <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg">
              Submit
            </button>
          </div>
        </div>


          )}

          {/* Additional content for other form tabs can be added here */}
        </>
      )}

      {activeTab === "Bulk orders" && (
        <div className="mt-6">
          <ImportBulkOrder />
        </div>
      )}

      {activeTab === "Quick Shipment" && (
        <div className="mt-6">
          {/* Quick Shipment Form */}
          <QuickShipmentForm />
        </div>
      )}
    </div>
  );
};

export default SingleShipment;