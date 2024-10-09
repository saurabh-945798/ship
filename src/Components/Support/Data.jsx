// SupportDashboard Component
import React from "react";
function Dashboard() {
    const [activeTab, setActiveTab] = useState("Open"); // State to manage active tab
  
    const data = [
      {
        ticketId: "7D105973887",
        awb: "7D105973887",
        subCategory: "Issue Over Weight Discrepancy",
        status: "OPEN",
        dueBy: "20 Aug 2024, 03:50 PM",
        lastUpdate: "13 Aug 2024, 03:50 PM",
      },
      // You can add more data here
    ];
  
    const renderTableRows = () => {
      return data.map((ticket, index) => (
        <tr className="border-b border-gray-200" key={index}>
          <td className="p-4 text-gray-800">{ticket.ticketId}</td>
          <td className="p-4 text-gray-800">{ticket.awb}</td>
          <td className="p-4 text-gray-800">{ticket.subCategory}</td>
          <td className="p-4">
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                ticket.status === "OPEN"
                  ? "text-yellow-800 bg-yellow-100"
                  : ticket.status === "AWAITED RESPONSE"
                  ? "text-orange-800 bg-orange-100"
                  : "text-green-800 bg-green-100"
              }`}
            >
              {ticket.status}
            </span>
          </td>
          <td className="p-4 text-gray-800">{ticket.dueBy}</td>
          <td className="p-4 text-gray-800">{ticket.lastUpdate}</td>
          <td className="p-4">
            <button className="text-green-600 hover:text-green-800">Update</button>
            <br />
            <a href="#" className="text-teal-600 hover:text-teal-800">
              History
            </a>
          </td>
        </tr>
      ));
    };
  
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        <Header /> {/* Including the Header component */}
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
            <button
              className={`text-sm font-medium py-2 border-b-2 focus:outline-none ${
                activeTab === "Open" ? "text-gray-900 border-green-500" : "text-gray-500 border-transparent"
              }`}
              onClick={() => setActiveTab("Open")}
            >
              Open
            </button>
            <button
              className={`text-sm font-medium py-2 border-b-2 focus:outline-none ${
                activeTab === "Awaited" ? "text-gray-900 border-green-500" : "text-gray-500 border-transparent"
              }`}
              onClick={() => setActiveTab("Awaited")}
            >
              Awaited Response
            </button>
            <button
              className={`text-sm font-medium py-2 border-b-2 focus:outline-none ${
                activeTab === "Closed" ? "text-gray-900 border-green-500" : "text-gray-500 border-transparent"
              }`}
              onClick={() => setActiveTab("Closed")}
            >
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
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  
  
    
  