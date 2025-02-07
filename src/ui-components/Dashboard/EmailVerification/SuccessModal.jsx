import React, { useState, useEffect } from "react";
import loaderGif from "../../../assets/Animation - 1737810675532.gif";
import loaderStatic from "../../../assets/img.png";

const SuccessModal = ({ open, onClose, onNavigate }) => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setShowGif(false);
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#F3F6F8] rounded-2xl border-[1px] border-[#e8e8e8] pt-10 max-w-[400px] h-[450px] w-full p-6 flex flex-col justify-between text-center">
        <div>
          <img
            src={showGif ? loaderGif : loaderStatic}
            alt="Loading..."
            className="mx-auto mb-10"
            style={{
              width: showGif ? "150px" : "210px",
              height: "150px",
            }}
          />
          <h2 className="text-2xl font-bold mb-2 text-gray-700">
            Emails Successfully Submitted!
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            The verification process will start automatically within a few
            moments. You will get the credits refunded for all the emails with
            "unknown" status.
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-auto">
          <button
            onClick={onNavigate}
            className="bg-btnBackground text-white px-6 py-2 rounded-lg hover:bg-btnBackgroundhover transition"
          >
            Go to Task Details
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Stay Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
