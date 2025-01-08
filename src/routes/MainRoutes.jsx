import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPages/Login/Login";
import Signup from "../pages/LoginPages/Signup/Signup";
import ForgotPass from "../pages/LoginPages/ForgotPass/ForgotPass";
import UserDashboard from "../pages/AdminPages/Dashboard/Dashboard";
import EmailVerification from "../pages/AdminPages/EmailVerification/EmailVerification";
import DashboardLayout from "./DashboardLayout";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/forgotpassword"
            element={<ForgotPass />}
          />
        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route
            path="/"
            element={<UserDashboard />
            }
          />
          <Route
            path="/emailverification"
            element={<EmailVerification />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
