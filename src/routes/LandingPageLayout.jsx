import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../ui-components/LandingPage/Common/Navbar";
import Footer from "../ui-components/LandingPage/Common/Footer";
import SLFooter from "../ui-components/LandingPage/Home/SLFooter";
import { useIntercom } from "react-use-intercom";
import { useSelector } from "react-redux";
import { Hourglass } from "react-loader-spinner";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const Fname = useSelector((state) => state?.auth?.userInfo?.first_name);
  const Name = useSelector((state) => state?.auth?.userInfo?.name);
  const email = useSelector((state) => state?.auth?.userInfo?.email);
  const id = useSelector((state) => state?.auth?.userInfo?.id);

  const { boot } = useIntercom();

  useEffect(() => {
    boot({
      ...(id && {
        user_id: id,
        name: Fname || Name,
        email: email,
        created_at: Math.floor(Date.now() / 1000),
      }),
    });
  }, [id, Fname, Name, email, boot]);

  useEffect(() => {
    if (location.pathname.includes("blog")) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location]);

  return (
    <div className="text-black font-plus-jakarta">
      <Navbar />
      <main>
        {loading ? (
          <div className="flex flex-col justify-center items-center h-screen pt-16">
            <Hourglass height="80" width="80" colors={["#0b996e", "#5abe7f"]} />
            <p className="mt-4 text-gray-600 text-lg">Loading Blog, please wait...</p>
          </div>
        ) : (
          <div className="pt-16">
            <Outlet />
          </div>
        )}
      </main>
      <SLFooter />
      <Footer />
    </div>
  );
};

export default Layout;
