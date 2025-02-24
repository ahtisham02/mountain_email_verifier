import React from "react";
import { ArrowDownCircle } from "lucide-react";

const features = [
  {
    title: "Step 1",
    description:
      "Quickly expand your email list with seamless, customizable forms that integrate effortlessly into your website.",
  },
  {
    title: "Step 2",
    description:
      "Utilize AI-driven insights to craft compelling email content, personalize outreach, and optimize send times.",
  },
  {
    title: "Step 3",
    description:
      "Streamline communication with automated email workflows for onboarding, promotions, and follow-ups.",
  },
];

export default function MarketingFeatures() {
  return (
    <div className="pb-10 lg:pt-20 pt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">
        Start Using Mountain Email Finder
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-left p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-800 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="flex items-center gap-2 px-6 py-3 bg-[#006a43] text-white font-medium rounded-2xl shadow-md"
        >
          Get Your API Key
          <ArrowDownCircle size={18} className="mt-0.5" />
        </button>
      </div>
    </div>
  );
}
