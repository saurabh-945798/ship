import React from 'react';

const ShipmentTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Single shipment", "Bulk orders", "Quick Shipment"];

  return (
    <div className="flex space-x-4 border-b border-gray-300">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-2 ${
            activeTab === tab
              ? "text-green-500 border-b-4 border-green-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ShipmentTabs;
