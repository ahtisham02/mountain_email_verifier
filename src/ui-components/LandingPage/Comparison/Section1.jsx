import React from "react";
import tick from "../../../assets/Comparison/tick.svg";
import cross from "../../../assets/Comparison/x.svg";
import { useParams } from "react-router-dom";

export default function ComparisonSection() {
  const { topic } = useParams();

  const generateHeadingAndText = (topic) => {
    switch (topic) {
      case "Never_Bounce":
        return {
          text: (
            <>
              NeverBounce is a well-known email verification service, offering
              bulk list cleaning and real-time verifications. While it’s
              established and robust,{" "}
              <span className="font-semibold">Mountain Email Verifier</span>{" "}
              provides a{" "}
              <span className="font-bold">faster, more affordable</span>, and
              equally reliable—if not more accurate—verification solution.
            </>
          ),
          heading1: "Verification Speed",
          subm1: "Faster, thanks to a highly optimized verification engine",
          subc1: "Generally fast, but can slow for very large lists",
          heading2: "Accuracy",
          subm2: "99%+ accuracy, continuously updated data sources",
          subc2: "~99% accuracy",
          heading3: "Pricing Model",
          subm3: "Lower pay-as-you-go rates, flexible monthly plans",
          subc3: "Pay-as-you-go + Subscription",
          heading4: "Integrations",
          subm4: "Equally broad integrations + custom API endpoints",
          subc4: "Popular ESPs, CRM tools",
        };

      case "Zero_Bounce":
        return {
          text: (
            <>
              ZeroBounce is known for its AI-driven scoring and GDPR compliance.
              However,{" "}
              <span className="font-semibold">Mountain Email Verifier</span>{" "}
              outperforms ZeroBounce in verification speed, cost-effectiveness,
              and overall ease of use—without compromising data privacy.
            </>
          ),
          heading1: "Verification Speed",
          subm1: "Faster and more consistent for large/bulk lists",
          subc1: "High speed, but can vary with large volume",
          heading2: "Pricing",
          subm2: "Lower cost per verification at high volumes",
          subc2: "Competitive, but costs can add up at scale",
          heading3: "AI Scoring",
          subm3: "Delivers advanced risk assessment without extra cost",
          subc3: "Offers email activity scoring (AI-based)",
          heading4: "Compliance",
          subm4: "GDPR compliant + robust data security",
          subc4: "GDPR compliant",
        };
      case "Brite_Verify":
        return {
          text: (
            <>
              BriteVerify, part of Validity, has strong integrations and an
              easy-to-use interface. However,{" "}
              <span className="font-semibold">Mountain Email Verifier</span>{" "}
              competes directly on performance, price, and precision—making it a
              more attractive solution for businesses needing{" "}
              <span className="font-bold">faster and cost-effective </span>{" "}
              verifications.
            </>
          ),
          heading1: "Verification Speed",
          subm1: "Consistently faster for all list sizes",
          subc1: "Generally quick, but known to slow during peak times",
          heading2: "Accuracy",
          subm2: "99%+ accuracy, frequently updated",
          subc2: "~99% accuracy",
          heading3: "Pricing Structure",
          subm3: "Lower per-email costs, especially for large lists",
          subc3: "Per-email pricing, can be higher for bulk",
          heading4: "Integrations",
          subm4: "Equally robust + customizable API options",
          subc4: "Strong with Marketo, Salesforce, etc.",
        };
      case "Kick_box":
        return {
          text: (
            <>
              Kickbox is celebrated for its fast verification and deliverability
              insights.{" "}
              <span className="font-semibold">Mountain Email Verifier</span>{" "}
              matches and often exceeds Kickbox on speed, all while offering{" "}
              <span className="font-bold">lower overall costs</span>and equally
              detailed reporting.
            </>
          ),
          heading1: "Speed",
          subm1: "Faster for bulk + real-time checks",
          subc1: "Quick verification, especially for real-time checks",
          heading2: "Pricing",
          subm2: "Competitive pay-as-you-go + monthly deals",
          subc2: "Pay-as-you-go or monthly, can be pricey at scale",
          heading3: "Deliverability Data",
          subm3: "Comprehensive with advanced deliverability insights",
          subc3: "Offers bounce & spam trap detection",
          heading4: "Integrations",
          subm4: "Similar range, plus flexible API for custom setups",
          subc4: "ESP-focused integrations (Mailchimp, HubSpot)",
        };
      case "De_Bounce":
        return {
          text: (
            <>
              DeBounce offers fast bulk verification and a user-friendly
              dashboard.{" "}
              <span className="font-semibold">Mountain Email Verifier</span>{" "}
              competes directly by providing even{" "}
              <span className="font-bold">
                faster processing, lower pricing,
              </span>
              , and a similarly intuitive user experience.
            </>
          ),
          heading1: "Bulk Verification",
          subm1: "Even faster, optimized for large lists",
          subc1: "Fast, flexible file uploads",
          heading2: "Pricing",
          subm2: "Often cheaper, especially at high volumes",
          subc2: "Relatively affordable",
          heading3: "Accuracy",
          subm3: "99%+ with advanced validation checks",
          subc3: "~99% accuracy with frequent updates",
          heading4: "Dashboard UX",
          subm4: "Modern, intuitive UI with real-time updates",
          subc4: "User-friendly interface",
        };
      case "X_verify":
        return {
          text: (
            <>
              Xverify focuses on real-time verification and fraud prevention.{" "}
              <span className="font-semibold">Mountain Email Verifier</span>{" "}
              offers the same benefits{" "}
              <span className="font-bold">faster processing, lower </span>
              pricing, and a user-friendly interface.
            </>
          ),
          heading1: "Real-Time Verification",
          subm1: "Real-time checks with advanced catch-all detection",
          subc1: "Strong, specialized in role/account analysis",
          heading2: "Fraud Protection",
          subm2: "Comparable fraud & spam-trap detection",
          subc2: "Focus on e-commerce + identity checks",
          heading3: "Pricing",
          subm3: "Consistently lower cost for bulk verifications",
          subc3: "Varies, can be higher for large volumes",
          heading4: "Speed",
          subm4: "Optimized for speed with multi-layer validations",
          subc4: "Fast, but sometimes slowed by advanced checks",
        };
      case "EmailList_Verify":
        return {
          text: (
            <>
              EmailListVerify is known for its bulk cleaning and spam-trap
              detection.{" "}
              <span className="font-semibold">Mountain Email Verifier</span>{" "}
              excels at these tasks, offering a{" "}
              <span className="font-bold">faster </span>turnaround and typically{" "}
              <span className="font-bold">lower pricing.</span>
            </>
          ),

          heading1: "Spam Trap Detection",
          subm1: "Equal or better coverage with frequent updates",
          subc1: "Extensive spam-trap checks",
          heading2: "Bulk Cleansing",
          subm2: "Faster speeds, especially for multi-million lists",
          subc2: "Processes large lists, but speed varies",
          heading3: "Pricing",
          subm3: "More cost-effective, flexible plans",
          subc3: "Pay-as-you-go, potentially higher for big volumes",
          heading4: "Extra Tools",
          subm4: "Focused on advanced verification & deliverability",
          subc4: "Some limited email marketing tools",
        };
      case "Clear_out":
        return {
          text: (
            <>
              Clearout features real-time verification and integrations with
              tools like Zapier.{" "}
              <span className="font-semibold">Mountain Email Verifier</span>{" "}
              goes a step further, offering{" "}
              <span className="font-bold">faster </span>processing, wider
              integration support, and{" "}
              <span className="font-bold">better pricing.</span>
            </>
          ),
          heading1: "Spam Trap Detection",
          subm1: "Equally fast, plus robust bulk checks",
          subc1: "Quick verifications for new sign-ups",
          heading2: "Bulk Cleansing",
          subm2: "Optimized for large lists",
          subc2: "Efficient for moderate list sizes",
          heading3: "Pricing",
          subm3: "Lower cost, especially at scale",
          subc3: "Monthly plans + credits",
          heading4: "Extra Tools",
          subm4: "Similarly broad + custom API support",
          subc4: "Zapier, HubSpot, etc.",
        };
      case "Email_able":
        return {
          text: (
            <>
              Emailable (formerly DataValidation) is known for quick turnarounds
              and advanced reporting.{" "}
              <span className="font-semibold">Mountain Email Verifier</span>{" "}
              provides these same features with{" "}
              <span className="font-bold">faster </span>speeds on larger lists
              and more affordable pricing options.
            </>
          ),
          heading1: "Real-Time",
          subm1: "Faster, especially for large/bulk lists",
          subc1: "Generally fast for small/medium lists",
          heading2: "Bulk Processing",
          subm2: "Comprehensive metrics + advanced filtering",
          subc2: "Detailed, with deliverability metrics",
          heading3: "Pricing",
          subm3: "Budget-friendly at all volumes",
          subc3: "Pay-as-you-go or subscription",
          heading4: "Integrations",
          subm4: "Modern UI with intuitive navigation",
          subc4: "Straightforward dashboard",
        };
      case "Verify_Bee":
        return {
          text: (
            <>
              VerifyBee focuses on marketing automation integrations and bulk
              verification.{" "}
              <span className="font-semibold">Mountain Email Verifier</span>{" "}
              offers{" "}
              <span className="font-bold">faster speeds, lower costs,</span> and
              equally strong integrations—making it a go-to service for
              efficiency and savings.
            </>
          ),
          heading1: "Turnaround Time",
          subm1: "Highly scalable for very large lists",
          subc1: "Good for moderate volumes",
          heading2: "Reporting",
          subm2: "Lower cost overall, with flexible plans",
          subc2: "Subscription + pay-as-you-go options",
          heading3: "Pricing",
          subm3: "Similar range + robust API",
          subc3: "Marketing automation, CRMs",
          heading4: "Ease of Use",
          subm4: "Even faster + 99%+ accuracy",
          subc4: "Fairly quick, ~99% accuracy",
        };
      default:
        return {
          text: (
            <>
              NeverBounce is a well-known email verification service, offering
              bulk list cleaning and real-time verifications. While it’s
              established and robust,{" "}
              <span className="font-semibold">Mountain Email Verifier</span>{" "}
              provides a{" "}
              <span className="font-bold">faster, more affordable</span>, and
              equally reliable—if not more accurate—verification solution.
            </>
          ),
          heading1: "Turnaround Time",
          subm1: "Highly scalable for very large lists",
          subc1: "Good for moderate volumes",
          heading2: "Reporting",
          subm2: "Lower cost overall, with flexible plans",
          subc2: "Subscription + pay-as-you-go options",
          heading3: "Pricing",
          subm3: "Similar range + robust API",
          subc3: "Marketing automation, CRMs",
          heading4: "Ease of Use",
          subm4: "Even faster + 99%+ accuracy",
          subc4: "Fairly quick, ~99% accuracy",
        };
    }
  };

  const { text, heading1, heading2, heading3, heading4, subm1, subm2, subm3, subm4, subc1, subc2, subc3, subc4 } = generateHeadingAndText(topic);
  return (
    <section className="max-w-[870px] text-[17.5px] mx-auto text-left py-14 lg:py-20 px-6">
      <h2 className="text-[33px] text-center font-semibold text-green-900">
        Mountain Email Verifier vs.{" "}
        {topic
          .split("_")
          .map((word, index) =>
            index < 2 ? word.charAt(0).toUpperCase() + word.slice(1) : word
          )
          .join(" ")}
        : <span className="font-bold">Get More for Less</span>
      </h2>
      <p className="text-gray-800 mt-6 lg:mt-10">{text}</p>
      <p className="text-gray-800 mt-4">
        With{" "}
        {topic
          .split("_")
          .map((word, index) =>
            index < 2 ? word.charAt(0).toUpperCase() + word.slice(1) : word
          )
          .join(" ")}
        , pricing is based on the number of verifications, which can add up
        quickly for large lists. In contrast,{" "}
        <span className="font-semibold">Mountain Email Verifier</span> offers
        cost-effective plans with{" "}
        <span className="font-bold">high accuracy</span>, ensuring you get the
        best value for your email verification needs.
      </p>
      <p className="text-gray-800 mt-4">
        Built for efficiency,{" "}
        <span className="font-semibold">Mountain Email Verifier</span> delivers
        quick results without compromising quality. Whether you're cleaning a
        small list or verifying thousands of emails, you can trust it to keep
        your sender reputation strong while{" "}
        <span className="font-bold">saving you time and money</span>.
      </p>
      <div className="overflow-x-auto p-6 mt-6 lg:mt-10 mb-2">
        <div className="rounded-2xl overflow-hidden border-[2px] border-green-700">
          <table className="w-full text-center">
            <thead>
              <tr className="bg-[#0b996f] text-white font-bold ">
                <th className="p-4 border-r-[1.5px] border-b-[1.5px] border-[#006a43] rounded-tl-xl">
                  Free Plan Features
                </th>
                <th className="p-4 border-r-[1.5px] border-b-[1.5px] border-[#006a43]">
                  Mountain Email Verifier
                </th>
                <th className="p-4 border-b-[1.5px] border-[#006a43]">
                  {topic
                    .split("_")
                    .map((word, index) =>
                      index < 2
                        ? word.charAt(0).toUpperCase() + word.slice(1)
                        : word
                    )
                    .join(" ")}
                </th>
              </tr>
            </thead>
            <tbody className="text-[16px] font-medium">
              <tr>
                <td className="p-4 font-bold bg-white border-r-[1.5px] border-b-[1.5px] border-[#006a43]">
                  {heading1}
                </td>
                <td className="p-4 bg-[#e8fedf] border-r-[1.5px] border-b-[1.5px] border-[#006a43]">
                  {subm1}
                </td>
                <td className="p-4 bg-white border-b-[1.5px] border-[#006a43]">
                  {subc1}
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-white border-r-[1.5px] border-b-[1.5px] border-[#006a43]">
                  {heading2}
                </td>
                <td className="p-4 bg-[#e8fedf] border-r-[1.5px] border-b-[1.5px] border-[#006a43]">
                  {subm2}
                </td>
                <td className="p-4 bg-white border-b-[1.5px] border-[#006a43]">
                  {subc2}
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-white border-r-[1.5px] border-b-[1.5px] border-[#006a43]">
                  Advanced segmentation
                </td>
                <td className="p-4 bg-[#e8fedf] border-r-[1.5px] border-b-[1.5px] border-[#006a43]">
                  <img src={tick} alt="Tick" className="inline-block w-5 h-5" />
                </td>
                <td className="p-4 bg-white border-b-[1.5px] border-[#006a43]">
                  Only on Premium Plan ($350/month)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-white border-r-[1.5px] border-b-[1.5px] border-[#006a43]">
                  {heading3}
                </td>
                <td className="p-4 bg-[#e8fedf] border-r-[1.5px] border-b-[1.5px] border-[#006a43]">
                  {subm3}
                </td>
                <td className="p-4 bg-white border-b-[1.5px] border-[#006a43]">
                  {subc3}
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-white border-r-[1.5px] border-b-[1.5px] border-[#006a43]">
                  Transactional emails
                </td>
                <td className="p-4 bg-[#e8fedf] border-r-[1.5px] border-b-[1.5px] border-[#006a43]">
                  <img src={tick} alt="Tick" className="inline-block w-5 h-5" />
                </td>
                <td className="p-4 bg-white border-b-[1.5px] border-[#006a43]">
                  <img
                    src={cross}
                    alt="Cross"
                    className="inline-block w-5 h-5"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-white border-r-[1.5px] border-[#006a43]">
                  {heading4}
                </td>
                <td className="p-4 bg-[#e8fedf] border-r-[1.5px] border-[#006a43]">
                  {subm4}
                </td>
                <td className="p-4 bg-white">{subc4}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
