import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoWarning } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import { MdDelete } from "react-icons/md";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState([
    {
      dateCreated: "2025-01-09",
      status: "Published",
      blogTitle: "Introduction to React Hooks",
      author: "John Doe",
      actions: "View",
    },
    {
      dateCreated: "2025-01-08",
      status: "Draft",
      blogTitle: "Advanced CSS Techniques",
      author: "Jane Smith",
      actions: "View",
    },
    {
      dateCreated: "2025-01-07",
      status: "Pending Review",
      blogTitle: "Getting Started with Node.js",
      author: "Alice Johnson",
      actions: "View",
    },
  ]);
  const navigate = useNavigate();
  const recordsPerPage = 10;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = blogData.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(blogData.length / recordsPerPage);

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

  const handleDelete = (index) => {
    const updatedData = blogData.filter((_, i) => i !== index);
    setBlogData(updatedData);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Published":
        return {
          style:
            "bg-completed text-[#3c7b36] font-semibold py-1 border-[1px] border-[#3c7b36] px-2 rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: <FaCircleCheck className="w-[14px] h-[14px] text-[#3c7b36]" />,
        };
      case "Draft":
        return {
          style:
            "bg-inprogress text-[#cc5960] font-semibold py-1 px-2 border-[1px] border-[#cc5960] rounded-full inline-block text-xs text-center flex items-center justify-center gap-1",
          icon: <IoWarning className="w-[15px] h-[15px] text-[#cc5960]" />,
        };
      case "Pending Review":
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
            Blog Management
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Manage and publish your blog posts efficiently.
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/createblog");
          }}
          className="bg-btnBackground hover:bg-btnBackgroundhover text-sm sm:text-base text-white px-4 py-2 rounded-2xl w-full sm:w-auto mt-4 sm:mt-0"
        >
          Create New Blog Post
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
                  BLOG STATUS
                </th>
                <th className="px-4 py-2 text-center text-gray-600">
                  BLOG TITLE
                </th>
                <th className="px-4 py-2 text-center text-gray-600">AUTHOR</th>
                <th className="px-4 py-2 text-center text-gray-600 rounded-tr-lg">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((blog, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 text-sm">
                  <td className="px-4 py-2 text-center text-gray-800">
                    {blog.dateCreated}
                  </td>
                  <td className="p-2 flex items-center justify-start">
                    <div className={getStatusStyle(blog.status).style}>
                      {getStatusStyle(blog.status).icon}
                      {blog.status}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {blog.blogTitle}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-800">
                    {blog.author}
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-14 py-0.5 rounded-lg text-center font-medium bg-gray-100 text-black">
                        {blog.actions}
                      </div>
                      <button
                        onClick={() => handleDelete(index)}
                        className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-all"
                      >
                        <MdDelete className="w-5 h-5" />
                      </button>
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
            {Math.min(indexOfLastRecord, blogData.length)} of {blogData.length}{" "}
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
  );
}