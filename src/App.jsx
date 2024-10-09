import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NdrOrdersPage from "./Components/NDR/NDR";
import Order from './Components/Order/Order';
import Sidebar from "./Components/Sidebar/Sidebar";
import Tools from './Components/Tools/Tools';
import Setting from './Components/Setting/Setting';
import Calculator from './Components/Calculator/Calculator';
import Support from './Components/Support/Support';
import Dashboard from "./Components/Dashboard/Dashboard";
import PickupAddress from "./Components/Dashboard/PickupAddress";
import ImportBulkOrder from "./Components/Dashboard/Bulk";
import QuickShipmentForm from "./Components/Dashboard/QuickShipment";
import EarlyCODRemittance from './Components/Setting/Early';
import Post from './Components/Setting/Post';
import Company from './Components/Setting/Company';
import Additional from './Components/Setting/Additional';
import ManageUsers from "./Components/Setting/ManageUsers";
import Reports from "./Components/Setting/Reports";
// import App from "./Components/Setting/Appp";
import Webhooks from "./Components/Setting/Webhooks";
const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar component */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1">
          <Routes>
            {/* Define all your routes */}
            <Route path="/ndr" element={<NdrOrdersPage />} />
            <Route path="/order" element={<Order />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/support" element={<Support />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pickup-address" element={<PickupAddress />} />
            <Route path="/bulk-order" element={<ImportBulkOrder />} />
            <Route path="/quick-shipment" element={<QuickShipmentForm />} />
            <Route path="/early-cod-remittance" element={<EarlyCODRemittance />} />
            <Route path="/post" element={<Post />} />
            <Route path="/company" element={<Company />} />
            <Route path="/additional" element={<Additional />} />
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/reports" element={<Reports />} />
            {/* <Route path="/app" element={<App />} /> */}
            <Route path="/webhooks" element={<Webhooks />} />

            {/* Optional: Redirect or default route */}
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
