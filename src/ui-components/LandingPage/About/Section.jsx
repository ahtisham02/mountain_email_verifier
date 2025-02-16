import React from "react";

export default function SLFooter() {
  return (
    <div className="bg-[#d7fec8] text-center py-14 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900">
          Learn More About Our Journey
        </h2>
        <p className="mt-5">
          Our mission is to provide innovative solutions while continuously improving based on user feedback. 
          We strive to create an exceptional experience by adapting to your needs and evolving with technology. 
          Your insights drive our progress, and we’re always eager to hear from you.
        </p>
        <button className="mt-10 bg-[#006a43] text-white font-semibold px-6 py-4 shadow-md rounded-2xl">
          Discover More About Us
        </button>
      </div>
    </div>
  );
}
