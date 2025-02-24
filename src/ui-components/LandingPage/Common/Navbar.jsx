import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AlignRight,
  ChevronDown,
  LayoutDashboard,
  Users2,
  X,
  BookOpen,
  GraduationCap,
  Calendar,
  Mail,
  Repeat,
  Briefcase,
  Store,
  ShoppingCart,
  Trophy,
  Users,
  Wrench,
  Handshake,
  Network,
  HelpCircle,
  Mailbox,
  FileText,
  Search,
  Server,
  Home,
  ShoppingBag,
  Code,
  ServerCog,
} from "lucide-react";
import { useSelector } from "react-redux";
import { FaMoneyBill1Wave } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const token = useSelector((state) => state?.auth?.userToken);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = useMemo(
    () => [
      {
        label: "Home",
        path: "/",
        icon: <Home className="size-5 transition-all" />,
      },
      {
        label: "Products",
        path: "/products",
        icon: <ShoppingBag className="size-5 transition-all" />,
      },
      {
        label: "Blog",
        path: "/blog",
        icon: <BookOpen className="size-5 transition-all" />,
      },
      {
        label: "AboutUs",
        path: "/aboutus",
        icon: <Users2 className="size-5 transition-all" />,
      },
      {
        label: "Contact",
        path: "/contact",
        icon: <Mail className="size-5 transition-all" />,
        hiddenOnSmall: true,
      },
      {
        label: "Pricing",
        path: "/pricing",
        icon: <FaMoneyBill1Wave className="size-5 transition-all" />,
      },
      {
        label: "Api",
        path: "/apis",
        icon: <Code className="size-5 transition-all" />,
      },
      {
        label: "Features",
        path: "/features",
        icon: <ServerCog className="size-5 transition-all" />,
      },
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboard className="size-5 transition-all" />,
        hiddenOnSmall: true,
      },
    ],
    []
  );

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    const matchedItem = navItems.find(
      (item) => item.path.toLowerCase() === currentPath
    );
    setActiveItem(matchedItem ? matchedItem.label : "");
  }, [location.pathname, navItems]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
    setDropdownTimeout(timeout);
  };

  return (
    <div className="relative z-50">
      <nav
        className={`fixed top-0 left-0 w-full ${
          !dropdownOpen ? "bg-[#d7fec8]" : "bg-white"
        } border-gray-200 `}
      >
        <div className="flex items-center justify-between px-10 py-4 mr-5 lg:mr-0">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="text-[#0b996e] z-[1050] font-bold text-3xl"
          >
            Mountain
          </button>
          <button
            onClick={toggleMenu}
            className="custom-lg:hidden absolute mr-5 right-0 z-[1050]"
          >
            {isOpen ? <X size={28} /> : <AlignRight size={28} />}
          </button>
          <ul className="hidden custom-lg:flex lg:space-x-8 text-black">
            {["Home", "Products", "Blog", "AboutUs", "Pricing", "Api", "Features"].map((label) => {
              const path =
                label === "Home"
                  ? "/"
                  : label === "Pricing"
                  ? "/pricing"
                  : label === "Api"
                  ? "/apis"
                  : label === "AboutUs"
                  ? "/aboutus"
                  : `/${label.toLowerCase()}`;

              return (
                <li
                  key={label}
                  className="relative group"
                  onMouseEnter={
                    label === "Products" ? handleMouseEnter : undefined
                  }
                  onMouseLeave={
                    label === "Products" ? handleMouseLeave : undefined
                  }
                >
                  <button
                    onClick={() => navigate(path)}
                    className={`relative group flex items-center justify-between w-full px-3 py-2 min-[1090px]:p-0 transition duration-300 ease-in-out ${
                      activeItem === label
                        ? "text-[#0b996e]"
                        : "hover:text-[#0b996e]"
                    }`}
                  >
                    <span className="font-semibold">{label}</span>
                    {label === "Products" && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform mt-1 duration-200 ${
                          dropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    )}
                    <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#0b996e] rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden sm:flex lg:space-x-4">
            <button
              onClick={() => navigate(token ? "/home" : "/auth")}
              className="hidden sm:flex sm:items-center px-1 py-1.5 min-[1090px]:mb-1 rounded text-[#006a43]"
            >
              <h1 className="font-semibold z-[1050] text-[15px] underline px-3">
                {token ? "My Account Dashboard" : "Login"}
              </h1>
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="hidden z-[1050] sm:flex sm:items-center text-[#006a43] border-2 border-[#006a43] rounded-xl shadow-md px-1 py-1.5 min-[1090px]:mb-1"
            >
              <h1 className="font-medium px-3">Contact Us</h1>
            </button>
          </div>
        </div>

        <div
          className={`custom-lg:hidden overflow-hidden fixed top-0 left-0 w-full bg-white rounded-b-3xl shadow-md transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[520px] opacity-100 pt-16" : "max-h-0 opacity-0"
          }`}
        >
          <hr className="mt-2 min-[1090px]:my-0 bg-black min-[1090px]:hidden" />
          <ul className="flex flex-col space-y-3 text-black px-4 py-4">
            {navItems.map(({ label, path, icon, hiddenOnSmall }) => (
              <li key={label} className={hiddenOnSmall ? "sm:hidden" : ""}>
                <button
                  onClick={() => {
                    navigate(path);
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-3 text-lg pl-6 py-2 transition-all hover:text-[#0b996e]"
                >
                  <span className="group-hover:text-[#0b996e]">{icon}</span>
                  <span>{label}</span>
                </button>
                <hr className="mt-1 min-[1090px]:my-0 bg-black min-[1090px]:hidden" />
              </li>
            ))}
          </ul>
        </div>
        {dropdownOpen && (
          <div className="absolute top-full left-0 w-full h-[100vh] bg-black opacity-45 transition-all duration-300 z-[900]"></div>
        )}
        {dropdownOpen && (
          <div
            className={`absolute top-full left-0 w-full bg-white border-t border-gray-200 rounded-b-[5.5rem] 
         transition-all duration-300 ease-in-out overflow-hidden z-[1000] ${
           dropdownOpen
             ? "h-auto opacity-100"
             : "h-0 opacity-0 pointer-events-none"
         }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-6xl mx-auto px-10 pt-6 pb-8 grid grid-cols-4 gap-6">
              <div>
                <h3 className="text-md font-semibold mb-2">Resource Center</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    { text: "Blog", icon: BookOpen },
                    { text: "Ebooks & Webinars", icon: GraduationCap },
                    { text: "Academy", icon: Calendar },
                    { text: "Events", icon: Mail },
                    { text: "Email marketing platforms", icon: Repeat },
                    { text: "Mailchimp alternatives", icon: Mail },
                  ].map(({ text, icon: Icon }, index) => (
                    <li
                      key={index}
                      className="group flex items-center space-x-2 cursor-pointer hover:text-[#0b996e]"
                    >
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-[#0b996e]" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-md font-semibold mb-2">Customers</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    { text: "Case Studies", icon: Briefcase },
                    { text: "Small Business", icon: Store },
                    { text: "Retail & eCommerce", icon: ShoppingCart },
                    { text: "Customer Success", icon: Trophy },
                  ].map(({ text, icon: Icon }, index) => (
                    <li
                      key={index}
                      className="group flex items-center space-x-2 cursor-pointer hover:text-[#0b996e]"
                    >
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-[#0b996e]" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-md font-semibold mb-2">Ecosystem</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    { text: "Community", icon: Users },
                    { text: "Product Updates", icon: Wrench },
                    { text: "Partner Programs", icon: Handshake },
                    { text: "Integrations", icon: Network },
                  ].map(({ text, icon: Icon }, index) => (
                    <li
                      key={index}
                      className="group flex items-center space-x-2 cursor-pointer hover:text-[#0b996e]"
                    >
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-[#0b996e]" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-md font-semibold mb-2">Support</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    { text: "Help Center", icon: HelpCircle },
                    { text: "Contact Us", icon: Mailbox },
                    { text: "API Docs", icon: FileText },
                    { text: "Hire an Expert", icon: Search },
                    { text: "Platform Status", icon: Server },
                  ].map(({ text, icon: Icon }, index) => (
                    <li
                      key={index}
                      className="group flex items-center space-x-2 cursor-pointer hover:text-[#0b996e]"
                    >
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-[#0b996e]" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
