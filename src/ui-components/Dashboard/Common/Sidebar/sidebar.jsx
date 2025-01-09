import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  PieChart,
  Table,
  Menu,
  MailCheck,
  IdCard,
  UserRoundPen,
  Zap,
} from "lucide-react";

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    {
      icon: MailCheck,
      label: "Email Verification",
      path: "/emailverification",
    },
    { icon: IdCard, label: "Task & Results", path: "/tasks" },
    { icon: PieChart, label: "Credits History", path: "/creditshistory" },
    { icon: Zap, label: "Buy Credits", path: "/buycredits" },
    { icon: UserRoundPen, label: "My Profile", path: "/settings" },
    { icon: Table, label: "Tables", path: "/tables" },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeMenuItem = menuItems.find((item) => item.path === currentPath);
    if (activeMenuItem) {
      setActiveItem(activeMenuItem.label);
    }
  }, [location.pathname]);

  return (
    <div
      className={`fixed top-0 left-0 h-screen shadow-md lg:ml-16 z-20 transition-all duration-500 ${
        isOpen ? "translate-x-0 w-64 lg:!ml-0" : "-translate-x-full w-16"
      }`}
      style={{
        background: "linear-gradient(to bottom, #5a217a, #2c0a47)",
      }}
    >
      <div className={`${isOpen ? "py-4" : ""}`}>
        <div
          style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
          className="flex items-center pb-5 mt-[6px]"
        >
          <Menu
            onClick={onToggleSidebar}
            className={`text-purple-500 mr-3 cursor-pointer w-6 h-6 ml-4 ${
              isOpen ? "lg:ml-5 lg:mr-3" : "lg:ml-[18px] lg:mr-0 mt-4 mb-1"
            }`}
          />
          <h1
            className={`text-gray-100 text-[18px] ${!isOpen ? "hidden" : ""}`}
          >
            Mountain Email Finder
          </h1>
        </div>

        <ul className="mt-4 space-y-4">
          {menuItems.map(({ icon: Icon, label, path }, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveItem(label);
                navigate(path);
              }}
              className={`relative flex items-center justify-between p-2.5 text-sm cursor-pointer ${
                activeItem === label
                  ? "text-white bg-purple-900"
                  : "text-gray-200 hover:bg-purple-900"
              }`}
            >
              {activeItem === label && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-r-md"></div>
              )}
              <div
                className={`flex items-center space-x-4 pl-4 ${
                  isOpen ? "lg:pl-4" : "lg:pl-2.5"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    activeItem === label ? "text-white" : "text-gray-200"
                  }`}
                />
                {isOpen && <span className="text-base">{label}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
