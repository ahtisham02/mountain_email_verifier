import React, { useState, useEffect, useRef } from "react";
import { Menu, Search, Moon, Bell, Settings, LogOut, User } from "lucide-react";
import img from "../../../../assets/img/American_Express.webp";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onToggleSidebar, isOpen}) {
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    navigate('/login')
  };

  const handlenavigate = () => {
    // Implement navigation logic here
    console.log("Navigating to profile or settings");
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
    <div className={`fixed top-0 right-0 flex items-center justify-between px-8 py-4 shadow-md bg-white ${
        isOpen ? "lg:left-64 left-0" : "left-0 lg:left-16"
      }`}>
      <div className="flex items-center space-x-4">
        <Menu onClick={onToggleSidebar} className="text-purple-500 cursor-pointer w-8 h-8 lg:hidden" />

        <div className="flex items-center bg-gray-100 rounded-lg p-2 w-full !ml-12 lg:!ml-0">
          <Search className="text-purple-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search for projects"
            className="ml-2 bg-transparent outline-none w-full text-gray-600 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center space-x-7">
        <Moon className="text-purple-500 w-5 h-5 fill-current" />
        <div className="relative">
          <Bell className="text-purple-500 w-5 h-5 fill-current" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <img
          src={img}
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-3 lg:right-5 top-14 w-52 bg-white border rounded-lg shadow-lg px-4 py-2 space-y-1"
          >
            <div className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
              <Settings className="text-gray-600 w-4 h-4 mr-1" />
              <button
                onClick={handlenavigate}
                className="text-sm text-gray-800"
              >
                Settings
              </button>
            </div>
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
