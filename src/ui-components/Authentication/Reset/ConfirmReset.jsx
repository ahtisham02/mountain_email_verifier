import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ConfirmReset = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!email || !password) {
        alert("Please fill out both fields.");
        return;
      }

      // Simulate API call for password reset
      console.log("Password reset request:", { email, password });

      // Simulate success
      alert("Password reset successful!");
      navigate("/login");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center bg-white">
      <div className="w-full pt-12 pb-10 px-10 max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="px-5 sm:px-8">
          <h1 className="text-lg md:text-xl lg:text-3xl font-semibold mb-5 text-center text-gray-800">
            Reset Email Password
          </h1>

          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Email Field */}
            <label className="block text-sm">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple border-[1.5px] border-gray-300 rounded-md p-2 "
                placeholder="Email"
              />
            </label>

            {/* Password Field */}
            <label className="block mt-4 text-sm relative">
              <span className="text-gray-700">Password</span>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple border-[1.5px] border-gray-300 rounded-md p-2 "
                placeholder="Password"
              />
              <span
                className="absolute right-3 top-[69%] transform -translate-y-1/2 text-gray-800 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-purple-600 font-bold text-white p-3 rounded-lg text-sm flex justify-center items-center"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Reset"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReset;
