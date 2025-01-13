import React from "react";
import img1 from "../../../assets/logos/148.jpg";
import img2 from "../../../assets/logos/150.jpg";
import img3 from "../../../assets/logos/2202233.jpg";
import img4 from "../../../assets/logos/7997962.jpg";
import img5 from "../../../assets/logos/95.jpg";
import img6 from "../../../assets/logos/9929102.jpg";
import img7 from "../../../assets/logos/OHGDPK0.jpg";

export default function Company() {
  const imagesRow1 = [img1, img2, img3, img4];
  const imagesRow2 = [img5, img6, img7];

  return (
    <div className="bg-white p-8 m-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Trusted By Companies
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Mountain Email Verifier ensures precise, reliable, and fast email
        verification, trusted by leading companies worldwide.
      </p>
      <div className="flex flex-col items-center">
        <div className="flex space-x-4">
          {imagesRow1.map((image, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md w-24 h-24 flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Logo ${index + 1}`}
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-4 mt-4">
          {imagesRow2.map((image, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md w-24 h-24 flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Logo ${index + 5}`}
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-center mt-6">
          Experience unmatched email validation services, ensuring
          dependability, affordability, and 
        </p>
        <p className="text-gray-600 text-center mb-4">superior accuracy for businesses
        everywhere.</p>
        <button
          className="px-6 py-2 rounded-md text-white bg-btnBackground hover:bg-btnBackgroundhover"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
