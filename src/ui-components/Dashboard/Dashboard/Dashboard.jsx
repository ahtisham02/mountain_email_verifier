import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import {
  ArcElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  PieController,
  LineController,
} from "chart.js";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  PieController, 
  LineController
);

export default function Dashboard() {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);

  useEffect(() => {
    const pieChart = new Chart(pieChartRef.current, {
      type: "pie",
      data: {
        // labels: ['Shirts', 'Shoes', 'Bags'],
        datasets: [
          {
            data: [300, 200, 100],
            backgroundColor: ["#3b82f6", "#14b8a6", "#9333ea"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        cutout: "80%",
      },
    });

    const lineChart = new Chart(lineChartRef.current, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Organic",
            data: [65, 59, 80, 81, 56, 55],
            borderColor: "#14b8a6",
            fill: false,
          },
          {
            label: "Paid",
            data: [28, 48, 40, 19, 86, 27],
            borderColor: "#9333ea",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
          y: {
            title: {
              display: true,
              text: "Traffic",
            },
          },
        },
      },
    });

    return () => {
      pieChart.destroy();
      lineChart.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-50">
      <h2 className="p-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h2>
      <div className="grid lg:gap-3 gap-6 pb-8 md:grid-cols-2 px-6">
        <div className="bg-white rounded-lg border-[1px] border-[#F1F1F2] shadow-sm w-full h-[350px] flex flex-col">
          <div className="p-4 flex flex-col items-start">
            <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Lifetime Usage Statistics
            </h4>
            <canvas ref={pieChartRef} className="max-w-full max-h-56"></canvas>
          </div>
          <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"></span>
              <span>Safe</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
              <span>Disabled</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
              <span>Inactive</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border-[1px] border-[#F1F1F2] shadow-sm w-full h-[350px]">
          <div className="min-w-0 p-4">
            <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Verification Activity
            </h4>
            <canvas ref={lineChartRef} className="max-w-full max-h-56"></canvas>
            <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
              {/* Chart legend */}
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
                <span>Organic</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
                <span>Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
