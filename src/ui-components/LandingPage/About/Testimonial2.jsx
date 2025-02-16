import React from "react";
import img1 from "../../../assets/Landing/Tes1.webp";
import img2 from "../../../assets/Landing/tes2.webp";
import img3 from "../../../assets/Landing/tes3.webp";

export default function Testimonial2() {
  const sections = [
    {
      title: "Customer empowerment",
      text: "At Brevo, we believe in empowerment through accessibility. Our platform, available in six languages, serves as a marketing tool accessible to everyone with a forever free plan. Additionally, we provide free digital marketing training through Brevo Academy, fostering growth for small- and medium-size businesses. We proudly offer special discounts to NGOs, recognizing their invaluable contributions. Supporting these organizations with our vision.",
      image: img1,
    },
    {
      title: "Inclusive workplace",
      text: "We actively promote diversity, equity, and inclusion through internal training programs, addressing vital topics such as anti-harassment and anti-discrimination. Our support groups, including the Social Committee, Rainbow Alliance, Anti-Moral and Anti-Sexual Referent, and Mental Health First Aids, ensure that our workplace is inclusive and supportive. We conduct annual Diversity, Equity, and Inclusion surveys, ensuring a continuously inclusive work environment. 'Great Place to Work for Women.'",
      image: img2,
    },
    {
      title: "Sustainability Commitment",
      text: "At Brevo, sustainability is at the core of our mission. We are committed to reducing our carbon footprint by implementing eco-friendly business practices. From paperless operations, we continuously seek ways to minimize our impact on the environment. Additionally, we collaborate with green organizations to promote sustainability awareness among our employees and partners.",
      image: img3,
    },
  ];

  return (
    <div className="pt-14 pb-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">
        Our dedication to diversity, equality, and inclusion
      </h1>
      <div className="space-y-14 px-10 sm:px-20">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-8`}
          >
            <div className="w-full md:w-1/2 px-2 sm:px-5 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-800">{section.text}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img src={section.image} alt={section.title} className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}