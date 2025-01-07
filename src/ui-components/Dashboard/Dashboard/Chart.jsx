import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Chart() {
  const dailyCreditsData = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        label: "Daily Credits",
        data: [0, 20],
        backgroundColor: ["#4caf50", "#2196f3"],
      },
    ],
  };

  const instantCreditsData = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        label: "Instant Credits",
        data: [0, 100],
        backgroundColor: ["#f44336", "#ff9800"],
      },
    ],
  };

  return (
    <div className="bg-gray-50">
      <h2 className="px-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Charts
      </h2>
      <div className="flex gap-6 p-6">
        <div className="bg-white rounded-lg border-[1px] border-[#F1F1F2] shadow-sm flex flex-col items-center justify-center p-4 w-1/4 2xl:w-[30%]">
          <Bar data={dailyCreditsData} className="max-w-full max-h-56" options={{ responsive: true }} />
          <p className="text-lg font-medium mt-4">Daily Credits</p>
          <p className="text-sm text-gray-600">20/20 Credits Remaining</p>
        </div>
        {" "}
        <div className="bg-white rounded-lg border-[1px] border-[#F1F1F2] shadow-sm flex flex-col items-center justify-center p-4 w-1/4 2xl:w-[30%]">
          <Bar data={instantCreditsData} className="max-w-full max-h-56" options={{ responsive: true }} />
          <p className="text-lg font-medium mt-4">Instant Credits</p>
          <p className="text-sm text-gray-600">100 Credits Remaining</p>
        </div>
        <div className="bg-white rounded-lg border-[1px] border-[#F1F1F2] shadow-sm flex flex-col items-center justify-center p-4 w-1/2 2xl:w-[40%]">
          <p className="text-lg font-medium">Reoon Lead Generator (B2B)</p>
          <p className="text-sm text-gray-600 text-center mt-2">
            Get thousands of local business leads from online directories
            (including emails and phone numbers).
          </p>
          <button className="bg-[#7E3AF2] text-white font-medium px-4 py-2 mt-4 rounded-lg hover:bg-purple-800">
            Start Getting Leads Now
          </button>
        </div>
      </div>
    </div>
  );
}
