import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  PieChart,
  MailCheck,
  IdCard,
  UserRoundPen,
  Zap,
  Award,
  ScrollText,
  CodeXml,
  AlignRight,
} from "lucide-react";
import { MdOutlineVpnKey } from "react-icons/md";

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = useMemo(
    () => [
      { icon: Home, label: "Dashboard", path: "/home" },
      {
        icon: MailCheck,
        label: "Email Verification",
        path: "/emailverification",
      },
      { icon: IdCard, label: "Task & Results", path: "/tasks" },
      { icon: CodeXml, label: "API & Integerations", path: "/apisettings" },
      { icon: MdOutlineVpnKey, label: "Api Keys", path: "/api" },
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
      className={`fixed border-r-2 border-b-2 border-[#d8efe8] rounded-br-3xl top-0 bg-[#f9fff6] left-0 h-[99.9vh] lg:ml-16 z-20 transition-all duration-500 ${
        isOpen ? "translate-x-0 w-60 lg:!ml-0" : "-translate-x-full w-16"
      }`}
    >
      <div className="flex items-center justify-between px-4 mt-[18px] mb-6">
        <h1
          className={`text-[#0b996f] font-bold text-3xl ${
            !isOpen ? "hidden" : ""
          }`}
        >
          Mountain
        </h1>
        <h1
          className={`text-white bg-[#359F6F] -ml-[2.5px] mb-3 px-2 py-[3px] rounded-full font-semibold text-2xl ${
            !isOpen ? "block" : "hidden"
          }`}
        >
          M
        </h1>
        <AlignRight
          onClick={onToggleSidebar}
          className={`text-[#359F6F] cursor-pointer w-7 h-7 ${
            !isOpen ? "hidden" : ""
          }`}
        />
      </div>

      <ul className="space-y-2 overflow-y-auto max-h-[calc(100vh-80px)] scrollbar-hide">
        {menuItems.map(({ icon: Icon, label, path }, index) => (
          <li
            key={index}
            onClick={() => {
              setActiveItem(label);
              navigate(path);
            }}
            className={`relative rounded-2xl mx-3 flex items-center justify-between py-3 text-black text-sm cursor-pointer ${
              activeItem === label
                ? "bg-[#d7fec8] font-semibold"
                : "hover:bg-[#e8fedf] font-medium"
            }`}
          >
            {activeItem === label && (
              <div className="absolute -right-3 top-[7px] bottom-0 w-[3.6px] h-8 bg-[#0B996F] rounded-l-md"></div>
            )}
            <div
              className={`flex items-center ml-3 lg:ml-0 space-x-3 ${
                isOpen ? "lg:pl-3" : "lg:pl-2.5"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  activeItem === label ? "text-black" : "text-black"
                }`}
              />
              {isOpen && <span className="text-base">{label}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
