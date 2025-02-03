import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [isResend, setIsResend] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail");

  const handleOtpChange = (e, index) => {
    const value = e.target.value.slice(-1);
    if (/^\d$/.test(value)) {
      const newOtp = otp.substring(0, index) + value + otp.substring(index + 1);
      setOtp(newOtp);
      if (value && index < 4) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handlePaste = (e, index) => {
    const pastedData = e.clipboardData.getData("Text").trim();
    if (/^\d{5}$/.test(pastedData)) {
      setOtp(pastedData);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // API call for OTP verification
      if (otp.length === 5) {
        // Proceed with OTP verification logic
        // For now, simulate success and navigate accordingly
        localStorage.removeItem("userEmail");
        navigate("/auth");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setIsResend(true);
    if (!email) {
      alert("Email not found. Please register first.");
      setIsResend(false);
      return;
    }

    try {
      // Simulate OTP resend API call
      alert("OTP resent successfully!");
    } catch (error) {
      alert("Failed to resend OTP.");
      setIsResend(false);
    }
    setTimeout(() => setIsResend(false), 2000);
  };

  return (
    <div className="flex justify-center h-screen items-center bg-white">
      <div className="w-full pt-12 pb-10 px-10 max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="px-5 sm:px-8">
          <h1 className="text-lg md:text-xl lg:text-3xl font-medium mb-3 text-center text-gray-800">
            Enter OTP
          </h1>
          <p className="text-sm mb-3 text-center text-gray-800">
            Please enter the 5-digit code sent to your email.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mb-6">
            <div className="flex justify-center mb-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={otp[index] || ""}
                    onChange={(e) => handleOtpChange(e, index)}
                    onPaste={(e) => handlePaste(e, index)}
                    id={`otp-input-${index}`}
                    className="w-10 h-10 mx-2 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                ))}
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-purple-600 font-bold text-white p-3 rounded-lg text-sm flex justify-center items-center"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-600">
            {isResend ? "Resending OTP..." : "Didn't receive OTP? "}
            {!isResend && (
              <button onClick={handleResend} className="text-purple-600 font-bold">
                Resend Again
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
