import React from "react";
import { Mail, Brain, Workflow, BarChart3, Users, Globe } from "lucide-react";

const features = [
  {
    icon: <Mail size={40} />,
    title: "Signup forms",
    description:
      "Grow your email list and manage information requests with easy-to-embed custom forms.",
  },
  {
    icon: <Brain size={40} />,
    title: "AI for email",
    description:
      "Use AI to create better email content and send campaigns at the best time for your contacts.",
  },
  {
    icon: <Workflow size={40} />,
    title: "Marketing automation",
    description:
      "From welcome series to abandoned carts, automate marketing campaigns to reach targets faster.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Analytics & Reports",
    description:
      "Track performance with detailed analytics and improve your email strategy.",
  },
  {
    icon: <Users size={40} />,
    title: "Customer Segmentation",
    description:
      "Segment your audience for more personalized and effective marketing campaigns.",
  },
  {
    icon: <Globe size={40} />,
    title: "Global Reach",
    description:
      "Expand your audience globally with multilingual and region-specific email strategies.",
  },
];

export default function MarketingFeatures() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Top Reasons
      </h1>
      <h2 className="text-center text-gray-700 mb-8">
        Harness the Power of Technology and Innovation with Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6">
            <div className="flex justify-center text-[#46af84] mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
