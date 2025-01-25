import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  Clock,
  LogOut,
  User,
  ZapIcon,
  ChevronDown,
  Zap,
} from "lucide-react";
import img from "../../../../assets/img/American_Express.webp";
import { useNavigate } from "react-router-dom";
import { removeUserInfo } from "../../../../auth/authSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import apiRequest from "../../../../utils/apiRequest";

export default function Navbar({ onToggleSidebar, isOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const token = useSelector((state) => state?.auth?.userToken);
  const Fname = useSelector((state) => state?.auth?.userInfo?.first_name);
  const Lname = useSelector((state) => state?.auth?.userInfo?.last_name);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      if (!token) {
        throw new Error("No token found");
      }
      const parsedToken = token.replace(/^"|"$/g, "");
      const response = await apiRequest("post", "/api/logout", {}, parsedToken);

      if (response.data.status === "success") {
        dispatch(removeUserInfo());
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again."
      );
      console.error("Error:", error);
    }
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

        <div className="flex items-center sm:px-2 px-1 py-[5px] w-full min-[450px]:!ml-2 !ml-0.5 sm:!ml-6 md:!ml-8 lg:!ml-0">
          <div className="flex items-center text-sm bg-[#EFF6FF] rounded-full sm:px-4 px-2 sm:py-1 py-0.5 mr-2">
            <ZapIcon className="text-[#7E69E1] sm:w-4 sm:h-4 w-3 h-3 mr-1" />
            <span className="text-[#7E69E1] font-medium text-sm">
              Credits: 0
            </span>
          </div>
          <div className="flex items-center text-sm bg-[#FAF5FF] rounded-full sm:px-4 px-2 sm:py-1 py-0.5">
            <Clock className="text-[#AE33EA] sm:w-4 sm:h-4 w-3 h-3 mr-1" />
            <span className="text-[#AE33EA] font-medium text-sm">Usage: 0</span>
          </div>
        </div>
      </div>
      <button onClick={()=>{navigate('/buycredits')}} className="w-[132px] md:flex items-center justify-center absolute right-56 hidden bg-btnBackground text-white py-1.5 rounded-lg hover:bg-btnBackgroundhover transition duration-200">
        <Zap className="text-white w-4 h-4 mr-2" />
        <span>Buy Credits</span>
      </button>

      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src={img}
          alt="Profile"
          className="sm:w-8 sm:h-8 w-7 h-7 rounded-full"
        />
        <span className="sm:ml-3 min-[450px]:flex hidden ml-2 sm:text-base text-sm font-medium items-center">
          {Fname ? Fname : "Unknown"} {Lname ? Lname : ""}
          <ChevronDown className="ml-2 w-4 h-4 text-gray-600" />
        </span>
        <span className="sm:ml-3 min-[450px]:ml-2 ml-0.5 sm:text-base text-sm font-medium min-[450px]:hidden flex items-center">
          {Fname ? Fname.charAt(0) : "U"}
          {Lname ? Lname.charAt(0) : "N"}
          <ChevronDown className="sm:ml-2 ml-0.5 w-4 h-4 text-gray-600" />
        </span>

        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-3 lg:right-5 top-14 w-52 bg-white border rounded-lg shadow-lg px-4 py-2 space-y-1"
          >
            <div onClick={()=>{navigate('/buycredits')}} className="flex items-center md:hidden space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
              <Zap className="text-gray-600 w-4 h-4 mr-1" />
              <button className="text-sm text-gray-800">Buy Credits</button>
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
