import React from "react";

// SupportDashboard Component
function SupportDashboard() {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col p-8">
        <div className="flex-grow flex justify-start">
          <div className="w-full max-w-4xl">
            {/* Support Header */}
            <h1 className="text-2xl font-semibold text-gray-900">Support</h1>
            <p className="text-gray-600 mt-1">
              Get help by Creating or reading help Articles
            </p>
  
            {/* Action Buttons */}
            <div className="flex space-x-4 mt-6">
              <button className="flex items-center justify-center w-48 h-16 bg-white border rounded-md shadow-sm hover:shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 p-2 rounded-md">
                    {/* Image Placeholder */}
                    <img
                      src="https://i.postimg.cc/GpXn0X1F/Screenshot-2024-08-19-192535.png"
                      alt="Create Ticket Icon"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <span className="text-lg font-medium text-gray-800">
                    Create a ticket
                  </span>
                </div>
              </button>
  
              <button className="flex items-center justify-center w-48 h-16 bg-white border rounded-md shadow-sm hover:shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-600 p-2 rounded-md">
                    {/* Image Placeholder */}
                    <img
                      src="/path/to/help-articles-icon.png"
                      alt="Help Articles Icon"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <span className="text-lg font-medium text-gray-800">
                    Help Articles
                  </span>
                </div>
              </button>
            </div>
        
            {/* Data Overview Section */}
            <div className="mt-8 p-8 bg-white border rounded-md shadow-sm">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Last 30 days data overview
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center p-4 border rounded-md">
                  <div className="bg-green-500 p-2 rounded-md">
                    {/* Image Placeholder */}
                    <img
                      src="/path/to/open-tickets-icon.png"
                      alt="Open Tickets Icon"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">Open tickets</p>
                    <p className="text-lg font-semibold text-gray-800">0</p>
                  </div>
                </div>
  
                <div className="flex items-center p-4 border rounded-md">
                  <div className="bg-yellow-500 p-2 rounded-md">
                    {/* Image Placeholder */}
                    <img
                      src="/path/to/work-in-progress-icon.png"
                      alt="Work in Progress Tickets Icon"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">Work in progress tickets</p>
                    <p className="text-lg font-semibold text-gray-800">0</p>
                  </div>
                </div>
  
                <div className="flex items-center p-4 border rounded-md">
                  <div className="bg-purple-500 p-2 rounded-md">
                    {/* Image Placeholder */}
                    <img
                      src="/path/to/response-awaited-icon.png"
                      alt="Response Awaited Icon"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">Response awaited on</p>
                    <p className="text-lg font-semibold text-gray-800">0</p>
                  </div>
                </div>
  
                <div className="flex items-center p-4 border rounded-md">
                  <div className="bg-red-500 p-2 rounded-md">
                    {/* Image Placeholder */}
                    <img
                      src="/path/to/overdue-tickets-icon.png"
                      alt="Overdue Tickets Icon"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">Overdue tickets</p>
                    <p className="text-lg font-semibold text-gray-800">0</p>
                  </div>
                </div>
  
                <div className="flex items-center p-4 border rounded-md">
                  <div className="bg-green-600 p-2 rounded-md">
                    {/* Image Placeholder */}
                    <img
                      src="/path/to/tickets-resolved-icon.png"
                      alt="Tickets Resolved Icon"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">Tickets resolved</p>
                    <p className="text-lg font-semibold text-gray-800">0</p>
                  </div>
                </div>
  
                <div className="flex items-center p-4 border rounded-md">
                  <div className="bg-teal-400 p-2 rounded-md">
                    {/* Image Placeholder */}
                    <img
                      src="/path/to/avg-resolution-time-icon.png"
                      alt="Avg Resolution Time Icon"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-600">Avg resolution time</p>
                    <p className="text-lg font-semibold text-gray-800">1d</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 min-h-screen">
      {/* Include the Header component here */}


      <div className="p-8">
        <div className="max-w-7xl mx-auto bg-white p-4 rounded-md shadow-sm">
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search by Ticket ID, AWB, Pickup ID"
              className="w-full p-4 pl-12 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-4 h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
              />
            </svg>
          </div>

          {/* Tabs */}
          <div className="flex space-x-8 mb-4 border-b border-gray-200">
            <button className="text-sm font-medium text-gray-900 py-2 border-b-2 border-green-500 focus:outline-none">
              Open
            </button>
            <button className="text-sm font-medium text-gray-500 py-2 border-b-2 border-transparent focus:outline-none">
              Awaited Response
            </button>
            <button className="text-sm font-medium text-gray-500 py-2 border-b-2 border-transparent focus:outline-none">
              Closed
            </button>
          </div>

          {/* Filters */}
          <div className="flex space-x-4 mb-4">
            <select className="w-1/3 p-3 bg-white border border-gray-300 rounded-md">
              <option>Select the days</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
            <select className="w-1/3 p-3 bg-white border border-gray-300 rounded-md">
              <option>Select Status</option>
              <option>Open</option>
              <option>Closed</option>
            </select>
            <select className="w-1/3 p-3 bg-white border border-gray-300 rounded-md">
              <option>Choose Sub category</option>
              <option>Issue Over Weight Discrepancy</option>
              <option>Other Issues</option>
            </select>
          </div>

          {/* Ticket Table */}
          <div className="overflow-x-auto bg-white rounded-md shadow-sm">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 text-gray-600 font-medium">Ticket ID</th>
                  <th className="text-left p-4 text-gray-600 font-medium">AWBs</th>
                  <th className="text-left p-4 text-gray-600 font-medium">Sub Category</th>
                  <th className="text-left p-4 text-gray-600 font-medium">Ticket status</th>
                  <th className="text-left p-4 text-gray-600 font-medium">Resolution due by</th>
                  <th className="text-left p-4 text-gray-600 font-medium">Last updates</th>
                  <th className="text-left p-4 text-gray-600 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-800">7D105973887</td>
                  <td className="p-4 text-gray-800">7D105973887</td>
                  <td className="p-4 text-gray-800">Issue Over Weight Discrepancy</td>
                  <td className="p-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                      OPEN
                    </span>
                  </td>
                  <td className="p-4 text-gray-800">20 Aug 2024, 03:50 PM</td>
                  <td className="p-4 text-gray-800">13 Aug 2024, 03:50 PM</td>
                  <td className="p-4">
                    <button className="text-green-600 hover:text-green-800">
                      Update
                    </button>
                    <br />
                    <a href="#" className="text-teal-600 hover:text-teal-800">
                      History
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      </div>

      
    );
  }
  


export default SupportDashboard;



  
  
