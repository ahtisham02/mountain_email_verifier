import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Calendar, CreditCard, Settings } from "lucide-react";

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
        <h2 className="md:text-2xl text-xl pt-2 sm:pt- font-extrabold text-gray-900">
          Buy Credits
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Buy credits to start email verification.
        </p>
      </div>

      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Flexible Plans for Every Need
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Choose between our monthly subscription or lifetime access plans
              to get started.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Monthly Subscription Plan */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-semibold rounded-lg">
                Most Popular
              </div>
              <div className="flex items-center mb-4">
                <div className="rounded-lg bg-indigo-100 p-3 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Monthly Subscription
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Get up to{" "}
                <span className="font-bold text-gray-900">
                  {monthlyCredits.toLocaleString()}
                </span>{" "}
                credits per month with a daily usage limit of{" "}
                <span className="font-bold">
                  {creditsPerDay.toLocaleString()}
                </span>{" "}
                credits/day.
              </p>

              <div className="flex items-center justify-between mb-6">
                <p className="text-xl text-gray-700 font-medium">
                  Save {discountPercentage}%!
                </p>
                <p className="text-4xl font-bold text-indigo-600">
                  ${discountedPrice.toLocaleString()}
                </p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={rangeValue}
                onChange={(e) => setRangeValue(Number(e.target.value))}
                className="w-full h-2 rounded-full bg-gray-200 focus:ring-2 focus:ring-indigo-600"
              />
              <p className="text-sm text-indigo-700 bg-indigo-50 p-3 rounded-lg mt-4">
                Adjust the slider to customize your credit range.
              </p>

              <button
                onClick={() => handleSubscribeNow("monthly")}
                className="mt-6 w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
              >
                Subscribe Now
              </button>
            </div>

            {/* Instant Credits Plan */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute top-4 right-4 px-3 py-1 bg-purple-100 text-purple-600 text-sm font-semibold rounded-lg">
                Lifetime Deal
              </div>
              <div className="flex items-center mb-4">
                <div className="rounded-lg bg-purple-100 p-3 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Instant Credits Plan
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Purchase{" "}
                <span className="font-bold text-gray-900">
                  {credits2.toLocaleString()}
                </span>{" "}
                credits with lifetime access. Credits never expire!
              </p>

              <div className="flex items-center justify-between mb-6">
                <p className="text-xl text-gray-700 font-medium">
                  Save {discount2}%!
                </p>
                <p className="text-4xl font-bold text-purple-600">
                  ${price2.toLocaleString()}
                </p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={rangeValue2}
                onChange={(e) => setRangeValue2(Number(e.target.value))}
                className="w-full h-2 rounded-full bg-gray-200 focus:ring-2 focus:ring-purple-600"
              />
              <p className="text-sm text-purple-700 bg-purple-50 p-3 rounded-lg mt-4">
                Adjust the slider to find your perfect credit package.
              </p>

              <button
                onClick={() => handleSubscribeNow("lifetime")}
                className="mt-6 w-full py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
