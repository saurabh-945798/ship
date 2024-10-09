import React, { useState } from 'react';

const PickupAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState('Primary');

  const addresses = [
    { id: 1, label: 'Primary', address: '129 Vidya nagar, Bhiwani Haryana India' },
    { id: 2, address: '129 Vidya nagar, Bhiwani Haryana India' },
    { id: 3, address: '129 Vidya nagar, Bhiwani Haryana India' },
    { id: 4, address: '129 Vidya nagar, Bhiwani Haryana India' },
  ];

  return (
    <div className="bg-green-50 p-6 rounded-lg">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Pick up Address</h2>
        <div className="p-4 bg-white shadow-md rounded-md">
          <div className={`p-4 border ${selectedAddress === 'Primary' ? 'border-green-500' : 'border-gray-300'} rounded-md`}>
            <h3 className="font-bold text-gray-700">Primary</h3>
            <p className="text-sm text-gray-500">{addresses[0].address}</p>
            <button
              onClick={() => setSelectedAddress('Primary')}
              className={`mt-4 px-4 py-2 rounded-md ${selectedAddress === 'Primary' ? 'bg-green-100' : 'bg-gray-100'} hover:bg-green-200`}
            >
              Select
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">More addresses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {addresses.slice(1).map((address, index) => (
            <div key={index} className={`p-4 bg-white shadow-md rounded-md border ${selectedAddress === address.address ? 'border-green-500' : 'border-gray-300'}`}>
              <p className="text-sm text-gray-500">{address.address}</p>
              <button
                onClick={() => setSelectedAddress(address.address)}
                className={`mt-4 px-4 py-2 rounded-md ${selectedAddress === address.address ? 'bg-green-100' : 'bg-gray-100'} hover:bg-green-200`}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PickupAddress;
