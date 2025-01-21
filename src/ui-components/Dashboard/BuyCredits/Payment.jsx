import React, { useState, useEffect } from "react";
import { FaCreditCard, FaCalendarAlt, FaEye, FaLock } from "react-icons/fa";

const PaymentForm = () => {
  const [deliveryTime, setDeliveryTime] = useState("");

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

  const selectedPlan = {
    title: "Pro Plan",
    duration: "Monthly",
    price: 49.99,
    discount: 10,
    credits: 100,
  };

  return (
    <div className="bg-[#f7f9fb] p-6">
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
          <div className="w-full lg:w-[65%] p-4 min-[380px]:p-7 sm:py-8 sm:px-28 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Payment Method
            </h2>

            <form className="space-y-5">
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
                    className="w-full outline-none"
                    placeholder="1234 5678 9012 3456"
                  />
                  <FaCreditCard className="text-gray-400 text-lg ml-2" />
                </div>
              </div>

              <div className="flex space-x-6">
                <div className="relative w-1/2">
                  <label
                    htmlFor="expiration"
                    className="text-sm text-gray-600 mb-2 block"
                  >
                    Expiration Date
                  </label>
                  <div className="flex items-center border-2 border-gray-300 rounded-lg p-3 w-full">
                    <input
                      id="expiration"
                      className="w-full outline-none"
                      placeholder="MM/YY"
                    />
                    <FaCalendarAlt className="text-gray-400 text-lg ml-2" />
                  </div>
                </div>

                <div className="relative w-1/2">
                  <label
                    htmlFor="cvv"
                    className="text-sm text-gray-600 mb-2 block"
                  >
                    CVV
                  </label>
                  <div className="flex items-center border-2 border-gray-300 rounded-lg p-3 w-full">
                    <input
                      id="cvv"
                      className="w-full outline-none"
                      placeholder="123"
                    />
                    <FaEye className="text-gray-400 text-lg ml-2" />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaLock className="text-black text-lg" />
                <span className="text-black font-semibold">
                  Your payment is secure and protected
                </span>
              </div>
              <button
                type="button"
                className="w-full py-3 bg-background text-white font-semibold rounded-lg hover:bg-hover"
                disabled
              >
                Pay
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

          <div className="w-full lg:w-[35%] p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="flex justify-between items-center bg-background text-white p-4 rounded-t-lg">
              <div>
                <h3 className="text-xl font-bold">{selectedPlan.title}</h3>
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
                    × 1 member × 1{" "}
                    {selectedPlan.duration === "Monthly" ? "month" : "year"}
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
                You're upgrading for every active member of your team. If new
                people join or inactive members become active, they'll be added
                to your next bill.
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
                <span>{selectedPlan.credits}</span>
              </div>
            </div>

            <div className="flex justify-between p-4 text-lg font-bold border-t">
              <span>Due today</span>
              <span className="text-green-600">${selectedPlan.price} USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
