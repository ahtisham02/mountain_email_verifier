import React from "react";

export default function SLFooter() {
  return (
    <div className="bg-[#d7fec8] rounded-t-[120px] text-center py-10 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900">
          Ready to grow with mountain?
        </h2>
        <p className="mt-5 text-lg text-gray-700">
          Empower your business with the right tools to connect with your
          audience, boost engagement, and drive meaningful growth. Whether
          you're starting fresh or scaling up, we've got you covered every step
          of the way.
        </p>
        <button className="mt-10 bg-[#006a43] text-white font-semibold px-6 py-4 shadow-md rounded-2xl">
          Sign up free
        </button>
      </div>
    </div>
  );
}
