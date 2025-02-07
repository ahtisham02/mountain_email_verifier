import React from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, Tooltip, Legend);

export default function Chart() {
  const combinedData = {
    labels: [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7",
      "Day 8",
      "Day 9",
      "Day 10",
    ],
    datasets: [
      {
        label: "Daily Credits",
        data: [0, 5, 20, 15, 10, 15, 20, 20, 10, 5],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Instant Credits",
        data: [0, 10, 30, 25, 35, 30, 20, 10, 5, 0],
        borderColor: "#f44336",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white">
      <h2 className="px-6 md:text-2xl text-xl font-semibold text-gray-700">
        Combined Timeline Chart
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[58%_40%] 2xl:grid-cols-[58%_41%] lg:gap-3 gap-6 p-6">
        <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] flex flex-col items-center justify-center p-4">
          <Line
            data={combinedData}
            className="max-w-full max-h-56"
            options={{ responsive: true }}
          />
          <p className="text-lg font-medium mt-4">Credits Overview</p>
          <p className="text-sm text-gray-600">
            Combined view of Daily and Instant Credits over 10 days
          </p>
        </div>
        <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] flex flex-col items-center justify-center p-4 lg:col-span-1">
          <p className="text-lg font-medium">Mountain Lead Generator (B2B)</p>
          <p className="text-sm text-gray-600 text-center mt-2">
            Get thousands of local business leads from online directories
            (including emails and phone numbers).
          </p>
          <button className="bg-btnBackground text-white font-medium px-4 py-2 mt-4 rounded-2xl hover:bg-btnBackgroundhover">
            Start Getting Leads Now
          </button>
        </div>
      </div>
    </div>
  );
}
