import React from "react";
import { Mail, Facebook, MapPin, Worm } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-slate-50 border border-gray-300 p-4 sm:p-10 rounded-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center space-x-3 text-[#0b996f] font-bold text-2xl w-full mt-12 mb-8">
            <div className="h-10 w-10 bg-[#0b996f] rounded-full hidden min-[450px]:flex items-center justify-center">
              <Worm className="h-6 w-6 text-white" />
            </div>
            <span>Mountain Email Finder</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-black">
            Contact Our Support Team
          </h2>
          <p className="text-gray-800 mb-6">
            We are here to help! Tell us how we can assist you, and we will get
            in touch as soon as possible.
          </p>
          <h3 className="text-xl font-semibold text-black mb-4">
            Support Options
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-black" />
              <span className="text-gray-800">support@yourdomain.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Facebook className="text-black" />
              <span className="text-gray-800">Facebook.com/YourPage</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-black" />
              <span className="text-gray-800">Your Address, City, Country</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">
            Send Us A Message
          </h2>
          <p className="text-gray-800 mb-6">
            If you have any questions, please fill out the form below, and our
            team will respond as soon as possible.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-3 border rounded-lg focus:outline-green-500"
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full p-3 border rounded-lg focus:outline-green-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded-lg focus:outline-green-500 h-28"
            ></textarea>
            <button className="w-full bg-green-600 text-white py-3 rounded-2xl hover:bg-green-700 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
