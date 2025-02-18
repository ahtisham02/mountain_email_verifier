import React from "react";
import Marquee from "react-fast-marquee";

import img1 from "../../../assets/slider/sli1.svg";
import img2 from "../../../assets/slider/sli2.svg";
import img3 from "../../../assets/slider/sli3.svg";
import img4 from "../../../assets/slider/sli4.svg";
import img5 from "../../../assets/slider/sli5.webp";
import img6 from "../../../assets/slider/sli6.svg";

const logos = [img1, img2, img3, img4, img5, img6];

export default function Slider() {
  return (
    <div className="bg-white p-8 max-w-3xl mx-auto flex flex-col items-center w-full overflow-hidden">
      <div className="text-center w-full my-8">
        <h2 className="text-lg font-semibold">
          Join 500,000+ customers around the world who trust Mountain
        </h2>
      </div>
      <Marquee gradient={true} gradientWidth={50} speed={50} pauseOnHover>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-6"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-20 h-20 object-contain filter grayscale brightness-75 hover:filter-none transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
