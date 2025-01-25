import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Worm } from "lucide-react";
import img from "../../../assets/img/bg.svg";
import { useDispatch } from "react-redux";
import apiRequest from "../../../utils/apiRequest";
import { setUserInfo } from "../../../auth/authSlice";
import { toast } from "react-toastify";
import gimg from "../../../assets/gimg.jpeg";
import loaderGif from "../../../assets/loader1.gif";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await apiRequest("post", "/api/login", values);
        if (response.data.status === "success") {
          dispatch(setUserInfo(response.data));
          toast.success(response.data.message);
          navigate("/");
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
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="flex flex-col justify-center items-start py-5 md:w-1/2 bg-gray-50">
            <div className="flex items-center space-x-2 ml-6">
              <div className="flex items-center justify-center bg-purple-600 rounded-full p-2">
                <Worm size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Mountain Email Verifier
              </h1>
            </div>
            <p className="my-3 text-md px-8 text-gray-700 dark:text-gray-400">
              The most precise email verification service that filters out
              invalid, temporary, and unsafe email addresses.
            </p>
            <img
              aria-hidden="true"
              className="object-contain w-full h-auto mt-4 dark:hidden"
              src={img}
              alt="Office"
            />
            <p className="text-sm -mt-4 pl-8 text-gray-700 dark:text-gray-400">
              Trusted by thousands of professionals for its precision, this
              easy-to-use tool ensures your emails connect with real people,
              boosting the success of your email campaigns.
            </p>
          </div>

          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
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
                    <span className="text-red-500 text-sm">
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
                    className={`absolute right-3 text-gray-800 ${formik.touched.password && formik.errors.password ? "top-[52%]" : "top-[70%]"}  transform -translate-y-1/2 cursor-pointer`}
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                  {formik.touched.password && formik.errors.password && (
                    <span className="text-red-500 text-sm">
                      {formik.errors.password}
                    </span>
                  )}
                </label>

                <div className="flex justify-between items-center mt-2.5">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-400">
                      Remember me
                    </span>
                  </div>
                  <span
                    className="text-sm cursor-pointer font-medium text-purple-600 dark:text-purple-400 hover:underline"
                    onClick={() => navigate("/forgotpassword")}
                  >
                    Forgot password?
                  </span>
                </div>

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
                  ) : (
                    "Log in"
                  )}
                </button>
              </form>

              <hr className="my-8" />

              <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-[#f4f4f4] transition-colors duration-150 border border-gray-600 rounded-lg active:bg-transparent hover:border-gray-500 focus:border-gray-500 focus:outline-none focus:shadow-outline-gray">
                <img alt="img" src={gimg} className="mr-1 h-[22px] w-10" />
                Log in with Google
              </button>

              <p className="mt-4 text-center text-sm">
                Not registered?{" "}
                <span
                  className="font-medium cursor-pointer text-purple-600 dark:text-purple-400 hover:underline"
                  onClick={() => navigate("/signup")}
                >
                  Create account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
