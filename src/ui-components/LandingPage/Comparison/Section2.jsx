import React from "react";
import img1 from "../../../assets/Comparison/dt1.webp";
import img2 from "../../../assets/Comparison/dt2.webp";
import img3 from "../../../assets/Comparison/dt3.webp";
import { useParams } from "react-router-dom";

export default function Section2() {
  const { topic } = useParams();

  const generateHeadingAndText = (topic) => {
    switch (topic) {
      case "Never_Bounce":
        return {
          heading1: `NeverBounce`,
          heading2: `Mountain Email Verifier`,
          heading3: `Consistent Accuracy`,
          text1:
            "Provides both pay-as-you-go credits and monthly subscriptions, though pricing can rise significantly for large-volume users over time.",
          text2:
            "Often offers lower per-verification costs compared to NeverBounce, making it a cost-effective option for businesses of all sizes.",
          text3:
            "Frequent data source updates and advanced multi-layered checks help maintain a high email deliverability rate consistently.",
        };
      case "Zero_Bounce":
        return {
          heading1: `Faster Bulk Verifications`,
          heading2: `Cheaper at Scale`,
          heading3: `Top-Notch Compliance`,
          text1: "Designed for high-speed performance, making it especially efficient when processing large datasets without slowdowns.",
          text2:
            "Verification costs per email remain lower than ZeroBounce, particularly when handling bulk lists for large businesses.",
          text3:
            "Ensures strong data privacy and security compliance, so you save money without compromising protection or accuracy.",
        };
      case "Brite_Verify":
        return {
          heading1: `Greater Speed & Scalability`,
          heading2: `Lower Rates`,
          heading3: `Similar Integrations`,
          text1: "Maintains high efficiency, even during peak usage hours, preventing slowdowns when processing massive email lists.",
          text2: "More affordable bulk verification pricing, ensuring businesses save money without sacrificing quality or speed.",
          text3: "Seamlessly integrates with major CRMs and ESPs, offering compatibility similar to BriteVerify’s integration options.",
        };
      case "Kick_box":
        return {
          heading1: `Bulk Speed`,
          heading2: `Lower Cost at Scale`,
          heading3: `Equally Deep Insights`,
          text1: "Optimized for handling large email lists faster, significantly reducing verification waiting times for bulk senders.",
          text2:
            "Pricing remains highly competitive, even for enterprises managing extensive email marketing and verification needs.",
          text3:
            "Provides detailed insights into invalid, disposable, and potentially risky email addresses to enhance deliverability.",
        };
      case "De_Bounce":
        return {
          heading1: `Higher Speed on Large Files`,
          heading2: `Cheaper Per-Verification Rates`,
          heading3: `Comparable or Better Accuracy`,
          text1: "Processes large email lists at faster speeds, ensuring quick turnaround times for businesses with high-volume needs.",
          text2: "More cost-effective pricing per verification, making it a budget-friendly option for growing organizations.",
          text3: "Delivers top-tier data validation accuracy, comparable to or even better than other leading email verifiers.",
        };
      case "X_verify":
        return {
          heading1: `All-in-One Verification`,
          heading2: `Lower Overall Cost`,
          heading3: `Faster Bulk Processing`,
          text1: "Combines fraud detection and deliverability improvements into a single, efficient email verification platform.",
          text2: "Ideal for businesses frequently verifying large email lists, as it keeps overall expenses lower over time.",
          text3: "Ensures minimal waiting times even when performing advanced verification checks on extensive email databases.",
        };
      case "EmailList_Verify":
        return {
          heading1: `Higher Speed`,
          heading2: `Lower Rates`,
          heading3: `Advanced Deliverability Insights`,
          text1: "Uses an efficient processing engine to handle and verify large email lists with high speed and accuracy.",
          text2: "Offers more competitive rates, especially for businesses conducting frequent or large-scale email verifications.",
          text3: "Provides deeper insights into email deliverability, giving more than just basic valid or invalid status reports.",
        };
      case "Clear_out":
        return {
          heading1: `Faster Bulk Processing`,
          heading2: `Lower Per-Verification Rates`,
          heading3: `Equally Broad Integrations`,
          text1: "Scales effectively for verifying very large email campaigns without causing delays or performance issues.",
          text2: "Long-term savings with lower costs per verification, making it a cost-efficient option for marketers.",
          text3: "Seamlessly integrates with your current marketing stack, eliminating the need for major workflow adjustments.",
        };
      case "Email_able":
        return {
          heading1: `Faster Large-List Verification`,
          heading2: `Cheaper at Scale`,
          heading3: `Similarly Detailed Reporting`,
          text1: "Reduces wait times and reporting delays, ensuring high efficiency even when processing massive email lists.",
          text2:
            "Perfect for businesses handling frequent high-volume email campaigns, keeping costs low without compromising quality.",
          text3: "Provides the same level of in-depth insights and reporting as competitors, but at a more affordable rate.",
        };
      case "Verify_Bee":
        return {
          heading1: `Better Speed on Big Lists`,
          heading2: `Lower Rates`,
          heading3: `Equal Integration Compatibility`,
          text1: "Reduces verification wait times, allowing businesses to quickly process and clean large email lists efficiently.",
          text2: "Delivers cost-effective pricing, helping businesses save more money, especially when verifying bulk emails regularly.",
          text3: "Maintains full compatibility with major integrations, ensuring a smooth transition without losing functionality.",
        };
      default:
        return {
          heading1: `Better Speed on Big Lists`,
          heading2: `Lower Rates`,
          heading3: `Equal Integration Compatibility`,
          text1: "Reduces verification wait times, allowing businesses to quickly process and clean large email lists efficiently.",
          text2: "Delivers cost-effective pricing, helping businesses save more money, especially when verifying bulk emails regularly.",
          text3: "Maintains full compatibility with major integrations, ensuring a smooth transition without losing functionality.",
        };
    }
  };  

  const { heading1, heading2, heading3, text1, text2, text3 } =
    generateHeadingAndText(topic);
  return (
    <section className="text-center pb-20 px-10 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold lg:px-20 text-gray-900 mb-14">
        We've built the most intuitive and accessible platform to reach your
        business potential
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <div className="text-center">
          <img
            src={img1}
            alt="Easy to use interface"
            className="mx-auto h-20 w-20 mb-4"
          />
          <h3 className="font-semibold text-lg text-gray-900">{heading1}</h3>
          <p className="text-gray-600 mt-2">{text1}</p>
        </div>
        <div className="text-center">
          <img
            src={img2}
            alt="Only pay for what you need"
            className="mx-auto h-20 w-20 mb-4"
          />
          <h3 className="font-semibold text-lg text-gray-900">{heading2}</h3>
          <p className="text-gray-600 mt-2">{text2}</p>
        </div>
        <div className="text-center">
          <img
            src={img3}
            alt="24/7 support from real humans"
            className="mx-auto h-20 w-20 mb-4"
          />
          <h3 className="font-semibold text-lg text-gray-900">{heading3}</h3>
          <p className="text-gray-600 mt-2">{text3}</p>
        </div>
      </div>
    </section>
  );
}
