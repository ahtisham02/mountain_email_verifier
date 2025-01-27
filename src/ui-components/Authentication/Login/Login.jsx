import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../auth/authSlice";
import apiRequest from "../../../utils/apiRequest";
import loaderGif from "../../../assets/loader1.gif";
import gimg from "../../../assets/gimg.jpeg";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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

  const handleGoogleLogin = () => {
    const clientId = "1047481348543-flpdfk65g3p6r0c9nfuul17ku28ld5pi.apps.googleusercontent.com";
    const redirectUri = "http://localhost:3000/";
    const scope = "profile email";
    const responseType = "code";
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
    
    window.location.href = googleAuthUrl;
  };

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
        const response = await apiRequest(
          "post",
          isLogin ? "/api/login" : "/api/signup",
          values
        );
        if (response.data.status === "success") {
          toast.success(response.data.message);
          if (isLogin) {
            dispatch(setUserInfo(response.data));
            navigate("/");
          } else {
            setIsLogin(true);
            formik.resetForm();
          }
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Something went wrong. Please try again."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex items-center min-h-screen p-5 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-[460px] mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto">
          <div className="flex items-center justify-center p-6 sm:px-12 sm:py-8 w-full">
            <div className="w-full">
              <h1 className="mb-1 text-3xl font-semibold text-gray-700 dark:text-gray-200 text-center">
                {isLogin ? "Welcome Back!" : "Create Account"}
              </h1>

              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 text-center">
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

              <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-[#f4f4f4] transition-colors duration-150 border border-gray-600 rounded-lg active:bg-transparent hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:shadow-outline-gray">
                <img alt="img" src={gimg} className="mr-1 h-[20px] w-10" />
                Log in with Google
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
                  <span className="text-gray-700 dark:text-gray-400">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className={`block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray border-[1.5px] border-gray-300 rounded-md p-2 ${
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
                  <span className="text-gray-700 dark:text-gray-400">
                    Password
                  </span>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    className={`block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray border-[1.5px] border-gray-300 rounded-md p-2 ${
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
                        ? "top-[41%]"
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
                    <span className="text-gray-700 dark:text-gray-400">
                      Confirm Password
                    </span>
                    <input
                      type="password"
                      name="password_confirmation"
                      className={`block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray border-[1.5px] border-gray-300 rounded-md p-2 ${
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
                      className="text-sm cursor-pointer font-medium text-purple-600 dark:text-purple-400 hover:underline"
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
                      className="mx-auto h-14 w-[74px] -mt-[18px]"
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
