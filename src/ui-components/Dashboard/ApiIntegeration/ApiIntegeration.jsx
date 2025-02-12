import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoWarning } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";

export default function ApiIntegeration() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const recordsPerPage = 10;

  const data = [
    {
      dateCreated: "2025-01-09",
      status: "Completed",
      apiTitle: "Email Verification API - Batch 1",
      apiKey: "APIKEY001",
      validTempInvalid: "1400-100-0",
      actions: "View",
    },
    {
      dateCreated: "2025-01-08",
      status: "In Progress",
      apiTitle: "Email Verification API - Batch 2",
      apiKey: "APIKEY002",
      validTempInvalid: "1800-150-50",
      actions: "View",
    },
    {
      dateCreated: "2025-01-07",
      status: "Pending",
      apiTitle: "Email Discovery API - Weekly Check",
      apiKey: "APIKEY003",
      validTempInvalid: "400-50-50",
      actions: "View",
    },
    {
      dateCreated: "2025-01-06",
      status: "Completed",
      apiTitle: "Email Verification API - Batch 3",
      apiKey: "APIKEY004",
      validTempInvalid: "1700-100-0",
      actions: "View",
    },
    {
      dateCreated: "2025-01-05",
      status: "In Progress",
      apiTitle: "Email Discovery API - Batch 4",
      apiKey: "APIKEY005",
      validTempInvalid: "2100-50-50",
      actions: "View",
    },
    {
      dateCreated: "2025-01-04",
      status: "Pending",
      apiTitle: "Email Verification API - Batch 5",
      apiKey: "APIKEY006",
      validTempInvalid: "450-100-0",
      actions: "View",
    },
    {
      dateCreated: "2025-01-03",
      status: "Completed",
      apiTitle: "Email Discovery API - Batch 6",
      apiKey: "APIKEY007",
      validTempInvalid: "2000-300-0",
      actions: "View",
    },
    {
      dateCreated: "2025-01-02",
      status: "In Progress",
      apiTitle: "Email Verification API - Batch 7",
      apiKey: "APIKEY008",
      validTempInvalid: "2200-100-100",
      actions: "View",
    },
    {
      dateCreated: "2025-01-01",
      status: "Pending",
      apiTitle: "Email Discovery API - Weekly Check 2",
      apiKey: "APIKEY009",
      validTempInvalid: "500-0-0",
      actions: "View",
    },
    {
      dateCreated: "2025-01-01",
      status: "Completed",
      apiTitle: "Email Verification API - Batch 8",
      apiKey: "APIKEY010",
      validTempInvalid: "1600-0-0",
      actions: "View",
    },
    {
      dateCreated: "2025-01-01",
      status: "In Progress",
      apiTitle: "Email Discovery API - Batch 9",
      apiKey: "APIKEY011",
      validTempInvalid: "2000-50-150",
      actions: "View",
    },
    {
      dateCreated: "2025-01-01",
      status: "Pending",
      apiTitle: "Email Verification API - Batch 10",
      apiKey: "APIKEY012",
      validTempInvalid: "700-0-0",
      actions: "View",
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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6 flex-col sm:flex-row">
        <div>
          <h2 className="md:text-2xl text-xl pt-2 sm:pt-0 font-bold text-gray-800">
            API Settings
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Use API to verify email addresses programmatically.
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/task-single");
          }}
          className="bg-btnBackground hover:bg-btnBackgroundhover text-sm sm:text-base text-white px-4 py-2 rounded-2xl w-full sm:w-auto mt-4 sm:mt-0"
        >
          Create New API Key
        </button>
      </div>

      <div
        className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] mx-auto overflow-x-auto w-[79vw] min-[550px]:w-[85vw] md:w-full p-4 flex flex-col"
        style={{ minHeight: "400px" }}
      >
        <div className="flex-grow overflow-x-auto scrollbar-hide">
          <table className="min-w-full table-auto">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-2 text-center text-gray-600 rounded-tl-lg">
                  Date Created
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  API STATUS
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  API TITLE
                </th>
                <th className="px-4 py-2 text-center text-gray-600">API KEY</th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Valid-Temp-Invalid
                </th>
                <th className="px-4 py-2 text-center text-gray-600 rounded-tr-lg">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((task, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 text-sm">
                  <td className="px-4 py-2 text-center text-gray-800">
                    {task.dateCreated}
                  </td>
                  <td className="p-2 flex items-center justify-start">
                    <div className={getStatusStyle(task.status).style}>
                      {getStatusStyle(task.status).icon}
                      {task.status}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {task.apiTitle}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {task.apiKey}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-600">
                    {task.validTempInvalid}
                  </td>
                  <td>
                    <div className="w-14 py-0.5 rounded-lg text-center font-medium bg-gray-100 text-black mx-auto">
                      {task.actions}
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
