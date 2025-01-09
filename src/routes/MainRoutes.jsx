import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPages/Login/Login";
import Signup from "../pages/LoginPages/Signup/Signup";
import ForgotPass from "../pages/LoginPages/ForgotPass/ForgotPass";
import UserDashboard from "../pages/AdminPages/Dashboard/Dashboard";
import EmailVerification from "../pages/AdminPages/EmailVerification/EmailVerification";
import DashboardLayout from "./DashboardLayout";
import TasksPage from "../pages/AdminPages/Tasks/tasks";
import SingleTaskPage from "../pages/AdminPages/SingleTask/SingleTask";
import CreditsHistory from "../pages/AdminPages/CreditsHistory/CreditsHistory";
import Settings from "../pages/AdminPages/Settings/Settings";
import BuyCredits from "../pages/AdminPages/BuyCredits/BuyCredits";

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
          <Route
            path="/tasks"
            element={<TasksPage />
            }
          />
          <Route
            path="/task-single"
            element={<SingleTaskPage />
            }
          />
          <Route
            path="/creditshistory"
            element={<CreditsHistory />
            }
          />
          <Route
            path="/settings"
            element={<Settings />
            }
          />
          <Route
            path="/buycredits"
            element={<BuyCredits />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};


export default MainRoutes;
