import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isToolsExpanded, setIsToolsExpanded] = useState(false);
  const [isUserManagementExpanded, setIsUserManagementExpanded] = useState(false);
  const [isOrdersExpanded, setIsOrdersExpanded] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const handleLogoClick = () => setIsExpanded(!isExpanded);

  const handleIconClick = (section, path) => {
    if (!isExpanded) {
      setIsExpanded(true);
    }

    switch (section) {
      case 'tools':
        setIsToolsExpanded(!isToolsExpanded);
        break;
      case 'userManagement':
        setIsUserManagementExpanded(!isUserManagementExpanded);
        break;
      case 'orders':
        setIsOrdersExpanded(!isOrdersExpanded);
        break;
      default:
        if (path) navigate(path);
        break;
    }
  };

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isExpanded]);

  return (
    <div
      ref={sidebarRef}
      className={`bg-green-50 ${isExpanded ? 'w-64 sm:w-64' : 'w-16 sm:w-16'} h-screen p-4 flex flex-col justify-between transition-all duration-300`}
    >
      <div>
        {/* Logo */}
        <div className="mb-8 cursor-pointer" onClick={handleLogoClick}>
          <img
            src={isExpanded ? "https://i.postimg.cc/hjnstG85/Screenshot-2024-08-15-120246.png" : "https://i.postimg.cc/SxxNfy0c/Screenshot-2024-08-14-143928.png"}
            alt="Logo"
            className="h-18 w-18 mx-auto"
          />
        </div>

        <nav className="space-y-4">
          {/* Navigation Items */}
          {[
            { imgSrc: "https://i.postimg.cc/bJrYZgvW/Screenshot-2024-08-15-113040.png", text: "Home", path: "/order" },
            { imgSrc: "https://i.postimg.cc/5yRWZWq2/Screenshot-2024-08-15-113054.png", text: "Dashboard" , path: "/dashboard"  },
            { imgSrc: "https://i.postimg.cc/FHFn0BjP/Screenshot-2024-08-15-113102.png", text: "Orders", section: "orders", path: "/orders" },
            { imgSrc: "https://i.postimg.cc/c4PrnpyW/Screenshot-2024-08-15-113111.png", text: "Returns" },
            { imgSrc: "https://i.postimg.cc/SK1sm3GH/Screenshot-2024-08-15-113117.png", text: "Weight Calculator", path: "/calculator" },
            { imgSrc: "https://i.postimg.cc/HLDzBv5D/Screenshot-2024-08-15-113123.png", text: "NDR", path: "/ndr" }, // Added path for NDR
            { imgSrc: "https://i.postimg.cc/Z5VpXTWS/Screenshot-2024-08-15-113130.png", text: "Billing" },
            { imgSrc: "https://i.postimg.cc/90Qj8tKV/Screenshot-2024-08-15-113138.png", text: "Tools" , path: '/tools' },
            { imgSrc: "https://i.postimg.cc/J7SsDsk0/Screenshot-2024-08-15-113212.png", text: "Settings" , path: '/setting' },
            { imgSrc: "https://i.postimg.cc/J7SsDsk0/Screenshot-2024-08-15-113212.png", text: "Support" , path: '/support' }
          ].map((item, index) => (
            <div key={index} className="flex items-center cursor-pointer" onClick={() => handleIconClick(item.section, item.path)}>
              <img src={item.imgSrc} alt={item.text} className="h-6 w-6 sm:h-8 sm:w-8 mr-4" />
              {isExpanded && <span className="hidden sm:inline">{item.text}</span>}
            </div>
          ))}

          {/* Tools Section */}
          {/* <div>
            <button
              onClick={() => handleIconClick('tools')}
              className="flex items-center w-full justify-between"
            >
              <div className="flex items-center">
                <img src="https://i.postimg.cc/90Qj8tKV/Screenshot-2024-08-15-113138.png" alt="Tools" className="h-6 w-6 mr-4" />
                {isExpanded && <span className="hidden sm:inline">Tools</span>}
              </div>
              {isExpanded && (
                <span>
                  {isToolsExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              )}
            </button>
            {isExpanded && isToolsExpanded && (
              <div className="ml-10 mt-2 space-y-2">
                <p>Rate Card</p>
                <p>Product Catalog</p>
                <p>Pincode Serviceability</p>
                <p>Activity Log</p>
                <p>Rate Calculator</p>
                <p>Courier</p>
              </div>
            )}
          </div> */}

          {/* User Management Section */}
          <div>
            <button
              onClick={() => handleIconClick('userManagement')}
              className="flex items-center w-full justify-between"
            >
              <div className="flex items-center">
                <img src="https://i.postimg.cc/8z2J2jTx/Screenshot-2024-08-15-113149.png" alt="User Management" className="h-6 w-6 sm:h-8 sm:w-8 mr-4" />
                {isExpanded && <span className="hidden sm:inline">User Management</span>}
              </div>
              {isExpanded && (
                <span>
                  {isUserManagementExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              )}
            </button>
            {isExpanded && isUserManagementExpanded && (
              <div className="ml-10 mt-2 space-y-2">
                <p className="text-sm sm:text-base">Manage Permission</p>
                <p className="text-sm sm:text-base">Manage Roles</p>
                <p className="text-sm sm:text-base">Manage User</p>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Bottom Icons */}
      <div className="mt-auto">
        <div className="flex items-center cursor-pointer" onClick={handleIconClick}>
          <img src="https://i.postimg.cc/fLTwpNS6/Screenshot-2024-08-15-113202.png" alt="Help" className="h-6 w-6 sm:h-8 sm:w-8 mr-4" />
          {isExpanded && <span className="hidden sm:inline">Help</span>}
        </div>
        <div className="flex items-center mt-4 cursor-pointer" onClick={handleIconClick}>
          <img src="https://i.postimg.cc/J7SsDsk0/Screenshot-2024-08-15-113212.png"  alt="Settings" className="h-6 w-6 sm:h-8 sm:w-8 mr-4" />
          {isExpanded && <span className="hidden sm:inline">Settings</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
