import React from 'react';


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold mb-6">Calculate the Shipment price:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="block font-medium">Shipment type:</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="shipmentType" className="form-radio text-green-600" defaultChecked />
                    <span>Domestic</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="shipmentType" className="form-radio text-green-600" />
                    <span>International</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-medium">Pickup pincode</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter your pin code" />
              </div>

              <div className="space-y-2">
                <label className="block font-medium">Drop pincode</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter your pin code" />
              </div>

              <div className="space-y-2">
                <label className="block font-medium">Actual weight</label>
                <div className="flex space-x-4">
                  <input type="text" className="w-1/2 p-2 border rounded-md" placeholder="Enter weight" />
                  <span className="self-center">Kg</span>
                </div>
                <p className="text-sm text-gray-500">The weight can differ to 0.5 kgs</p>
              </div>

              <div className="space-y-2">
                <label className="block font-medium">Enter Dimensions</label>
                <div className="grid grid-cols-3 gap-2">
                  <input type="text" className="p-2 border rounded-md" placeholder="L" />
                  <input type="text" className="p-2 border rounded-md" placeholder="B" />
                  <input type="text" className="p-2 border rounded-md" placeholder="H" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-medium">Payment type:</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="paymentType" className="form-radio text-green-600" defaultChecked />
                    <span>Cash on delivery</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="paymentType" className="form-radio text-green-600" />
                    <span>International</span>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-medium">Estimated amount of the shipment</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter the value" />
              </div>

              <div className="space-y-2">
                <label className="block font-medium">Shipping dangerous goods?</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="dangerousGoods" className="form-radio text-green-600" />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="dangerousGoods" className="form-radio text-green-600" defaultChecked />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <div className="flex space-x-4">
                <button type="button" className="bg-green-600 text-white py-2 px-4 rounded-md">Calculate</button>
                <button type="button" className="border border-green-600 text-green-600 py-2 px-4 rounded-md">Reset</button>
              </div>

            </form>
            <p className="mt-6 text-sm text-gray-500">You can read the <a href="#" className="text-green-600 underline">Terms & Conditions</a> here</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 flex flex-col justify-center items-center">
            <div className="text-center mb-6">
              <p className="font-semibold">Pick up location</p>
              <p className="text-xl">City</p>
              <p className="text-xl font-bold">State</p>
            </div>
            <div className="h-12 border-l-2 border-dashed border-gray-400"></div>
            <div className="text-center mt-6">
              <p className="font-semibold">Drop location</p>
              <p className="text-xl">City</p>
              <p className="text-xl font-bold">State</p>
            </div>
            <div className="mt-6">
              <img src="/path-to-your-image/illustration.png" alt="Shipment" className="w-32" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;