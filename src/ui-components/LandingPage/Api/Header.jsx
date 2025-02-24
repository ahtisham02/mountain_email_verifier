import React from "react";
import img1 from "../../../assets/download123.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#d7fec8] px-6 py-12 md:pt-20 md:pb-36 lg:pb-44 md:px-16 flex flex-col md:flex-row items-center md:justify-center text-center md:text-left md:h-[89vh] 2xl:h-[100vh]">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl lg:text-[44px] !leading-tight font-bold text-[#0b996e]">
          Developer-Friendly <br /> Email Verification API
        </h1>
        <p className="text-gray-700 !leading-normal lg:text-lg mt-4">
          Mountain Email Verifier’s robust API allows you to seamlessly
          integrate real-time email validation into your apps, sign-up forms,
          and CRMs.
        </p>
        <button
          onClick={() => {
            navigate("/home");
          }}
          className="mt-6 px-6 py-3 bg-[#006a43] shadow-md text-white rounded-2xl text-lg font-medium"
        >
          Get Your API Key
        </button>
      </div>

      <div className="mt-8 md:mt-0 md:ml-10 max-w-xl">
        <img src={img1} alt="HeaderImage" className="" />
      </div>
    </div>
  );
}
