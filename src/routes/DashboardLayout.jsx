import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../ui-components/Dashboard/Common/Navbar/Navbar";
import Sidebar from "../ui-components/Dashboard/Common/Sidebar/sidebar";
import Footer from "../ui-components/Dashboard/Common/Footer/Footer";
import SuccessModal from "../ui-components/Dashboard/Common/Alert/AlertModal";
import { Hourglass } from "react-loader-spinner";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen text-black font-plus-jakarta">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-60" : "ml-0"
        } w-full lg:ml-16`}
      >
        <DashboardNavbar
          isOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <main className="flex-grow flex">
          {loading ? (
            <div className="flex flex-col justify-center items-center h-screen pt-16">
              <Hourglass height="80" width="80" colors={["#0b996e", "#5abe7f"]} />
              <p className="mt-4 text-gray-600 text-lg">Loading Blog, please wait...</p>
            </div>
          ) : (
            <div className="pt-16">
              <SuccessModal />
              <Outlet />
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
