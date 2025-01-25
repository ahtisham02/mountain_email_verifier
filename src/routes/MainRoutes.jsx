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
import ResultDetails from "../pages/AdminPages/ResultDetails/ResultDetails";
import Affiliate from "../pages/AdminPages/Affiliate/Affiliate";
import Faq from "../pages/AdminPages/Faq/Faq";
import ApiIntegeration from "../pages/AdminPages/ApiIntegeration/ApiIntegeration";
import PaymentForm from "../ui-components/Dashboard/BuyCredits/Payment";
import RouteMiddleware from "./RouteMIddleware";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <RouteMiddleware isAuthRequired={false}>
              <Login />
            </RouteMiddleware>
          }
        />
        <Route
          path="/signup"
          element={
            <RouteMiddleware isAuthRequired={false}>
              <Signup />
            </RouteMiddleware>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <RouteMiddleware isAuthRequired={false}>
              <ForgotPass />
            </RouteMiddleware>
          }
        />
        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route
            path="/"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <UserDashboard />
              </RouteMiddleware>
            }
          />
          <Route
            path="/emailverification"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <EmailVerification />
              </RouteMiddleware>
            }
          />
          <Route
            path="/tasks"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <TasksPage />
              </RouteMiddleware>
            }
          />
          <Route
            path="/task-single"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <SingleTaskPage />
              </RouteMiddleware>
            }
          />
          <Route
            path="/creditshistory"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <CreditsHistory />
              </RouteMiddleware>
            }
          />
          <Route
            path="/settings"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <Settings />
              </RouteMiddleware>
            }
          />
          <Route
            path="/buycredits"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <BuyCredits />
              </RouteMiddleware>
            }
          />
          <Route
            path="/result-details"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <ResultDetails />
              </RouteMiddleware>
            }
          />
          <Route
            path="/affiliate"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <Affiliate />
              </RouteMiddleware>
            }
          />
          <Route
            path="/faqs"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <Faq />
              </RouteMiddleware>
            }
          />
          <Route
            path="/apisettings"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <ApiIntegeration />
              </RouteMiddleware>
            }
          />
          <Route
            path="/payment"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <PaymentForm />
              </RouteMiddleware>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};
export default MainRoutes;
