import React, { useEffect, useRef } from "react";
import "chart.js/auto";
import { Chart } from "chart.js";
import {
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  PieController,
} from "chart.js";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  PieController
);

export default function Dashboard() {
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    const centerTextPlugin = {
      id: "centerText",
      beforeDraw(chart) {
        if (chart.config.type === "pie") {
          const { width, height, ctx } = chart;
          ctx.save();

          const total = chart.data.datasets[0].data.reduce(
            (acc, val) => acc + val,
            0
          );
          const centerX = width / 2;
          const centerY = height / 2;

          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = "bold 16px Arial";
          ctx.fillStyle = "#333";
          ctx.fillText("Total", centerX, centerY - 10);
          ctx.font = "bold 20px Arial";
          ctx.fillStyle = "#000";
          ctx.fillText(total, centerX, centerY + 15);

          ctx.restore();
        }
      },
    };
    Chart.register(centerTextPlugin);

    const pieChart = new Chart(pieChartRef.current, {
      type: "pie",
      data: {
        labels: [
          "Safe",
          "Disabled",
          "Inactive",
          "Role",
          "Active",
          "Disposable",
          "Invalid",
        ],
        datasets: [
          {
            data: [30, 20, 10, 40, 50, 23, 13],
            backgroundColor: [
              "#0b996f",
              "#10b981",
              "#14b8a6",
              "#1e3a3a",
              "#2c5e5e",
              "#3f736e",
              "#4a857a",
              "#5e9c86",
              "#7aada3",
              "#a3b1b1",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          centerText: true,
        },
        cutout: "50%",
      },
    });

    const barChart = new Chart(barChartRef.current, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Organic",
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: "#0B996F",
          },
          {
            label: "Paid",
            data: [28, 48, 50, 19, 86, 27],
            backgroundColor: "#5b5b78",
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
      barChart.destroy();
    };
  }, []);

  return (
    <div className="bg-white">
      <h2 className="p-6 md:text-2xl text-xl font-semibold text-gray-700">
        Dashboard
      </h2>
      <div className="grid lg:gap-3 gap-6 pb-8 md:grid-cols-2 px-6">
        <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] w-full h-auto p-4 gap-6 flex flex-col sm:flex-row">
          <div className="flex-1 flex flex-col">
            <h4 className="mb-4 font-semibold text-gray-800">
              Lifetime Usage Statistics
            </h4>
            <div className="flex-1 flex items-center justify-center sm:-mr-20">
              <canvas
                ref={pieChartRef}
                className="max-w-full max-h-56"
              ></canvas>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center ml-5 text-sm sm:text-base sm:ml-28">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:space-y-2 sm:grid-cols-1">
              <li className="flex items-center">
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#0b996f" }}
                ></span>
                Safe: 30
              </li>
              <li className="flex items-center">
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#10b981" }}
                ></span>
                Disabled: 20
              </li>
              <li className="flex items-center">
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#14b8a6" }}
                ></span>
                Inactive: 10
              </li>
              <li className="flex items-center">
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#1e3a3a" }}
                ></span>
                Role: 40
              </li>
              <li className="flex items-center">
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#2c5e5e" }}
                ></span>
                Catch-All: 23
              </li>
              <li className="flex items-center">
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#3f736e" }}
                ></span>
                Disposable: 80
              </li>
              <li className="flex items-center">
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#4a857a" }}
                ></span>
                Invalid: 50
              </li>
              <li className="flex items-center">
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#5e9c86" }}
                ></span>
                Unknown: 0
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] w-full h-[350px]">
          <div className="min-w-0 p-4">
            <h4 className="mb-4 font-semibold text-gray-800">
              Verification Activity
            </h4>
            <canvas ref={barChartRef} className="max-w-full max-h-56"></canvas>
            <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
                <span>Organic</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 mr-1 bg-[#5b5b78] rounded-full"></span>
                <span>Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
