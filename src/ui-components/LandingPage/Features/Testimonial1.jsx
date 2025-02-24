import React from "react";
import { Rocket, ShieldCheck, Settings, BarChart, Cloud, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <Rocket size={40} />,
    title: "Boost Performance",
    description:
      "Enhance your system's efficiency with our cutting-edge optimization tools.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Advanced Security",
    description:
      "Protect your data with state-of-the-art encryption and security protocols.",
  },
  {
    icon: <Settings size={40} />,
    title: "Customizable Settings",
    description:
      "Tailor the platform to your needs with flexible and user-friendly settings.",
  },
  {
    icon: <BarChart size={40} />,
    title: "Real-Time Analytics",
    description:
      "Gain insights with real-time data and comprehensive analytics dashboards.",
  },
  {
    icon: <Cloud size={40} />,
    title: "Cloud Integration",
    description:
      "Seamlessly integrate with cloud services for scalable and reliable performance.",
  },
  {
    icon: <Users size={40} />,
    title: "Collaboration Tools",
    description:
      "Work smarter with built-in collaboration features for teams of all sizes.",
  },
];

export default function FeaturesPage() {
  const navigate = useNavigate();

  return (
    <div className="pb-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Explore Our Powerful Features
      </h1>
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
        <button
          onClick={() => {
            navigate("/home");
          }}
          className="flex items-center gap-2 px-6 py-3 bg-[#006a43] text-white font-medium rounded-2xl shadow-md"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}