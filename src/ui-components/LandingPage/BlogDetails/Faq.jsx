import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is an email marketing platform?',
    answer: 'An email marketing platform is a software that helps you create, send, and track email marketing campaigns. It usually offers a drag-and-drop editor for email creation, subscriber management tools to manage your email lists, automation features to trigger campaigns, as well as analytics to track key metrics (e.g. bounces, open rates, click-through rates, unsubscribe rates).'
  },
  {
    question: 'What is the best email marketing platform?',
    answer: 'The best email marketing platform depends on your needs, but popular options include Mailchimp, ConvertKit, and Mountain Email Finder for high accuracy and bulk processing.'
  },
  {
    question: 'What costs should you expect to pay for an email marketing tool?',
    answer: 'Pricing varies based on features and subscriber count. Some tools offer free tiers, while premium plans range from $10 to $100+ per month.'
  },
  {
    question: 'What are the main features to look for in an email marketing platform?',
    answer: 'Key features include email automation, segmentation, A/B testing, analytics, drag-and-drop editors, and integrations with CRM tools.'
  },
  {
    question: 'For what types of businesses are these email platforms suitable?',
    answer: 'Email marketing platforms are suitable for all business types, including e-commerce, SaaS, agencies, and bloggers looking to engage their audience effectively.'
  },
  {
    question: 'How does Mountain Email Finder ensure email accuracy?',
    answer: 'Mountain Email Finder uses advanced algorithms and real-time verification to ensure high accuracy in email discovery, reducing bounce rates.'
  },
  {
    question: 'Can I use Mountain Email Finder for bulk email discovery?',
    answer: 'Yes, Mountain Email Finder supports bulk email discovery, making it easy to find and verify multiple email addresses at once.'
  },
  {
    question: 'Is Mountain Email Finder suitable for small businesses?',
    answer: 'Absolutely! Mountain Email Finder offers affordable pricing plans tailored for small businesses looking to enhance their email marketing strategies.'
  },
  {
    question: 'Does Mountain Email Finder integrate with other tools?',
    answer: 'Yes, Mountain Email Finder integrates with popular CRM and marketing automation tools to streamline your workflow.'
  },
  {
    question: 'What kind of customer support does Mountain Email Finder offer?',
    answer: 'Mountain Email Finder provides 24/7 customer support via email and live chat to assist users with any inquiries or technical issues.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 my-14">
      <h2 className="text-2xl text-center font-bold mb-7">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600 pb-4">
            <button
              className="w-full text-left flex justify-between items-center py-3 text-[17px] font-medium"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && <p className="mt-2 text-[13.5px] text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
