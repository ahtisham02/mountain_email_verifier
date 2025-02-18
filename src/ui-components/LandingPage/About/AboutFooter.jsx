import React from "react";
import { Headphones, Rocket, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SLFooter() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-14 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Learn More About Mountain Email Finder
        </h2>
      </div>
      <div className="flex justify-center gap-10 mt-16 flex-wrap">
        <div className="text-center max-w-xs">
          <Headphones className="w-12 h-12 mx-auto text-[#006a43]" />
          <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">Support</h3>
          <p className="text-gray-700">
            Need assistance? Our dedicated support team is here to help with any
            questions or issues you may have.
          </p>
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="mt-5 bg-[#006a43] text-white font-semibold px-6 py-3 shadow-md rounded-2xl"
          >
            Contact us
          </button>
        </div>

        <div className="text-center max-w-xs">
          <Rocket className="w-12 h-12 mx-auto text-[#006a43]" />
          <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">
            Career Opportunities
          </h3>
          <p className="text-gray-700">
            Looking to grow your career? Join our team and be part of an
            innovative and dynamic work environment.
          </p>
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="mt-5 bg-[#006a43] text-white font-semibold px-6 py-3 shadow-md rounded-2xl"
          >
            Apply now
          </button>
        </div>

        <div className="text-center max-w-xs">
          <Megaphone className="w-12 h-12 mx-auto text-[#006a43]" />
          <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">
            Press & Media
          </h3>
          <p className="text-gray-700">
            Stay updated with our latest press releases and media inquiries. Get
            in touch for collaborations.
          </p>
          <button
            onClick={() => {
              navigate("");
            }}
            className="mt-5 bg-[#006a43] text-white font-semibold px-6 py-3 shadow-md rounded-2xl"
          >
            About us
          </button>
        </div>
      </div>
    </div>
  );
}
