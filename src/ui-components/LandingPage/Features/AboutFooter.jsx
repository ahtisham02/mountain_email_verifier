import React from "react";
import { Home, Briefcase, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FeaturesSection() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-14 px-5 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Unlock Advanced Features
        </h2>
        <p className="text-gray-600 mt-4">
          Explore the tools and capabilities that make our platform stand out.
        </p>
      </div>
      <div className="flex justify-center gap-10 mt-16 flex-wrap">
        <div className="text-center max-w-xs">
          <Home className="w-12 h-12 mx-auto text-[#006a43]" />
          <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">Customization</h3>
          <p className="text-gray-700">
            Tailor the platform to your needs with flexible and user-friendly settings.
          </p>
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="mt-5 bg-[#006a43] text-white font-semibold px-6 py-3 shadow-md rounded-2xl"
          >
            Learn More
          </button>
        </div>

        <div className="text-center max-w-xs">
          <Briefcase className="w-12 h-12 mx-auto text-[#006a43]" />
          <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">
            Global Reach
          </h3>
          <p className="text-gray-700">
            Expand your business globally with seamless international integration.
          </p>
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="mt-5 bg-[#006a43] text-white font-semibold px-6 py-3 shadow-md rounded-2xl"
          >
            Explore
          </button>
        </div>

        <div className="text-center max-w-xs">
          <Users className="w-12 h-12 mx-auto text-[#006a43]" />
          <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">
            Team Collaboration
          </h3>
          <p className="text-gray-700">
            Work smarter with built-in collaboration tools for teams of all sizes.
          </p>
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="mt-5 bg-[#006a43] text-white font-semibold px-6 py-3 shadow-md rounded-2xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
