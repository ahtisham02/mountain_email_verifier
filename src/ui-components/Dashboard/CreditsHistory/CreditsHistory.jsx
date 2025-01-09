import React, { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight, Server } from "lucide-react";

export default function CreditsHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const data = [
    {
      dateCreated: "2025-01-09",
      reason: "Daily Credit Allocation",
      dailyCreditsChange: 100,
      instantCreditsChange: 0,
      dailyBalanceAfter: 1000,
      instantBalanceAfter: 50,
    },
    {
      dateCreated: "2025-01-08",
      reason: "Manual Credit Addition",
      dailyCreditsChange: 50,
      instantCreditsChange: 20,
      dailyBalanceAfter: 950,
      instantBalanceAfter: 70,
    },
    {
      dateCreated: "2025-01-07",
      reason: "API Usage Deduction",
      dailyCreditsChange: -30,
      instantCreditsChange: -10,
      dailyBalanceAfter: 900,
      instantBalanceAfter: 50,
    },
    {
      dateCreated: "2025-01-06",
      reason: "Bulk Verification Deduction",
      dailyCreditsChange: -100,
      instantCreditsChange: 0,
      dailyBalanceAfter: 930,
      instantBalanceAfter: 60,
    },
    {
      dateCreated: "2025-01-05",
      reason: "Daily Credit Allocation",
      dailyCreditsChange: 100,
      instantCreditsChange: 0,
      dailyBalanceAfter: 1030,
      instantBalanceAfter: 60,
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
          <h2 className="text-2xl font-bold text-gray-800">Credits History</h2>
          <p className="text-gray-600">
            Find our how your credits are charged or refunded.
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span className="font-semibold">Total Single Verifications:</span>
            <span className="ml-1">1</span>
          </div>
          <div className="flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">
            <Server className="mr-2 h-5 w-5" />
            <span className="font-semibold">Total API Verifications:</span>
            <span className="ml-1">0</span>
          </div>
        </div>
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
                  Date Created
                </th>
                <th className="px-4 py-2 text-center text-gray-600">Reason</th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Credits Change <br />
                  <span className="text-sm">(Daily Credits)</span>
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Credits Change <br />
                  <span className="text-sm">(Instant Credits)</span>
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  Balance After <br />
                  <span className="text-sm">(Daily Credits)</span>
                </th>
                <th className="px-4 py-2 text-center text-gray-600 rounded-tr-lg">
                  Balance After <br />
                  <span className="text-sm">(Instant Credits)</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {currentRecords.map((record, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 text-sm">
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.dateCreated}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.reason}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.dailyCreditsChange}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.instantCreditsChange}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.dailyBalanceAfter}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {record.instantBalanceAfter}
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
