import React from 'react';

const QuickShipmentForm = () => {
  return (
    <div className="p-6 bg-green-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Quick shipments</h1>

      {/* Pick up Address */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Pick up Address
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search the pickup address"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <svg
            className="w-6 h-6 text-gray-400 absolute top-3 right-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zm2.293 9.293a8 8 0 111.414-1.414l4.32 4.32a1 1 0 01-1.414 1.414l-4.32-4.32z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Buyer Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Buyers Name
          </label>
          <input
            type="text"
            placeholder="Enter Buyer's name"
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter Phone number"
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Alternate Phone number
          </label>
          <input
            type="text"
            placeholder="Enter Alternate number"
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Email ID
          </label>
          <input
            type="email"
            placeholder="Enter email id"
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
          />
        </div>
      </div>

      {/* Buyer Address */}
      <h2 className="text-lg font-medium text-gray-700 mt-6">Buyer Address</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Complete Address
          </label>
          <input
            type="text"
            placeholder="Enter the complete Address"
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Land mark
          </label>
          <input
            type="text"
            placeholder="Enter land mark"
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Pincode
          </label>
          <input
            type="text"
            placeholder="Enter Pincode"
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            placeholder="Enter City"
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            placeholder="Enter State"
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
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
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full bg-gray-100"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Complete Name (optional)
          </label>
          <input
            type="text"
            placeholder="Enter the company name"
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            GSTIN Number (optional)
          </label>
          <input
            type="text"
            placeholder="Enter the GSTIN Number"
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
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
      </div>
    </div>
  );
};

export default QuickShipmentForm;
