import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";
import { Calendar } from "lucide-react";
import mainimg11 from "../../../assets/Landing/b1.webp";
import mainimg10 from "../../../assets/Landing/b2.webp";
import mainimg3 from "../../../assets/Landing/b3.webp";
import mainimg4 from "../../../assets/Landing/sl1.webp";
import mainimg5 from "../../../assets/Landing/sl2.png";
import mainimg6 from "../../../assets/Landing/sl3.png";
import mainimg7 from "../../../assets/Landing/sl4.webp";
import mainimg8 from "../../../assets/Landing/sl5.webp";
import mainimg9 from "../../../assets/Landing/sl6.webp";
import mainimg2 from "../../../assets/Landing/sl7.png";
import mainimg1 from "../../../assets/Landing/lg1.webp";

const images = [
  mainimg1,
  mainimg2,
  mainimg3,
  mainimg4,
  mainimg5,
  mainimg6,
  mainimg7,
  mainimg8,
  mainimg9,
  mainimg10,
  mainimg11,
];

const blogPosts = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  date: `Jan ${i + 1}, 2025`,
  category: i % 2 === 0 ? "Email Marketing" : "Sales Strategy",
  heading:
    i % 2 === 0
      ? `Boost Your Email Open Rates with These Strategies`
      : `Maximizing Sales Conversions Effectively`,
  feedback:
    i % 2 === 0
      ? "Learn the best practices to improve your email marketing campaigns and ensure better engagement. Discover new techniques to personalize contents."
      : "Explore proven techniques to enhance your sales funnel and increase customer acquisition. Understand how data-driven strategies and effective follow-up.",
  image: images[i % images.length],
}));

const categories = ["All", "Email Marketing", "Sales Strategy"];

export default function BlogListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Select a Category");
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const filteredBlogs = blogPosts.filter(
    (post) =>
      post.heading.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" ||
        selectedCategory === "Select a Category" ||
        post.category === selectedCategory)
  );

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const displayedBlogs = filteredBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search a blog..."
            className="border border-gray-600 rounded-tl-xl rounded-br-xl pl-10 pr-4 py-3 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative w-full md:w-1/2">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="border border-gray-600 rounded-bl-xl rounded-tr-xl px-4 py-3 w-full text-left bg-white flex justify-between items-center"
          >
            {selectedCategory} <FaChevronDown className="text-gray-500" />
          </button>

          {showDropdown && (
            <div className="absolute left-0 w-full bg-white border border-gray-400 rounded-xl mt-1 shadow-md z-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowDropdown(false);
                  }}
                  className="block w-full hover:rounded-xl text-left px-4 py-2 hover:text-[#1d996e] hover:bg-[#d7fec8]"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
        {displayedBlogs.map((post) => (
          <div
            key={post.id}
            className="bg-[#e8fedf] rounded-t-3xl rounded-b-3xl hover:border hover:border-gray-500 transition-transform transform hover:scale-105 duration-300 shadow-md flex flex-col justify-between h-[450px]"
          >
            <img
              src={post.image}
              alt="Blog"
              className="w-full h-56 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="w-4 h-4 mr-2 text-green-600" />
                <span>{post.date}</span>
              </div>
              <p className="text-xs text-green-600 font-semibold uppercase">
                {post.category}
              </p>
              <h3 className="text-lg font-bold text-gray-900 leading-snug hover:text-green-600">
                {post.heading}
              </h3>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {post.feedback}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-14 mb-2 gap-3">
        <button
          className="flex items-center text-gray-500 hover:text-gray-700"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <FaChevronLeft className="mr-2 mt-0.5" />{" "}
          <span className="font-semibold">Back</span>
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-[13px] py-1 rounded-full font-semibold ${
              currentPage === index + 1
                ? "bg-green-700 text-white"
                : "text-black hover:text-gray-700"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="flex items-center text-gray-500 hover:text-gray-700"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <span className="font-semibold">Next</span>{" "}
          <FaChevronRight className="ml-2 mt-0.5" />
        </button>
      </div>
    </div>
  );
}
