import React from 'react';

const CompanyDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="text-sm text-gray-500 mb-4">
        <span className="text-green-500">Settings &gt; </span>
        <span>CompanySetup &gt; </span>
        <span>Company Details</span>
      </div>
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-white shadow rounded-lg p-4">
          <div className="font-bold text-gray-700 mb-4">COMPANY SETUP</div>
          <ul>
            <li className="text-green-500 font-medium py-2">Company Details</li>
            <li className="text-gray-700 py-2">Domestic KYC</li>
            <li className="text-gray-700 py-2">Pick Up Address</li>
            <li className="text-gray-700 py-2">Labels</li>
            <li className="text-gray-700 py-2">Billing, Invoice, & GSTIN</li>
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="w-3/4 bg-white shadow rounded-lg ml-4 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Company Details</h2>
          <p className="text-gray-600 mb-6">View, edit and update the company related details</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-600">Plan duration</p>
              <p className="font-medium">3 Months</p>
            </div>
            <div>
              <p className="text-gray-600">Company ID</p>
              <p className="font-medium">25493</p>
            </div>
            <div>
              <p className="text-gray-600">Plan</p>
              <p className="font-medium">Lite Plan</p>
            </div>
            <div>
              <p className="text-gray-600">Plan Subscription Status</p>
              <span className="text-white bg-green-400 px-2 py-1 rounded-lg font-medium">Lite Plan</span>
            </div>
            <div>
              <p className="text-gray-600">Renewal Date</p>
              <p className="font-medium">31-03-2025</p>
            </div>
          </div>

          <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg mb-6">
            <p className="text-gray-600">Company Logo(Optional)</p>
            <div className="w-full h-24 border-dashed border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer">
              <div className="text-gray-500">+</div>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              Note: Image used in Company logo should be less than 1 MB (Recommended dimension of logo is 256 x 100).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-600">Registered Company name</p>
              <input
                type="text"
                placeholder="Enter Company name"
                className="w-full border border-gray-300 p-2 rounded-lg mt-2"
              />
            </div>
            <div>
              <p className="text-gray-600">Brand name</p>
              <input
                type="text"
                placeholder="Enter Brand name"
                className="w-full border border-gray-300 p-2 rounded-lg mt-2"
              />
            </div>
            <div className="lg:col-span-2">
              <p className="text-gray-600">Complete address</p>
              <input
                type="text"
                placeholder="Enter complete address"
                className="w-full border border-gray-300 p-2 rounded-lg mt-2"
              />
            </div>
            <div>
              <p className="text-gray-600">State</p>
              <input
                type="text"
                placeholder="Enter state name"
                className="w-full border border-gray-300 p-2 rounded-lg mt-2"
              />
            </div>
            <div>
              <p className="text-gray-600">Pincode</p>
              <input
                type="text"
                placeholder="Enter pin code"
                className="w-full border border-gray-300 p-2 rounded-lg mt-2"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-green-400 text-white px-6 py-2 rounded-lg font-medium">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
