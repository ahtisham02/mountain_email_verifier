import React from "react";
import Comp1 from "../../../assets/Landing/comp1.svg";
import Comp2 from "../../../assets/Landing/comp2.svg";
import Comp3 from "../../../assets/Landing/comp3.svg";

export default function Award() {
  const reviews = [
    { img: Comp3, text: "2000+ reviews", stars: "★★★★★" },
    { img: Comp2, text: "2300+ reviews", stars: "★★★★☆" },
    { img: Comp1, text: "2200+ reviews", stars: "★★★☆☆" },
  ];

  return (
    <div className="px-12 pt-6 flex flex-col lg:flex-row justify-center gap-12">
      <div className="p-10 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Mountain is a top-rated email finder
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8">
          {reviews.map((comp, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={comp.img}
                alt="Company logo"
                className="sm:w-28 w-20 h-16 sm:h-28 object-contain"
              />
              <div className="flex flex-col justify-center items-start">
                <span className="text-gray-900 text-lg sm:text-xl font-semibold">
                  {comp.text}
                </span>
                <span className="text-green-600 text-xl sm:text-2xl">
                  {comp.stars}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
