import React from 'react';

const ImportBulkOrder = () => {
  return (
    <div className="p-8 bg-white">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-6">Import Bulk order</h1>

      {/* File Upload Section */}
      <div className="bg-green-50 border-2 border-green-100 border-dashed rounded-lg p-8 text-center">
        <p className="text-lg font-medium mb-4">Drag and drop the files here</p>
        <p className="mb-6">OR</p>
        <button className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-100">
          Browse and upload
        </button>
        <p className="mt-4 text-gray-500">Only csv, xls & xlsx file format will be accepted.</p>
      </div>

      {/* Instructions Section */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
        <h2 className="font-semibold mb-4">Instructions</h2>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Download the sample file and replace its data with your order data. Save the file and upload it back.</li>
          <li>Make sure all mandatory fields are filled in the sheet.</li>
          <li>
            You can view the successfully uploaded orders in 'New Orders tab' in order’s panel. AWB assigned orders can
            be viewed in 'Ready to Ship' tab.
          </li>
          <li>In case there are errors in the file, download the error file, and fix errors with correct data & re-upload the file.</li>
        </ul>
      </div>

      {/* Uploaded Files Table */}
      <div className="mt-8">
        <table className="w-full bg-white rounded-lg border border-gray-200">
          <thead className="bg-gray-100 text-sm font-medium text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">File Name</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">No. of uploaded orders</th>
              <th className="py-3 px-4 text-left">Successfully uploaded order</th>
              <th className="py-3 px-4 text-left">Uploaded order status</th>
              <th className="py-3 px-4 text-left">Error Order</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600">
            <tr>
              <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                No data found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportBulkOrder;
