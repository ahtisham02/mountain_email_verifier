import React, { useState } from "react";
import {
  FileText,
  ExternalLink,
  Copy,
  PlusCircle,
  Key,
  Lock,
  Shield,
  CheckCircle,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoWarning } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";

export default function ApiPage() {
  const [copied, setCopied] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const handleCopy = () => {
    navigator.clipboard.writeText("Your text to copy").then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const data = [
    {
      name: "NEW TEST KEY",
      key: "*********************S389Rxt",
      status: "Completed",
      dateCreated: "2025-01-05",
      dateDisabled: "-",
    },
    {
      name: "OLD TEST KEY",
      key: "*********************TtOmO3Ln",
      status: "In Progress",
      dateCreated: "2025-01-05",
      dateDisabled: "2025-01-15",
    },
    {
      name: "TEST DEV KEY",
      key: "*********************GtOuXavB",
      status: "Pending",
      dateCreated: "2025-01-05",
      dateDisabled: "2025-02-01",
    },
    {
      name: "TEST DEV KEY",
      key: "*********************Gt12dfdSDF",
      status: "Pending",
      dateCreated: "2025-01-05",
      dateDisabled: "2025-02-10",
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
      <div className="mb-8">
        <h2 className="md:text-2xl text-xl pt-2 sm:pt-0 font-extrabold text-gray-900">
          API Keys
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Manage API keys for email verification.
        </p>
      </div>

      <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1 flex items-center justify-center mr-3">
            <Key className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />
          </div>
          <h3 className="font-bold text-gray-800 text-lg md:text-xl">
            Store API Keys
          </h3>
        </div>
        <p className="text-gray-600 text-sm md:text-base">
          Use this key to authenticate your requests to the Mountain Email
          Finder API.
        </p>
        <div className="flex space-x-2 mt-4">
          <button className="flex items-center px-3 py-1.5 border rounded-2xl text-sm font-medium text-gray-800 border-gray-300 hover:bg-gray-100">
            <FileText className="w-4 h-4 mr-2" />
            API Reference
          </button>
          <button className="sm:flex hidden items-center px-3 py-1.5 text-white rounded-2xl text-sm font-medium bg-btnBackground hover:bg-btnBackgroundhover">
            <ExternalLink className="w-4 h-4 mr-2" />
            API Documentation
          </button>
        </div>
        <button className="flex mt-3 sm:hidden items-center px-3 py-1.5 text-white rounded-2xl text-sm font-medium bg-btnBackground hover:bg-btnBackgroundhover">
          <ExternalLink className="w-4 h-4 mr-2" />
          API Documentation
        </button>
      </div>

      <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1 flex items-center justify-center mr-3">
            <Lock className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />
          </div>
          <h3 className="font-bold text-gray-800 text-lg md:text-xl">
            Public API Key
          </h3>
        </div>
        <p className="text-gray-600 text-sm md:text-base">
          The public key is to be used for authentication with the API.
        </p>
        <div className="flex items-center bg-gray-100 border rounded-md mt-4 p-2">
          <span className="text-gray-800 text-sm hidden sm:block flex-grow">
            8HrxXqTt2XAKb4Bo5imru8zYrafsmeVN
          </span>
          <span className="text-gray-800 text-sm sm:hidden flex-grow">
            8Hrsdfwsdefew...VN
          </span>
          <button
            className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
            onClick={handleCopy}
          >
            {copied ? (
              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 mr-1" />
            )}
            <span
              className={`hidden sm:block ${copied ? "text-green-500" : ""}`}
            >
              {copied ? "Copied" : "Copy to clipboard"}
            </span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1 flex items-center justify-center mr-3">
              <Shield className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg md:text-xl">
              Private API Keys
            </h3>
          </div>
          <button className="flex items-center px-3 py-1.5 text-white rounded-2xl text-sm font-medium bg-btnBackground hover:bg-btnBackgroundhover">
            <PlusCircle className="w-4 h-4 mr-2" />
            Create new
          </button>
        </div>

        <p className="text-gray-600 text-sm md:text-base">
          Discover and manage your list of email addresses using Mountain Email
          Finder. These emails are essential for reaching out to your audience,
          and our service ensures accuracy and reliability in every search.
        </p>
        <div
          className="bg-white rounded-2xl mt-7 border-[1px] border-[#e8e8e8] mx-auto overflow-x-auto w-[79vw] min-[550px]:w-[85vw] md:w-full p-4 flex flex-col"
          style={{ minHeight: "335px" }}
        >
          <div className="flex-grow overflow-x-auto scrollbar-hide">
            <table className="min-w-full table-auto">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-2 text-center text-gray-600 rounded-tl-lg">
                    Name
                  </th>
                  <th className="px-4 py-2 text-center text-gray-600">Key</th>
                  <th className="px-4 py-2 text-center text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-2 text-center text-gray-600">
                    Created
                  </th>
                  <th className="px-4 py-2 text-center text-gray-600 rounded-tr-lg">
                    Date Disabled
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((task, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 text-sm">
                    <td className="px-4 py-2 text-center text-gray-800">
                      {task.name}
                    </td>
                    <td className="px-4 py-2 text-center text-gray-800">
                      {task.key}
                    </td>
                    <td className="p-2 flex items-center justify-start">
                      <div className={getStatusStyle(task.status).style}>
                        {getStatusStyle(task.status).icon}
                        {task.status}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center text-gray-800">
                      {task.dateCreated}
                    </td>
                    <td className="px-4 py-2 text-center text-gray-600">
                      {task.dateDisabled}
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
              {Math.min(indexOfLastRecord, data.length)} of {data.length}{" "}
              records
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
    </div>
  );
}
