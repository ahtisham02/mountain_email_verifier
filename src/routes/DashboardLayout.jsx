import React, { useState } from "react";
import DashboardNavbar from "../ui-components/Dashboard/Navbar/Navbar";
import Sidebar from "../ui-components/Dashboard/Sidebar/sidebar";
import Footer from "../ui-components/Dashboard/Footer/Footer";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : "ml-0"
        } w-full lg:ml-16 `}
      >
        <DashboardNavbar
          isOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <main className="flex-grow flex mt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
