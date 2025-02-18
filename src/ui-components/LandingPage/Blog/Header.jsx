import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import bigimg1 from "../../../assets/Landing/lg1.webp";
import smallimg1 from "../../../assets/Landing/sm1.webp";
import smallimg2 from "../../../assets/Landing/sm2.webp";
import smallimg3 from "../../../assets/Landing/sm3.webp";

const blogPosts = [
  {
    id: 1,
    image: smallimg1,
    category: "EMAIL MARKETING",
    title: "What is Email Marketing and How to Do It Right",
  },
  {
    id: 2,
    image: smallimg2,
    category: "EMAIL MARKETING",
    title: "11 Best Mailchimp Alternatives Compared (2025): Make the Switch",
  },
  {
    id: 3,
    image: smallimg3,
    category: "EMAIL MARKETING",
    title: "How to Create a Newsletter in 9 Easy Steps (Completely Free)",
  },
];

export default function BlogSection() {
  const navigate = useNavigate();

  const handleNavigate = (title) => {
    const formattedTitle = encodeURIComponent(title);
    navigate(`/blog/details/${formattedTitle}`);
  };

  return (
    <div className="bg-[#d7fec8] px-6 py-12 md:py-20 md:px-20 rounded-br-[70px] md:rounded-br-[120px]">
      <h1 className="text-4xl font-bold text-center mb-12">Mountain Blogs</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="md:col-span-2 bg-white rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-md cursor-pointer"
          onClick={() =>
            handleNavigate("11 Best Email Marketing Platforms for Small Business (2024)")
          }
        >
          <img src={bigimg1} alt="Blog Featured" className="w-full h-auto" />
          <div className="px-7 py-8">
            <p className="text-[12px] text-gray-600 font-semibold">
              EMAIL MARKETING
            </p>
            <h2 className="text-[16px] font-bold text-gray-900 mt-2">
              11 Best Email Marketing Platforms for Small Business (2024)
            </h2>
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
              The best email marketing platforms will equip you with tools like
              intuitive email builders, email templates, and ways to personalize
              emails. They also offer advanced features like segmentation and
              automation to help you engage subscribers and strengthen customer
              relationships.
            </p>
            <span className="text-green-600 font-semibold flex items-center gap-1 mt-3">
              Read <ArrowRight size={14} />
            </span>
          </div>
        </div>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-br-2xl overflow-hidden shadow-md flex cursor-pointer"
              onClick={() => handleNavigate(post.title)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-[35%] h-auto object-cover"
              />
              <div className="px-3 py-4 w-[65%]">
                <p className="text-[12px] text-gray-700 font-semibold">
                  {post.category}
                </p>
                <h3 className="text-[16px] mt-2 font-bold text-gray-900 leading-tight">
                  {post.title}
                </h3>
                <span className="text-green-600 font-semibold flex items-center gap-1 mt-[15px]">
                  Read <ArrowRight className="mt-0.5" size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
