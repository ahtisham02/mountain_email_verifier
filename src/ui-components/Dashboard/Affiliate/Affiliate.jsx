import React from "react";
import {
  Banknote,
  Bell,
  Facebook,
  HelpCircle,
  Linkedin,
  MessageCircle,
  Shapes,
  Twitter,
} from "lucide-react";
import img from "../../../assets/rb_2148899114.png";

export default function Affiliate() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="md:text-2xl text-xl pt-2 sm:pt-0 font-bold text-gray-800">
            Earn Credits (Affiliate Program)
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Start earning free credits by sharing our service with your friends,
            colleagues and subscribers.
          </p>
        </div>
      </div>
      <div className="mb-6 bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-6">
        <div className="flex items-center pb-3 mb-5 border-b border-gray-200">
          <Bell className="text-btnBackgroundhover mr-2 w-5 h-5 sm:w-6 sm:h-6" />
          <h3 className="sm:text-lg text-base font-bold text-gray-800">
            Notifications
          </h3>
        </div>
        <p className="text-gray-600 text-sm sm:text-base">
          You have <span className="font-bold">29 affiliate(s)</span> that are
          eligible.
        </p>
        <a
          href="/"
          className="text-btnBackgroundhover hover:underline mt-2 inline-block text-sm sm:text-base"
        >
          Preview affiliate payments
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-6">
          <div className="sm:flex sm:justify-between sm:items-center border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center mb-4 sm:mb-0">
              <Shapes className="text-btnBackgroundhover mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              <h3 className="sm:text-lg text-base font-bold text-gray-800">
                Your Earning Statistics
              </h3>
            </div>
            <select className="text-gray-600 px-3 py-2 text-sm sm:text-base rounded-md border border-gray-300 bg-white shadow-sm hover:border-gray-400 focus:ring-2 focus:ring-[#A855F7] focus:outline-none">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>All time</option>
            </select>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 text-sm sm:text-base">
                Total Referred Users:{" "}
              </p>
              <p className="sm:text-lg text-base font-bold">0 Users</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 text-sm sm:text-base">Users Reg: </p>
              <p className="sm:text-lg text-base font-bold">0 Credits</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 text-sm sm:text-base">
                Direct Referral:{" "}
              </p>
              <p className="sm:text-lg text-base font-bold">0 Credits</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 text-sm sm:text-base">
                Indirect Referral:{" "}
              </p>
              <p className="sm:text-lg text-base font-bold">0 Credits</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 text-sm sm:text-base">
                Total Earned Credits:{" "}
              </p>
              <p className="sm:text-lg text-base font-bold">0 Credits</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <p className="text-gray-600 text-sm sm:text-base">Affiliates</p>
              <p className="sm:text-lg text-base font-bold">1 User</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-6">
          <div className="flex items-center pb-4 border-b border-gray-200">
            <HelpCircle className="text-btnBackground mr-2 w-5 h-5 sm:w-6 sm:h-6" />
            <h3 className="sm:text-lg text-base font-bold text-gray-800">
              Need help?
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <img
              src={img}
              alt="Help"
              className="sm:w-[50%] xl:w-[35%] 2xl:w-[32%] min-[450px]:h-60 h-52 rounded mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="text-center sm:text-left">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Need help setting up Mountain Email Finder or have any questions
                about the plugin?
              </p>
              <button className="bg-btnBackground hover:bg-btnBackgroundhover text-white text-sm sm:text-base px-4 py-2 rounded-2xl">
                Open a support ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl mt-6 border-[1px] border-[#e8e8e8] py-4 px-3 min-[450]::p-6">
        <div className="flex items-center border-b mb-4 pb-4 border-gray-200">
          <Banknote className="text-btnBackgroundhover mr-2 w-5 h-5 sm:w-6 sm:h-6" />
          <h3 className="sm:text-lg text-base font-bold text-gray-800">
            Your Affiliate Links
          </h3>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm sm:text-base font-semibold text-gray-700">
            Product Description Page
          </label>
          <div className="flex items-center mb-4">
            <input
              className="flex-1 border border-gray-300 rounded-lg sm:p-2 p-1.5 text-sm sm:text-base text-gray-800"
              value="https://www.reoon.com/email-verifier/?inv=g2mgsihm"
              readOnly
            />
            <button className="ml-0.5 min-[450px]:ml-2 bg-btnBackground hover:bg-btnBackgroundhover text-white rounded-2xl whitespace-nowrap p-1 text-sm sm:text-base sm:px-4 sm:py-2">
              Copy Link
            </button>
          </div>

          <label className="block mb-1 text-sm sm:text-base font-semibold text-gray-700">
            Registration Page
          </label>
          <div className="flex items-center mb-4">
            <input
              className="flex-1 border border-gray-300 rounded-lg sm:p-2 p-1.5 text-sm sm:text-base text-gray-800"
              value="https://emailverifier.reoon.com/register/?inv=g2mgsihm"
              readOnly
            />
            <button className="ml-0.5 min-[450px]:ml-2 bg-btnBackground hover:bg-btnBackgroundhover whitespace-nowrap text-white rounded-2xl p-1 text-sm sm:text-base sm:px-4 sm:py-2">
              Copy Link
            </button>
          </div>
        </div>

        <p className="text-center font-semibold text-gray-700 my-3">
          Share the Links with Your Friends
        </p>
        <div className="flex justify-center sm:space-x-4 flex-wrap">
          <button className="flex items-center bg-blue-500 text-white rounded-full px-4 py-2 w-full sm:w-auto mb-2 sm:mb-0">
            <Facebook className="w-5 h-5 mr-2" />
            Facebook
          </button>
          <button className="flex items-center bg-blue-400 text-white rounded-full px-4 py-2 w-full sm:w-auto mb-2 sm:mb-0">
            <Twitter className="w-5 h-5 mr-2" />
            Twitter
          </button>
          <button className="flex items-center bg-blue-600 text-white rounded-full px-4 py-2 w-full sm:w-auto mb-2 sm:mb-0">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </button>
          <button className="flex items-center bg-green-500 text-white rounded-full px-4 py-2 w-full sm:w-auto mb-2 sm:mb-0">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
