import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgorPass = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      alert("Please enter an email address.");
      setLoading(false);
      return;
    }

    try {
      // Simulate API call for password reset
      console.log("Password reset request for:", email);

      // Simulate success
      alert("Password reset instructions sent to your email!");
      navigate("/otp");
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
          <h1 className="text-lg md:text-xl lg:text-3xl font-semibold mb-3 text-center text-gray-800">
            Reset your password
          </h1>
          <p className="text-sm mb-3 text-center text-gray-800">
            Enter your email address and we will send you instructions to reset
            your password.
          </p>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <label className="block text-sm">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray border-[1.5px] border-gray-300 rounded-md p-2 "
                placeholder="Email"
              />
            </label>

            <button
              type="submit"
              className="w-full h-12 bg-purple-600 font-bold text-white p-3 rounded-lg text-sm flex justify-center items-center"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Continue"}
            </button>
          </form>

          <div className="mt-3 mb-0.5 text-purple-600 text-center font-semibold text-sm">
            <Link to="/auth">Back to Mountain Email Finder</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgorPass;
