import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import loaderGif from "../../../assets/loadernew1.gif";
import { toast } from "react-toastify";
import apiRequest from "../../../utils/apiRequest";

const ConfirmReset = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        formData.append("password", values.password);
        formData.append("token", token);
        formData.append("email", email);
        formData.append("password_confirmation", values.password);
        const response = await apiRequest(
          "post",
          "/api/password/reset",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (response.data.status === "success") {
          toast.success(response.data.message);
          navigate("/auth");
        }
      } catch (error) {
        toast.error("Failed to reset password. Try again later.");
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="flex justify-center h-screen items-center bg-white">
      <div className="w-full pt-12 pb-10 px-10 max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="px-5 sm:px-8">
          <h1 className="text-lg md:text-xl lg:text-3xl font-semibold mb-5 text-center text-gray-800">
            Reset Password
          </h1>

          <form className="space-y-3" onSubmit={formik.handleSubmit}>
            <label className="block text-sm relative">
              <span className="text-gray-700">New Password</span>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple border-[1.5px] border-gray-300 rounded-md p-2"
                placeholder="Enter new password"
              />
              <span
                className="absolute right-3 top-[69%] transform -translate-y-1/2 text-gray-800 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs">{formik.errors.password}</p>
              )}
            </label>

            <label className="block text-sm relative">
              <span className="text-gray-700">Confirm Password</span>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple border-[1.5px] border-gray-300 rounded-md p-2"
                placeholder="Confirm new password"
              />
              <span
                className="absolute right-3 top-[69%] transform -translate-y-1/2 text-gray-800 cursor-pointer"
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                {confirmPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </label>

            <button
              type="submit"
              className="w-full mt-4 h-12 bg-purple-600 font-bold text-white p-3 rounded-lg text-sm flex justify-center items-center"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? (
                <img
                  src={loaderGif}
                  alt="Loading..."
                  className="mx-auto h-[64px] w-[80px] -mt-[1px]"
                />
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReset;
