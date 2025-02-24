import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Worm, Phone } from "lucide-react";
import { toast } from "react-toastify";
import apiRequest from "../../../utils/apiRequest";
import loaderGif from "../../../assets/loadernew1.gif";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(3, "Full name must be at least 3 characters")
        .required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("fullname", values.fullname);
        formData.append("email", values.email);
        formData.append("message", values.message);

        const response = await apiRequest("post", "/api/contact-us", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.data.status === "success") {
          toast.success("Message sent successfully!");
          resetForm();
          setLoading(false);
        }
      } catch (error) {
        toast.error("Failed to send message.");
        setLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-slate-50 border border-gray-300 p-4 sm:p-10 rounded-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center space-x-3 text-[#0b996f] font-bold text-2xl w-full mt-12 mb-8">
            <div className="h-10 w-10 bg-[#0b996f] rounded-full hidden min-[450px]:flex items-center justify-center">
              <Worm className="h-6 w-6 text-white" />
            </div>
            <span>Mountain Email Finder</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-black">
            Contact Our Support Team
          </h2>
          <p className="text-gray-800 mb-6">
            Have a question or need assistance? Our team is here to help you get
            the most out of Mountain Email Verifier.
          </p>
          <h3 className="text-xl font-semibold text-black mb-4">
            Support Options
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-black" />
              <span className="text-gray-800">
                support@mountainverifier.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-black" />
              <span className="text-gray-800">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              {" "}
              <span className="text-gray-800">
                We strive to respond within one business day.
              </span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-black mb-4">
            Send Us A Message
          </h2>
          <p className="text-gray-800 mb-6">
            If you have any questions, please fill out the form below, and our
            team will respond as soon as possible.
          </p>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="fullname"
                placeholder="Enter Full Name"
                className={`w-full p-3 border ${
                  formik.touched.fullname && formik.errors.fullname
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  formik.touched.fullname && formik.errors.fullname
                    ? "focus:ring-red-500"
                    : "focus:ring-green-500"
                }`}
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fullname && formik.errors.fullname && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.fullname}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className={`w-full p-3 border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  formik.touched.email && formik.errors.email
                    ? "focus:ring-red-500"
                    : "focus:ring-green-500"
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                className={`w-full p-3 border ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 ${
                  formik.touched.message && formik.errors.message
                    ? "focus:ring-red-500"
                    : "focus:ring-green-500"
                } h-28`}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-green-600 text-white py-3 rounded-2xl hover:bg-green-700 transition-all"
            >
              {loading ? (
                <img
                  src={loaderGif}
                  alt="Loading..."
                  className="mx-auto h-[64px] w-[80px] -mt-[21px]"
                />
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
