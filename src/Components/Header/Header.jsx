import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-end items-center bg-white py-2 px-4 shadow-md">
      <div className="flex items-center space-x-4">
        {/* Wallet Balance */}
        <div className="flex items-center space-x-1">
          <i className="fas fa-wallet text-xl"></i>
          <span className="font-semibold text-lg">₹ 5680</span>
        </div>

        {/* Vertical Divider */}
        <div className="h-6 w-px bg-gray-300 mx-4"></div>

        {/* Quick Actions Button */}
        <button className="flex items-center space-x-1 text-green-500 font-medium">
          <i className="fas fa-bolt text-xl"></i>
          <span>Quick Actions</span>
        </button>

        {/* Recharge Wallet Button */}
        <button className="flex items-center space-x-1 text-green-500 font-medium">
          <i className="fas fa-wallet text-xl"></i>
          <span>Recharge Wallet</span>
          <span className="bg-green-500 text-white text-xs px-1 ml-1 rounded-full">4</span>
        </button>

        {/* Notifications Icon */}
        <i className="fas fa-bell text-xl"></i>

        {/* User Icon */}
        <i className="fas fa-user text-xl"></i>
      </div>
    </header>
  );
};

export default Header;
