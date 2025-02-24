import React from "react";
import { useNavigate } from "react-router-dom";

export default function SLFooter() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#d7fec8] text-center py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
          Get Started for Free and Elevate Your Workflow
        </h2>
        <p className="mt-6 text-lg text-gray-700">
          Experience the power of seamless deal management with our intuitive
          pipeline builder. Start today and take control of your deals with a system designed for
          efficiency and growth.
        </p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className="mt-10 bg-[#006a43] text-white font-semibold text-lg px-8 py-4 shadow-lg rounded-2xl transition-all duration-300 hover:bg-[#004d32] hover:shadow-xl"
        >
          Get Started Now
        </button>
      </div>
    </div>
  );
}
