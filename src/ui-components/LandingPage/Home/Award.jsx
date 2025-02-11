import React from "react";
import award1 from "../../../assets/Landing/award1.webp";
import award2 from "../../../assets/Landing/award2.webp";
import award3 from "../../../assets/Landing/award3.webp";
import award4 from "../../../assets/Landing/award4.webp";
import award5 from "../../../assets/Landing/award5.webp";
import award6 from "../../../assets/Landing/award6.webp";
import Comp1 from "../../../assets/Landing/comp1.svg";
import Comp2 from "../../../assets/Landing/comp2.svg";
import Comp3 from "../../../assets/Landing/comp3.svg";

export default function Award() {
  const reviews = [
    { img: Comp1, text: "2000+ reviews", stars: "★★★★★" },
    { img: Comp2, text: "2300+ reviews", stars: "★★★★☆" },
    { img: Comp3, text: "2200+ reviews", stars: "★★★☆☆" },
  ];

  return (
    <div className="p-12 flex flex-col lg:flex-row justify-center gap-12">
      <div className="bg-[#fffdf6] p-10 rounded-3xl flex-1 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-center">Awarded for Excellence</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {[award1, award2, award3, award4, award5, award6].map(
            (award, index) => (
              <img
                key={index}
                src={award}
                alt={`Award ${index + 1}`}
                className="w-32 h-40 object-contain mx-auto"
              />
            )
          )}
        </div>
      </div>

      <div className="bg-[#fffdf6] p-10 rounded-3xl flex-1 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-center">Loved by Users Everywhere</h2>
        <div className="space-y-6 w-full">
          {reviews.map((comp, index) => (
            <div key={index} className="flex items-center gap-6 w-full justify-center mt-7">
              <img
                src={comp.img}
                alt="Company logo"
                className="sm:w-24 w-20 h-16 sm:h-20 object-contain"
              />
              <div className="flex flex-col justify-center items-start">
                <span className="text-gray-900 text-lg sm:text-xl font-semibold">{comp.text}</span>
                <span className="text-green-600 text-xl sm:text-2xl">{comp.stars}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
