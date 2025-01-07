import React, { useState } from "react";
import {
  Home,
  Clipboard,
  BotIcon,
  PieChart,
  MousePointer,
  FileText,
  Table,
  Menu,
} from "lucide-react";

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div
      className={`fixed top-0 left-0 h-screen shadow-md lg:ml-16 z-20 transition-all duration-300 ${
        isOpen ? "translate-x-0 w-64 lg:!ml-0" : "-translate-x-full w-16"
      }`}
      style={{
        background: "linear-gradient(to bottom, #5a217a, #3a3a3a)",
      }}
    >
      <div className={`${isOpen ? "py-4" : ""}`}>
        <div className="flex items-center mb-8 mt-3">
          <Menu
            onClick={onToggleSidebar}
            className={`text-purple-500 mr-3 cursor-pointer w-6 h-6 ml-4 ${
              isOpen ? "lg:ml-3 lg:mr-3" : "lg:ml-4 lg:mr-0 mt-2"
            }`}
          />
          <h1
            className={`ml-1 text-gray-100 text-xl font-bold ${
              !isOpen ? "hidden" : ""
            }`}
          >
            Mountain<span className="text-xs"> EmailFinder</span>
          </h1>
        </div>

        <ul className="mt-4 space-y-4">
          {[
            { icon: Home, label: "Dashboard" },
            { icon: Clipboard, label: "Forms" },
            { icon: BotIcon, label: "Cards" },
            { icon: PieChart, label: "Charts" },
            { icon: MousePointer, label: "Buttons" },
            { icon: FileText, label: "Modals" },
            { icon: Table, label: "Tables" },
          ].map(({ icon: Icon, label }, index) => (
            <li
              key={index}
              onClick={() => setActiveItem(label)}
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
                  isOpen ? "lg:pl-4" : "lg:pl-2"
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
