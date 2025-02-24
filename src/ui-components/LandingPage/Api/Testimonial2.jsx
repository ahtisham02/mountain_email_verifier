import React from "react";
import img1 from "../../../assets/Landing/sl1.webp";
import img2 from "../../../assets/Landing/sl5.webp";

export default function Testimonial2() {
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
  ];

  return (
    <div className="my-10 lg:my-20">
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
              <img src={section.image} alt={section.title} className="border-2 object-cover border-[#006a43] rounded-br-[120px] rounded-tl-[120px] h-[310px] w-[440px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
