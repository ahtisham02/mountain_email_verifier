import React, { useState } from "react";

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

  return (
    <div className="bg-gray-50 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Buy Credits</h2>
        <p className="text-gray-600">
          Buy credits to start email verification.
        </p>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Monthly Subscription Plan
      </h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-800">Monthly Subscription</p>
            <p className="text-sm text-gray-500">
              You can use up to {monthlyCredits.toLocaleString()} credits per
              month
            </p>
          </div>
          <p className="text-gray-600">
            {creditsPerDay.toLocaleString()} credits / day
          </p>
          <div className="text-right">
            <button className="bg-[#7E3AF2] text-white px-4 py-2 rounded-md shadow-md">
              Subscribe Now
            </button>
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-800">Select Credits Range</p>
              <p className="text-sm text-gray-500">
                Monthly Total - You save {discountPercentage}%
              </p>
            </div>
            <p className="text-gray-600">${discountedPrice.toLocaleString()}</p>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={rangeValue}
            onChange={(e) => setRangeValue(Number(e.target.value))}
            className="w-full mt-4 bg-[#7E3AF2]"
          />
          <p className="text-sm text-[#7E3AF2] bg-[#F3E8FF] p-2 rounded mt-2">
            Select your preferred credit range to unlock features and maximize
            your monthly usage.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">
        Instant Credits Plan (Lifetime Access)
      </h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-gray-800">
              Instant Credits (Lifetime)
            </p>
            <p className="text-sm text-gray-500">
              Instant credits never expire
            </p>
          </div>
          <p className="text-gray-600">{credits2.toLocaleString()} credits</p>
          <button className="bg-[#7E3AF2] text-white px-4 py-2 rounded-md shadow-md">
            Subscribe Now
          </button>
        </div>

        <hr className="my-4" />
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-800">Select Credits Range</p>
              <p className="text-sm text-gray-500">
                Onetime Payment - You save {discount2}%
              </p>
            </div>
            <p className="text-gray-600">${price2.toLocaleString()}</p>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={rangeValue2}
            onChange={(e) => setRangeValue2(Number(e.target.value))}
            className="w-full mt-4 bg-[#7E3AF2]"
          />
          <p className="text-sm text-[#6e5acf] bg-[#EFF6FF] p-2 rounded mt-2">
            Purchase instant credits now to enjoy lifetime usage without
            expiration.
          </p>
        </div>
      </div>
    </div>
  );
}
