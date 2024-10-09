import React from "react";

const PickupTable = () => {
  const pickupData = [
    {
      id: "465826329",
      date: "15 Jul 2024 | 07:16 PM",
      shipmentCount: 1,
      address: "Lakshya S",
      courier: "DTDC",
      status: "Pick up scheduled",
      statusDate: "For Jul 23 2024",
      action: "Download invoice",
      statusColor: "text-green-600", // Adjust color for different status
    },
    {
      id: "465826329",
      date: "15 Jul 2024 | 07:16 PM",
      shipmentCount: 1,
      address: "Lakshya S",
      courier: "DTDC",
      status: "Pick up Completed",
      statusDate: "On Jul 21 2024",
      action: "Download invoice",
      statusColor: "text-green-600", // Adjust color for different status
    },
  ];

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="text-left bg-gray-50 border-b">
              <th className="py-3 px-6 font-medium text-gray-700">Pick id/Pickup request date</th>
              <th className="py-3 px-6 font-medium text-gray-700">Shipment Count</th>
              <th className="py-3 px-6 font-medium text-gray-700">Pickup address</th>
              <th className="py-3 px-6 font-medium text-gray-700">Parent Courier</th>
              <th className="py-3 px-6 font-medium text-gray-700">Pickup Status</th>
              <th className="py-3 px-6 font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {pickupData.map((pickup, index) => (
              <tr key={index} className="border-b">
                <td className="py-4 px-6 flex items-center">
                  <input
                    type="checkbox"
                    className="mr-4 form-checkbox h-4 w-4 text-green-600 border-gray-300 rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{pickup.id}</p>
                    <p className="text-sm text-gray-500">{pickup.date}</p>
                  </div>
                </td>
                <td className="py-4 px-6 text-center">{pickup.shipmentCount}</td>
                <td className="py-4 px-6">{pickup.address}</td>
                <td className="py-4 px-6">{pickup.courier}</td>
                <td className="py-4 px-6">
                  <p className={`font-medium ${pickup.statusColor}`}>{pickup.status}</p>
                  <p className="text-sm text-gray-500">{pickup.statusDate}</p>
                </td>
                <td className="py-4 px-6">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
                    {pickup.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PickupTable;
