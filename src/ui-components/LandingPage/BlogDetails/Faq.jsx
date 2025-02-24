import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How accurate are your verification results?",
    answer:
      "We use multiple verification checks to achieve 99%+ accuracy and continuously update our systems to reflect new email domain rules.",
  },
  {
    question: "Do you store my email lists?",
    answer:
      "We only store data for the time it takes to process your verifications. Afterward, it’s securely deleted according to our privacy policy.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer 100 free verifications so you can test our service risk-free.",
  },
  {
    question: "How fast is the bulk list cleaning?",
    answer:
      "Most lists are processed in minutes, but it depends on list size. Large lists may take slightly longer.",
  },
  {
    question:
      "For what types of businesses are these email platforms suitable?",
    answer:
      "Email marketing platforms are suitable for all business types, including e-commerce, SaaS, agencies, and bloggers looking to engage their audience effectively.",
  },
  {
    question: "How does Mountain Email Finder ensure email accuracy?",
    answer:
      "Mountain Email Finder uses advanced algorithms and real-time verification to ensure high accuracy in email discovery, reducing bounce rates.",
  },
  {
    question: "Can I use Mountain Email Finder for bulk email discovery?",
    answer:
      "Yes, Mountain Email Finder supports bulk email discovery, making it easy to find and verify multiple email addresses at once.",
  },
  {
    question: "Is Mountain Email Finder suitable for small businesses?",
    answer:
      "Absolutely! Mountain Email Finder offers affordable pricing plans tailored for small businesses looking to enhance their email marketing strategies.",
  },
  {
    question: "What kind of customer support does Mountain Email Finder offer?",
    answer:
      "Mountain Email Finder provides 24/7 customer support via email and live chat to assist users with any inquiries or technical issues.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 my-14">
      <h2 className="text-2xl text-center font-bold mb-7">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600 pb-4">
            <button
              className="w-full text-left flex justify-between items-center py-3 text-[17px] font-medium"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-[13.5px] text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
