import React from "react";
import { Smile, CreditCard, Repeat, Edit, Info, Mail, Calendar, Lock, User, Globe, Shield, Settings } from "lucide-react";

export default function Faqs() {
  const faqs = [
    {
      icon: <Smile className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
    },
    {
      icon: <Repeat className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "What is your cancellation policy?",
      answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
    {
      icon: <CreditCard className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "How does billing work?",
      answer: "Plans are per workspace, not per account. You can upgrade one workspace and still have any number of free workspaces.",
    },
    {
      icon: <Edit className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "Can I change my plan later?",
      answer: "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
    },
    {
      icon: <Info className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "Can other info be added to an invoice?",
      answer: "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
    },
    {
      icon: <Mail className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "How do I change my account email?",
      answer: "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
    },
    {
      icon: <Calendar className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "How do I schedule a demo?",
      answer: "You can schedule a demo by contacting our support team or using the scheduling tool on our website.",
    },
    {
      icon: <Lock className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "Is my data secure?",
      answer: "Yes, we prioritize data security and use industry-standard encryption to protect your information.",
    },
    {
      icon: <User className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "Can I add team members?",
      answer: "Absolutely! You can invite team members to collaborate within your workspace at no extra cost.",
    },
    {
      icon: <Globe className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "Do you support international billing?",
      answer: "Yes, we support billing in multiple currencies and accept payments from around the world.",
    },
    {
      icon: <Shield className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "Do you offer GDPR compliance?",
      answer: "Yes, we are fully compliant with GDPR regulations to ensure your data is handled responsibly.",
    },
    {
      icon: <Settings className="sm:w-5 sm:h-5 w-4 h-4 text-btnBackgroundhover" />,
      question: "How do I update my account settings?",
      answer: "You can update your account settings by navigating to the 'Settings' section in your dashboard.",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="md:text-2xl text-xl pt-2 sm:pt-0 font-bold text-gray-800">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-sm md:text-base">Find the answers to the mostly asked questions below.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex items-start p-4 rounded-2xl border-[1px] border-[#e8e8e8] bg-white"
          >
            <div className="mr-4">
              <div className="rounded-lg bg-[#FAF5FF] sm:p-2 p-1 flex items-center justify-center">
                {faq.icon}
              </div>
            </div>
            <div>
              <h3 className="sm:text-lg text-base font-semibold text-gray-800">{faq.question}</h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
