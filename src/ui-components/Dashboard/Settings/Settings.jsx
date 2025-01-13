import React from "react";
import { FaUser, FaLock, FaLocationArrow } from "react-icons/fa";

export default function Settings() {
  return (
    <div className="bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Account Settings</h2>
          <p className="text-gray-600">
            Update your account details or modify your personal information.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center mb-4">
          <FaUser className="text-btnBackground mr-2" />
          <h3 className="text-lg font-bold text-gray-800">
            General Information
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-3 border rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-3 border rounded"
          />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-center mb-4">
          <FaLocationArrow className="text-btnBackground mr-2" />
          <h3 className="text-lg font-bold text-gray-800">Location</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Address"
            className="p-3 border rounded"
          />
          <input
            type="text"
            placeholder="City"
            className="p-3 border rounded"
          />
          <input type="text" placeholder="ZIP" className="p-3 border rounded" />
          <div className="flex gap-4">
            <select className="p-3 border rounded flex-1">
              <option>Country</option>
            </select>
            <select className="p-3 border rounded flex-1">
              <option>State</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FaLock className="text-btnBackground mr-2" />
          <h3 className="text-lg font-bold text-gray-800">
            Update Account Password
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="password"
            placeholder="Current Password"
            className="p-3 border rounded"
          />
          <input
            type="password"
            placeholder="New Password"
            className="p-3 border rounded"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="p-3 border rounded"
          />
        </div>
        <button className="mt-4 w-full p-3 rounded bg-btnBackground hover:bg-btnBackgroundhover text-white font-bold">
          Change Password
        </button>
      </div>
    </div>
  );
}
