import React from "react";
import award1 from "../../../assets/Landing/award1.webp";
import award2 from "../../../assets/Landing/award2.webp";
import award3 from "../../../assets/Landing/award3.webp";
import award4 from "../../../assets/Landing/award4.webp";
import award5 from "../../../assets/Landing/award5.webp";
import award6 from "../../../assets/Landing/award6.webp";

export default function Award() {
  return (
    <div className="p-12 flex flex-col lg:flex-row justify-center gap-12">
      <div className="bg-[#fffdf6] p-10 rounded-3xl flex-1 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-center">Awarded for Excellence</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
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
    </div>
  );
}
