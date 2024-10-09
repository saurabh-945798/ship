import React, { useState } from 'react';
import EarlyCODRemittance from './Early';
import Post from './Post'
import Additional from './Additional'

function Sidebar({ onSelect }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Seller Remittance</h3>
      <ul className="space-y-2">
        <li>
          <a 
            href="#" 
            onClick={() => onSelect('bankDetails')}
            className="block px-4 py-2 rounded-lg bg-green-100 text-green-800 font-medium"
          >
            Bank Details
          </a>
        </li>
        <li>
          <a 
            href="#" 
            onClick={() => onSelect('earlyCod')}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Early COD Remittance
          </a>
        </li>
        <li>
          <a 
            href="#" 
            onClick={() => onSelect('postpaidPlan')}
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Postpaid Plan
          </a>
        </li>
      </ul>
    </div>
  );
}

function Breadcrumbs({ currentTab }) {
  return (
    <nav className="text-sm text-gray-500 mb-6">
      <a href="#" className="hover:text-green-600">Settings</a> &gt; 
      <a href="/company" className="hover:text-green-600"> Company Setup</a> &gt; 
      <a href="/additional" className="hover:text-green-600">Additional Setting</a> &gt; 

      <span className="text-green-600"> {currentTab}</span>
    </nav>
  );
}

function BankDetails() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Bank Details</h2>
      <p className="text-gray-600 mb-6">
        Add bank account details where you want your COD to be remitted.
      </p>
      <div className="bg-green-50 p-4 rounded-lg text-sm text-green-800 mb-6">
        <p>1. As a verification process, we will make a transaction of Rs. 1.0 to your bank account. Your account gets verified when the amount is credited successfully in your bank account.</p>
        <p>2. Account holder's name should be the same as the name mentioned in the KYC document.</p>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Account Number</label>
              <input
                type="text"
                className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-green-300"
                placeholder="Enter account number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Account Number</label>
              <input
                type="text"
                className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-green-300"
                placeholder="Confirm account number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Account Type</label>
              <select
                className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-green-300"
              >
                <option>Select account type</option>
                <option>Savings</option>
                <option>Current</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Beneficiary Name</label>
              <input
                type="text"
                className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-green-300"
                placeholder="Enter Beneficiary Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">IFSC Code</label>
              <input
                type="text"
                className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-green-300"
                placeholder="Enter IFSC Code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bank Name</label>
              <input
                type="text"
                className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-green-300"
                placeholder="Enter Bank Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Branch Name</label>
              <input
                type="text"
                className="mt-1 p-2 border rounded-lg w-full focus:ring focus:ring-green-300"
                placeholder="Enter Branch Name"
              />
            </div>
          </form>
          <div className="mt-6 flex justify-end">
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
              Save
            </button>
          </div>
      <div className="mt-6 flex justify-end">
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Save
        </button>
      </div>
    </div>
  );
}

function App() {
  const [selectedTab, setSelectedTab] = useState('bankDetails');

  const renderContent = () => {
    switch (selectedTab) {
      case 'bankDetails':
        return <BankDetails />;
      case 'earlyCod':
        return <EarlyCODRemittance />;
      case 'postpaidPlan':
        return  <Post />;
          
          
       
      default:
        return <BankDetails />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <Breadcrumbs currentTab={selectedTab} />
      <div className="flex">
        <div className="w-64 mr-8">
          <Sidebar onSelect={setSelectedTab} />
        </div>
        <div className="flex-grow bg-white shadow-md rounded-lg p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
