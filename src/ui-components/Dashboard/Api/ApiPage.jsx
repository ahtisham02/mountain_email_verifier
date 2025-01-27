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
} from "lucide-react";

export default function ApiPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Your text to copy").then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  return (
    <div className="bg-gray-50 p-6">
      <div className="mb-8">
        <h2 className="md:text-2xl text-xl pt-2 sm:pt-0 font-extrabold text-gray-900">
          API Keys
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Manage API keys for email verification.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
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
          <button className="flex items-center px-3 py-1.5 border rounded-md text-sm font-medium text-gray-800 border-gray-300 hover:bg-gray-100">
            <FileText className="w-4 h-4 mr-2" />
            API Reference
          </button>
          <button className="sm:flex hidden items-center px-3 py-1.5 text-white rounded-md text-sm font-medium bg-btnBackground hover:bg-btnBackgroundhover">
            <ExternalLink className="w-4 h-4 mr-2" />
            API Documentation
          </button>
        </div>
        <button className="flex mt-3 sm:hidden items-center px-3 py-1.5 text-white rounded-md text-sm font-medium bg-btnBackground hover:bg-btnBackgroundhover">
          <ExternalLink className="w-4 h-4 mr-2" />
          API Documentation
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
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

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1 flex items-center justify-center mr-3">
              <Shield className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg md:text-xl">
              Private API Keys
            </h3>
          </div>
          <button className="flex items-center px-3 py-1.5 text-white rounded-md text-sm font-medium bg-btnBackground hover:bg-btnBackgroundhover">
            <PlusCircle className="w-4 h-4 mr-2" />
            Create new
          </button>
        </div>

        <p className="text-gray-600 text-sm md:text-base">
          Discover and manage your list of email addresses using Mountain Email
          Finder. These emails are essential for reaching out to your audience,
          and our service ensures accuracy and reliability in every search.
        </p>
        <div className="bg-white w-[64vw] min-[420px]:w-[70vw] min-[460px]:w-[75vw] min-[500px]:w-[77vw] min-[550px]:w-[79vw] min-[650px]:w-full py-4 flex flex-col">
          <div className="rounded-lg border border-gray-200 flex-grow overflow-x-auto scrollbar-hide">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-center">
                  <th className="p-3 border-b border-gray-200 text-sm font-medium text-gray-800">
                    Name
                  </th>
                  <th className="p-3 border-b border-gray-200 text-sm font-medium text-gray-800">
                    Key
                  </th>
                  <th className="p-3 border-b border-gray-200 text-sm font-medium text-gray-800">
                    Status
                  </th>
                  <th className="p-3 border-b border-gray-200 text-sm font-medium text-gray-800">
                    Created
                  </th>
                  <th className="p-3 border-b border-gray-200 text-sm font-medium text-gray-800">
                    Date Disabled
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    NEW TEST KEY
                  </td>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    *********************S389Rxt
                  </td>
                  <td className="p-3 flex items-center justify-center border-b border-gray-200 text-sm text-gray-600 text-center">
                    <div className="space-x-1 bg-gray-100 rounded-full px-2 py-1 w-fit">
                      <span className="text-green-600 font-medium text-xs">
                        Active
                      </span>
                      <span className="w-2 h-2 bg-green-600 rounded-full inline-block"></span>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    Apr 5, 2023
                  </td>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    -
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    OLD TEST KEY
                  </td>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    *********************TtOmO3Ln
                  </td>
                  <td className="p-3 flex items-center justify-center border-b border-gray-200 text-sm text-gray-600 text-center">
                    <div className="space-x-1 bg-gray-100 rounded-full px-2 py-1 w-fit">
                      <span className="text-red-600 font-medium text-xs">
                        Disabled
                      </span>
                      <span className="w-2 h-2 bg-red-600 rounded-full inline-block"></span>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    Apr 5, 2023
                  </td>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    Apr 15, 2023
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    TEST DEV KEY
                  </td>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    *********************GtOuXavB
                  </td>
                  <td className="p-3 flex items-center justify-center border-b border-gray-200 text-sm text-gray-600 text-center">
                    <div className="space-x-1 bg-gray-100 rounded-full px-2 py-1 w-fit">
                      <span className="text-red-600 font-medium text-xs">
                        Disabled
                      </span>
                      <span className="w-2 h-2 bg-red-600 rounded-full inline-block"></span>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    Apr 5, 2023
                  </td>
                  <td className="p-3 border-b border-gray-200 text-sm text-gray-600 text-center">
                    Apr 25, 2023
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
