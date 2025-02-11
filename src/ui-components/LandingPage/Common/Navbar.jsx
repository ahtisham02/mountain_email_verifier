import { AlignRight, ChevronDown, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathMap = {
      "/Home": "Home",
      "/Products": "Products",
      "/Articles": "Articles",
      "/Blog": "Blog",
      "/Contact": "Contact",
      "/User-Logins": "UserLogins",
    };
    setActiveItem(pathMap[location.pathname] || "Main");
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (label) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    if (label === "Products" || label === "UserLogins") {
      setDropdownOpen(label);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(null);
    }, 500);
    setDropdownTimeout(timeout);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#d7fec8] border-gray-200">
      <div
        className={`flex flex-wrap ${
          isOpen ? "pb-4" : "md:pb-0"
        } md:pb-0 items-center md:pr-4 justify-between mx-auto min-[1090px]:px-10 min-[1090px]:py-5`}
      >
        <div className="flex items-center space-x-2 min-[1090px]:space-x-0 p-4 min-[1090px]:p-0 -ml-2">
          <button className="flex items-center justify-center min-[1090px]:ml-4 text-[#0b996e] font-bold text-3xl">
            Mountain
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            className="absolute right-0 transform -translate-x-1/2 inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-black rounded-lg min-[1090px]:hidden hover:text-black focus:outline-none"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="text-[#359F6F] cursor-pointer w-12 h-12" />
            ) : (
              <AlignRight className="text-[#359F6F] cursor-pointer w-12 h-12" />
            )}
          </button>
        </div>
        <div className="mr-16 min-[1090px]:mr-0">
          <div className="flex items-center text-[14.5px] justify-end space-x-4 min-[1090px]:space-x-0.5 min-[1090px]:-mb-1">
            <button className="hidden md:flex md:items-center px-1 py-1.5 min-[1090px]:mb-1 rounded text-[#006a43]">
              <h1 className="font-semibold underline px-3">
                My Account Dashboard
              </h1>
            </button>
            <button className="hidden md:flex md:items-center text-[#006a43] border-2 border-[#006a43] rounded-xl shadow-md px-1 py-1.5 min-[1090px]:mb-1">
              <h1 className="font-medium px-3">Contact Us</h1>
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full min-[1090px]:flex min-[1090px]:justify-center min-[1090px]:items-center min-[1090px]:order-1 max-[1640px]:mr-0`}
          id="navbar-cta"
        >
          <hr className="my-1 min-[1090px]:my-0 bg-black" />
          <ul className="flex flex-col py-2 min-[1090px]:p-0 text-black bg-[#d7fec8] rounded-lg min-[1090px]:flex-row min-[1090px]:space-x-11 min-[1090px]:-ml-52 min-[1090px]:-mt-[30px] min-[1090px]:pb-2">
            {["Home", "Products", "Articles", "Blog", "Contact", "UserLogins"].map(
              (label, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => navigate("/" + label)}
                    className={`relative group flex items-center justify-between w-full px-3 py-2 min-[1090px]:p-0 transition duration-300 ease-in-out ${
                      activeItem === label
                        ? "text-[#0b996e]"
                        : "hover:text-[#0b996e]"
                    }`}
                    aria-current="page"
                  >
                    <span className="relative font-semibold flex items-center">
                      {label}
                      {["Products", "UserLogins"].includes(label) && (
                        <ChevronDown className="ml-1 mt-1 w-4 h-4" />
                      )}
                      <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#0b996e] rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  {dropdownOpen === label && (
                    <ul className="absolute left-0 mt-2 w-48 font-medium bg-white shadow-lg rounded-lg z-10">
                      {label === "Products" && (
                        <>
                          <li
                            className="hover:bg-[#d7fec8] hover:text-[#006a43] px-4 py-2 cursor-pointer"
                            onClick={() => navigate("/Product1")}
                          >
                            Product 1
                          </li>
                          <li
                            className="hover:bg-[#d7fec8] hover:text-[#006a43] px-4 py-2 cursor-pointer"
                            onClick={() => navigate("/Product2")}
                          >
                            Product 2
                          </li>
                          <li
                            className="hover:bg-[#d7fec8] hover:text-[#006a43] px-4 py-2 cursor-pointer"
                            onClick={() => navigate("/Product3")}
                          >
                            Product 3
                          </li>
                        </>
                      )}
                      {label === "UserLogins" && (
                        <>
                          <li
                            className="hover:bg-[#d7fec8] hover:text-[#006a43] px-4 py-2 cursor-pointer"
                            onClick={() => navigate("/Login")}
                          >
                            Login
                          </li>
                          <li
                            className="hover:bg-[#d7fec8] hover:text-[#006a43] px-4 py-2 cursor-pointer"
                            onClick={() => navigate("/Signup")}
                          >
                            Sign Up
                          </li>
                          <li
                            className="hover:bg-[#d7fec8] hover:text-[#006a43] px-4 py-2 cursor-pointer"
                            onClick={() => navigate("/ForgotPassword")}
                          >
                            Forgot Password
                          </li>
                        </>
                      )}
                    </ul>
                  )}
                  <hr className="mt-1 min-[1090px]:my-0 bg-black min-[1090px]:hidden" />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
