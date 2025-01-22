import React from "react";
import { User, Lock, MapPin } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import apiRequest from "../../../utils/apiRequest";
import { setUserInfo } from "../../../auth/authSlice";

export default function Settings() {
  const user = useSelector((state) => state?.auth?.userInfo);
  const token = useSelector((state) => state?.auth?.userToken);
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      phone: user?.phone || "",
      address: user?.address || "",
      city: user?.city || "",
      country: user?.country || "",
      state: user?.state || "",
      zipcode: user?.zipcode || "",
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        Object.keys(values).forEach((field) => {
          if (values[field] !== user[field]) {
            formData.append(field, values[field]);
          }
        });
        if (formData.entries().next().done) {
          toast.info("No changes detected.");
          return;
        }
        const response = await apiRequest(
          "post",
          "/api/profile/update",
          formData,
          token
        );
        if (response.data.status === "success") {
          toast.success(response.data.message);
          dispatch(
            setUserInfo({
              token,
              data: { ...user, ...values },
            })
          );
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Something went wrong. Please try again."
        );
      }
    },
  });

  return (
    <div className="bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="md:text-2xl text-xl pt-2 sm:pt-0 font-bold text-gray-800">
            Account Settings
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Update your account details or modify your personal information.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* General Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:w-[50%] flex flex-col">
          <div className="flex items-center mb-4">
            <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1 flex items-center justify-center mr-2">
              <User className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />
            </div>
            <h3 className="sm:text-lg text-base font-bold text-gray-800">
              General Information
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border rounded-lg"
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.first_name && formik.errors.first_name && (
              <div className="text-red-500 text-sm">
                {formik.errors.first_name}
              </div>
            )}

            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border rounded-lg"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.last_name && formik.errors.last_name && (
              <div className="text-red-500 text-sm">
                {formik.errors.last_name}
              </div>
            )}
          </div>
          <div className="space-y-4 mb-4 lg:mb-0">
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-lg w-full"
              name="email"
              value={user?.email || ""}
              readOnly
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-3 border rounded-lg w-full"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            )}
          </div>
          <button
            onClick={formik.handleSubmit}
            className="mt-auto w-full p-3 rounded bg-btnBackground hover:bg-btnBackgroundhover text-white font-bold"
          >
            Save Changes
          </button>
        </div>

        {/* Password Section */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:w-[40%] flex-1">
          <div className="flex items-center mb-4">
            <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1 flex items-center justify-center mr-2">
              <Lock className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />
            </div>
            <h3 className="sm:text-lg text-base font-bold text-gray-800">
              Update Account Password
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="password"
              placeholder="Current Password"
              className="p-3 border rounded-lg"
            />
            <input
              type="password"
              placeholder="New Password"
              className="p-3 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="p-3 border rounded-lg"
            />
          </div>
          <button
            onClick={formik.handleSubmit}
            className="mt-4 w-full p-3 rounded bg-btnBackground hover:bg-btnBackgroundhover text-white font-bold"
          >
            Change Password
          </button>
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1 flex items-center justify-center mr-2">
            <MapPin className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />
          </div>
          <h3 className="sm:text-lg text-base font-bold text-gray-800">
            Address Information
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Address"
            className="p-3 border rounded-lg"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          )}
          <input
            type="text"
            placeholder="City"
            className="p-3 border rounded-lg"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city && (
            <div className="text-red-500 text-sm">{formik.errors.city}</div>
          )}
          <input
            type="text"
            placeholder="Country"
            className="p-3 border rounded-lg"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.country && formik.errors.country && (
            <div className="text-red-500 text-sm">{formik.errors.country}</div>
          )}
          <input
            type="text"
            placeholder="State"
            className="p-3 border rounded-lg"
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.state && formik.errors.state && (
            <div className="text-red-500 text-sm">{formik.errors.state}</div>
          )}
          <input
            type="text"
            placeholder="Zipcode"
            className="p-3 border rounded-lg"
            name="zipcode"
            value={formik.values.zipcode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.zipcode && formik.errors.zipcode && (
            <div className="text-red-500 text-sm">{formik.errors.zipcode}</div>
          )}
        </div>
        <button
          onClick={formik.handleSubmit}
          className="mt-4 w-full p-3 rounded bg-btnBackground hover:bg-btnBackgroundhover text-white font-bold"
        >
          Save Address
        </button>
      </div>
    </div>
  );
}
