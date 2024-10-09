import React from 'react';

const Post = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Early COD Remittance</h2>
        <p className="text-gray-600 mb-6">Get guaranteed remittance from the shipment delivered date.</p>
        
        <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg mb-4">
          <span className="text-gray-700 font-medium">Opt-in for postpaid plan</span>
          <div>
            <input type="checkbox" className="toggle-checkbox hidden" id="toggle" />
            <label htmlFor="toggle" className="toggle-label cursor-pointer">
              <div className="w-10 h-6 bg-gray-300 rounded-full p-1 flex items-center">
                <div className="toggle-circle w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
            </label>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 p-4 rounded-lg">
          <h3 className="font-bold text-gray-700 mb-2">Benefits of using Postpaid</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Dynamic Shipping limit based on your risk profile at Shipex</li>
            <li>Your shipping limit will change every day at midnight to provide you with uninterrupted shipping</li>
            <li>Faster COD remittance every Monday, Wednesday, Friday (Will not be processed on bank holidays)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
