import React, { useState } from "react";
import ManageUsers from "./ManageUsers";
import Reports from "./Reports";
// import App from "./Appp";
import Webhooks from './Webhooks'
import App from "./Setting";
// Sidebar component
function Sidebar({ onSelect, selectedSection }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 h-80 w-64">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Setting</h3>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            onClick={() => onSelect("shipmentFeatures")}
            className={`block px-4 py-2 rounded-lg font-medium ${
              selectedSection === "shipmentFeatures"
                ? "bg-green-100 text-green-800"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Shipment Features
          </a>
        </li>
        <li>
          <a
            href=""
            onClick={() => onSelect("manageUsers")}
            className={`block px-4 py-2 rounded-lg font-medium ${
              selectedSection === "manageUsers"
                ? "bg-green-100 text-green-800"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Manage Users
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => onSelect("reports")}
            className={`block px-4 py-2 rounded-lg font-medium ${
              selectedSection === "reports"
                ? "bg-green-100 text-green-800"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Reports
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => onSelect("apiUsers")}
            className={`block px-4 py-2 rounded-lg font-medium ${
              selectedSection === "apiUsers"
                ? "bg-green-100 text-green-800"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            API Users
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => onSelect("webhooks")}
            className={`block px-4 py-2 rounded-lg font-medium ${
              selectedSection === "webhooks"
                ? "bg-green-100 text-green-800"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Webhooks
          </a>
        </li>
      </ul>
    </div>
  );
}

// Shipment Features Component
function Additional() {
  return (
    <div className="w-full max-w-4xl">
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Shipment Features</h2>
        <p className="text-sm text-gray-500 mb-4">
          View: <span className="text-teal-600">Split Shipment</span> |{" "}
          <span className="text-teal-600">Payment Mode</span> |{" "}
          <span className="text-teal-600">Direct Ship</span> |{" "}
          <span className="text-teal-600">Order Verification</span>
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-2">Split Shipment</h3>
        <p className="text-sm text-gray-500 mb-4">
          When an order that contains multiple products is fulfilled in separate shipments, that is called split shipment. The shipments often get delivered on different days.
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium">Enable Split Shipment</span>
          <input type="checkbox" disabled className="cursor-not-allowed" />
        </div>
        <div className="bg-yellow-100 p-3 rounded-lg">
          <p className="text-sm font-medium">How Does It Work</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Payment Mode Change for COD Shipments</h3>
        <p className="text-sm text-gray-500 mb-4">
          On enabling this, you will be able to convert your COD orders to Prepaid payment status if you receive your payment prior to the order being marked as 'out for delivery.'
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium">Enable Payment Mode Change for COD Shipments</span>
          <input type="checkbox" disabled className="cursor-not-allowed" />
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-2">Terms & Conditions:</h4>
          <ul className="list-disc list-inside text-sm text-gray-500">
            <li>Not applicable for shipments that are out for delivery.</li>
            <li>Only applicable for E-com Express, Delhivery & Xpress-bees.</li>
            <li>Payment mode change is allowed only once and cannot be reverted.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Main Layout Component
function Layout() {
  const [selectedSection, setSelectedSection] = useState("shipmentFeatures");

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex">
      <Sidebar onSelect={setSelectedSection} selectedSection={selectedSection} />
      <div className="ml-6 flex-1">
        {selectedSection === "shipmentFeatures" && <Additional />}
        {selectedSection === "manageUsers" && <ManageUsers />}
        {selectedSection === "reports" && <Reports />}
        {/* {selectedSection === "appp" && <App />} */}
        {selectedSection === "webhooks" && <Webhooks />}
        {/* Add other components for additional sections here */}
      </div>
    </div>
  );
}

export default Layout;
