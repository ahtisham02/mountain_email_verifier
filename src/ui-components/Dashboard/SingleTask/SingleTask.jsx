import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
      action: "View Details",
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
      action: "View Details",
    },
    {
      dateVerified: "2025-01-06",
      emailAddress: "lucy.adams@example.com",
      verificationMethod: "Single Verification",
      resultStatus: "Pending",
      timeTaken: "-",
      action: "Verify Now",
    },
    {
      dateVerified: "2025-01-05",
      emailAddress: "paul.jones@example.com",
      verificationMethod: "Bulk Verification",
      resultStatus: "Verified",
      timeTaken: 3.1,
      action: "View Details",
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

  return (
    <div className="bg-gray-50 p-6">
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
          className="bg-[#7E3AF2] text-white px-4 py-2 rounded-lg"
        >
          Check Bulk Verification Results
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
                  Date Verified
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Email Address
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Verification Method
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Result Status
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
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.resultStatus}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.timeTaken}
                  </td>
                  <td className="px-4 py-2 text-center text-[#7E3AF2]">
                    {record.action}
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
