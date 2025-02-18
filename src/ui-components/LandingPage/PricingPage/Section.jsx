import React from "react";
import { useNavigate } from "react-router-dom";

export default function SLFooter() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#d7fec8] text-center py-14 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900">
          Don’t see your question answered here?
        </h2>
        <p className="mt-5">
          We're here to help! If you have any unanswered questions, don’t
          hesitate to reach out. Our team is happy to provide the information
          and support you need.
        </p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className="mt-10 bg-[#006a43] text-white font-semibold px-6 py-4 shadow-md rounded-2xl"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}
