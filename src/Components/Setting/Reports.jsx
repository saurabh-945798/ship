import React, { useState } from "react";

function Reports() {
  const [businessEmail1, setBusinessEmail1] = useState("");
  const [contact1, setContact1] = useState("");
  const [businessEmail2, setBusinessEmail2] = useState("");
  const [contact2, setContact2] = useState("");

  const handleSave = () => {
    // Add save functionality here
    console.log("Saved", { businessEmail1, contact1, businessEmail2, contact2 });
  };

  return (
    <div className="bg-green-50 shadow-lg rounded-xl p-8 w-full max-w-4xl">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Reports</h1>
      <p className="text-sm text-gray-500 mb-6">
        Communications related to business or operations will be sent to the email ids & contact numbers provided below.
      </p>

      {/* Business Related Communication - 1 */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">For Business Related Communication</h3>
        <p className="text-sm text-gray-500 mb-4">
          Add email id(s) and mobile number(s) to receive business related communication like COD Remittance, etc.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="email1" className="sr-only">Email ID</label>
            <input
              type="email"
              id="email1"
              placeholder="Enter email id and press enter"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
              value={businessEmail1}
              onChange={(e) => setBusinessEmail1(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contact1" className="sr-only">Contact</label>
            <input
              type="text"
              id="contact1"
              placeholder="Enter your contact number and press enter"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
              value={contact1}
              onChange={(e) => setContact1(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Business Related Communication - 2 */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">For Business Related Communication</h3>
        <p className="text-sm text-gray-500 mb-4">
          Add email id(s) and mobile number(s) to receive business related communication like COD Remittance, etc.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="email2" className="sr-only">Email ID</label>
            <input
              type="email"
              id="email2"
              placeholder="Enter email id and press enter"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
              value={businessEmail2}
              onChange={(e) => setBusinessEmail2(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contact2" className="sr-only">Contact</label>
            <input
              type="text"
              id="contact2"
              placeholder="Enter your contact number and press enter"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
              value={contact2}
              onChange={(e) => setContact2(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSave}
          className="bg-green-200 text-green-700 px-8 py-2 rounded-lg font-semibold focus:outline-none hover:bg-green-300"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Reports;
