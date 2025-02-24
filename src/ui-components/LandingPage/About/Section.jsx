import React from "react";
import { useNavigate } from "react-router-dom";

export default function SLFooter() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#d7fec8] text-center py-14 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900">
          Learn More About Our Journey
        </h2>
        <p className="mt-5">
          We started as marketers frustrated with bounce rates and invalid
          leads. Determined to fix the problem, we built a service that
          prioritizes accuracy, speed, and user-friendly design.
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="mt-10 bg-[#006a43] text-white font-semibold px-6 py-4 shadow-md rounded-2xl"
        >
          Discover More About Us
        </button>
      </div>
    </div>
  );
}
