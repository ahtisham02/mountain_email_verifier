import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import apiRequest from "../../../utils/apiRequest";
import loaderGif from "../../../assets/loadernew1.gif";

export default function SLFooter() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      try {
        const formData = new FormData();
        formData.append("email", values.email);

        const response = await apiRequest("post", "/api/newsletter", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.data.status === "success") {
          toast.success(response.data.message);
          resetForm();
          setLoading(false);
        }
      } catch (error) {
        toast.error("Failed to send newsletter.");
        setLoading(false);
      }
    },
  });

  return (
    <div className="bg-[#d7fec8] rounded-t-[40px] sm:rounded-t-[90px] text-center py-12 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900">
          Subscribe now & Signup <br /> for our newsletter
        </h2>
        <h2 className="text-base mt-3 font-semibold text-gray-700">
          Get monthly marketing tips and exclusive discounts straight to your
          inbox.
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-7 flex justify-center"
        >
          <div className="flex flex-col w-full max-w-md">
            <div className="flex">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={`w-full p-3 border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-l-lg focus:outline-none focus:ring-1 ${
                  formik.touched.email && formik.errors.email
                    ? "focus:ring-red-500"
                    : "focus:ring-green-500"
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button
                type="submit"
                className="px-5 py-3 h-12 bg-[#16a34a] text-white font-semibold rounded-r-lg"
              >
                {loading ? (
                  <img
                    src={loaderGif}
                    alt="Loading..."
                    className="mx-auto h-[64px] w-[80px] -mt-[21px]"
                  />
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
            )}
          </div>
        </form>
        <p className="mt-3 text-[11.9px] font-semibold text-sm text-gray-700">
          *I accept Mountains's privacy policy and can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
