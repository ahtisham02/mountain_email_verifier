import React from "react";
import img1 from "../../../assets/Landing/Mimg3.jpg";

export default function Header() {
  return (
    <div className="bg-[#d7fec8] px-6 py-12 md:py-20 md:px-16 rounded-br-[70px] md:rounded-br-[120px] flex flex-col md:flex-row items-center md:justify-center text-center md:text-left md:h-[89vh] 2xl:h-[100vh]">
      <div className="max-w-lg lg:px-10 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          How may we assist you <br /> with your needs today?
        </h1>
        <p className="text-gray-700 mt-4">
          For any press, media, or public relations inquiries, please feel free
          to contact us at:{" "}
        </p>
        <button className="mt-6 px-5 py-4 bg-[#006a43] shadow-md text-white rounded-2xl text-lg font-medium">
          support@mountainverifier.com
        </button>
      </div>

      <div className="mt-8 md:mt-0 md:ml-10 max-w-xl">
        <img
          src={img1}
          alt="HeaderImage"
          className="rounded-2xl border border-[#0b996e] h-[330px] w-[400px]"
        />
      </div>
    </div>
  );
}
