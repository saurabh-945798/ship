import React from 'react';

function Breadcrumbs() {
  return (
    <nav className="text-sm text-gray-500 mb-6">
      <a href="#" className="hover:text-green-600">Settings</a> &gt; 
      <a href="#" className="hover:text-green-600">Company Setup</a> &gt; 
      <span className="text-green-600">Company Details</span>
    </nav>
  );
}

function EarlyCODRemittance() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Include Breadcrumbs component here */}
        <Breadcrumbs />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Early COD Remittance</h2>
        <p className="text-gray-600 mb-6">Get guaranteed remittance from the shipment delivered date.</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose a plan</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {Array(3).fill().map((_, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Basic</span>
                <input type="radio" name="plan" className="h-4 w-4 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">2 Days</h4>
              <p className="text-gray-500 mb-4">from the date of delivery</p>
              <div className="text-2xl font-semibold text-gray-800 mb-4">
                0.99%
                <span className="block text-xs font-normal text-gray-500">
                  from the date of delivery <br /> of COD amount (GST included)
                </span>
              </div>
              <label className="flex items-start text-xs text-gray-700">
                <input type="checkbox" className="mr-2 mt-1" />
                <span>
                  I have read and agree to <span className="text-green-600">Terms and Conditions</span>.
                  (Please agree to our T&C to activate the plan)
                </span>
              </label>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <button className="flex items-center justify-between w-full text-gray-700 focus:outline-none">
            <span className="font-medium">Activation History</span>
            <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Why should you activate Early COD?</h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Get guaranteed remittance in just 2* days from the shipment delivered date.</li>
            <li>Grow your business by removing cash flow restrictions.</li>
            <li>Get full control over your remittance cycle and take better decisions for your business.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EarlyCODRemittance;
