import React, { useState } from "react";
import img from "../../../assets/img/bg.svg";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Worm } from "lucide-react";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="flex flex-col justify-center items-start py-5 md:w-1/2 bg-gray-50">
            <div className="flex items-center space-x-2 ml-6">
              <div className="flex items-center justify-center bg-purple-600 rounded-full p-2">
                <Worm size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Reoon Email Verifier
              </h1>
            </div>
            <p className="my-3 text-md px-8 text-gray-700 dark:text-gray-400">
              The most precise email verification service that filters out
              invalid, temporary, and unsafe email addresses.
            </p>
            <img
              aria-hidden="true"
              className="object-contain w-full h-auto mt-4 dark:hidden"
              src={img}
              alt="Office"
            />
            <p className="text-sm -mt-4 pl-8 text-gray-700 dark:text-gray-400">
              Trusted by thousands of professionals for its precision, this
              easy-to-use tool ensures your emails connect with real people,
              boosting the success of your email campaigns.
            </p>
          </div>

          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">Email</span>
                <input
                  type="email"
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray border-[1.5px] border-gray-300 rounded-md p-2"
                  placeholder="Email"
                  required
                />
              </label>
              <label className="block mt-4 text-sm relative">
                <span className="text-gray-700 dark:text-gray-400">
                  Password
                </span>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray border-[1.5px] border-gray-300 rounded-md p-2"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute right-3 text-gray-800 top-[70%] transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </label>

              <div className="flex justify-between items-center mt-2.5">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-400">
                    Remember me
                  </span>
                </div>
                <span
                  className="text-sm cursor-pointer font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  onClick={() => {
                    navigate("/forgotpassword");
                  }}
                >
                  Forgot password?
                </span>
              </div>

              <button
                type="submit"
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#7E3AF2] border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Log in
              </button>

              <hr className="my-8" />

              <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white bg-[#0c0d0e] transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                <FaGithub className="mr-2.5" />
                Log in with Github
              </button>

              <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white bg-[#1C9CEA] transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                <FaTwitter className="mr-2.5" />
                Log in with Twitter
              </button>

              <p className="mt-4 text-center text-sm">
                Not registered?{" "}
                <span
                  className="font-medium cursor-pointer text-purple-600 dark:text-purple-400 hover:underline"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Create account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
