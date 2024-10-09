import React from "react";

const ManageUsers = () => {
  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Manage User</h1>
            <p className="text-sm text-gray-500">
              Create users & give them Shipex access for selected functions based on their roles
            </p>
          </div>
          <button className="bg-green-200 text-green-700 px-4 py-2 rounded-lg font-semibold">
            Add new user
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search Using name, E-mail"
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* No Users Displayed */}
        <div className="text-sm text-gray-500 mb-4">0 Users Displayed</div>

        {/* User List Table */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="grid grid-cols-6 text-sm text-gray-500 font-semibold border-b border-gray-200 p-4">
            <div>User details</div>
            <div>Last login</div>
            <div>Module</div>
            <div>Buyer details Access</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center p-8">
            <img
              src="https://via.placeholder.com/150"
              alt="No user found"
              className="w-24 h-24 mb-4"
            />
            <p className="text-gray-600 text-lg font-semibold mb-4">No user found</p>
            <button className="bg-green-200 text-green-700 px-4 py-2 rounded-lg font-semibold">
              Add new user
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
