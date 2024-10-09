// ReadyToShip.js
import React from 'react';

const ReadyToShip = ({ orders }) => {
  return (
    <div>
      {/* Table Header */}
      <div className="grid grid-cols-10 gap-4 bg-gray-200 p-2 font-semibold text-sm">
        <span className="col-span-2">Order Details</span>
        <span className="col-span-2">Customer Details</span>
        <span>Product Details</span>
        <span>Package Details</span>
        <span>Payments</span>
        <span>Pickup Address</span>
        <span>Status</span>
        <span>Action</span>
      </div>

      {/* Table Rows */}
      {orders.map((order, index) => (
        <div
          key={index}
          className="grid grid-cols-10 gap-4 p-2 border-b text-sm items-center"
        >
          <span className="col-span-2">
            <input type="checkbox" /> <span>{order.id}</span>
            <div className="text-xs text-gray-500">{order.date}</div>
          </span>
          <span className="col-span-2">
            <div>{order.customer}</div>
            <div className="text-xs text-gray-500">{order.email}</div>
            <div className="text-xs text-gray-500">{order.phone}</div>
          </span>
          <span>{order.product}</span>
          <span>
            <div>{order.package}</div>
          </span>
          <span>
            {order.payment}
          </span>
          <span>{order.pickupAddress}</span>
          <span>
            <span className="bg-green-100 text-green-500 px-2 py-1 rounded">{order.status}</span>
          </span>
          <span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Dispatch</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ReadyToShip;
