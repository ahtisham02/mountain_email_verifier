import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import img1 from "../../../assets/Landing/Mimg1.jpg";
import img2 from "../../../assets/Landing/Mimg2.jpg";
import img3 from "../../../assets/Landing/Mimg3.jpg";
import img4 from "../../../assets/Landing/Mimg4.jpg";

const features = [
  {
    title: "Design your email in minutes",
    content:
      "Quickly create professional emails with our intuitive drag-and-drop editor. Customize templates, add images, and craft compelling messages effortlessly. Whether you're a beginner or an expert, our tools make email design easy and effective.",
    image: img1,
  },
  {
    title: "Create better content faster with AI",
    content:
      "Leverage AI-powered tools to generate high-converting email copy effortlessly. Our intelligent system helps you craft subject lines, body text, and CTAs that engage your audience and boost conversion rates, saving you time and effort.",
    image: img2,
  },
  {
    title: "Deliver straight to the inbox",
    content:
      "Ensure high deliverability rates with our optimized sending infrastructure. Avoid spam folders, reach your audience effectively, and track real-time email performance with detailed analytics to maximize your email marketing success.",
    image: img3,
  },
  {
    title: "Analyze the results with detailed statistics",
    content:
      "Gain insights into email performance and optimize future campaigns. Track open rates, click-through rates, and conversions with our in-depth analytics. Understand what works best for your audience and improve engagement with data-driven decisions.",
    image: img4,
  },
];

export default function MarketingFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-16 bg-[#e8fedf] px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Services
      </h1>
      <h2 className="text-center text-gray-700 mb-8">
        Elevate Your Business With Our Powerful Software Solutions
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 lg:pl-10">
          {features.map((feature, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className={`w-full flex justify-between items-center py-4 text-lg font-semibold transition-all duration-300 ${
                  activeIndex === index
                    ? "text-[#0b996e] text-xl pl-3 rounded-md"
                    : "text-gray-900"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {feature.title}
                <ChevronDown
                  className={`transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeIndex === index && (
                <p className="pb-4 text-gray-700 px-3">{feature.content}</p>
              )}
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={features[activeIndex].image}
            alt="Feature Visual"
            className="w-full max-w-md h-[400px] rounded-2xl border border-[#0b996e]"
          />
        </div>
      </div>
    </div>
  );
}
