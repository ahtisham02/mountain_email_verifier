import React from "react";
import { UploadCloud, CheckCircle } from "lucide-react";
import img from "../../../assets/img/bg.svg";

export default function EmailVerification() {
  return (
    <div className="bg-gray-50">
      <h2 className="px-6 pt-6 pb-1 text-2xl font-bold text-gray-800">
        Bulk Email Verification
      </h2>
      <p className="px-6 pb-8 text-gray-600">
        Quickly and accurately verify thousands of email addresses in bulk with
        minimal effort.
      </p>
      <div className="grid grid-cols-1 lg:gap-6 gap-4 pb-6 px-6">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              <CheckCircle className="inline-block text-[#7E3AF2] mr-2" />
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
                  rows="4"
                  placeholder="Enter email addresses one per line"
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[#7E3AF2] focus:outline-none"
                ></textarea>
              </div>
            </div>
            <button className="w-full mt-4 bg-[#7E3AF2] text-white py-2 rounded-lg hover:bg-purple-800">
              Start Verification
            </button>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <img src={img} alt="Verification" className="w-full h-80 ml-14 -mb-10" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <img src={img} alt="Upload" className="w-full h-80 mr-14 -mb-10" />
          </div>

          <div className="lg:w-1/2 w-full flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              <UploadCloud className="inline-block text-[#7E3AF2] mr-2" />
              Option 2: Upload File for Verification
            </h3>
            <div className="flex justify-center mb-4">
              <UploadCloud className="text-[#7E3AF2] w-20 h-20" />
            </div>
            <p className="text-center text-sm text-gray-600 mb-6">
              Upload a TXT or CSV file to verify email addresses. TXT files should
              contain only email addresses, while CSV files can include multiple
              data columns alongside the email addresses.
            </p>
            <div className="w-full mb-4">
              <input
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-white file:text-[#7E3AF2] hover:file:bg-gray-100"
              />
            </div>
            <button className="w-full bg-[#7E3AF2] text-white py-2 rounded-lg hover:bg-purple-800 mt-auto">
              Start Verification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}