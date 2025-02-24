import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Server,
} from "lucide-react";
import { FaCircleCheck } from "react-icons/fa6";
import { removeUserInfo } from "../../../auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import apiRequest from "../../../utils/apiRequest";
import { IoWarning } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";

export default function CreditsHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const token = useSelector((state) => state?.auth?.userToken);
  const [subscriptionhistoryData, setSubscriptionhistoryData] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recordsPerPage = 10;

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await apiRequest(
          "get",
          "/api/subscriptions/history",
          {},
          token
        );
        if (response.data.status === "success") {
          setSubscriptionhistoryData(response.data.data);
        } else {
          console.error("API Error:", response.data.message);
          dispatch(removeUserInfo());
          navigate("/auth");
        }
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
        dispatch(removeUserInfo());
        navigate("/auth");
      }
    };

    fetchSubscriptions();
  }, [dispatch, navigate, token]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = subscriptionhistoryData?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const totalPages = Math.ceil(
    subscriptionhistoryData?.length / recordsPerPage
  );

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
      case "active":
        return {
          style:
            "bg-completed text-[#3c7b36] font-semibold py-1 border-[1px] border-[#3c7b36] px-2 rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: <FaCircleCheck className="w-[14px] h-[14px] text-[#3c7b36]" />,
        };
      case "inactive":
        return {
          style:
            "bg-inprogress text-[#cc5960] font-semibold py-1 px-2 border-[1px] border-[#cc5960] rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: <IoWarning className="w-[15px] h-[15px] text-[#cc5960]" />,
        };
      case "pending":
        return {
          style:
            "bg-pending text-[#ac7a31] font-semibold py-1 px-2 border-[1px] border-[#ac7a31] rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: <GoClockFill className="w-[14px] h-[14px] text-[#ac7a31]" />,
        };
      default:
        return {
          style:
            "bg-gray-500 text-white py-1 px-2 rounded-full text-sm text-center flex items-center justify-center gap-1",
          icon: <HelpCircle className="w-[15px] h-[15px]" />,
        };
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h2 className="md:text-2xl text-xl pt-2 sm:pt-0 font-bold text-gray-800">
            Credits History
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Find out how your credits are charged or refunded.
          </p>
        </div>
        <div className="flex flex-col min-[550px]:flex-row min-[550px]:space-x-4 md:flex-row space-y-4 min-[550px]:space-y-0 md:space-x-4">
          <div className="flex items-center bg-[#d7fec8] text-black px-4 py-2 rounded-lg">
            <CheckCircle className="mr-2 h-5 w-5" />
            <span className="font-semibold text-sm md:text-base">
              Total Single Verifications:
            </span>
            <span className="ml-1">1</span>
          </div>
          <div className="flex items-center bg-[#d7fec8] text-black px-4 py-2 rounded-lg">
            <Server className="mr-2 h-5 w-5" />
            <span className="font-semibold text-sm md:text-base">
              Total API Verifications:
            </span>
            <span className="ml-1">0</span>
          </div>
        </div>
      </div>
        <div
          className="bg-white rounded-2xl border-[1px] border-[#e8e8e8] mx-auto overflow-x-auto scrollbar-hide w-[79vw] min-[550px]:w-[85vw] sm:w-full p-4 flex flex-col"
          style={{ minHeight: "400px" }}
        >
          <div className="overflow-x-auto scrollbar-hide max-w-full flex-grow">
            <table className="min-w-full table-auto">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-2 text-center text-gray-600 rounded-tl-lg">
                    Date Created
                  </th>
                  <th className="px-4 py-2 text-center text-gray-600">Price</th>
                  <th className="px-4 py-2 text-center text-gray-600">
                    Credits
                  </th>
                  <th className="px-4 py-2 text-center text-gray-600">
                    Subscription
                  </th>
                  <th className="px-4 py-2 text-center text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-2 text-center text-gray-600 rounded-tr-lg">
                    Payment Method
                  </th>
                </tr>
              </thead>

              <tbody>
                {currentRecords?.map((record, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-center">{record.date}</td>
                    <td className="px-4 py-2 text-center text-green-600">
                      ${record.price}
                    </td>
                    <td className="px-4 py-2 text-center">{record.credits}</td>
                    <td className="px-4 py-2 text-center">
                      {record.subscription.name}
                    </td>
                    <td className="px-4 py-2 flex items-center justify-center">
                      <div className={getStatusStyle(record.status).style}>
                        {getStatusStyle(record.status).icon}
                        {record.status.charAt(0).toUpperCase() +
                          record.status.slice(1)}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center">
                      {record.payment_method.charAt(0).toUpperCase() +
                        record.payment_method.slice(1)}
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
              {Math.min(indexOfLastRecord, subscriptionhistoryData?.length)} of{" "}
              {subscriptionhistoryData?.length} records
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
