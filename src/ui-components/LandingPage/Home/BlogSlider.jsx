import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import mainimg1 from "../../../assets/Landing/b1.webp";
import mainimg2 from "../../../assets/Landing/b2.webp";
import mainimg3 from "../../../assets/Landing/b3.webp";
import { Calendar } from "lucide-react";

const testimonials = [
  {
    date: "Dec 12, 2024",
    location: "Sales Director at TechSolutions",
    heading: "Rules of Retail: 8 Retail Marketing Trends...",
    feedback:
      "Mountain Email Finder is a game-changing solution. It has drastically reduced my bounce rates, ensuring my emails reach their destination successfully.",
    image: mainimg1,
  },
  {
    date: "Dec 20, 2024",
    location: "Talent Acquisition at GlobalCorp",
    heading: "Best Time to Send an Email: Day, Hour, Industry...",
    feedback:
      "The platform delivers impressive speed, highly accurate results, and an intuitive UI/UX that makes the experience seamless.",
    image: mainimg2,
  },
  {
    date: "Jan 12, 2025",
    location: "Marketing Manager at Growth Inc.",
    heading: "11 Best Email Marketing Platforms for Small Business...",
    feedback:
      "One of the standout features of Mountain Email Finder is its in-depth email analysis. It provides detailed insights into email accounts.",
    image: mainimg3,
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const [transitioning, setTransitioning] = useState(false);

  function getVisibleCards() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  const handleNext = () => {
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const displayedTestimonials = [];
  for (let i = 0; i < visibleCards; i++) {
    displayedTestimonials.push(
      testimonials[(currentIndex + i) % testimonials.length]
    );
  }

  useEffect(() => {
    const handleResize = () => {
      const newVisibleCards = getVisibleCards();
      setVisibleCards(newVisibleCards);
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative max-w-6xl mx-auto pt-20 pb-12 px-6 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Latest Blog</h1>
      <h2 className="text-gray-800 mb-12">
        Check our recent blog posts about different technologies and keep
        yourself up-to-date with the tech world.
      </h2>
      <div className="flex items-center">
        <button onClick={handlePrevious} className="text-[#0b996e] text-2xl">
          <FaChevronLeft />
        </button>
        <div className="flex gap-4 min-[400px]:mx-4 xl:mx-5">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group rounded-t-3xl rounded-b-3xl bg-slate-50 border border-gray-300 transition-transform transform hover:scale-105 duration-300 shadow-md min-[400px]:w-full w-[260px] max-w-md flex flex-col justify-between h-[450px] ${
                transitioning ? "" : "show"
              }`}
            >
              <img
                src={testimonial.image}
                alt="Testimonial"
                className="object-cover w-full h-52 rounded-t-3xl"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2 group-hover: text-[#0b996e]" />
                  <span> {testimonial.date}</span>
                </div>
                <p className="text-xs text-[#0b996e] font-semibold mb-1 uppercase tracking-wide">
                  {testimonial.location}
                </p>
                <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#0b996e] transition-colors duration-200">
                  {testimonial.heading}
                </h3>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="text-[#0b996e] text-2xl">
          <FaChevronRight />
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-12">
        {displayedTestimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-[#0b996e]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
