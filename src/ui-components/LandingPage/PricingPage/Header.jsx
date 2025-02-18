import React, { useState } from "react";
import { CheckCircle, Handshake, Users, Building2 } from "lucide-react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Gold",
      price: { monthly: "$0/mo", yearly: "$0/mo" },
      billed: {
        monthly: "",
        yearly: { oldPrice: "", newPrice: "Forever Free" },
      },
      description:
        "Get started with the essential tools for selling online and in person. Perfect for beginners.",
      features: ["5 product listings", "1 image per product", "Basic analytics", "Community support"],
      buttonColor: "bg-[#94a3eb]",
      label: "Free",
      icon: <Handshake className="w-8 h-8 text-gray-500" />,
    },
    {
      name: "Platinum",
      price: { monthly: "$15/mo", yearly: "$12/mo" },
      description:
        "Ideal for growing businesses that need more inventory management and shipping flexibility.",
      billed: {
        monthly: "",
        yearly: { oldPrice: "$180", newPrice: "$144 Annually" },
      },
      features: ["50 product listings", "5 images per product", "Advanced analytics", "Priority support"],
      buttonColor: "bg-[#7dd8c7]",
      label: "Save 20%",
      icon: <Users className="w-8 h-8 text-gray-500" />,
    },
    {
      name: "Diamond",
      price: { monthly: "$30/mo", yearly: "$24/mo" },
      description:
        "Comprehensive support for scaling businesses with advanced product management tools.",
      billed: {
        monthly: "",
        yearly: { oldPrice: "$280", newPrice: "$244 Annually" },
      },
      features: ["500 product listings", "25 images per product", "AI-powered insights", "Dedicated account manager"],
      buttonColor: "bg-[#4ade80]",
      label: "Save 20%",
      icon: <Building2 className="w-8 h-8 text-gray-500" />,
    },
  ];

  return (
    <div className="bg-[#d7fec8] min-h-screen py-14 px-4 text-gray-900 flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-5">
          Choose a plan that's right for you
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Trusted by small businesses worldwide. No listing fees, hidden fees, or unnecessary data-sharing practices.
        </p>
      </div>
      <div className="bg-gray-50 p-1 rounded-full shadow-md flex items-center">
        <button
          className={`px-6 py-2 rounded-full ${
            billingCycle === "monthly" ? "bg-black text-white" : "text-black"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-6 py-2 rounded-full ${
            billingCycle === "yearly" ? "bg-black text-white" : "text-black"
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Annually (Save 20%)
        </button>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-lg relative flex flex-col items-center text-center"
          >
            {plan.label && (
              <div className="absolute top-0 right-0 bg-black text-white text-xs px-3 py-2 rounded-tr-xl rounded-bl-xl">
                {plan.label}
              </div>
            )}
            <div className="my-4">{plan.icon}</div>
            <h3 className="text-[20px] font-semibold mb-3">{plan.name}</h3>
            <p className="text-4xl font-semibold mb-2">
              {plan.price[billingCycle]}
            </p>
            {plan.billed && plan.billed[billingCycle] && (
              <p className="text-[15px] text-gray-500 mb-2">
                {plan.billed[billingCycle].oldPrice && (
                  <span>
                    Billed <span className="line-through">{plan.billed[billingCycle].oldPrice}</span>
                  </span>
                )}
                {plan.billed[billingCycle].newPrice && (
                  <span className="ml-1">{plan.billed[billingCycle].newPrice}</span>
                )}
              </p>
            )}
            <p className="text-gray-900 text-lg mt-3 px-4">{plan.description}</p>
            <ul className="mt-5 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" /> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full px-6 py-3 rounded-md text-white ${plan.buttonColor} font-bold`}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
