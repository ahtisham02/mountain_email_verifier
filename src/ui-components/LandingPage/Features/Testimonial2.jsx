import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/Landing/Tes1.webp";
import img2 from "../../../assets/Landing/tes2.webp";
import img3 from "../../../assets/Landing/tes3.webp";

export default function Testimonial2() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Validate at the Point of Capture",
      text: "Prevent email bounces before they even occur. Our advanced real-time validation instantly checks emails at the moment a user signs up or submits a form, guaranteeing that your database grows only with genuine, valid addresses.",
      image: img1,
    },
    {
      title: "Clean Up Your Existing Lists",
      text: "Easily upload CSV or TXT files containing thousands—or even millions—of contacts. Our powerful system swiftly detects and filters out invalid, disposable, and catch-all addresses, allowing you to maintain a high-quality email list effortlessly.",
      image: img2,
    },
    {
      title: "Connect to the Tools You Already Love",
      text: "Seamlessly integrate with Zapier, Make, and your favorite CRMs. Mountain Email Verifier connects effortlessly to your existing workflow, and our RESTful API ensures you can add top-tier email validation to any system with ease.",
      image: img3,
    },
  ];

  return (
    <div className="mt-6 pb-10 bg-[#d7fec8]">
      <div className="space-y-14">
        {sections.slice(0, 2).map((section, index) => (
          <div
            key={index}
            className={`flex px-10 sm:px-20 flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            <div className="w-full md:w-1/2 px-2 sm:px-5 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-800">{section.text}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img src={section.image} alt={section.title} className="w-full" />
            </div>
          </div>
        ))}

        <div className="bg-[#006a43] text-center py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-white">
              Evolving to Serve You Better!
            </h2>
            <p className="mt-5 text-white">
              We're constantly enhancing our platform to bring you the best
              experience possible. Stay tuned for exciting updates and
              improvements designed with you in mind.
            </p>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="mt-10 text-[#006a43] bg-[#d7fec8] font-semibold px-6 py-4 shadow-md rounded-2xl"
            >
              Learn More
            </button>
          </div>
        </div>

        {sections.slice(2, 3).map((section, index) => (
          <div
            key={index}
            className="flex px-10 sm:px-20 flex-col md:flex-row items-center gap-8"
          >
            <div className="w-full md:w-1/2 px-2 sm:px-5 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-800">{section.text}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img src={section.image} alt={section.title} className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
