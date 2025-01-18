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
        <h2 className="text-3xl font-extrabold text-gray-900">Buy Credits</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Buy credits to start email verification.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-4">
            Monthly Subscription Plan
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <p className="font-bold text-gray-900 text-center sm:text-left">
                  Monthly Subscription
                </p>
                <p className="text-sm text-gray-500">
                  You can use up to{" "}
                  <span className="font-semibold">
                    {monthlyCredits.toLocaleString()}
                  </span>{" "}
                  credits <span className="font-semibold">per month</span>
                </p>
              </div>
              <p className="text-gray-600 font-bold mb-4 sm:mb-0">
                {creditsPerDay.toLocaleString()} credits / day
              </p>
              <div className="w-full sm:w-auto text-right">
                <button
                  onClick={() => handleSubscribeNow("monthly")}
                  className="w-full sm:w-auto bg-btnBackground hover:bg-btnBackgroundhover text-white px-4 py-2 rounded-md shadow-md"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
            <hr className="my-4" />
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900">
                    Select Credits Range
                  </p>
                  <p className="text-sm text-gray-500">
                    Monthly Total -{" "}
                    <span className="font-bold text-gray-900">
                      Save {discountPercentage}%
                    </span>
                  </p>
                </div>
                <p className="text-gray-600 font-bold">
                  ${discountedPrice.toLocaleString()}
                </p>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={rangeValue}
                onChange={(e) => setRangeValue(Number(e.target.value))}
                className="w-full mt-6 mb-4"
                style={{
                  background: `linear-gradient(to right, rgb(44,67,113) ${rangeValue}%, #e0e0e0 ${rangeValue}%)`,
                }}
              />
              <p className="text-sm text-[#7E3AF2] bg-[#F3E8FF] p-2 rounded mt-2">
                Select your preferred credit range to unlock features and
                maximize your monthly usage.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-8 lg:mt-0 mb-4">
            Instant Credits Plan (Lifetime Access)
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <p className="font-bold text-gray-900 text-center sm:text-left">
                  Instant Credits (Lifetime)
                </p>
                <p className="text-sm text-gray-500">
                  Instant credits never expire
                </p>
              </div>
              <p className="text-gray-600 font-bold mb-4 sm:mb-0">
                {credits2.toLocaleString()} credits
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
            <hr className="my-4" />
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900">
                    Select Credits Range
                  </p>
                  <p className="text-sm text-gray-500">
                    Onetime Payment -{" "}
                    <span className="font-bold text-gray-900">
                      Save {discount2}%
                    </span>
                  </p>
                </div>
                <p className="text-gray-600 font-bold">
                  ${price2.toLocaleString()}
                </p>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={rangeValue2}
                onChange={(e) => setRangeValue2(Number(e.target.value))}
                className="w-full mt-6 mb-4"
                style={{
                  background: `linear-gradient(to right, rgb(44,67,113) ${rangeValue2}%, #e0e0e0 ${rangeValue2}%)`,
                }}
              />
              <p className="text-sm text-[#6e5acf] bg-[#EFF6FF] p-2 rounded mt-2">
                Purchase instant credits now to enjoy lifetime usage without
                expiration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
