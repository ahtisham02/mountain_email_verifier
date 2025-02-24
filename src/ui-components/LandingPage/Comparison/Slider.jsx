import React from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { ArrowRightCircle } from "lucide-react";

import img1 from "../../../assets/slider/sli1.svg";
import img2 from "../../../assets/slider/sli2.svg";
import img3 from "../../../assets/slider/sli3.svg";
import img4 from "../../../assets/slider/sli4.svg";
import img5 from "../../../assets/slider/sli5.webp";
import img6 from "../../../assets/slider/sli6.svg";
import img7 from "../../../assets/slider/sli1.svg";
import img8 from "../../../assets/slider/sli4.svg";

const logos = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function SLFooter() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#d7fec8] text-center pt-20 pb-12 rounded-t-[70px] md:rounded-t-[120px]">
      <div>
        <h2 className="text-2xl font-semibold mb-3 px-5 text-gray-900">
          Mountain Email Verifier stands out as the ideal solution.
        </h2>
        <h2 className="font-medium mb-8 px-5 text-gray-600">
          Mountain runs alongside more than 150 leading digital tools, from CRM to CMS, ecommerce, and more.
        </h2>
        <Marquee speed={40} pauseOnHover direction="right">
          {logos.map((logo, index) => (
            <div key={index} className="mx-6">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-28 h-28 object-contain filter grayscale brightness-75 hover:filter-none transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
        <button
          onClick={() => navigate("/contact")}
          className="mt-8 text-[#006a43] mx-auto text-lg font-semibold px-6 py-4 flex items-center gap-2"
        >
          Connect Us Now
          <ArrowRightCircle size={28} className="text-[#006a43]" />
        </button>
      </div>
    </div>
  );
}
