import React, { useState, useEffect } from "react";
import { Calendar, CreditCard } from "lucide-react";
import apiRequest from "../../../utils/apiRequest";

export default function BuyCredits() {
  const [rangeValue, setRangeValue] = useState(0);
  const [rangeValue2, setRangeValue2] = useState(0);
  const [subscriptionData, setSubscriptionData] = useState(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await apiRequest("get", "/api/subscriptions", {});
        if (response.data.status === "success") {
          setSubscriptionData(response.data);
        } else {
          console.error("API Error:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchSubscriptions();
  }, []);

  const lifetimePlans = subscriptionData?.data.lifetime || [];
  const monthlyPlans = subscriptionData?.data.monthly || [];

  const selectedLifetimePlan = lifetimePlans[Math.floor(rangeValue2)] || {};
  const selectedMonthlyPlan = monthlyPlans[Math.floor(rangeValue)] || {};

  const sliderProgress = (rangeValue / (monthlyPlans.length - 1)) * 100;

  const sliderBackground = `linear-gradient(90deg, #0d9a74 ${sliderProgress}%, #ddd ${sliderProgress}%)`;

  const sliderProgress2 = (rangeValue2 / (lifetimePlans.length - 1)) * 100;

  const sliderBackground2 = `linear-gradient(90deg, #6358de ${sliderProgress2}%, #ddd ${sliderProgress2}%)`;

  return (
    <div className="bg-[#d7fec8] min-h-screen py-14 px-4 text-gray-900 flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-5">
          Pricing That Scales With You
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Whether you’re a startup or an enterprise, we’ve got a plan that fits
          your needs. Only pay for the verifications you use—no hidden fees.
        </p>
      </div>

      <div className="py-10 sm:px-20 lg:px-28 xl:px-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#d7fec8] text-[#0b9973] text-sm font-semibold rounded-lg">
                Most Popular
              </div>
              <div className="flex items-center mb-4">
                <div className="rounded-lg bg-[#d7fec8] p-3 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#0b9973]" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Monthly Subscription
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Get{" "}
                <span className="font-bold text-gray-900">
                  {Math.floor(selectedMonthlyPlan.credits_per_month)}
                </span>{" "}
                credits per month with a daily limit of{" "}
                <span className="font-bold">
                  {Math.floor(selectedMonthlyPlan.credits_per_day)}
                </span>{" "}
                credits/day.
              </p>
              <div className="flex items-center justify-between mb-6">
                <p className="text-xl text-gray-700 font-medium">
                  Save{" "}
                  <span className="text-[#0b9973]">
                    {selectedMonthlyPlan.discount}%!
                  </span>
                </p>
                <p className="text-4xl font-bold text-[#0b9973]">
                  ${selectedMonthlyPlan.price}
                </p>
              </div>
              <input
                type="range"
                min="0"
                max={monthlyPlans.length - 1}
                value={rangeValue}
                onChange={(e) => setRangeValue(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none"
                style={{
                  background: sliderBackground,
                  transition: "background 0.1s ease",
                }}
              />

              <p className="text-sm text-[#0b9973] bg-[#d7fec8] p-3 rounded-lg mt-4">
                Adjust the slider to customize your credit range.
              </p>
            </div>

            <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#efeefc] text-[#6358DE] text-sm font-semibold rounded-lg">
                Lifetime Deal
              </div>
              <div className="flex items-center mb-4">
                <div className="rounded-lg bg-[#efeefc] p-3 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-[#6358DE]" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Instant Credits Plan
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Purchase{" "}
                <span className="font-bold text-gray-900">
                  {Math.floor(selectedLifetimePlan.credits)}
                </span>{" "}
                credits with lifetime access. Credits never expire!
              </p>
              <div className="flex items-center justify-between mb-6">
                <p className="text-xl text-gray-700 font-medium">
                  Save{" "}
                  <span className="text-[#6358DE]">
                    {selectedLifetimePlan.discount}%!
                  </span>
                </p>
                <p className="text-4xl font-bold text-[#6358DE]">
                  ${selectedLifetimePlan.price}
                </p>
              </div>
              <input
                type="range"
                min="0"
                max={lifetimePlans.length - 1}
                value={rangeValue2}
                onChange={(e) => setRangeValue2(Number(e.target.value))}
                className="w-full h-2 rounded-full bg-gray-200"
                style={{
                  background: sliderBackground2,
                  transition: "background 0.1s ease",
                }}
              />
              <p className="text-sm text-[#6358DE] bg-[#efeefc] p-3 rounded-lg mt-4">
                Adjust the slider to find your perfect credit package.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
