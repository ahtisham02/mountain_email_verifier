import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  Clock,
  Settings,
  LogOut,
  User,
  ZapIcon,
  ChevronDown,
} from "lucide-react";
import img from "../../../../assets/img/American_Express.webp";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onToggleSidebar, isOpen }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handlenavigate = () => {
    navigate("/settings");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 flex items-center justify-between min-[400px]:px-8 px-1.5 py-4 shadow-md bg-white ${
        isOpen ? "lg:left-64 left-0" : "left-0 lg:left-16"
      }`}
    >
      <div className="flex items-center space-x-4">
        <Menu
          onClick={onToggleSidebar}
          className="text-purple-500 cursor-pointer w-7 h-7 sm:w-8 sm:h-8 lg:hidden"
        />

        <div className="flex items-center sm:px-2 px-1 py-[5px] w-full min-[450px]:!ml-2 !ml-0.5 sm:!ml-12 lg:!ml-0">
          <div className="flex items-center text-sm bg-[#EFF6FF] rounded-full sm:px-4 px-2 sm:py-1 py-0.5 mr-2">
            <ZapIcon className="text-[#7E69E1] sm:w-4 sm:h-4 w-3 h-3 mr-1" />
            <span className="text-[#7E69E1] font-medium text-sm">Credits: 0</span>
          </div>
          <div className="flex items-center text-sm bg-[#FAF5FF] rounded-full sm:px-4 px-2 sm:py-1 py-0.5">
            <Clock className="text-[#AE33EA] sm:w-4 sm:h-4 w-3 h-3 mr-1" />
            <span className="text-[#AE33EA] font-medium text-sm">Usage: 0</span>
          </div>
        </div>
      </div>
      <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
        <img
          src={img}
          alt="Profile"
          className="sm:w-8 sm:h-8 w-7 h-7 rounded-full"
        />
        <span className="sm:ml-3 min-[450px]:flex hidden ml-2 sm:text-base text-sm font-medium items-center">
          AhtishamM
          <ChevronDown className="ml-2 w-4 h-4 text-gray-600" />
        </span>
        <span className="sm:ml-3 min-[450px]:ml-2 ml-0.5 sm:text-base text-sm font-medium min-[450px]:hidden flex items-center">
          AM
          <ChevronDown className="sm:ml-2 ml-0.5 w-4 h-4 text-gray-600" />
        </span>
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-3 lg:right-5 top-14 w-52 bg-white border rounded-lg shadow-lg px-4 py-2 space-y-1"
          >
            <div className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
              <User className="text-gray-600 w-4 h-4 mr-1" />
              <button
                onClick={handlenavigate}
                className="text-sm text-gray-800"
              >
                Profile
              </button>
            </div>
            <div
              onClick={handleLogout}
              className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <LogOut className="text-gray-600 w-4 h-4 mr-1" />
              <button className="text-sm text-gray-800">Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
