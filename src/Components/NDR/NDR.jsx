import React, { useState } from "react";

// Header Component
const Header = () => {
  return (
    <header className="flex justify-between md:justify-end items-center bg-white py-2 px-4 shadow-md font-poppins flex-wrap">
      <div className="flex items-center space-x-4 md:space-x-8">
        {/* Wallet Balance */}
        <div className="flex items-center space-x-1">
          <i className="fas fa-wallet text-lg md:text-xl"></i>
          <span className="font-semibold text-sm md:text-lg">₹ 5680</span>
        </div>

        {/* Vertical Divider */}
        <div className="h-6 w-px bg-gray-300 mx-2 md:mx-4"></div>

        {/* Quick Actions Button */}
        <button className="flex items-center space-x-1 text-green-500 font-medium">
          <i className="fas fa-bolt text-lg md:text-xl"></i>
          <span className="text-sm md:text-base">Quick Actions</span>
        </button>

        {/* Recharge Wallet Button */}
        <button className="flex items-center space-x-1 text-green-500 font-medium">
          <i className="fas fa-wallet text-lg md:text-xl"></i>
          <span className="text-sm md:text-base">Recharge Wallet</span>
          <span className="bg-green-500 text-white text-xs px-1 ml-1 rounded-full">4</span>
        </button>

        {/* Notifications Icon */}
        <i className="fas fa-bell text-lg md:text-xl"></i>

        {/* User Icon */}
        <i className="fas fa-user text-lg md:text-xl"></i>
      </div>
    </header>
  );
};

// NDR Orders Page Component
const NdrOrdersPage = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("Action Required");

  // Dummy data for Action Required, Action Taken, Delivered, and RTO
  const actionRequiredData = [
    {
      trackingDetails: "02 July 2024 | 12:23",
      attempt: "3rd Attempt",
      ndrReason: "Last NDR Reason: Customer Refused",
      customerName: "Riya Sharma",
      customerEmail: "RS@gmail.com",
      customerPhone: "8639742436",
      itemDetails: "4E5865238",
      productLink: "View product",
      fulfilledBy: "---------",
      ivrStatus: "---------",
      lastAction: "Shippex (Pending)",
      firstNDR: "Shippex",
      aging: "---------",
      actions: "View History",
    },
  ];

  const actionTakenData = [
    {
      trackingDetails: "01 July 2024 | 10:45",
      attempt: "2nd Attempt",
      ndrReason: "Last NDR Reason: Address Not Found",
      customerName: "Arun Kumar",
      customerEmail: "AK@gmail.com",
      customerPhone: "9876543210",
      itemDetails: "5B7634829",
      productLink: "View product",
      fulfilledBy: "---------",
      ivrStatus: "---------",
      lastAction: "Shippex (Delivered)",
      firstNDR: "Shippex",
      aging: "---------",
      actions: "View History",
    },
  ];

  const deliveredData = [
    {
      trackingDetails: "30 June 2024 | 09:15",
      attempt: "1st Attempt",
      ndrReason: "---------",
      customerName: "Deepak Singh",
      customerEmail: "DS@gmail.com",
      customerPhone: "9876543212",
      itemDetails: "6D9812357",
      productLink: "View product",
      fulfilledBy: "Shippex",
      ivrStatus: "---------",
      lastAction: "Delivered",
      firstNDR: "---------",
      aging: "---------",
      actions: "View History",
    },
  ];

  const rtoData = [
    {
      trackingDetails: "28 June 2024 | 14:33",
      attempt: "4th Attempt",
      ndrReason: "Last NDR Reason: Customer Refused",
      customerName: "Anjali Verma",
      customerEmail: "AV@gmail.com",
      customerPhone: "9898989898",
      itemDetails: "7F9856273",
      productLink: "View product",
      fulfilledBy: "Shippex",
      ivrStatus: "---------",
      lastAction: "Returned to Origin (RTO)",
      firstNDR: "Shippex",
      aging: "---------",
      actions: "View History",
    },
  ];

  // Combine all data for "All" tab
  const allData = [...actionRequiredData, ...actionTakenData, ...deliveredData, ...rtoData];

  const renderTableData = (data) => {
    return data.map((row, index) => (
      <tr key={index}>
        <td className="px-2 py-1 text-xs md:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
          <div className="font-medium text-gray-900">{row.trackingDetails}</div>
          <div className="text-gray-500">{row.attempt}</div>
          <div className="text-red-500">{row.ndrReason}</div>
        </td>
        <td className="px-2 py-1 text-xs md:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
          <div className="font-medium text-gray-900">{row.customerName}</div>
          <div className="text-gray-500">{row.customerEmail}</div>
          <div className="text-gray-500">{row.customerPhone}</div>
        </td>
        <td className="px-2 py-1 text-xs md:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
          <div className="text-gray-900">{row.itemDetails}</div>
          <a href="#" className="text-blue-500">{row.productLink}</a>
        </td>
        <td className="px-2 py-1 text-xs md:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
          <div className="text-gray-900">{row.fulfilledBy}</div>
        </td>
        <td className="px-2 py-1 text-xs md:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
          <div className="text-gray-900">{row.ivrStatus}</div>
        </td>
        <td className="px-2 py-1 text-xs md:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
          <div className="text-yellow-500">{row.lastAction}</div>
        </td>
        <td className="px-2 py-1 text-xs md:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
          <div className="text-yellow-500">{row.firstNDR}</div>
        </td>
        <td className="px-2 py-1 text-xs md:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
          <div className="text-gray-900">{row.aging}</div>
        </td>
        <td className="px-2 py-1 text-xs md:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
          <a href="#" className="text-blue-500">{row.actions}</a>
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex-1 font-poppins">
      {/* Integrate Header component */}
      <Header />

      <div className="p-4 md:p-6">
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">NDR Orders</h2>

          {/* Tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-6">
            <button
              className={`${
                activeTab === "Action Required"
                  ? "text-green-600 border-b-2 border-green-600"
                  : ""
              } pb-2`}
              onClick={() => setActiveTab("Action Required")}
            >
              Action Required
            </button>
            <button
              className={`${
                activeTab === "Action Taken"
                  ? "text-green-600 border-b-2 border-green-600"
                  : ""
              } pb-2`}
              onClick={() => setActiveTab("Action Taken")}
            >
              Action Taken
            </button>
            <button
              className={activeTab === "Delivered" ? "text-green-600 border-b-2 border-green-600 pb-2" : "pb-2"}
              onClick={() => setActiveTab("Delivered")}
            >
              Delivered
            </button>
            <button
              className={activeTab === "RTO" ? "text-green-600 border-b-2 border-green-600 pb-2" : "pb-2"}
              onClick={() => setActiveTab("RTO")}
            >
              RTO
            </button>
            <button
              className={activeTab === "All" ? "text-green-600 border-b-2 border-green-600 pb-2" : "pb-2"}
              onClick={() => setActiveTab("All")}
            >
              All
            </button>
          </div>

          {/* Table */}
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Tracking Details
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Customer details
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Item Details
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Fulfilled by
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    IVR Status
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Last Action
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    First NDR
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    OFD/Aging
                  </th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {renderTableData(
                  activeTab === "Action Required"
                    ? actionRequiredData
                    : activeTab === "Action Taken"
                    ? actionTakenData
                    : activeTab === "Delivered"
                    ? deliveredData
                    : activeTab === "RTO"
                    ? rtoData
                    : allData
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NdrOrdersPage;
