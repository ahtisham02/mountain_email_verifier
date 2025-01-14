import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  PieChart,
  Menu,
  MailCheck,
  IdCard,
  UserRoundPen,
  Zap,
  Award,
  ScrollText,
  CodeXml,
} from "lucide-react";

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = useMemo(
    () => [
      { icon: Home, label: "Dashboard", path: "/" },
      { icon: MailCheck, label: "Email Verification", path: "/emailverification" },
      { icon: IdCard, label: "Task & Results", path: "/tasks" },
      { icon: CodeXml, label: "API & Integerations", path: "/apisettings" },
      { icon: PieChart, label: "Credits History", path: "/creditshistory" },
      { icon: Zap, label: "Buy Credits", path: "/buycredits" },
      { icon: UserRoundPen, label: "My Profile", path: "/settings" },
      { icon: Award, label: "Affiliate Program", path: "/affiliate" },
      { icon: ScrollText, label: "FAQ", path: "/faqs" },
    ],
    []
  );
  
  useEffect(() => {
    const currentPath = location.pathname;
    const activeMenuItem = menuItems.find((item) => item.path === currentPath);
    if (activeMenuItem) {
      setActiveItem(activeMenuItem.label);
    }
  }, [location.pathname, menuItems]);

  return (
    <div
      className={`fixed top-0 left-0 h-screen shadow-md lg:ml-16 z-20 transition-all duration-500 ${
        isOpen ? "translate-x-0 w-64 lg:!ml-0" : "-translate-x-full w-16"
      }`}
      style={{
        background: "linear-gradient(to bottom, #1e3a8a, #0f172a)",
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
            className={`text-blue-500 mr-3 cursor-pointer w-6 h-6 ml-4 ${
              isOpen ? "lg:ml-5 lg:mr-3" : "lg:ml-[18px] lg:mr-0 mt-4 mb-1"
            }`}
          />
          <h1
            className={`text-gray-100 text-[18px] ${!isOpen ? "hidden" : ""}`}
          >
            Mountain Email Finder
          </h1>
        </div>

        <ul className="mt-4 space-y-4 overflow-y-auto max-h-[calc(100vh-80px)] scrollbar-hide pb-10 sm:pb-7">
          {menuItems.map(({ icon: Icon, label, path }, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveItem(label);
                navigate(path);
              }}
              className={`relative flex items-center justify-between p-2.5 text-sm cursor-pointer ${
                activeItem === label
                  ? "text-white bg-blue-900"
                  : "text-gray-200 hover:bg-blue-900"
              }`}
            >
              {activeItem === label && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-md"></div>
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
