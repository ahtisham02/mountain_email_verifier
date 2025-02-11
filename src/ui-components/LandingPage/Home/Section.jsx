import React from "react";

export default function SLFooter() {
  return (
    <div className="bg-[#d7fec8] text-center py-14 px-5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900">
          We Value Your Feedback & Suggestions !
        </h2>
        <p className="mt-5">
          We value our customers’ feedback and have already incorporated many of
          your suggestions into our software. However, we understand that there
          is always room for improvement. Please don’t hesitate to share any
          additional ideas or feedback to help us enhance your experience.
        </p>
        <button className="mt-10 bg-[#006a43] text-white font-semibold px-6 py-4 shadow-md rounded-2xl">
          Share Your Thoughts With Us
        </button>
      </div>
    </div>
  );
}
