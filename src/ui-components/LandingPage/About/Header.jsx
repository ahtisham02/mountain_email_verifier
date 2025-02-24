import React from "react";
import {
  MdOutlineExplore,
  MdOutlineHandshake,
  MdOutlineStar,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between h-auto md:h-[88vh] bg-[#d7fec8] px-6 md:px-12 py-12 md:py-16 text-center md:text-left rounded-br-[60px] md:rounded-br-[120px]">
      <div className="max-w-lg">
        <h1 className="text-4xl xl:text-nowrap font-extrabold mb-4 md:mb-6 text-[#0b996e]">
          About Mountain Email Verifier
        </h1>
        <h2 className="text-xl md:text-[23px] font-semibold mb-3 md:mb-4">
          From Marketers to Solution Builders
        </h2>
        <p className="text-base md:text-[17.5px] mb-4 md:mb-6">
          At Mountain Email Verifier, we believe every email sent should reach a
          real person. Our mission is to make email verification simple, fast,
          and reliable for businesses of all sizes.
        </p>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="px-6 py-3 bg-[#055a3c] text-white text-[17px] font-semibold rounded-lg shadow-lg hover:scale-105 transition"
          >
            Learn More
          </button>
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="px-6 py-3 border-2 border-[#055a3c] text-[#055a3c] text-[17px] font-semibold rounded-lg shadow-lg hover:bg-[#055a3c] hover:text-white transition"
          >
            Get in Touch
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-3xl mt-10 md:mt-0 lg:hidden md:block flex flex-col items-center">
        <div className="relative flex flex-col gap-6 w-full">
          <div className="bg-[#b2f5ea] text-[#055a3c] p-6 rounded-full shadow-lg flex items-center w-full md:w-auto">
            <MdOutlineExplore size={40} className="mr-4" />
            <div className="text-center w-full">
              <h2 className="text-xl md:text-2xl font-bold">Our Vision</h2>
              <p className="text-sm">
                Exploring beyond limits to innovate the impossible.
              </p>
            </div>
          </div>

          <div className="bg-[#c7d2fe] text-[#055a3c] p-6 rounded-full shadow-lg flex items-center w-full md:w-auto">
            <MdOutlineHandshake size={40} className="mr-4" />
            <div className="text-center w-full">
              <h2 className="text-xl md:text-2xl font-bold">Collaboration</h2>
              <p className="text-sm">
                Building bridges through strong, meaningful partnerships.
              </p>
            </div>
          </div>

          <div className="bg-[#fef08a] text-black p-6 rounded-full shadow-lg flex items-center w-full md:w-auto">
            <MdOutlineStar size={40} className="mr-4" />
            <div className="text-center w-full">
              <h2 className="text-xl md:text-2xl font-bold">Excellence</h2>
              <p className="text-sm">
                Striving for brilliance in every endeavor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:block hidden max-w-3xl">
        <div className="absolute top-10 left-10 bg-[#b2f5ea] text-[#055a3c] p-6 rounded-full shadow-lg flex items-center space-x-4">
          <MdOutlineExplore size={50} />
          <div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="text-sm">
              Exploring beyond limits to innovate the impossible.
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 bg-[#c7d2fe] text-[#055a3c] p-6 rounded-full shadow-lg flex items-center space-x-4">
          <MdOutlineHandshake size={50} />
          <div>
            <h2 className="text-2xl font-bold">Collaboration</h2>
            <p className="text-sm">
              Building bridges through strong, meaningful partnerships.
            </p>
          </div>
        </div>

        <div className="absolute w-[75%] top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#fef08a] text-black p-6 rounded-full shadow-lg flex items-center space-x-4">
          <MdOutlineStar size={50} />
          <div>
            <h2 className="text-2xl font-bold">Excellence</h2>
            <p className="text-sm">
              Striving for brilliance in every endeavor.Exploring Limits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
