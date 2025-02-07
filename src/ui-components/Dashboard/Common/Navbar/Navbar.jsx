import React, { useState, useEffect, useRef } from "react";
import {
  LogOut,
  User,
  ChevronDown,
  Zap,
  CircleUser,
  AlignLeft,
  Activity,
  Info,
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
  const [isOpens, setIsOpens] = useState(false);
  const dropdownRef = useRef(null);
  const dropdown2Ref = useRef(null);
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

  const toggleDropdown2 = () => {
    setIsOpens(!isOpens);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
        setIsOpens(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 flex items-center justify-between z-50 min-[400px]:px-8 px-1.5 py-4 shadow-sm bg-[#e8fedf] lg:bg-white ${isOpen ? "lg:left-60 left-0" : "left-0 lg:left-16"
        }`}
    >
      <div className="flex items-center space-x-4">
        <AlignLeft
          onClick={onToggleSidebar}
          className={`lg:text-[#359F6F] text-black cursor-pointer ${isOpen ? "lg:hidden" : "block"
            } min-[450px]:-ml-4 mr-4 w-7 h-7`}
        />
        <button
          onClick={() => {
            navigate("/buycredits");
          }}
          className="w-[145px] md:flex items-center justify-center z-40 hidden bg-black text-white py-[7.5px] rounded-2xl"
        >
          <Zap strokeWidth={2.5} className="text-white w-4 h-4 mr-2" />
          <span className="-mt-[2px] font-medium">Buy Credits</span>
        </button>
      </div>

      <div className="items-center justify-end inline-block absolute z-10 min-[510px]:right-[180px] min-[450px]:right-[138px] right-[98px] sm:px-2 px-1 py-[5px]">
        <div
          onClick={toggleDropdown2}
          className={`flex items-center hover:text-[#6358DE] ${isOpens ? "!text-[#6358DE] !bg-[#dbd9f7]" : ""} cursor-pointer hover:bg-[#efeefc] text-sm text-black rounded-2xl px-3 py-3 min-[510px]:py-2 mr-2`}
        >
          <Activity strokeWidth={3} className="sm:w-4 sm:h-4 w-3 h-3 mr-1" />
          <span className="font-semibold min-[510px]:block hidden text-[16px]">Credits and usage</span>
        </div>
        {isOpens && (
          <div ref={dropdown2Ref} className="absolute top-12 min-[650px]:right-[20px] min-[570px]:-right-[115px] min-[500px]:-right-[100px] -right-[90px] min-[570px]:w-[430px] min-[410px]:w-[380px] w-[290px] bg-white shadow-md rounded-2xl border-[1px] border-gray-200 px-5 py-4">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">Credits usage and plan</h3>
              <button
                onClick={toggleDropdown2}
                className="text-gray-500 hover:text-black"
              >
                ✖
              </button>
            </div>

            <div className="mt-3">
              <h4 className="font-semibold mb-4">Free plan</h4>
              <p className="text-sm text-gray-700">
                {Math.ceil(
                  Profile?.credits?.credits ? Profile?.credits?.credits : ""
                )}{" "}
                credits left until{" "}
                {Profile?.active_subscription?.date
                  ? new Date(
                    new Date(Profile.active_subscription.date).setMonth(
                      new Date(Profile.active_subscription.date).getMonth() +
                      1
                    )
                  )
                    .toISOString()
                    .split("T")[0]
                  : ""}
              </p>
              <span
                onClick={() => {
                  navigate("/buycredits");
                  toggleDropdown2();
                }}
                className="cursor-pointer text-black text-sm font-medium hover:text-[#6358DE] underline"
              >
                Manage your plan and credits
              </span>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-3">Emails prepaid credits</h4>
              <p className="text-sm text-gray-700">0 credits left</p>
              <span
                onClick={() => {
                  navigate("/buycredits");
                  toggleDropdown2();
                }}
                className="text-black cursor-pointer text-sm font-medium hover:text-[#6358DE] underline"
              >
                Get more credits
              </span>
            </div>

            <div className="mt-4 p-3 bg-[#EFEEFC] rounded-xl flex items-start">
              <Info className="w-12 h-12 fill-[#6358DE] text-white mr-2 -mt-3" />
              <p className="text-[14px] font-medium text-gray-800">
                Go to Automations, Transactional or Deals to see your plan and
                credit usage for these features.
              </p>
            </div>
          </div>
        )}
      </div>

      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="sm:w-8 sm:h-8 w-7 h-7 bg-[#d7fec8] lg:bg-[#EFF6FF] rounded-full flex items-center justify-center">
          <CircleUser className="lg:text-[#7E69E1] text-black text-sm" />
        </div>
        <span className="sm:ml-3 min-[450px]:flex hidden ml-1.5 sm:text-base text-sm font-medium items-center">
          {Fname
            ? Fname.length > 10
              ? `${Fname.slice(0, 7)}...`
              : Fname
            : Name
              ? Name.length > 10
                ? `${Name.slice(0, 7)}...`
                : Name
              : "Unknown"}
          <ChevronDown className="ml-2 w-4 h-4 text-gray-600" />
        </span>
        <span className="sm:ml-3 min-[450px]:ml-2 ml-0.5 sm:text-base text-sm font-medium min-[450px]:hidden flex items-center">
          {Name
            ? Name.replace(/\s/g, "").slice(0, 2)
            : `${Fname ? Fname.charAt(0) : "U"}${Lname ? Lname.charAt(0) : "N"
            }`}
          <ChevronDown className="sm:ml-2 ml-0.5 w-4 h-4 text-gray-600" />
        </span>

        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-3 lg:right-5 top-14 w-52 bg-white border rounded-lg shadow-md px-2 py-2 space-y-1"
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
              <User strokeWidth={2.5} className="text-gray-600 w-[18px] h-[18px] mr-1" />
              <button
                onClick={handlenavigate}
                className="text-sm text-gray-800 font-medium"
              >
                My Profile
              </button>
            </div>
            <div
              onClick={handleLogout}
              className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <LogOut strokeWidth={2.5} className="text-gray-600 w-[18px] h-[18px] mr-1" />
              <button className="text-sm font-medium text-gray-800">Log out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
