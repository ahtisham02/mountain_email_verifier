import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import loaderGif from "../../../assets/loadernew1.gif";
import apiRequest from "../../../utils/apiRequest";
import { setUserInfo } from "../../../auth/authSlice";
import { Worm } from "lucide-react";
import gimg1 from "../../../assets/login_en_md.webp";

const OtpPage = () => {
  const [otp, setOtp] = useState("".padStart(5, ""));
  const [isResend, setIsResend] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");

  const handleOtpChange = (e, index) => {
    const value = e.target.value.slice(-1);
    const newOtp = otp.split("");

    if (/^\d$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp.join(""));

      if (index < 4) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    } else if (e.nativeEvent.inputType === "deleteContentBackward") {
      newOtp[index] = "";
      setOtp(newOtp.join(""));

      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text").trim();
    if (/^\d{5}$/.test(pastedData)) {
      setOtp(pastedData);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!/^\d{5}$/.test(otp)) {
      toast.error("Invalid OTP. Please try again.");
      setLoading(false);
      return;
    }

    try {
      const response = await apiRequest("post", "/api/verify-otp", {
        email,
        otp,
      });

      if (response.data.status === "success") {
        const loginResponse = await apiRequest(
          "post",
          "/api/login",
          { email, password },
          { headers: { "Content-Type": "application/json" } }
        );

        if (loginResponse.data.status === "success") {
          toast.success("User verified & logged in successfully!");
          dispatch(setUserInfo(loginResponse.data));
          navigate("/");

          localStorage.removeItem("userEmail");
          localStorage.removeItem("userPassword");
        } else {
          toast.error(loginResponse.data.message);
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error("Email not found. Please register first.");
      return;
    }

    setIsResend(true);

    try {
      const formData = new FormData();
      formData.append("email", email);

      await apiRequest("post", "/api/resend-otp", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("OTP resent successfully!");
    } catch (error) {
      toast.error("Failed to resend OTP.");
    } finally {
      setTimeout(() => setIsResend(false), 2000);
    }
  };

  return (
    <div className="flex min-h-screen font-plus-jakarta">
      <div className="w-full lg:w-1/2 border-r-[1px] border-gray-200 h-screen overflow-y-auto flex flex-col items-center justify-center p-5">
        <div className="flex items-center space-x-3 text-[#0b996f] font-bold text-2xl w-full">
          <div className="h-10 w-10 bg-[#0b996f] rounded-full flex items-center justify-center">
            <Worm className="h-6 w-6 text-white" />
          </div>
          <span>Mountain Email Finder</span>
        </div>
        <div className="flex h-full w-full mx-auto">
          <div className="flex w-full overflow-y-auto flex-row">
            <div className="flex items-center justify-center w-full p-4 sm:px-8 lg:px-0 sm:pt-8 sm:pb-6">
                <div className="w-full pt-12 pb-10 px-10 max-w-lg mx-auto">
                  <div className="px-5 sm:px-8">
                    <h1 className="text-lg md:text-xl lg:text-3xl font-medium mb-3 text-center text-gray-800">
                      Enter OTP
                    </h1>
                    <p className="text-sm mb-3 text-center text-gray-800">
                      Please enter the 5-digit code sent to your email.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col justify-center items-center mb-6"
                    >
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
                              onPaste={handlePaste}
                              id={`otp-input-${index}`}
                              className="w-10 h-10 mx-2 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                            />
                          ))}
                      </div>

                      <button
                        type="submit"
                        className="w-full h-10 bg-black font-bold text-white p-3 rounded-2xl text-sm flex justify-center items-center"
                        disabled={loading}
                      >
                        {loading ? (
                          <img
                            src={loaderGif}
                            alt="Loading..."
                            className="mx-auto h-[64px] w-[80px] -mt-[1px]"
                          />
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </form>

                    <p className="text-center text-sm mt-4 text-gray-600">
                      {isResend ? "Resending OTP..." : "Didn't receive OTP? "}
                      {!isResend && (
                        <button
                          onClick={handleResend}
                          className="text-[#0b996f] font-bold"
                        >
                          Resend Again
                        </button>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div
        className="hidden lg:block lg:w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${gimg1})` }}
      ></div>
    </div>
  );
};

export default OtpPage;
