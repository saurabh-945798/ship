import React, { useState } from 'react';

function App() {
  const [isForward, setIsForward] = useState(true);

  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* Header */}
      <header className="flex items-center justify-between bg-white px-4 py-2 shadow-md">
        <div className="flex items-center space-x-4">
          {/* Wallet Balance */}
          <div className="flex items-center space-x-1">
            <i className="fas fa-wallet text-xl"></i>
            <span className="text-lg font-semibold">₹ 5680</span>
          </div>

          {/* Vertical Divider */}
          <div className="mx-2 h-6 w-px bg-gray-300"></div>

          {/* Quick Actions Button */}
          <button className="flex items-center space-x-1 font-medium text-green-500">
            <i className="fas fa-bolt text-xl"></i>
            <span>Quick Actions</span>
          </button>

          {/* Recharge Wallet Button */}
          <button className="flex items-center space-x-1 font-medium text-green-500">
            <i className="fas fa-wallet text-xl"></i>
            <span>Recharge Wallet</span>
            <span className="ml-1 rounded-full bg-green-500 px-1 text-xs text-white">4</span>
          </button>
        </div>

        {/* Notifications and User Icon */}
        <div className="flex items-center space-x-4">
          <i className="fas fa-bell text-xl"></i>
          <i className="fas fa-user text-xl"></i>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto mt-6 px-4">
        <div className="rounded-lg bg-white p-6 shadow-md">
          {/* Tools Section */}
          <h1 className="text-xl font-semibold mt-3">Tools</h1>
          <div className="flex flex-col md:flex-row md:space-x-6 border-b-2 pb-2">
            <button
              onClick={() => setIsForward(true)}
              className={`pb-2 font-medium ${
                isForward ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'
              }`}
            >
              Forward
            </button>
            <button
              onClick={() => setIsForward(false)}
              className={`pb-2 font-medium ${
                !isForward ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'
              }`}
            >
              Reverse
            </button>
          </div>

          {/* Search AWB Number */}
          <div className="flex items-center justify-between mt-4">
            <input
              type="text"
              placeholder="Search AWB Number"
              className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
            />
            <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
              Search
            </button>
          </div>

          {/* Content */}
          {isForward ? (
            <div className="mt-6 overflow-x-auto">
              {/* Forward Table */}
              <table className="min-w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3">Courier</th>
                    <th className="px-4 py-3">Local Forward | RTO</th>
                    <th className="px-4 py-3">Regional Forward | RTO</th>
                    <th className="px-4 py-3">Metro Forward | RTO</th>
                    <th className="px-4 py-3">ROI Forward | RTO</th>
                    <th className="px-4 py-3">Special Forward | RTO</th>
                    <th className="px-4 py-3">COD charges COD%</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Sample rows */}
                  {Array(5).fill().map((_, index) => (
                    <tr key={index} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                      <td className="px-4 py-3">Blue Dart Air (Up to 500 gms)</td>
                      <td className="px-4 py-3">42/41 | 42/41</td>
                      <td className="px-4 py-3">57/76 | 57/76</td>
                      <td className="px-4 py-3">96/93 | 85/83</td>
                      <td className="px-4 py-3">232/211 | 227/211</td>
                      <td className="px-4 py-3">65/65 | 60/60</td>
                      <td className="px-4 py-3">2.5%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-6 overflow-x-auto">
              {/* Reverse Table */}
              <table className="min-w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3">Courier</th>
                    <th className="px-4 py-3">Local Reverse</th>
                    <th className="px-4 py-3">Regional Reverse</th>
                    <th className="px-4 py-3">Metro Reverse</th>
                    <th className="px-4 py-3">ROI Reverse</th>
                    <th className="px-4 py-3">Special Reverse</th>
                    <th className="px-4 py-3">QC charges QC%</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Sample rows */}
                  {Array(3).fill().map((_, index) => (
                    <tr key={index} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                      <td className="px-4 py-3">Delivery Reverse | Up to 500 gms</td>
                      <td className="px-4 py-3">₹ 49.41 | ₹ 49.41</td>
                      <td className="px-4 py-3">₹ 57.79 | ₹ 57.79</td>
                      <td className="px-4 py-3">₹ 63.39 | ₹ 63.39</td>
                      <td className="px-4 py-3">₹ 72.71 | ₹ 72.71</td>
                      <td className="px-4 py-3">₹ 102.54 | ₹ 102.54</td>
                      <td className="px-4 py-3">₹ 36 | 2.3%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Terms & Conditions */}
          <div className="mt-6 rounded-lg bg-gray-100 p-4">
            <h2 className="mb-2 text-lg font-semibold">Terms & conditions</h2>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
