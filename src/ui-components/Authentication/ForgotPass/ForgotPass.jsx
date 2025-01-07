import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/img/bg.svg";

export default function ForgotPass() {
  const navigate = useNavigate();

  return (
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div class="flex flex-col overflow-y-auto md:flex-row">
          <div className="flex flex-col justify-center items-start py-5 md:w-1/2 bg-gray-50">
            <img
              aria-hidden="true"
              className="object-contain w-full h-auto mt-4 dark:hidden"
              src={img}
              alt="Office"
            />
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div class="w-full">
              <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Reset Password
              </h1>
              <p class="mt-2 mb-5 text-sm text-gray-500 dark:text-gray-400">
                Lost your password? Just type in your email address below and we
                will send you a password reset link to your email, if it has a
                valid account!
              </p>
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Email</span>
                <input
                  type="email"
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray border-[1.5px] border-gray-300 rounded-md p-2"
                  placeholder="Email"
                  required
                />
              </label>

              <span
                class="block w-full cursor-pointer px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#7E3AF2] border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Recover password
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
