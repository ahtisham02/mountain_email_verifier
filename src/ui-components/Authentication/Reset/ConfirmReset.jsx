import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import loaderGif from "../../../assets/loadernew1.gif";
import { toast } from "react-toastify";
import apiRequest from "../../../utils/apiRequest";
import { Worm } from "lucide-react";
import gimg1 from "../../../assets/login_en_md.webp";

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
    <div className="flex min-h-screen font-plus-jakarta">
      <div className="w-full lg:w-1/2 border-r-[1px] border-gray-200 h-screen overflow-y-auto flex flex-col items-center justify-center p-5">
        <div onClick={()=> {navigate('/auth')}} className="flex cursor-pointer items-center space-x-3 text-[#0b996f] font-bold text-2xl w-full">
          <div className="h-10 w-10 bg-[#0b996f] rounded-full flex items-center justify-center">
            <Worm className="h-6 w-6 text-white" />
          </div>
          <span>Mountain Email Finder</span>
        </div>
        <div className="flex h-full w-full mx-auto">
          <div className="flex w-full overflow-y-auto flex-row">
            <div className="flex items-center justify-center w-full p-4 sm:px-8 sm:pt-8 sm:pb-6">
              <div className="w-full max-w-lg lg:px-7">
                <h1 className="mb-4 text-xl font-semibold text-gray-700">
                  Reset Password
                </h1>
                <form onSubmit={formik.handleSubmit}>
                  <label className="block text-sm relative w-full">
                    <span className="text-gray-700">New Password</span>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="block w-full mt-1 text-sm border-[1.5px] border-gray-300 rounded-md p-2 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple"
                      placeholder="Enter new password"
                    />
                    <span
                      className="absolute right-3 top-[69%] transform -translate-y-1/2 text-gray-800 cursor-pointer"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                    {formik.touched.password && formik.errors.password && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.password}
                      </p>
                    )}
                  </label>
                  <label className="block text-sm relative w-full mt-4">
                    <span className="text-gray-700">Confirm Password</span>
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="block w-full mt-1 text-sm border-[1.5px] border-gray-300 rounded-md p-2 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple"
                      placeholder="Confirm new password"
                    />
                    <span
                      className="absolute right-3 top-[69%] transform -translate-y-1/2 text-gray-800 cursor-pointer"
                      onClick={() =>
                        setConfirmPasswordVisible(!confirmPasswordVisible)
                      }
                    >
                      {confirmPasswordVisible ? (
                        <FaRegEye />
                      ) : (
                        <FaRegEyeSlash />
                      )}
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
                    className="w-full mt-4 h-10 bg-black font-bold text-white p-3 rounded-2xl text-sm flex justify-center items-center"
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
        </div>
      </div>
      <div
        className="hidden lg:block lg:w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${gimg1})` }}
      ></div>
    </div>
  );
};

export default ConfirmReset;
