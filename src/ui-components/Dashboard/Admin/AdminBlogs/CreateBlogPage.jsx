import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronUp, FaChevronDown, FaCalendarAlt } from "react-icons/fa";

const CreateBlogPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    status: "Draft",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Blog post created successfully!");
    navigate("/adminblogs");
  };

  const handleStatusChange = (status) => {
    setFormData({ ...formData, status });
    setIsDropdownOpen(false);
  };

  return (
    <div className="p-6 overflow-x-hidden">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Create New Blog Post
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        Fill out the form below to create a new blog post. Ensure all fields are
        filled correctly.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg border border-gray-200 mx-auto"
      >
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="5"
            placeholder="Enter blog description"
            required
          />
        </div>

        <div className="mb-6 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="status"
          >
            Status
          </label>
          <div
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer flex items-center justify-between"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-gray-700">{formData.status}</span>
            {isDropdownOpen ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>
          {isDropdownOpen && (
            <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleStatusChange("Draft")}
              >
                Draft
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleStatusChange("Pending Review")}
              >
                Pending Review
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleStatusChange("Published")}
              >
                Published
              </li>
            </ul>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <div
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer flex items-center justify-between"
            onClick={() => document.getElementById("date").showPicker()}
          >
            <span className="text-gray-700">
              {formData.date || "Select a date"}
            </span>
            <FaCalendarAlt className="text-gray-500" />
          </div>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="sr-only" // Hide the input visually but keep it accessible
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-btnBackground hover:bg-btnBackgroundhover text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            Create Blog Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;
