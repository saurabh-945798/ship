import React, { useState } from 'react';

// Header Component
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
const ResponsiveForm = () => {
  const [status, setStatus] = useState('New orders');

  // Sample data
  const orders = [
    {
      id: '465826329',
      date: '15 Jul 2024 | 07:16 PM',
      custom:'Custom',
      customer: 'Riya Sharma',
      email: 'RS@gmail.com',
      phone: '5639742436',
      view:'View RTO Risk',
      product: 'Clothes',
      package: 'Dead wt.: 3.2 Kg\n10.00 x 10.00 x 12.00 (cm)\nVolumetric wt.: 0.288 Kg',
      payment: '₹2000.00',
      pre: 'Prepaid',
      pickupAddress: 'Lakshya S',
      CUCU:'Custom',
      SKU:"SKU:CLothes",
      QTY:"QTY 1",
      Action:'NEW',
      status: 'NEW',
    },

    {
      date: '15 Jul 2024',  
      email: '29 july 2024',
      product: '465826329',
      package: 'out for a pick',
      payment: 'DTDC Surface',
      pre: 'AWB # 46384634',
      pickupAddress: 'Riya',
      Action:'Canclled',
      status: 'Cancelled',
    },


    {
      id: '465826329',
      date: '15 Jul 2024 | 07:16 PM',
      custom:'Custom',
      customer: 'Riya Sharma',
      email: 'RS@gmail.com',
      phone: '5639742436',
      product: '₹2000',
      package: 'DTDC Surface ',
      qwert:"AWB # 46384634",
      
      preq: 'Prepaid',
      
      v:"View Product",
      CUCU:'Custom',
      Action:"Delivered",
      status: 'Delivered',
    },




   




    {
      id: '465826329',
      date: '15 Jul 2024 | 07:16 PM',
      custom:'Custom',
      customer: 'Riya Sharma',
      email: 'RS@gmail.com',
      phone: '5639742436',
      product: 'on 1 July 2024',
      package: 'DTDC Surface ',
      qwert:"AWB # 46384634",
      payment: '29 july 2024',
      // pre: 'Prepaid',
      pickupAddress: 'Raj singh',
      CUCU:'Custom',
      Action:"Delivered",
      status: 'RTO',
    },

    {
      id: '465826329',
      date: '15 Jul 2024 | 07:16 PM',
      custom:'Custom',
      customer: 'Riya Sharma',
      email: 'RS@gmail.com',
      phone: '5639742436',
      product: 'on 1 July 2024',
      package: 'DTDC Surface ',
      qwert:"AWB # 46384634",
      payment: '29 july 2024',
      // pre: 'Prepaid',
      pickupAddress: 'Raj singh',
      CUCU:'Custom',
      Action:"Delivered",
      status: 'Lost/Damaged',
    },



    {
      id: '465826329',
      date: '15 Jul 2024 | 07:16 PM',
      custom:'Custom',  
      customer: 'Riya Sharma',
      email: 'RS@gmail.com',
      phone: '5639742436',
      v:"View Product",
      inpre:"Prepaid",
      ABW:"AWB # 46384634",
      product: '₹2000',
      package: 'DTDC Surface',
      payment: '26 july 2024',
      pre: 'Prepaid',
      pickupAddress: 'Lakshya S',
      in:"In Trasnsit ",
      
      CUCU:'Custom',
      status: 'In Transit',
      
    },

    {
      id: '465826329',
      date: '15 Jul 2024 | 07:16 PM',
      custom:'Custom', 
      customer: 'Riya Sharma',
      email: 'RS@gmail.com',
      phone: '5639742436',
      product: '₹2000.00',
      pre: '# 5639742436',
      code:"COD",
      package: 'Ayush ',
      payment: 'DTDC Surface 2kg',
      Action:"out for a pick",
      pickupAddress: 'Lakshya S',
      CUCU:'Custom',
      status: 'Ready',
      
    },

    {
      id: '465826329',
      date: '15 Jul 2024 | 07:16 PM',
      custom:'Custom',
      customer: 'Riya Sharma',
      email: 'RS@gmail.com',
      phone: '5639742436',
      view:'View RTO Risk',
      v:"View Product",
      product: 'Clothes',
      package: 'Dead wt.: 3.2 Kg\n10.00 x 10.00 x 12.00 (cm)\nVolumetric wt.: 0.288 Kg',
      payment: '₹2000.00',
      pre: 'Prepaid',
      pickupAddress: 'Lakshya S',
      CUCU:'Custom',
      status: 'Pickups' ,
      
    },

  ];

  // Filter orders based on selected status
  const filteredOrders = orders.filter(order => {
    if (status === 'All') return true;
    if (status === 'New orders') return order.status === 'NEW';
    if (status === 'Ready to ship') return order.status === 'Ready';
    if (status === 'Pick ups') return order.status === 'Pickup';
    if (status === 'In Transit') return order.status === 'In Transit';
    if (status === 'Delivered') return order.status === 'Delivered';
    if (status === 'RTO') return order.status === 'RTO';
    if (status === 'Cancelled') return order.status === 'Cancelled';
    if (status === 'Lost/Damaged') return order.status === 'Lost/Damaged';
    return false;
  });

  // Determine column headers based on the selected status
  const getHeaders = () => {
    switch (status) {
      // case 'Ready to ship':
      // case 'New orders':
      // case 'In Transit':
      // case 'Delivered':
      // case 'RTO':
      // case 'Cancelled':
      case 'Lost/Damaged':
        return [
          'Order Details',
          'Cancelled Details',
          'Order ID',
          ' Status',
          'Store Tag',
          'Tag',
          'Customer Details',
          'Mobile',
          "pickup Adress",
          'Product Details  '
        ];

        case 'Cancelled':
          return [
            'Order Details',
            'Customer Details',
            'Product Details',
            'Package Details',
            'Payments',
            'Pickup Address',
            'Status',
            'Action'
          ];
      case 'Pick ups':
        return [
          'Pick id/Pickup request date',
          'Shipment Count',
          'Pickup address',
          'Parent Courier',
          'Pickup Status',
          'Action'
        ];

        case 'RTO':
          return [
            'Order Details',
            'Customer Details',
            'Order shipped date',
            'shipping details',
            ' RTO EDD',
            'RTO address',
            'Action',
            'Status',
            
          ];

          case 'Delivered':
            return [
              'Order Details',
              'Customer Details',
              'Payments',
              'shipping details',
              'Action',
              'Status',
              
            ];

            
          case 'New Orders':
            return [
              'Order Details',
              'Customer Details',
              'Product Details',
              'Package details',
              'Payments',
              'pickup adress',
              'Status',
              'Action',
              
              
            ];

            
       


        case 'In Transit':
          return [
            'Order Details',
            'Customer Details',
            'Payments',
            'Shipping Details',
            'EDD',
            "Status",
            'Action'
          ];
      default:
        return [
          'Order Details',
          'Customer Details',
          'Payments',
          'Pickup Address',
          'Shipping Details',
          'Status',
          'Action'
        ];
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
     

      {/* Main Content */}
      
      <div className="flex-1 p-4">
        <div className="container mx-auto">
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4">
              <h1 className="text-xl font-semibold">Orders</h1>
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <button className="bg-green-500 text-white px-4 py-2 rounded">Add an Order</button>
                <input
                  type="text"
                  placeholder="Search AWB number"
                  className="border px-4 py-2 rounded w-full sm:w-auto"
                />
              </div>
            </div>

            <div className="mt-4">
              <ul className="flex flex-wrap justify-between border-b text-xs sm:text-sm">
                {['New orders', 'Ready to ship', 'Pick ups', 'In Transit', 'Delivered', 'RTO', 'Cancelled', 'Lost/Damaged', 'All'].map(item => (
                  <li
                    key={item}
                    onClick={() => setStatus(item)}
                    className={`font-semibold flex-1 text-center py-2 cursor-pointer ${status === item ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-600'}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 overflow-x-auto">
           
  {/* Table Header */}
  <div
    className={`grid grid-cols-1 ${status === 'Pick ups' ? 'sm:grid-cols-8' : 'sm:grid-cols-9'} ${status === 'In Transit' ? 'sm:grid-cols-7' : 'sm:grid-cols-9'} ${status === 'RTO' ? 'sm:grid-cols-8' : 'sm:grid-cols-9'}
                ${status === 'Ready' ? 'sm:grid-cols-6' : 'sm:grid-cols-9'}
                ${status === 'New Orders' ? 'sm:grid-cols-7' : 'sm:grid-cols-9'}
                ${status === 'Cancelled' ? 'sm:grid-cols-7' : 'sm:grid-cols-9'}
                ${status === 'Delivered' ? 'sm:grid-cols-8' : 'sm:grid-cols-10'} 
                ${status === 'Lost/Damaged' ? 'sm:grid-cols-10' : 'sm:grid-cols-12'} gap-8 bg-gray-100 shadow-xl text-center border p-4 font-semibold text-xs sm:text-sm`}
  >
    {getHeaders().map((header, index) => (
      <span key={index} className="sm:px-2 text-gray-600 flex justify-center items-center">
        {header}
      </span>
    ))}
  </div>
</div>


              {/* Table Rows  New Order k liye 1 table*/}
              {filteredOrders.map((order, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 cursor-pointer sm:grid-cols-8 gap-4 p-2 border-b text-xs sm:text-sm items-center"
                >
                 <span>
                  
                <input type="checkbox"/> <span>{order.id}</span>
                <div className="text-xs mt-2 text-gray-500">
                  {order.date}
                  <div className='mt-2 hover:underline '>{order.CUCU}</div>
                  <div className='mt-2 hover:underline text-green-500 '>{order.vv }</div>


                  <div className='mt-2 text-green-400 hover:underline '>{order.v}</div>
                </div>
              </span>
                  <span>
                    <div>{order.Shipment}</div>
                    <div className="text-xs mt-2 text-gray-500">{order.customer}</div>
                    <div className="text-xs mt-2 text-gray-500">{order.email}</div>
                    {status === 'RTO' && (
        <div className="text-xs mt-2 text-gray-500">{order.phone}</div>
                                      )}  
                                      {status === 'Delivered' && (
        <div className="text-xs mt-2 text-gray-500">{order.phone}</div>
                                      )}  
                    <div className="text-green-500 text-xs mt-2 hover:scale-95 duration-200 underline">{order.view}</div>
                    <div className="text-gray-500 text-xs mt-2 hover:scale-95 duration-200 underline">{order.phone}</div>
                  </span>
                  <span>
                    {order.product}
               
                  

                    
                    <div className='mt-2'>{order.SKU}</div>
                    <div className='mt-2'>{order.QTY}</div>
                    <div className='mt-2 text-red-400 border-0'>{order.code}</div>
                    <div className='mt-2 text-green-400 border-0'>{order.inpre}</div>
                    <div className='mt-2 text-green-400 border-0'>{order.preq}</div>
                    
                  </span>
                  <span>
                    <div>{order.package}</div>
                    <div className=''>{order.ABW}</div>
                    
                    <div className='text-green-500 text-sm'>{order.qwert}</div>
                  </span>
                  <span>
                  <span>{order.payment}</span>
                     <div className="text-green-500  mt-2 hover:scale-95 duration-200 text-xs">{order.pre}</div>
                   
                  </span>
                  

                  <span>{order.pickupAddress}</span>
                  

                  
                  
                  <span>
  <span className={`bg-green-100 text-green-500 px-2 py-1 rounded`}>
    {order.Action}
    {order.in}
  </span>
</span>
<span>
  <button className="bg-[#0CBB7D] hover:scale-95 cursor-pointer duration-200 text-white px-4 py-2 rounded">
    {status === 'Ready to ship' ? 'Download' : status === 'In Transit' ? 'Track Order' : 'Ship now'}
  </button>
</span>

                </div>
              ))}
                    {filteredOrders.map((order, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 cursor-pointer sm:grid-cols-8 gap-4 p-2 border-b text-xs sm:text-sm items-center"
                >
                 <span>
                  
                <input type="checkbox"/> <span>{order.id}</span>
                <div className="text-xs mt-2 text-gray-500">
                  {order.date}
                  <div className='mt-2 hover:underline '>{order.CUCU}</div>
                  <div className='mt-2 hover:underline text-green-500 '>{order.vv }</div>


                  <div className='mt-2 text-green-400 hover:underline '>{order.v}</div>
                </div>
              </span>
                  <span>
                    <div>{order.Shipment}</div>
                    <div className="text-xs mt-2 text-gray-500">{order.customer}</div>
                    <div className="text-xs mt-2 text-gray-500">{order.email}</div>
                    {status === 'RTO' && (
        <div className="text-xs mt-2 text-gray-500">{order.phone}</div>
                                      )}  
                                      {status === 'Delivered' && (
        <div className="text-xs mt-2 text-gray-500">{order.phone}</div>
                                      )}  
                    <div className="text-green-500 text-xs mt-2 hover:scale-95 duration-200 underline">{order.view}</div>
                    <div className="text-gray-500 text-xs mt-2 hover:scale-95 duration-200 underline">{order.phone}</div>
                  </span>
                  <span>
                    {order.product}
               
                  

                    
                    <div className='mt-2'>{order.SKU}</div>
                    <div className='mt-2'>{order.QTY}</div>
                    <div className='mt-2 text-red-400 border-0'>{order.code}</div>
                    <div className='mt-2 text-green-400 border-0'>{order.inpre}</div>
                    <div className='mt-2 text-green-400 border-0'>{order.preq}</div>
                    
                  </span>
                  <span>
                    <div>{order.package}</div>
                    <div className=''>{order.ABW}</div>
                    
                    <div className='text-green-500 text-sm'>{order.qwert}</div>
                  </span>
                  <span>
                  <span>{order.payment}</span>
                     <div className="text-green-500  mt-2 hover:scale-95 duration-200 text-xs">{order.pre}</div>
                   
                  </span>
                  

                  <span>{order.pickupAddress}</span>
                  

                  
                  
                  <span>
  <span className={`bg-green-100 text-green-500 px-2 py-1 rounded`}>
    {order.Action}
    {order.in}
  </span>
</span>
<span>
  <button className="bg-[#0CBB7D] hover:scale-95 cursor-pointer duration-200 text-white px-4 py-2 rounded">
    {status === 'Ready to ship' ? 'Download' : status === 'In Transit' ? 'Track Order' : 'Ship now'}
  </button>
</span>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ResponsiveForm;



