import React from "react";
import img1 from "../../../assets/Comparison/te1.webp";
import img2 from "../../../assets/Comparison/te2.webp";
import img3 from "../../../assets/Comparison/te3.webp";
import { useParams } from "react-router-dom";

export default function Testimonial2() {
  const { topic } = useParams();

  const generateHeadingAndText = (topic) => {
    switch (topic) {
      case "Never_Bounce":
        return {
          heading1: `NeverBounce`,
          heading2: `Mountain Email Verifier`,
          heading3: `Consistent Accuracy`,
          subheading1: `Flexible Pricing`,
          subheading2: `High Accuracy`,
          subheading3: `Reliable Deliverability`,
          text1:
            "NeverBounce offers pay-as-you-go credits and monthly subscriptions, making it flexible for small to medium businesses. However, costs can escalate significantly for high-volume users, which may not be ideal for enterprises with extensive email verification needs over time.",
          text2:
            "Mountain Email Verifier often provides lower per-verification costs compared to NeverBounce, making it a more budget-friendly choice for businesses of all sizes. Its competitive pricing ensures affordability without compromising on the quality or reliability of email verification services.",
          text3:
            "With frequent updates to its data sources and advanced multi-layered verification checks, Mountain Email Verifier ensures consistently high email deliverability rates. This makes it a dependable choice for marketers aiming to maintain clean and effective email lists.",
        };
      case "Zero_Bounce":
        return {
          subheading1: `Fast Processing`,
          subheading2: `Affordable Pricing`,
          subheading3: `Strong Security`,
          heading1: `Faster Bulk Verifications`,
          heading2: `Cheaper at Scale`,
          heading3: `Top-Notch Compliance`,
          text1:
            "ZeroBounce is designed for high-speed performance, excelling in processing large datasets quickly without slowdowns. This makes it ideal for businesses with extensive email verification needs, ensuring fast and efficient results even with bulk email lists.",
          text2:
            "Mountain Email Verifier offers lower per-email verification costs than ZeroBounce, especially for bulk lists. This ensures significant cost savings for large businesses while maintaining high-quality results and reliable email verification services.",
          text3:
            "With robust data privacy and security measures, Mountain Email Verifier ensures compliance with industry standards. This provides peace of mind for businesses, knowing their data is protected while maintaining affordability and accuracy in email verification.",
        };
      case "Brite_Verify":
        return {
          subheading1: `High Volume`,
          subheading2: `Low Cost`,
          subheading3: `Seamless Integration`,
          heading1: `Greater Speed & Scalability`,
          heading2: `Lower Rates`,
          heading3: `Similar Integrations`,
          text1:
            "Mountain Email Verifier maintains high efficiency even during peak usage, ensuring fast processing of massive email lists without delays. This makes it ideal for high-volume users who need quick and reliable email verification services.",
          text2:
            "With more affordable bulk verification pricing, Mountain Email Verifier helps businesses save money while maintaining high-quality results and fast processing speeds. Its cost-effective approach ensures long-term savings for frequent users.",
          text3:
            "Seamlessly integrating with major CRMs and ESPs, Mountain Email Verifier offers compatibility similar to BriteVerify. This ensures smooth workflows and enhanced productivity, making it easy to incorporate into existing marketing systems.",
        };
      case "Kick_box":
        return {
          subheading1: `Fast Verification`,
          subheading2: `Cost-Effective`,
          subheading3: `Deep Insights`,
          heading1: `Bulk Speed`,
          heading2: `Lower Cost at Scale`,
          heading3: `Equally Deep Insights`,
          text1:
            "Mountain Email Verifier is optimized for handling large email lists quickly, significantly reducing verification times for bulk senders. This improves overall efficiency and ensures faster turnaround times for businesses with high-volume email verification needs.",
          text2:
            "With highly competitive pricing, Mountain Email Verifier remains cost-effective for enterprises managing extensive email marketing and verification needs. Its affordable rates ensure long-term savings without compromising on quality or speed.",
          text3:
            "Providing detailed insights into invalid, disposable, and risky email addresses, Mountain Email Verifier enhances deliverability and helps businesses maintain clean email lists. These insights are crucial for improving email campaign performance.",
        };
      case "De_Bounce":
        return {
          subheading1: `Fast Processing`,
          subheading2: `Affordable Rates`,
          subheading3: `High Accuracy`,
          heading1: `Higher Speed on Large Files`,
          heading2: `Cheaper Per-Verification Rates`,
          heading3: `Comparable or Better Accuracy`,
          text1:
            "Mountain Email Verifier processes large email lists faster, ensuring quick turnaround times for businesses with high-volume needs. This improves overall productivity and helps businesses maintain efficient email marketing campaigns without delays.",
          text2:
            "Offering more cost-effective pricing per verification, Mountain Email Verifier is a budget-friendly choice for growing organizations. Its affordable rates ensure reliable email validation services without straining the budget.",
          text3:
            "With top-tier data validation accuracy, Mountain Email Verifier delivers results comparable to or better than other leading email verification tools. This ensures businesses can trust the quality and reliability of their email lists.",
        };
      case "X_verify":
        return {
          subheading1: `Fraud Detection`,
          subheading2: `Bulk Savings`,
          subheading3: `Quick Processing`,
          heading1: `All-in-One Verification`,
          heading2: `Lower Overall Cost`,
          heading3: `Faster Bulk Processing`,
          text1:
            "Mountain Email Verifier combines fraud detection and deliverability improvements into a single platform, offering a comprehensive solution for email verification and list cleaning. This ensures businesses can maintain clean and effective email lists with ease.",
          text2:
            "Ideal for businesses frequently verifying large email lists, Mountain Email Verifier keeps overall expenses lower over time. Its cost-effective approach ensures reliable service without compromising on quality or speed.",
          text3:
            "With minimal waiting times, Mountain Email Verifier efficiently performs advanced verification checks on extensive email databases. This ensures quick and accurate results, making it a reliable choice for businesses with high-volume needs.",
        };
      case "EmailList_Verify":
        return {
          subheading1: `High Speed`,
          subheading2: `Low Cost`,
          subheading3: `Advanced Analysis`,
          heading1: `Higher Speed`,
          heading2: `Lower Rates`,
          heading3: `Advanced Deliverability Insights`,
          text1:
            "Mountain Email Verifier uses an efficient processing engine to handle and verify large email lists with high speed and accuracy. This ensures quick results for users, making it ideal for businesses with time-sensitive email campaigns.",
          text2:
            "With competitive rates, Mountain Email Verifier is an affordable option for businesses conducting frequent or large-scale email verifications. Its cost-effective pricing ensures long-term savings without compromising on quality or reliability.",
          text3:
            "Providing deeper insights into email deliverability, Mountain Email Verifier offers more than just basic valid or invalid status reports. These insights help businesses improve email campaign performance and maintain clean email lists.",
        };
      case "Clear_out":
        return {
          subheading1: `Fast Scaling`,
          subheading2: `Budget-Friendly`,
          subheading3: `Wide Integrations`,
          heading1: `Faster Bulk Processing`,
          heading2: `Lower Per-Verification Rates`,
          heading3: `Equally Broad Integrations`,
          text1:
            "Mountain Email Verifier scales effectively for verifying large email campaigns without delays, ensuring high performance and efficiency for businesses with extensive needs. Its fast processing capabilities make it ideal for high-volume users.",
          text2:
            "With lower costs per verification, Mountain Email Verifier offers long-term savings, making it a cost-efficient choice for marketers managing large email lists. Its affordable rates ensure reliable service without breaking the budget.",
          text3:
            "Seamlessly integrating with your current marketing stack, Mountain Email Verifier eliminates the need for major workflow adjustments. This ensures smooth and efficient operations, making it easy to incorporate into existing systems.",
        };
      case "Email_able":
        return {
          subheading1: `Fast Verification`,
          subheading2: `Affordable Scaling`,
          subheading3: `Detailed Reports`,
          heading1: `Faster Large-List Verification`,
          heading2: `Cheaper at Scale`,
          heading3: `Similarly Detailed Reporting`,
          text1:
            "Mountain Email Verifier reduces wait times and reporting delays, ensuring high efficiency even when processing massive email lists. This makes it ideal for large-scale users who need quick and reliable email verification services.",
          text2:
            "Perfect for businesses handling frequent high-volume email campaigns, Mountain Email Verifier keeps costs low without compromising quality. Its affordable pricing ensures reliability and efficiency for businesses of all sizes.",
          text3:
            "Providing in-depth insights and reporting, Mountain Email Verifier matches competitors in detail while offering more affordable rates. These detailed reports help businesses improve email deliverability and campaign performance.",
        };
      case "Verify_Bee":
        return {
          subheading1: `Efficient Processing`,
          subheading2: `Low Cost`,
          subheading3: `Easy Integration`,
          heading1: `Better Speed on Big Lists`,
          heading2: `Lower Rates`,
          heading3: `Equal Integration Compatibility`,
          text1:
            "Mountain Email Verifier reduces verification wait times, allowing businesses to quickly process and clean large email lists efficiently. This ensures faster campaign launches and improved productivity for businesses with high-volume needs.",
          text2:
            "With cost-effective pricing, Mountain Email Verifier helps businesses save money, especially when verifying bulk emails regularly. Its affordable rates ensure reliable service without compromising on quality or accuracy.",
          text3:
            "Maintaining full compatibility with major integrations, Mountain Email Verifier ensures a smooth transition without losing functionality. This enhances workflow efficiency and makes it easy to incorporate into existing systems.",
        };
      default:
        return {
          subheading1: `Efficient Processing`,
          subheading2: `Low Cost`,
          subheading3: `Easy Integration`,
          heading1: `Better Speed on Big Lists`,
          heading2: `Lower Rates`,
          heading3: `Equal Integration Compatibility`,
          text1:
            "Mountain Email Verifier reduces verification wait times, allowing businesses to quickly process and clean large email lists efficiently. This ensures faster campaign launches and improved productivity for businesses with high-volume needs.",
          text2:
            "With cost-effective pricing, Mountain Email Verifier helps businesses save money, especially when verifying bulk emails regularly. Its affordable rates ensure reliable service without compromising on quality or accuracy.",
          text3:
            "Maintaining full compatibility with major integrations, Mountain Email Verifier ensures a smooth transition without losing functionality. This enhances workflow efficiency and makes it easy to incorporate into existing systems.",
        };
    }
  };

  const {
    heading1,
    heading2,
    heading3,
    text1,
    text2,
    text3,
    subheading1,
    subheading2,
    subheading3,
  } = generateHeadingAndText(topic);

  return (
    <div className="mt-10 lg:mt-20 pb-10">
      <div className="space-y-14">
        <h2 className="text-[33px] text-center font-semibold text-green-900">
          Why Mountain Email Verifier Wins
        </h2>
        <div className="flex px-10 sm:px-20 flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 px-2 sm:px-5 text-center md:text-left">
            <h2 className="text-lg font-semibold text-[#096e46] mb-3">
              {subheading1}
            </h2>
            <h2 className="text-[23px] font-semibold text-gray-900 mb-4">
              {heading1}
            </h2>
            <p className="text-gray-800">{text1}</p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={img1} alt={subheading1} className="w-[500px] h-[400px]" />
          </div>
        </div>
        <div className="flex px-10 sm:px-20 flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-1/2 px-2 sm:px-5 text-center md:text-left">
            <h2 className="text-lg font-semibold text-[#096e46] mb-3">
              {subheading2}
            </h2>
            <h2 className="text-[23px] font-semibold text-gray-900 mb-4">
              {heading2}
            </h2>
            <p className="text-gray-800">{text2}</p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={img2} alt={subheading1} className="w-[450px] h-[450px]" />
          </div>
        </div>
        <div className="flex px-10 sm:px-20 flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 px-2 sm:px-5 text-center md:text-left">
            <h2 className="text-lg font-semibold text-[#096e46] mb-3">
              {subheading3}
            </h2>
            <h2 className="text-[23px] font-semibold text-gray-900 mb-4">
              {heading3}
            </h2>
            <p className="text-gray-800">{text3}</p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={img3} alt={subheading1} className="w-[450px] h-[380px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
