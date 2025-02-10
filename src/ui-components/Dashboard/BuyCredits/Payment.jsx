import React, { useState, useEffect } from "react";
import { FaCreditCard, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";
import loaderGif from "../../../assets/loadernew1.gif";
import apiRequest from "../../../utils/apiRequest";

const PaymentForm = () => {
  const [deliveryTime, setDeliveryTime] = useState("");
  const [showCvc, setShowCvc] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { selectedPlan } = location.state || {};
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.userInfo.email);
  const Name = useSelector((state) => state?.auth?.userInfo.name);
  const token = useSelector((state) => state?.auth?.userToken);

  const getUserIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Failed to fetch IP address", error);
      return null;
    }
  };

  const getCountryName = async (ip) => {
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();
      return data.country_code.toLowerCase();
    } catch (error) {
      console.error("Failed to fetch country name", error);
      return null;
    }
  };

  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  const handleCardNumberChange = (event) => {
    let value = event.target.value.replace(/\D/g, "").substring(0, 19);
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    formik.setFieldValue("cardNumber", value);
  };

  const handleExpirationChange = (date) => {
    if (date) {
      const expMonth = String(date.getMonth() + 1).padStart(2, "0");
      const expYear = String(date.getFullYear()).slice(-2);
      const formattedDate = `${expMonth}/${expYear}`;
      formik.setFieldValue("expiration", formattedDate);
    }
  };

  const handleCVCChange = (event) => {
    let value = event.target.value.replace(/\D/g, "").substring(0, 4);
    formik.setFieldValue("cvc", value);
  };

  const validationSchema = Yup.object({
    cardNumber: Yup.string()
      .required("Card Number is required")
      .matches(
        /^\d{4} ?\d{4} ?\d{4} ?\d{1,7}$/,
        "Card Number must be between 13 to 19 digits"
      ),
    expiration: Yup.string().required("Expiration Date is required"),
    cvc: Yup.string()
      .required("CVC is required")
      .matches(/^[0-9]{3,4}$/, "CVC must be 3 or 4 digits"),
  });

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiration: "",
      cvc: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const { cardNumber, expiration, cvc } = values;
        const [expMonth, expYear] = expiration.split("/");

        const ip = await getUserIP();
        if (!ip) {
          toast.error("Failed to fetch IP address.");
          return;
        }

        const countryName = await getCountryName(ip);
        if (!countryName) {
          toast.error("Failed to fetch country information.");
          return;
        }

        const muid = generateUUID();
        const sid = generateUUID();
        const guid = generateUUID();

        const paymentPayload = new URLSearchParams({
          type: "card",
          "card[number]": cardNumber.replace(/\s+/g, ""),
          "card[cvc]": cvc,
          "card[exp_month]": expMonth,
          "card[exp_year]": expYear,
          "billing_details[name]": Name,
          "billing_details[email]": user,
          "billing_details[address][country]": countryName,
          muid: muid,
          sid: sid,
          guid: guid,
          payment_user_agent:
            "stripe.js/c93000e12a; stripe-js-v3/c93000e12a; checkout",
        });

        const response = await axios.post(
          "https://api.stripe.com/v1/payment_methods",
          paymentPayload,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_STRIPE_API}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        if (!response.data.id) {
          toast.error("Failed to create payment method.");
          return;
        }

        const paymentMethodId = response.data.id;

        const paymentIntentResponse = await axios.post(
          "https://api.stripe.com/v1/payment_intents",
          new URLSearchParams({
            amount: selectedPlan.price * 100,
            currency: "usd",
            payment_method: paymentMethodId,
            confirm: "true",
            return_url: "http://localhost:3000/buycredits",
          }),
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_SECRET_STRIPE_API}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        if (paymentIntentResponse.data.status === "succeeded") {
          const formData = {
            subscription_id: selectedPlan?.id,
            price: selectedPlan?.price,
            discount: selectedPlan?.discount,
            payment_method: "stripe",
            date: Date.now(),
            credits: selectedPlan?.credits,
            credits_per_day: selectedPlan?.credits_per_day,
            credits_per_month: selectedPlan?.credits_per_month,
            txt: paymentIntentResponse.data.id,
          };

          const response = await apiRequest(
            "post",
            "/api/profile/update",
            formData,
            token
          );
          if (response.data.status === "success") {
            toast.success("Payment successful!");
            navigate("/buycredits");
            formik.resetForm();
            setLoading(false);
          }
        } else {
          toast.error("Payment failed, please try again.");
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        console.error(error);
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    const now = new Date();
    const formattedTime = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(now);

    setDeliveryTime(formattedTime);
  }, []);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="md:text-2xl text-xl pt-2 sm:pt- font-extrabold text-gray-900">
          Complete Your Purchase
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Securely buy credits to start verifying emails instantly.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row w-full lg:space-x-6 space-y-6 lg:space-y-0">
          <div className="w-full lg:w-[65%] p-4 min-[380px]:p-7 sm:py-8 sm:px-28 bg-white rounded-2xl border-[1px] border-[#e8e8e8]">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Payment Method
            </h2>

            <form onSubmit={formik.handleSubmit} className="space-y-5">
              <div className="relative w-full">
                <label
                  htmlFor="cardNumber"
                  className="text-sm text-gray-600 mb-2 block"
                >
                  Card Number
                </label>
                <div className="flex items-center border-2 border-gray-300 rounded-lg p-3 w-full">
                  <input
                    id="cardNumber"
                    type="text"
                    className="w-full outline-none"
                    placeholder="1234 5678 1234 5678"
                    onChange={handleCardNumberChange}
                    value={formik.values.cardNumber}
                  />
                  <FaCreditCard className="text-gray-400 text-lg ml-2" />
                </div>
                {formik.errors.cardNumber && formik.touched.cardNumber && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.cardNumber}
                  </div>
                )}
              </div>

              <div className="flex space-x-6">
                <div className="relative w-1/2">
                  <label
                    htmlFor="expiration"
                    className="text-sm text-gray-600 mb-2 block"
                  >
                    Expiration Date (MM/YY)
                  </label>
                  <div className="flex items-center border-2 border-gray-300 rounded-lg p-3 w-full">
                    <DatePicker
                      id="expiration"
                      selected={
                        formik.values.expiration
                          ? new Date(
                              `20${formik.values.expiration.split("/")[1]}`,
                              formik.values.expiration.split("/")[0] - 1
                            )
                          : null
                      }
                      onChange={handleExpirationChange}
                      dateFormat="MM/yy"
                      placeholderText="MM/YY"
                      showMonthYearPicker
                      minDate={new Date()}
                      className="w-full outline-none bg-white text-gray-700"
                      calendarClassName="custom-calendar-size"
                    />

                    <Calendar
                      size={20}
                      className="text-gray-400 text-lg ml-2 right-4 absolute"
                    />
                  </div>
                  {formik.errors.expiration && formik.touched.expiration && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.expiration}
                    </div>
                  )}
                </div>

                <div className="relative w-1/2">
                  <label
                    htmlFor="cvc"
                    className="text-sm text-gray-600 mb-2 block"
                  >
                    CVC
                  </label>
                  <div className="flex items-center border-2 border-gray-300 rounded-lg p-3 w-full">
                    <input
                      id="cvc"
                      type={showCvc ? "text" : "password"}
                      className="w-full outline-none"
                      placeholder="123"
                      onChange={handleCVCChange}
                      value={formik.values.cvc}
                    />
                    {showCvc ? (
                      <FaEye
                        className="text-gray-400 text-lg ml-2 cursor-pointer"
                        onClick={() => setShowCvc(false)}
                      />
                    ) : (
                      <FaEyeSlash
                        className="text-gray-400 text-lg ml-2 cursor-pointer"
                        onClick={() => setShowCvc(true)}
                      />
                    )}{" "}
                  </div>
                  {formik.errors.cvc && formik.touched.cvc && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.cvc}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <FaLock className="text-black text-lg" />
                <span className="text-black font-semibold">
                  Your payment is secure and protected
                </span>
              </div>
              <button
                type="submit"
                className="w-full h-14 bg-btnBackground cursor-pointer hover:bg-btnBackgroundhover text-white font-semibold rounded-2xl hover:bg-hover"
              >
                {loading ? (
                  <img
                    src={loaderGif}
                    alt="Loading..."
                    className="mx-auto h-[70px] w-[86px] -mt-[9px]"
                  />
                ) : (
                  "Pay"
                )}
              </button>

              <div className="mt-4 text-sm text-gray-600">
                <p>
                  You can cancel your plan at any time. Purchases made by credit
                  card can’t be refunded, although your credit can be
                  transferred to another account.
                </p>
                <p className="mt-2">
                  By submitting this form, you confirm that you agree to our{" "}
                  <a href="/" className="text-blue-500">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/" className="text-blue-500">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>

          {selectedPlan ? (
            <div className="w-full lg:w-[35%] p-6 bg-white rounded-2xl border-[1px] border-[#e8e8e8]">
              <div className="flex justify-between items-center bg-btnBackground text-white p-4 rounded-t-lg">
                <div>
                  <h3 className="text-xl font-bold">
                    {selectedPlan.name} Plan
                  </h3>
                  <p className="text-sm text-gray-200">
                    Billed {selectedPlan.duration}
                  </p>
                </div>
                <div className="bg-hover px-4 py-2 rounded-md font-semibold text-sm">
                  USD
                </div>
              </div>

              <div className="p-4 space-y-2 text-gray-700 border-b">
                <div className="flex justify-between">
                  <span className="text-sm mt-0.5 font-semibold text-gray-500">
                    ${selectedPlan.price} USD
                    <span className="text-xs ml-2">
                      × 1{" "}
                      {selectedPlan.duration === "month" ? "month" : "lifetime"}
                    </span>
                  </span>
                  <span className="font-semibold">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(selectedPlan.price)}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  You're purchasing a subscription. Your billing will be
                  adjusted based on your selected plan and renewal terms.
                </p>
              </div>

              <div className="p-2 min-[380px]:p-4 space-y-2 text-gray-700 text-sm min-[380px]:text-base">
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span>{deliveryTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{selectedPlan.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount:</span>
                  <span>{selectedPlan.discount}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Credits:</span>
                  <span>{Math.floor(selectedPlan.credits)}</span>
                </div>
              </div>

              <div className="flex justify-between p-4 text-lg font-bold border-t">
                <span>Due today</span>
                <span className="text-green-600">
                  ${selectedPlan.price} USD
                </span>
              </div>
            </div>
          ) : (
            <p>No plan selected.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
