import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from "../../../assets/Landing/user2.jpeg";
import img2 from "../../../assets/Landing/user3.jpeg";
import img3 from "../../../assets/Landing/user4.jpeg";
import img4 from "../../../assets/Landing/user5.jpeg";

const testimonials = [
  {
    name: "Alex Johnson",
    location: "Sales Director at TechSolutions",
    feedback:
      "Mountain Email Finder is a game-changing solution. It has drastically reduced my bounce rates, ensuring my emails reach their destination successfully. Not only is it cost-effective and user-friendly, but it’s also an essential tool for any online business.",
    image: img1,
  },
  {
    name: "Maria Rodriguez",
    location: "Talent Acquisition at GlobalCorp",
    feedback:
      "The platform delivers impressive speed, highly accurate results, and an intuitive UI/UX that makes the experience seamless. The generous usage limits and highly responsive support further enhance its value.",
    image: img2,
  },
  {
    name: "Liam Smith",
    location: "Marketing Manager at GrowthHackers Inc.",
    feedback:
      "One of the standout features of Mountain Email Finder is its in-depth email analysis. It provides detailed insights into email accounts, allowing me to refine my list for optimal results. Plus, it doesn’t charge for unknown results and delivers results swiftly.",
    image: img3,
  },
  {
    name: "David Smith",
    location: "Manager at GrowthMarket Co.",
    feedback:
      "A key advantage of Mountain Email Finder is its detailed reporting. It assigns scores to each email, helping me filter my list effectively for the best results. Plus, it doesn’t charge for unknown results and delivers verifications in no time!",
    image: img4,
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
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Client Reviews</h1>
      <h2 className="text-gray-700 mb-12 mx-10 lg:mx-36">
        Mountain Email Finder is reviewed by 500+ people with an average rating of 4.9/5.0
        across different platforms like G2, TrustPilot, Capterra, GetApp, etc.
      </h2>
      <div className="flex items-center">
        <button onClick={handlePrevious} className="text-[#0b996e] text-2xl">
          <FaChevronLeft />
        </button>
        <div className="flex gap-4 min-[400px]:mx-4 xl:mx-5">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-[#e8fedf] p-6 lg:p-10 rounded-md shadow-md min-[400px]:w-full w-[260px] max-w-md flex flex-col justify-between h-[450px] testimonial ${
                transitioning ? "" : "show"
              }`}
            >
              <div>
                <img
                  src={testimonial.image}
                  alt="Testimonial"
                  className="object-cover w-20 h-20 mb-5 -mt-4 rounded-full"
                />
              </div>
              <p className="italic text-gray-800 text-md mb-4">
                {testimonial.feedback}
              </p>
              <div className="mt-auto">
                <h3 className="text-[#15233F] font-bold">{testimonial.name}</h3>
                <p className="text-[#0b996e] text-sm font-semibold">
                  {testimonial.location}
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
