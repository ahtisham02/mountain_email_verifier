import React from "react";

export default function SLFooter() {
  return (
    <div className="bg-[#d7fec8] rounded-t-[40px] sm:rounded-t-[90px] text-center py-12 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900">
          Subscribe now & be the first <br/> to know when we launch
        </h2>
        <div className="mt-6 flex justify-center">
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-5 py-3 bg-[#006a43] text-white font-semibold rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
        <p className="mt-5 text-gray-700">
          Stay in the loop with everything you need to know.
        </p>
      </div>
    </div>
  );
}
