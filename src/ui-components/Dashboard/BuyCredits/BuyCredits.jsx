import React, { useState, useEffect } from "react";
import { Calendar, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../../utils/apiRequest";
import { useDispatch } from "react-redux";
import { removeUserInfo } from "../../../auth/authSlice";

export default function BuyCredits() {
  const [rangeValue, setRangeValue] = useState(0);
  const [rangeValue2, setRangeValue2] = useState(0);
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await apiRequest("get", "/api/subscriptions", {});
        if (response.data.status === "success") {
          setSubscriptionData(response.data);
        } else {
          console.error("API Error:", response.data.message);
          dispatch(removeUserInfo());
          navigate("/auth");
        }
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
        dispatch(removeUserInfo());
        navigate("/auth");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, [dispatch, navigate]);

  const lifetimePlans = subscriptionData?.data.lifetime || [];
  const monthlyPlans = subscriptionData?.data.monthly || [];

  const selectedLifetimePlan = lifetimePlans[Math.floor(rangeValue2)] || {};
  const selectedMonthlyPlan = monthlyPlans[Math.floor(rangeValue)] || {};

  const sliderProgress = (rangeValue / (monthlyPlans.length - 1)) * 100;

  const sliderBackground = `linear-gradient(90deg, #0d9a74 ${sliderProgress}%, #ddd ${sliderProgress}%)`;

  const sliderProgress2 = (rangeValue2 / (lifetimePlans.length - 1)) * 100;

  const sliderBackground2 = `linear-gradient(90deg, #6358de ${sliderProgress2}%, #ddd ${sliderProgress2}%)`;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="md:text-2xl text-xl pt-2 sm:pt-0 font-extrabold text-gray-900">
          Buy Credits
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Buy credits to start email verification.
        </p>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Flexible Plans for Every Need
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Choose between our monthly subscription or lifetime access plans
              to get started.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-[30vh]">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-[#36ab87] border-dashed rounded-full animate-spin mt-28"></div>
              </div>
            </div>
          ) : (
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
                <button
                  onClick={() =>
                    navigate("/payment", {
                      state: {
                        selectedPlan: selectedMonthlyPlan,
                        planType: "monthly",
                      },
                    })
                  }
                  className="mt-6 w-full py-2.5 bg-black text-white text-lg font-semibold rounded-2xl shadow-md transition"
                >
                  Subscribe Now
                </button>
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
                <button
                  onClick={() =>
                    navigate("/payment", {
                      state: {
                        selectedPlan: selectedLifetimePlan,
                        planType: "lifetime",
                      },
                    })
                  }
                  className="mt-6 w-full py-2.5 bg-black text-white text-lg font-semibold rounded-2xl shadow-md transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
