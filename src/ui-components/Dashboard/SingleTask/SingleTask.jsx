import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { IoWarning } from "react-icons/io5";

export default function SingleTask() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const recordsPerPage = 10;

  const data = [
    {
      dateVerified: "2025-01-09",
      emailAddress: "john.doe@example.com",
      verificationMethod: "API Verification",
      resultStatus: "Verified",
      timeTaken: 1.2,
      action: "View",
    },
    {
      dateVerified: "2025-01-08",
      emailAddress: "jane.smith@example.com",
      verificationMethod: "Bulk Verification",
      resultStatus: "Failed",
      timeTaken: 2.4,
      action: "Retry",
    },
    {
      dateVerified: "2025-01-07",
      emailAddress: "mark.taylor@example.com",
      verificationMethod: "API Verification",
      resultStatus: "Verified",
      timeTaken: 0.8,
      action: "View",
    },
    {
      dateVerified: "2025-01-06",
      emailAddress: "lucy.adams@example.com",
      verificationMethod: "Single Verification",
      resultStatus: "Pending",
      timeTaken: "-",
      action: "Verify",
    },
    {
      dateVerified: "2025-01-05",
      emailAddress: "paul.jones@example.com",
      verificationMethod: "Bulk Verification",
      resultStatus: "Verified",
      timeTaken: 3.1,
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

  const getStatusStyle = (resultStatus) => {
    switch (resultStatus) {
      case "Verified":
        return {
          style:
            "bg-completed text-[#3c7b36] font-semibold py-1 border-[1px] border-[#3c7b36] px-2 rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: <FaCircleCheck className="w-[14px] h-[14px] text-[#3c7b36]" />,
        };
      case "Pending":
        return {
          style:
            "bg-pending text-[#ac7a31] font-semibold py-1 px-2 border-[1px] border-[#ac7a31] rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: <GoClockFill className="w-[14px] h-[14px] text-[#ac7a31]" />,
        };
      case "Failed":
        return {
          style:
            "bg-inprogress text-[#cc5960] font-semibold py-1 px-2 border-[1px] border-[#cc5960] rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: <IoWarning className="w-[15px] h-[15px] text-[#cc5960]" />,
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
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            APIs & Single Verification Results (15 Days)
          </h2>
          <p className="text-gray-600">
            Explore the detailed verification results. Older records are
            automatically removed after 15 days.
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/tasks");
          }}
          className="bg-btnBackground hover:bg-btnBackgroundhover text-white px-4 py-2 rounded-2xl"
        >
          Check Bulk Verification Results
        </button>
      </div>

      <div
        className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-4 flex flex-col"
        style={{ minHeight: "400px" }}
      >
        <div className="flex-grow overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-2 text-center text-gray-600 rounded-tl-lg">
                  Date Verified
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Email Address
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Verification Method
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Status
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Time Taken (Sec)
                </th>
                <th className="px-4 py-2 text-center text-gray-600 rounded-tr-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((record, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 text-sm">
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.dateVerified}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.emailAddress}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.verificationMethod}
                  </td>
                  <td className="px-4 py-2 flex justify-start text-center">
                    <div className={getStatusStyle(record.resultStatus).style}>
                      {getStatusStyle(record.resultStatus).icon}
                      {record.resultStatus}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.timeTaken}
                  </td>
                  <td>
                    <div className="w-14 py-0.5 rounded-lg text-center font-medium bg-gray-100 text-black mx-auto">
                      {record.action}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center rounded-lg p-2 text-gray-600 text-sm bg-slate-100 mt-4">
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
