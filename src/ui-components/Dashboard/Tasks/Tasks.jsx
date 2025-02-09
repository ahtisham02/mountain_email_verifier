import React, { useState } from "react";
import { ChevronLeft, ChevronRight, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, HelpCircle } from "lucide-react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { IoWarning } from "react-icons/io5";

export default function Tasks() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const recordsPerPage = 10;

  const data = [
    {
      taskId: "001",
      dateStarted: "2025-01-09",
      taskName: "Email Verification Batch 1",
      status: "Completed",
      totalEmails: 1500,
      currentProgress: "100%",
      action: "View",
    },
    {
      taskId: "002",
      dateStarted: "2025-01-08",
      taskName: "Email Verification Batch 2",
      status: "In Progress",
      totalEmails: 2000,
      currentProgress: "75%",
      action: "View",
    },
    {
      taskId: "003",
      dateStarted: "2025-01-07",
      taskName: "Weekly Email Check",
      status: "Pending",
      totalEmails: 500,
      currentProgress: "10%",
      action: "View",
    },
    {
      taskId: "004",
      dateStarted: "2025-01-06",
      taskName: "Email Verification Batch 3",
      status: "Completed",
      totalEmails: 1800,
      currentProgress: "100%",
      action: "View",
    },
    {
      taskId: "005",
      dateStarted: "2025-01-05",
      taskName: "Email Verification Batch 4",
      status: "In Progress",
      totalEmails: 2200,
      currentProgress: "65%",
      action: "View",
    },
    {
      taskId: "006",
      dateStarted: "2025-01-04",
      taskName: "Weekly Email Check 2",
      status: "Pending",
      totalEmails: 450,
      currentProgress: "15%",
      action: "View",
    },
    {
      taskId: "007",
      dateStarted: "2025-01-03",
      taskName: "Email Verification Batch 5",
      status: "Completed",
      totalEmails: 2000,
      currentProgress: "100%",
      action: "View",
    },
    {
      taskId: "008",
      dateStarted: "2025-01-02",
      taskName: "Email Verification Batch 6",
      status: "In Progress",
      totalEmails: 2400,
      currentProgress: "50%",
      action: "View",
    },
    {
      taskId: "009",
      dateStarted: "2025-01-01",
      taskName: "Weekly Email Check 3",
      status: "Pending",
      totalEmails: 600,
      currentProgress: "20%",
      action: "View",
    },
    {
      taskId: "010",
      dateStarted: "2025-01-01",
      taskName: "Email Verification Batch 7",
      status: "Completed",
      totalEmails: 1600,
      currentProgress: "100%",
      action: "View",
    },
    {
      taskId: "011",
      dateStarted: "2025-01-01",
      taskName: "Email Verification Batch 8",
      status: "In Progress",
      totalEmails: 2200,
      currentProgress: "30%",
      action: "View",
    },
    {
      taskId: "012",
      dateStarted: "2025-01-01",
      taskName: "Weekly Email Check 4",
      status: "Pending",
      totalEmails: 700,
      currentProgress: "0%",
      action: "View",
    },
  ];

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(data.length / recordsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return {
          style:
            "bg-completed text-[#3c7b36] font-semibold py-1 border-[1px] border-[#3c7b36] px-2 rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: (
            <FaCircleCheck className="w-[14px] h-[14px] text-[#3c7b36]" />
          ),
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
            "bg-gray-400 text-white py-0.5 px-2 rounded-full text-sm text-center flex items-center justify-center gap-1",
          icon: <HelpCircle className="w-[14px] h-[14px]" />,
        };
    }
  };

  const getProgressIcon = (progress) => {
    const progressValue = parseInt(progress.replace("%", ""));
    if (progressValue > 75) {
      return (
        <div className="flex items-center justify-center space-x-2">
          <div className="text-[#3c7b36]">
            <CheckCircle className="w-4 h-4" />
          </div>
          <span className="text-[#3c7b36]">{progress}</span>
        </div>
      );
    } else if (progressValue > 50) {
      return (
        <div className="flex items-center justify-center space-x-2 -ml-2">
          <div className="text-yellow-600">
            <FaArrowTrendUp className="w-4 h-4" />
          </div>
          <span className="text-yellow-600">{progress}</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center space-x-2 -ml-2">
          <div className="text-red-500">
            <XCircle className="w-4 h-4" />
          </div>
          <span className="text-red-500">{progress}</span>
        </div>
      );
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 flex-col sm:flex-row">
        <div>
          <h2 className="md:text-2xl text-xl pt-2 sm:pt-0 font-bold text-gray-800">
            Email Verification Task Overview
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            View the status and results of all ongoing and completed email
            verification tasks.
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/task-single");
          }}
          className="bg-btnBackground hover:bg-btnBackgroundhover text-white text-sm sm:text-base px-4 py-2 rounded-2xl w-full sm:w-auto mt-4 sm:mt-0"
        >
          Check API & Single Verification Results
        </button>
      </div>

      <div
        className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] mx-auto overflow-x-auto scrollbar-hide w-[79vw] min-[550px]:w-[85vw] md:w-full p-4 flex flex-col"
        style={{ minHeight: "400px" }}
      >
        <div className="flex-grow overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-2 text-center text-gray-600 rounded-tl-lg">
                  Task ID
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Date Started
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Task Name
                </th>
                <th className="px-4 py-2 text-center text-gray-600">Status</th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Total Emails
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Current Progress
                </th>
                <th className="px-4 py-2 text-center text-gray-600 rounded-tr-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((task, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 text-sm">
                  <td className="px-4 py-2 text-center text-gray-800">
                    {task.taskId}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {task.dateStarted}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {task.taskName}
                  </td>
                  <td className="p-2 flex justify-start text-center">
                    <div className={getStatusStyle(task.status).style}>
                      {getStatusStyle(task.status).icon}
                      {task.status}
                    </div>
                  </td>

                  <td className="px-4 py-2 text-center text-gray-600">
                    {task.totalEmails}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-600">
                    {getProgressIcon(task.currentProgress)}
                  </td>
                  <td>
                    <div className="w-14 py-0.5 rounded-lg text-center font-medium bg-gray-100 text-black mx-auto">
                      {task.action}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3 flex justify-between items-center rounded-lg p-2 text-gray-600 text-sm bg-slate-100">
          <div>
            Page {currentPage} of {totalPages}
          </div>
          <div>
            Showing {indexOfFirstRecord + 1} to{" "}
            {Math.min(indexOfLastRecord, data.length)} of {data.length} records
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="p-1 border border-gray-300 rounded-full hover:bg-gray-200"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="p-1 border border-gray-300 rounded-full hover:bg-gray-200"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
