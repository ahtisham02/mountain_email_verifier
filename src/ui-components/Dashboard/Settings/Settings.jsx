import React from "react";
import { User, Lock, Edit } from "lucide-react";
import img from "../../../assets/img/American_Express.webp";

export default function Settings() {
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

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center mb-4">
          <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1 flex items-center justify-center mr-2">
            <User className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />
          </div>
          <h3 className="sm:text-lg text-base font-bold text-gray-800">
            General Information
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-none sm:w-[30%] w-full flex justify-center">
          <div className="w-36 mt-5 h-36 rounded-full bg-gray-200 flex items-center justify-center border-[1.5px] border-btnBackground">
              <img
                src={img}
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
              <div className="mt-24 ml-24 absolute bg-white rounded-full p-2 shadow-md">
                <Edit className="text-gray-600 w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex-1 sm:w-[70%] w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-lg"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Address"
              className="p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="City"
              className="p-3 border rounded-lg"
            />
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full p-3 rounded bg-btnBackground hover:bg-btnBackgroundhover text-white font-bold">
            Submit
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
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
        <button className="mt-4 w-full p-3 rounded bg-btnBackground hover:bg-btnBackgroundhover text-white font-bold">
          Change Password
        </button>
      </div>
    </div>
  );
}
