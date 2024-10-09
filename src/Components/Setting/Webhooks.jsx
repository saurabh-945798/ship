import React, { useState } from 'react';

function Webhooks() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [url, setUrl] = useState('');   
  const [token, setToken] = useState('');

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold text-gray-800">Webhooks</h1>
        <div className="flex items-center">
          <span className={`mr-2 ${isEnabled ? 'text-gray-800' : 'text-gray-400'}`}>
            {isEnabled ? 'Enabled' : 'Disabled'}
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isEnabled} onChange={() => setIsEnabled(!isEnabled)} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-200 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
          </label>
        </div>
      </div>

      <p className="text-gray-500 mb-4">Set up & manage webhooks for real-time shipment updates</p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Please enter URL and Token value to set up Webhook connection
        </label>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm text-gray-600">URL</label>
            <input
              type="text"
              placeholder="Enter email id and press enter"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              disabled={!isEnabled}
            />
            <p className="text-sm text-gray-500 mt-1">Note: Please enter the url on which you want Shiprocket to send all tracking updates.</p>
          </div>
          <div>
            <label className="block text-sm text-gray-600">Token</label>
            <input
              type="text"
              placeholder="Enter your contact number and press enter"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              disabled={!isEnabled}
            />
            <p className="text-sm text-gray-500 mt-1">Note: Token will be passed in HTTP header: x-api-key</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className={`px-6 py-2 rounded-md text-white ${isEnabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-200'}`}
          disabled={!isEnabled}
        >
          Save
        </button>
        <button
          className={`px-6 py-2 rounded-md border border-green-500 text-green-500 ${!isEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isEnabled}
        >
          Test webhook
        </button>
      </div>

      <div className="mt-6 bg-yellow-50 p-4 rounded-md text-yellow-800">
        <ul className="list-disc list-inside">
          <li>Mentioned endpoint should be open access and method should be POST.</li>
          <li>In case of any issue please <a href="#" className="text-blue-500 underline">Connect with us</a>.</li>
        </ul>
      </div>
    </div>
  );
}

export default Webhooks;
