import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Qhdn0HGEuCTQqD7ZhH98KpgNo3XC451VnVs2hf76TtYzPwKx5wxq10mj0ZRF756FLCSvTKgyCKax6pFCZqiXl8500qI2Emgn3"
);

export default function BuyCredits() {
  const [rangeValue, setRangeValue] = useState(0);
  const [rangeValue2, setRangeValue2] = useState(0);

  const minCredits2 = 10000;
  const maxCredits2 = 1000000;
  const minPrice2 = 11.91;
  const maxPrice2 = 960.0;
  const maxRangeValue2 = 100;
  const maxDiscount2 = 20;

  const credits2 = Math.round(
    minCredits2 + (rangeValue2 / maxRangeValue2) * (maxCredits2 - minCredits2)
  );
  const price2 = (
    minPrice2 +
    (rangeValue2 / maxRangeValue2) * (maxPrice2 - minPrice2)
  ).toFixed(2);
  const discount2 = ((rangeValue2 / maxRangeValue2) * maxDiscount2).toFixed(2);

  const minCreditsPerDay = 20;
  const maxCreditsPerDay = 20000;
  const minPrice = 0;
  const maxPrice = 340;
  const maxRangeValue = 100;
  const creditsPerDay = Math.round(
    minCreditsPerDay +
      (rangeValue / maxRangeValue) * (maxCreditsPerDay - minCreditsPerDay)
  );
  const monthlyCredits = creditsPerDay * 30;
  const price = (
    minPrice +
    (rangeValue / maxRangeValue) * (maxPrice - minPrice)
  ).toFixed(2);
  const discountPercentage = ((rangeValue / maxRangeValue) * 15).toFixed(2);
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );

  const handleSubscribeNow = async (planType) => {
    const priceToCharge = planType === "monthly" ? discountedPrice : price2;
    const stripe = await stripePromise;
    const sessionUrl = `https://checkout.stripe.com/pay/cs_test_a1zB1J1N2I0bD6F7sJ4JxY5lMlz4XlPmnaMopBYIjkbZXE5Hjpz8skpYYt#sessionId=cs_test_a1zB1J1N2I0bD6F7sJ4JxY5lMlz4XlPmnaMopBYIjkbZXE5Hjpz8skpYYt`;
    window.location.href = sessionUrl;
  };

  return (
    <div className="bg-gray-50 p-6">
      <div className="mb-8">
        <h2 className="md:text-2xl text-xl pt-2 sm:pt-0 font-bold text-gray-800">
          Buy Credits
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Buy credits to start email verification.
        </p>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
        Monthly Subscription Plan
      </h3>
      <div
        className="p-6 rounded-lg shadow-md"
        style={{
          background: "linear-gradient(to bottom, #2c4371, #0c1123)",
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="font-bold text-white text-2xl text-center sm:text-left">
              Monthly Subscription
            </p>
            <p className="text-base text-gray-200 mt-2">
              You can use up to{" "}
              <span className="font-bold text-white">
                {monthlyCredits.toLocaleString()}
              </span>{" "}
              credits per month
            </p>
          </div>
          <p className="text-gray-200 mb-4 sm:mb-0 text-base">
            <span className="font-bold text-white text-lg">
              {creditsPerDay.toLocaleString()}
            </span>{" "}
            credits / day
          </p>
          <div className="w-full sm:w-auto text-right">
            <button
              onClick={() => handleSubscribeNow("monthly")}
              className="w-full sm:w-auto bg-btnBackground hover:bg-btnBackgroundhover text-white px-6 py-3 rounded-md shadow-md text-lg"
            >
              Subscribe Now
            </button>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-white text-xl">
                Select Credits Range
              </p>
              <p className="text-base text-gray-200 mt-2">
                Monthly Total - You save{" "}
                <span className="font-bold text-green-400 text-lg">
                  {discountPercentage}%
                </span>
              </p>
            </div>
            <p className="text-gray-200 text-lg">
              <span className="font-bold text-white">
                ${discountedPrice.toLocaleString()}
              </span>
            </p>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={rangeValue}
            onChange={(e) => setRangeValue(Number(e.target.value))}
            className="w-full mt-6 mb-4 lg:mb-6 lg:mt-8 range-slider"
            style={{
              background: `linear-gradient(to right, rgb(44,67,113) ${rangeValue}%, #e0e0e0 ${rangeValue}%)`,
            }}
          />
          <p className="text-base text-white bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] to-[#A78BFA] p-3 rounded-lg mt-3 shadow-md">
            Select your preferred credit range to unlock features and maximize
            your monthly usage.
          </p>
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-8 mb-4">
        Instant Credits Plan (Lifetime Access)
      </h3>
      <div
        className="p-6 rounded-lg shadow-md"
        style={{
          background: "linear-gradient(to bottom, #2c4371, #0c1123)",
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-4 sm:mb-0">
            <p className="font-bold text-white text-2xl text-center sm:text-left">
              Instant Credits (Lifetime)
            </p>
            <p className="text-base text-gray-200 mt-2">
              Instant credits never expire
            </p>
          </div>
          <p className="text-gray-200 mb-4 sm:mb-0 text-base">
            <span className="font-bold text-white text-lg">
              {credits2.toLocaleString()}
            </span>{" "}
            credits
          </p>
          <div className="w-full sm:w-auto text-right">
            <button
              onClick={() => handleSubscribeNow("lifetime")}
              className="w-full sm:w-auto bg-btnBackground hover:bg-btnBackgroundhover text-white px-4 py-2 rounded-md shadow-md"
            >
              Subscribe Now
            </button>
          </div>
        </div>

        <hr className="my-4 border-gray-600" />
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-white text-xl">
                Select Credits Range
              </p>
              <p className="text-base text-gray-200 mt-2">
                Onetime Payment - You save{" "}
                <span className="font-bold text-green-400 text-lg">
                  {discount2}%
                </span>
              </p>
            </div>
            <p className="text-gray-200 text-lg">
              <span className="font-bold text-white">
                ${price2.toLocaleString()}
              </span>
            </p>{" "}
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={rangeValue2}
            onChange={(e) => setRangeValue2(Number(e.target.value))}
            className="w-full mt-6 mb-4 lg:mb-6 lg:mt-8 range-slider"
            style={{
              background: `linear-gradient(to right, rgb(44,67,113) ${rangeValue2}%, #e0e0e0 ${rangeValue2}%)`,
            }}
          />
          <p className="text-base text-white bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] to-[#A78BFA] p-3 rounded-lg mt-3 shadow-md">
            Purchase instant credits now to enjoy lifetime usage without
            expiration.
          </p>
        </div>
      </div>
    </div>
  );
}
