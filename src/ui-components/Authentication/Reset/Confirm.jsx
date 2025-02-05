import React from "react";
import award from "../../../assets/award.png";
import { useNavigate } from "react-router-dom";
import { Worm } from "lucide-react";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white">
      <header className="w-full text-center py-6">
        <div className="mx-auto h-12 w-12 bg-btnBackground rounded-full flex items-center justify-center">
          <Worm className="h-7 w-7 text-white" />
        </div>
      </header>
      <main className="flex-grow max-w-2xl mx-auto flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Check Your Email
        </h1>
        <img src={award} alt="Confirmation Icon" className="mb-6 h-32" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          We've sent you a password reset link.
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Please check your inbox and follow the instructions to reset your
          password. If you don’t see the email, check your spam folder.
        </p>
        <button
          onClick={() => navigate("/auth")}
          className="px-6 py-3 bg-btnBackground hover:bg-btnBackgroundhover text-white rounded-lg font-semibold focus:outline-none"
        >
          Back to login
        </button>
      </main>

      <footer className="w-full bg-gray-100 py-6 text-center text-sm text-gray-500">
        <p>Copyright ©2024 Mountain Email Finder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ConfirmationPage;
