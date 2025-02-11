import React, { useEffect, useRef, useState } from "react";
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
import {
  ArrowLeftCircle,
  CheckCircle,
  CloudDownload,
  Bookmark,
  Hash,
  BarChart,
  Clock,
  Timer,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { IoWarning } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";

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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "All - Include all types of results"
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

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
          ctx.fillText("total", centerX, centerY - 10);
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
          "Safe (Valid)",
          "Role (Valid)",
          "Catch All",
          "Disposable",
          "Inbox Full",
          "Spam Trap",
          "Disabled",
          "Invalid",
          "Unknown",
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

    return () => {
      pieChart.destroy();
    };
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return {
          style:
            "bg-completed text-[#3c7b36] font-semibold py-1 border-[1px] border-[#3c7b36] px-2 rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: <FaCircleCheck className="w-[14px] h-[14px] text-[#3c7b36]" />,
        };
      case "In Progress":
        return {
          style:
            "bg-inprogress text-[#cc5960] font-semibold py-1 px-2 border-[1px] border-[#cc5960] rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: <IoWarning className="w-[15px] h-[15px] text-[#cc5960]" />,
        };
      case "Pending":
        return {
          style:
            "bg-pending text-[#ac7a31] font-semibold py-1 px-2 border-[1px] border-[#ac7a31] rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: <GoClockFill className="w-[14px] h-[14px] text-[#ac7a31]" />,
        };
      default:
        return {
          style:
            "bg-gray-500 text-white py-0.5 px-2 rounded-full text-sm text-center flex items-center justify-center gap-1",
          icon: <HelpCircle className="w-[14px] h-[14px]" />,
        };
    }
  };

  return (
    <div className="px-6">
      <h2 className="pt-6 pb-2 md:text-2xl text-xl font-semibold text-gray-700">
        Result Details
      </h2>
      <button
        onClick={() => navigate("/tasks")}
        className="flex items-center text-gray-500 text-sm pb-6"
      >
        <ArrowLeftCircle className="w-5 h-5 mr-2" /> Back to the results
      </button>
      <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 flex items-center">
          <Bookmark className="inline-block text-btnBackgroundhover mr-2 w-5 h-5 mb-0.5" />
          Task: arbfghtcukio
        </h3>
        <div className="text-sm text-gray-800 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="flex items-center">
            <Hash className="mr-2 w-4 h-4 mb-0.5 text-gray-600" />
            <strong className="text-gray-600">Task ID:</strong>
            <span className="ml-2 text-gray-900">1579078</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="mr-2 w-4 h-4 mb-0.5 text-green-500" />
            <strong className="text-gray-600 mr-2">Status:</strong>{" "}
            <div className={getStatusStyle("Completed").style}>
              {getStatusStyle("Completed").icon}
              Completed
            </div>
          </div>
          <div className="flex items-center">
            <BarChart className="mr-2 w-4 h-4 mb-0.5 text-gray-600" />
            <strong className="text-gray-600">Progress:</strong>
            <span className="ml-2 text-gray-900">1/1 (100%)</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 w-4 h-4 mb-0.5 text-gray-600" />
            <strong className="text-gray-600">Started:</strong>
            <span className="ml-2 text-gray-900">24-Jan-2025, 15:34:09</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 w-4 h-4 mb-0.5 text-gray-600" />
            <strong className="text-gray-600">Finished:</strong>
            <span className="ml-2 text-gray-900">24-Jan-2025, 15:34:14</span>
          </div>
          <div className="flex items-center">
            <Timer className="mr-2 w-4 h-4 mb-0.5 text-blue-500" />
            <strong className="text-gray-600">Runtime:</strong>
            <span className="ml-2 text-blue-500">0.08 minutes</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pb-8">
        <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-6 flex flex-col sm:flex-row">
          <div className="flex-1 flex flex-col">
            <h4 className="mb-4 text-lg whitespace-nowrap font-semibold text-gray-800">
              <CheckCircle className="inline-block text-btnBackgroundhover mr-2 w-5 h-5 mb-0.5" />
              Results Analysis
            </h4>
            <div className="flex-1 flex items-center justify-center sm:-mr-20">
              <canvas
                ref={pieChartRef}
                className="max-w-full max-h-56"
              ></canvas>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center ml-5 text-sm sm:text-base sm:ml-24 lg:ml-28">
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
                  style={{ backgroundColor: "#5e9c86" }}
                ></span>
                Invalid: 50
              </li>
              <li className="flex items-center">
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: "#6b7280" }}
                ></span>
                Unknown: 0
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-6 flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            <CloudDownload className="inline-block text-btnBackgroundhover mr-2 w-5 h-5 mb-0.5" />
            Download Categorized Results
          </h3>
          <div className="flex justify-center mb-4">
            <CloudDownload className="w-12 h-12 text-gray-400" />
          </div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-full mb-4 p-2 border rounded-lg text-gray-600 flex justify-between items-center"
            >
              <span>{selectedOption}</span>
              <ChevronDown className="w-5 h-5 text-gray-600" />
            </button>
            {isOpen && (
              <ul className="absolute w-full bg-white border rounded-lg shadow-lg mt-1">
                <li
                  onClick={() =>
                    handleSelectOption("All - Include all types of results")
                  }
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  All - Include all types of results
                </li>
                <li
                  onClick={() => handleSelectOption("Safe (Valid)")}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  Safe (Valid)
                </li>
                <li
                  onClick={() => handleSelectOption("Invalid")}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  Invalid
                </li>
              </ul>
            )}
          </div>

          <div className="flex space-x-4">
            <button className="w-full bg-btnBackground text-white py-2 rounded-2xl hover:bg-btnBackgroundhover mt-auto">
              Download CSV
            </button>
            <button className="w-full bg-btnBackground text-white py-2 rounded-2xl hover:bg-btnBackgroundhover mt-auto">
              Download XLSX
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Want to delete the files permanently from our servers?{" "}
            <span className="text-blue-500 underline">Click Here</span>. All
            files get deleted automatically after 15 days of verification by
            default.
          </p>
        </div>
      </div>
    </div>
  );
}
