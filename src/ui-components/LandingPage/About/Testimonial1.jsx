import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const features = [
  {
    title: "Signup Forms",
    description:
      "Easily grow your email list using customizable forms that seamlessly integrate with your website pages.",
  },
  {
    title: "AI for Email",
    description:
      "Leverage AI-powered tools to optimize email content, personalize campaigns, and send emails at the perfect time.",
  },
  {
    title: "Marketing Automation",
    description:
      "Automate email sequences for onboarding, promotions, & follow-ups, ensuring timely engagement with your audience.",
  },
  {
    title: "Analytics & Reports",
    description:
      "Gain detailed insights into email performance, track open rates, & optimize campaigns with data-driven decisions.",
  },
  {
    title: "Customer Segmentation",
    description:
      "Segment your audience into targeted, allowing for highly personalized & more effective email marketing campaigns.",
  },
  {
    title: "Global Reach",
    description:
      "Expand your email worldwide with multilingual support and geo-targeted strategies tailored for global audiences.",
  },
  {
    title: "Advanced Personalization",
    description:
      "Use dynamic content to personalize emails based on user behavior, increasing engagement and conversion rates.",
  },
  {
    title: "A/B Testing",
    description:
      "Test different subject lines, content, and layouts to determine what resonates best with your audience.",
  },
  {
    title: "Email Deliverability Tools",
    description:
      "Improve inbox placement with spam testing, monitoring, & advanced deliverability optimization techniques.",
  },
];

export default function MarketingFeatures() {
  const [showMore, setShowMore] = useState(false);

  const toggleFeatures = () => setShowMore(!showMore);

  return (
    <div className="pb-10 pt-5 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">
        Email Finder Made Easy
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {features.slice(0, 6).map((feature, index) => (
          <div key={index} className="text-left p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-800 mt-2">{feature.description}</p>
          </div>
        ))}
        {showMore &&
          features.slice(6, 9).map((feature, index) => (
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
          onClick={toggleFeatures}
          className="flex items-center gap-2 px-6 py-3 bg-[#006a43] text-white font-medium rounded-2xl shadow-md"
        >
          {showMore ? "Show Less Features" : "See More Features"}
          {showMore ? <ChevronUp size={18} className="mt-0.5" /> : <ChevronDown size={18} className="mt-0.5" />}
        </button>
      </div>
    </div>
  );
}
