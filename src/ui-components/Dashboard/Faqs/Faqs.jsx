import React from "react";
import { Smile, CreditCard, Repeat, Edit, Info, Mail, Calendar, Lock, User, Globe, Shield, Settings } from "lucide-react";

export default function Faqs() {
  const faqs = [
    {
      icon: <Smile className="w-5 h-5 text-[#AE33EA]" />,
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
    },
    {
      icon: <Repeat className="w-5 h-5 text-[#AE33EA]" />,
      question: "What is your cancellation policy?",
      answer: "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
    {
      icon: <CreditCard className="w-5 h-5 text-[#AE33EA]" />,
      question: "How does billing work?",
      answer: "Plans are per workspace, not per account. You can upgrade one workspace and still have any number of free workspaces.",
    },
    {
      icon: <Edit className="w-5 h-5 text-[#AE33EA]" />,
      question: "Can I change my plan later?",
      answer: "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
    },
    {
      icon: <Info className="w-5 h-5 text-[#AE33EA]" />,
      question: "Can other info be added to an invoice?",
      answer: "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
    },
    {
      icon: <Mail className="w-5 h-5 text-[#AE33EA]" />,
      question: "How do I change my account email?",
      answer: "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#AE33EA]" />,
      question: "How do I schedule a demo?",
      answer: "You can schedule a demo by contacting our support team or using the scheduling tool on our website.",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#AE33EA]" />,
      question: "Is my data secure?",
      answer: "Yes, we prioritize data security and use industry-standard encryption to protect your information.",
    },
    {
      icon: <User className="w-5 h-5 text-[#AE33EA]" />,
      question: "Can I add team members?",
      answer: "Absolutely! You can invite team members to collaborate within your workspace at no extra cost.",
    },
    {
      icon: <Globe className="w-5 h-5 text-[#AE33EA]" />,
      question: "Do you support international billing?",
      answer: "Yes, we support billing in multiple currencies and accept payments from around the world.",
    },
    {
      icon: <Shield className="w-5 h-5 text-[#AE33EA]" />,
      question: "Do you offer GDPR compliance?",
      answer: "Yes, we are fully compliant with GDPR regulations to ensure your data is handled responsibly.",
    },
    {
      icon: <Settings className="w-5 h-5 text-[#AE33EA]" />,
      question: "How do I update my account settings?",
      answer: "You can update your account settings by navigating to the 'Settings' section in your dashboard.",
    },
  ];

  return (
    <div className="bg-gray-50 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
        <p className="text-gray-600">Find the answers to the mostly asked questions below.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex items-start p-4 border border-gray-200 rounded-lg bg-white"
          >
            <div className="mr-4">
              <div className="rounded-lg bg-[#FAF5FF] p-2 flex items-center justify-center">
                {faq.icon}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
