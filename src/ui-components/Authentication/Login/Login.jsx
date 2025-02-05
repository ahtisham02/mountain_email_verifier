import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../auth/authSlice";
import apiRequest from "../../../utils/apiRequest";
import loaderGif from "../../../assets/loadernew1.gif";
import gimg from "../../../assets/gimg.jpeg";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const { access_token } = codeResponse;

      try {
        const response = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
              Accept: "application/json",
            },
          }
        );

        const profileData = response.data;

        const values = {
          name: profileData.name,
          email: profileData.email,
        };

        setLoadings(true);
        try {
          const authResponse = await apiRequest(
            "post",
            "/api/google/auth",
            values
          );
          if (authResponse.data.status === "success") {
            toast.success(authResponse.data.message);
            dispatch(setUserInfo(authResponse.data));
            navigate("/");
          } else {
            setIsLogin(true);
          }
        } catch (error) {
          console.log("Auth request error:", error);
        } finally {
          setLoadings(false);
        }
      } catch (error) {
        console.log("Profile fetch error:", error);
      }
    },
    onError: (error) => {
      console.log("Login Failed:", error);
    },
  });

  const toggleForm = (formType) => {
    setIsLogin(formType === "login");
    formik.resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    ...(isLogin
      ? {}
      : {
          password_confirmation: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        }),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        let name = "";
        if (!isLogin && values.email) {
          name = values.email.split("@")[0];
        }

        const formData = new FormData();
        Object.entries({ ...values, ...(isLogin ? {} : { name }) }).forEach(
          ([key, value]) => {
            formData.append(key, value);
          }
        );

        const response = await apiRequest(
          "post",
          isLogin ? "/api/login" : "/api/signup",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        if (response.data.status === "success") {
          if (isLogin) {
            toast.success(response.data.message);
            dispatch(setUserInfo(response.data));
            navigate("/");
          } else {
            navigate("/otp");
            localStorage.setItem("userEmail", response.data.data.email);
            localStorage.setItem("userPassword", values.password);
            formik.resetForm();
          }
        }
      } catch (error) {
        const errorData = error.response?.data || {};
        if (typeof errorData === "object") {
          const messages = Object.values(errorData).flat().join("\n");
          toast.error(messages);
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex items-center min-h-screen p-5 bg-gray-50">
      <div className="flex-1 h-full max-w-[460px] mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-col overflow-y-auto">
          <div className="flex items-center justify-center p-6 sm:px-12 sm:py-8 w-full">
            <div className="w-full">
              <h1 className="mb-1 text-3xl font-semibold text-gray-700 text-center">
                {isLogin ? "Welcome Back!" : "Create Account"}
              </h1>

              <p className="mb-4 text-sm text-gray-500 text-center">
                {isLogin
                  ? "Great to see you again"
                  : "Start your journey with us"}
              </p>
              <div className="flex justify-center mb-5 rounded-lg bg-gray-100 p-1">
                <button
                  className={`w-full h-9 text-[16px] font-semibold rounded-lg ${
                    isLogin
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => toggleForm("login")}
                >
                  Login
                </button>
                <button
                  className={`w-full h-9 text-[16px] font-semibold rounded-lg ${
                    !isLogin
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => toggleForm("signup")}
                >
                  Sign Up
                </button>
              </div>

              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center h-10 w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-[#f4f4f4] transition-colors duration-150 border border-gray-600 rounded-lg active:bg-transparent hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:shadow-outline-gray"
              >
                {!loadings ? (
                  <>
                    <img alt="img" src={gimg} className="mr-1 h-[20px] w-10" />
                    Log in with Google
                  </>
                ) : (
                  <img
                    src={loaderGif}
                    alt="Loading..."
                    className="mx-auto h-[64px] w-[80px]"
                  />
                )}
              </button>
              <div className="flex items-center mb-5 mt-6">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-4 text-center text-gray-600">
                  or continue with email
                </span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
              <form onSubmit={formik.handleSubmit}>
                <label className="block text-sm">
                  <span className="text-gray-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className={`block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple border-[1.5px] border-gray-300 rounded-md p-2 ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="text-red-500 text-xs">
                      {formik.errors.email}
                    </span>
                  )}
                </label>

                <label className="block mt-4 text-sm relative">
                  <span className="text-gray-700">
                    Password
                  </span>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    className={`block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple border-[1.5px] border-gray-300 rounded-md p-2 ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span
                    className={`absolute right-3 ${
                      formik.touched.password && formik.errors.password
                        ? "top-[40%]"
                        : "top-[50%]"
                    } transform top-[50%] text-gray-800 cursor-pointer`}
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                  {formik.touched.password && formik.errors.password && (
                    <span className="text-red-500 text-xs">
                      {formik.errors.password}
                    </span>
                  )}
                </label>

                {!isLogin && (
                  <label className="block mt-4 text-sm relative">
                    <span className="text-gray-700">
                      Confirm Password
                    </span>
                    <input
                      type="password"
                      name="password_confirmation"
                      className={`block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple border-[1.5px] border-gray-300 rounded-md p-2 ${
                        formik.touched.password_confirmation &&
                        formik.errors.password_confirmation
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Confirm Password"
                      value={formik.values.password_confirmation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.password_confirmation &&
                      formik.errors.password_confirmation && (
                        <span className="text-red-500 text-xs">
                          {formik.errors.password_confirmation}
                        </span>
                      )}
                  </label>
                )}
                {isLogin && (
                  <div className="flex justify-between items-center mt-2.5">
                    <span
                      className="text-sm cursor-pointer font-medium text-purple-600 hover:underline"
                      onClick={() => navigate("/forgotpassword")}
                    >
                      Forgot password?
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  className="block w-full h-10 px-4 py-2 mt-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#7E3AF2] border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  {loading ? (
                    <img
                      src={loaderGif}
                      alt="Loading..."
                      className="mx-auto h-[64px] w-[80px] -mt-[21px]"
                    />
                  ) : isLogin ? (
                    "Log in"
                  ) : (
                    "Create account"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
