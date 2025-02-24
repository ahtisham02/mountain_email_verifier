import React from "react";
import { Workflow, BarChart3, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <Workflow size={40} />,
    title: "Upload or Integrate",
    description:
      "Drag and drop your email list or use our API for automated checks.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Scan & Validate",
    description:
      "Our system identifies invalid, disposable, or risky addresses.",
  },
  {
    icon: <Globe size={40} />,
    title: "Review & Optimize",
    description:
      "Download a clean list and watch your deliverability rates rise.",
  },
];

export default function MarketingFeatures() {
  const navigate = useNavigate()

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        How It Works
      </h1>
      <h2 className="text-center text-gray-800 mb-8">
        How Mountain Email Verifier Works
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
            <p className="text-gray-800 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
        <div className="flex justify-center items-center w-full mt-10">
          <button onClick={() => {navigate('/home')}} className="flex items-center gap-2 px-6 py-3 bg-[#006a43] text-white font-medium rounded-2xl shadow-md">
            Start Verifying Now
          </button>
        </div>
    </div>
  );
}
