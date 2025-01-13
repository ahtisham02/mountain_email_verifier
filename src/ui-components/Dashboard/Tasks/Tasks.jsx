import React, { useState } from "react";
import { ChevronLeft, ChevronRight, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Clock, HelpCircle } from "lucide-react";
import { FaArrowTrendUp } from "react-icons/fa6";

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
      action: "View Report",
    },
    {
      taskId: "002",
      dateStarted: "2025-01-08",
      taskName: "Email Verification Batch 2",
      status: "In Progress",
      totalEmails: 2000,
      currentProgress: "75%",
      action: "View Report",
    },
    {
      taskId: "003",
      dateStarted: "2025-01-07",
      taskName: "Weekly Email Check",
      status: "Pending",
      totalEmails: 500,
      currentProgress: "10%",
      action: "Start Now",
    },
    {
      taskId: "004",
      dateStarted: "2025-01-06",
      taskName: "Email Verification Batch 3",
      status: "Completed",
      totalEmails: 1800,
      currentProgress: "100%",
      action: "View Report",
    },
    {
      taskId: "005",
      dateStarted: "2025-01-05",
      taskName: "Email Verification Batch 4",
      status: "In Progress",
      totalEmails: 2200,
      currentProgress: "65%",
      action: "View Report",
    },
    {
      taskId: "006",
      dateStarted: "2025-01-04",
      taskName: "Weekly Email Check 2",
      status: "Pending",
      totalEmails: 450,
      currentProgress: "15%",
      action: "Start Now",
    },
    {
      taskId: "007",
      dateStarted: "2025-01-03",
      taskName: "Email Verification Batch 5",
      status: "Completed",
      totalEmails: 2000,
      currentProgress: "100%",
      action: "View Report",
    },
    {
      taskId: "008",
      dateStarted: "2025-01-02",
      taskName: "Email Verification Batch 6",
      status: "In Progress",
      totalEmails: 2400,
      currentProgress: "50%",
      action: "View Report",
    },
    {
      taskId: "009",
      dateStarted: "2025-01-01",
      taskName: "Weekly Email Check 3",
      status: "Pending",
      totalEmails: 600,
      currentProgress: "20%",
      action: "Start Now",
    },
    {
      taskId: "010",
      dateStarted: "2025-01-01",
      taskName: "Email Verification Batch 7",
      status: "Completed",
      totalEmails: 1600,
      currentProgress: "100%",
      action: "View Report",
    },
    {
      taskId: "011",
      dateStarted: "2025-01-01",
      taskName: "Email Verification Batch 8",
      status: "In Progress",
      totalEmails: 2200,
      currentProgress: "30%",
      action: "View Report",
    },
    {
      taskId: "012",
      dateStarted: "2025-01-01",
      taskName: "Weekly Email Check 4",
      status: "Pending",
      totalEmails: 700,
      currentProgress: "0%",
      action: "Start Now",
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
            "bg-completed text-white py-0.5 text-green-50 px-2 rounded-full w-28 text-xs text-center flex items-center justify-center gap-1",
          icon: <CheckCircle className="w-[14px] h-[14px] -ml-1 text-green-50" />,
        };
      case "In Progress":
        return {
          style:
            "bg-inprogress text-white py-0.5 px-2 rounded-full text-yellow-50 w-28 text-xs text-center flex items-center justify-center gap-1",
          icon: <Clock className="w-[14px] h-[14px] text-yellow-50" />,
        };
      case "Pending":
        return {
          style:
            "bg-pending text-white py-0.5 px-2 rounded-full w-28 text-red-50 text-xs text-center flex items-center justify-center gap-1",
          icon: <HelpCircle className="w-[14px] h-[14px] -ml-4 text-red-50" />,
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
          <div className="text-green-500">
            <CheckCircle className="w-4 h-4" />
          </div>
          <span className="text-green-600">{progress}</span>
        </div>
      );
    } else if (progressValue > 50) {
      return (
        <div className="flex items-center justify-center space-x-2 -ml-2">
          <div className="text-yellow-500">
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
          <span className="text-red-600">{progress}</span>
        </div>
      );
    }
  };

  return (
    <div className="bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Email Verification Task Overview
          </h2>
          <p className="text-gray-600">
            View the status and results of all ongoing and completed email
            verification tasks.
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/task-single");
          }}
          className="bg-btnBackground hover:bg-btnBackgroundhover text-white px-4 py-2 rounded-lg"
        >
          Check API & Single Verification Results
        </button>
      </div>

      <div
        className="bg-white rounded-lg shadow p-4 flex flex-col"
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
                  <td className="p-2 flex justify-center text-center">
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
                  <td className="px-4 py-2 text-center text-[#7E3AF2]">
                    {task.action}
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
