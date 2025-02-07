import React, { useState } from "react";
import { UploadCloud, CheckCircle, Upload } from "lucide-react";
import img from "../../../assets/3129492.jpg";
import img1 from "../../../assets/4957160.jpg";
import { useNavigate } from "react-router-dom";
import SuccessModal from "./SuccessModal";

export default function EmailVerification() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/result-details");
    setModalOpen(false);
  };

  return (
    <>
      <h2 className="px-6 pt-6 pb-1 md:text-2xl text-xl font-bold text-gray-800">
        Bulk Email Verification
      </h2>
      <p className="px-6 pb-8 text-gray-600 text-sm md:text-base">
        Quickly and accurately verify thousands of email addresses in bulk with
        minimal effort.
      </p>
      <div className="grid grid-cols-1 lg:gap-6 gap-4 pb-6 px-6">
        <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-6 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
              <CheckCircle className="inline-block text-btnBackgroundhover mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              Option 1: Direct Submit Email Addresses
            </h3>
            <div className="space-y-4 flex-grow">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Task Name
                </label>
                <input
                  type="text"
                  placeholder="Enter a name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#7E3AF2] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email Addresses
                </label>
                <textarea
                  rows="5"
                  placeholder="Enter email addresses one per line"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#7E3AF2] focus:outline-none"
                ></textarea>
              </div>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="w-full mt-4 bg-btnBackground text-white py-2 rounded-2xl hover:bg-btnBackgroundhover"
            >
              Start Verification
            </button>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <img
              src={img1}
              alt="Verification"
              className="min-[500px]:w-96 min-[500px]:h-96 w-56 h-80 sm:ml-14"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-6 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <img
              src={img}
              alt="Upload"
              className="min-[500px]:w-96 min-[500px]:h-96 w-56 h-80 sm:mr-14"
            />
          </div>

          <div className="lg:w-1/2 w-full flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
              <UploadCloud className="inline-block text-btnBackgroundhover mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              Option 2: Upload File for Verification
            </h3>
            <div className="flex justify-center mb-4">
              <UploadCloud className="text-btnBackgroundhover w-20 h-20" />
            </div>
            <p className="text-center text-sm text-gray-600 mb-6">
              Upload a TXT or CSV file to verify email addresses. TXT files
              should contain only email addresses, while CSV files can include
              multiple data columns alongside the email addresses.
            </p>
            <div className="w-full mb-4 border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center bg-slate-50 text-gray-500 hover:bg-gray-50 cursor-pointer">
              <label className="flex flex-col items-center justify-center w-full cursor-pointer">
                <Upload className="w-8 h-8 mb-2" />
                <span className="text-sm font-medium">Choose File</span>
                <input type="file" className="hidden" />
              </label>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="w-full bg-btnBackground text-white py-2 rounded-2xl hover:bg-btnBackgroundhover mt-auto"
            >
              Start Verification
            </button>
          </div>
        </div>
      </div>
    <SuccessModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={handleNavigate}
      />
    </>
  );
}
