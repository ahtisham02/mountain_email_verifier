import React from "react";
import { Puzzle, Code, Target } from "lucide-react";

export default function InfoSections() {
  return (
    <div className="md:-mt-20 my-16 lg:my-0 lg:-mt-28 flex flex-col md:flex-row gap-4 px-4 md:px-12 justify-center">
      {[
        {
          title: "RESTful Endpoints",
          desc: "Use simple HTTP requests to validate single or bulk emails in real time.",
          Icon: Puzzle,
        },
        {
          title: "Scalable & Fast",
          desc: "Designed to handle high throughput with minimal latency.",
          Icon: Code,
        },
        {
          title: "Extensive Documentation",
          desc: "Integrate in minutes with our developer docs, code examples, and SDKs.",
          Icon: Target,
        },
      ].map(({ title, desc, Icon }, index) => (
        <div
          key={index}
          className="relative bg-[#d7d4f0] rounded-2xl p-4 md:p-6 w-full md:max-w-[310px] h-[160px] shadow-md flex flex-col items-center justify-center text-center overflow-hidden"
        >
          <h2 className="text-lg font-semibold text-[#312e81]">{title}</h2>
          <p className="text-gray-600 text-[14px] mt-1">{desc}</p>
          <div className="absolute bottom-[-10px] right-[-10px]">
            <Icon size={60} className="text-[#312e81] opacity-50" />
          </div>
        </div>
      ))}
    </div>
  );
}
