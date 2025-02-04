import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  Clock,
  LogOut,
  User,
  ZapIcon,
  ChevronDown,
  Zap,
  CircleUser,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { removeUserInfo } from "../../../../auth/authSlice";
import { setProfile } from "../../../../auth/profileSlice";
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
  const Name = useSelector((state) => state?.auth?.userInfo?.name);
  const Lname = useSelector((state) => state?.auth?.userInfo?.last_name);
  const Profile = useSelector((state) => state.profile.profile);

  useEffect(() => {
    const fetchProfile = async () => {
      dispatch(setProfile());
      try {
        const response = await apiRequest("get", "/api/profile", {}, token);
        if (response.data.status === "success") {
          dispatch(setProfile(response.data.data));
        } else {
          console.error("API Error:", response.data.message);
          dispatch(removeUserInfo());
          navigate("/auth");
        }
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
        dispatch(removeUserInfo());
        navigate("/auth");
      }
    };

    fetchProfile();
  }, [dispatch, navigate, token]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      const parsedToken = token.replace(/^"|"$/g, "");
      const response = await apiRequest("post", "/api/logout", {}, parsedToken);

      if (response.data.status === "success") {
        dispatch(removeUserInfo());
        toast.success(response.data.message);
        navigate("/auth");
      }
    } catch (error) {
      dispatch(removeUserInfo());
      navigate("/auth");
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
      className={`fixed top-0 right-0 flex items-center justify-between z-50 min-[400px]:px-8 px-1.5 py-4 shadow-md bg-white ${
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
              Credits: {Math.ceil(Profile?.credits?.credits)}
            </span>
          </div>
          <div className="flex items-center text-sm bg-[#FAF5FF] rounded-full sm:px-4 px-2 sm:py-1 py-0.5">
            <Clock className="text-[#AE33EA] sm:w-4 sm:h-4 w-3 h-3 mr-1" />
            <span className="text-[#AE33EA] font-medium text-sm">Usage: 0</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/buycredits");
        }}
        className="w-[132px] md:flex items-center justify-center absolute right-48 hidden bg-btnBackground text-white py-1.5 rounded-lg hover:bg-btnBackgroundhover transition duration-200"
      >
        <Zap className="text-white w-4 h-4 mr-2" />
        <span>Buy Credits</span>
      </button>

      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="sm:w-8 sm:h-8 w-7 h-7 bg-[#EFF6FF] rounded-full flex items-center justify-center">
          <CircleUser className="text-[#7E69E1] text-sm" />
        </div>
        <span className="sm:ml-3 min-[450px]:flex hidden ml-2 sm:text-base text-sm font-medium items-center">
          {Fname
            ? Fname.length > 10
              ? `${Fname.slice(0, 8)}...`
              : Fname
            : Name
            ? Name.length > 10
              ? `${Name.slice(0, 8)}...`
              : Name
            : "Unknown"}
          <ChevronDown className="ml-2 w-4 h-4 text-gray-600" />
        </span>
        <span className="sm:ml-3 min-[450px]:ml-2 ml-0.5 sm:text-base text-sm font-medium min-[450px]:hidden flex items-center">
          {Name
            ? Name.replace(/\s/g, "").slice(0, 2)
            : `${Fname ? Fname.charAt(0) : "U"}${
                Lname ? Lname.charAt(0) : "N"
              }`}
          <ChevronDown className="sm:ml-2 ml-0.5 w-4 h-4 text-gray-600" />
        </span>

        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-3 lg:right-5 top-14 w-52 bg-white border rounded-lg shadow-lg px-4 py-2 space-y-1"
          >
            <div
              onClick={() => {
                navigate("/buycredits");
              }}
              className="flex items-center md:hidden space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
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
