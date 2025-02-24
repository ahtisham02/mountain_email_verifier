import React from "react";
import img1 from "../../../assets/Landing/Mimg5.jpg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#d7fec8] px-6 py-12 md:py-20 md:px-16 rounded-br-[70px] md:rounded-br-[120px] flex flex-col md:flex-row items-center md:justify-center text-center md:text-left md:h-[89vh] 2xl:h-[100vh]">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Verify Your Emails <br /> and Reach Real People
        </h1>
        <p className="text-gray-700 mt-4">
          Mountain Email Verifier helps you clean your lists, improve
          deliverability, and protect your sender reputation—instantly.
        </p>
        <button
          onClick={() => {
            navigate("/aboutus");
          }}
          className="mt-6 px-5 py-4 bg-[#006a43] shadow-md text-white rounded-2xl text-lg font-medium"
        >
          Get Started for Free
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
