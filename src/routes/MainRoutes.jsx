import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginPages/Login/Login";
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
import Api from "../pages/AdminPages/Api/ApiPAge";
import OtpPage from "../ui-components/Authentication/Otp/OtpPage";
import ConfirmReset from "../ui-components/Authentication/Reset/ConfirmReset";
import ConfirmationPage from "../ui-components/Authentication/Reset/Confirm";
import HomePage from "../pages/LandingPages/Home/Home";
import BlogPage from "../pages/LandingPages/Blog/Blog";
import ContactPage from "../pages/LandingPages/Contact/Contact";
import AboutPage from "../pages/LandingPages/About/About";
import Layout from "./LandingPageLayout";
import ScrollToTop from "../utils/ScrollToTop";

const MainRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Auth Routes */}
        <Route
          path="/auth"
          element={
            <RouteMiddleware isAuthRequired={false}>
              <Login />
            </RouteMiddleware>
          }
        />
        <Route
          path="/otp"
          element={
            <RouteMiddleware isAuthRequired={false}>
              <OtpPage />
            </RouteMiddleware>
          }
        />
        <Route
          path="/password/reset"
          element={
            <RouteMiddleware isAuthRequired={false}>
              <ConfirmReset />
            </RouteMiddleware>
          }
        />
        <Route
          path="/confirm"
          element={
            <RouteMiddleware isAuthRequired={false}>
              <ConfirmationPage />
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
            path="/home"
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
            path="/api"
            element={
              <RouteMiddleware isAuthRequired={true}>
                <Api />
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

        {/* Landing Page Routes */}
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <RouteMiddleware isAuthRequired={false}>
                <HomePage />
              </RouteMiddleware>
            }
          />
          <Route
            path="/blog"
            element={
              <RouteMiddleware isAuthRequired={false}>
                <BlogPage />
              </RouteMiddleware>
            }
          />
          <Route
            path="/contact"
            element={
              <RouteMiddleware isAuthRequired={false}>
                <ContactPage />
              </RouteMiddleware>
            }
          />
          <Route
            path="/aboutus"
            element={
              <RouteMiddleware isAuthRequired={false}>
                <AboutPage />
              </RouteMiddleware>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
