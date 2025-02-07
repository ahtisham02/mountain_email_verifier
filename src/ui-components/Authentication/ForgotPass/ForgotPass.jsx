import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import loaderGif from "../../../assets/loadernew1.gif";
import { toast } from "react-toastify";
import apiRequest from "../../../utils/apiRequest";

export default function ForgotPass() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formData = new FormData();
        formData.append("email", values.email);

        const response = await apiRequest(
          "post",
          "/api/password/forgot",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        if (response.data.status === "success") {
          toast.success(response.data.message);
          navigate("/confirm");
        }
      } catch (error) {
        toast.error("Failed to send reset link. Try again later.");
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="flex items-center min-h-screen p-6">
      <div className="flex-1 h-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="flex items-center justify-center p-4 sm:px-8 sm:pt-8 sm:pb-6">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700">
                Reset Password
              </h1>
              <p className="mt-2 mb-5 text-sm text-gray-500">
                Lost your password? Enter your email below, and we will send you
                a password reset link if your account exists.
              </p>
              <form onSubmit={formik.handleSubmit}>
                <label className="block text-sm">
                  <span className="text-gray-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    className="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple border-[1.5px] border-gray-300 rounded-md p-2"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.email}
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
                    "Recover Password"
                  )}
                </button>
              </form>
              <button
                className="block w-full px-4  mt-4 text-sm font-medium leading-5 text-center text-purple-600 hover:underline"
                onClick={() => navigate("/auth")}
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
