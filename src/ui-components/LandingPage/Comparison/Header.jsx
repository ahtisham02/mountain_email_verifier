import React from "react";
import img1 from "../../../assets/Comparison/chh1.webp";
import img2 from "../../../assets/Comparison/ch1.webp";
import img3 from "../../../assets/Comparison/ch2.webp";
import img4 from "../../../assets/Comparison/ch3.webp";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { topic } = useParams();

  const generateHeadingAndText = (topic) => {
    switch (topic) {
      case "Never_Bounce":
        return {
          heading: `Powerful, scalable, easy-
          <br />
          to-use marketing solutions`,
          text: "For companies looking for a speedier and more cost-effective alternative to NeverBounce—while maintaining top-tier accuracy—Mountain Email Verifier stands out as the ideal solution.",
        };
      case "Zero_Bounce":
        return {
          heading: `Powerful, scalable, easy-
          <br />
          to-use marketing solutions`,
          text: "If you value speed, cost savings, and top-tier compliance, Mountain Email Verifier offers all the perks of ZeroBounce—and then some—at a lower price point.",
        };
      case "Brite_Verify":
        return {
          heading: `Powerful, scalable, easy-
          <br />
          to-use marketing solutions`,
          text: "For a faster, equally accurate alternative to BriteVerify at a better price, Mountain Email Verifier is the clear choice.",
        };
      case "Kick_box":
        return {
          heading: `Powerful, scalable, easy-
          <br />
          to-use marketing solutions`,
          text: "If you need Kickbox-level performance without the hefty price tag, Mountain Email Verifier is your go-to solution.",
        };
      case "De_Bounce":
        return {
          heading: `Powerful, scalable, easy-
          <br />
          to-use marketing solutions`,
          text: "For an even faster and more cost-efficient alternative to DeBounce, Mountain Email Verifier checks all the boxes.",
        };
      case "X_verify":
        return {
          heading: `Powerful, scalable, easy-
          <br />
          to-use marketing solutions`,
          text: "When cost, speed, and all-around email verification performance are key, Mountain Email Verifier is the better value compared to Xverify.",
        };
      case "EmailList_Verify":
        return {
          heading: `Powerful, scalable, easy-
          <br />
          to-use marketing solutions`,
          text: "EFor a similarly robust but faster and cheaper solution than EmailListVerify, Mountain Email Verifier is a clear winner.",
        };
      case "Clear_out":
        return {
          heading: `Powerful, scalable, easy-
          <br />
          to-use marketing solutions`,
          text: "If you’re seeking the same real-time verification benefits as Clearout—without the higher costs—look no further than Mountain Email Verifier.",
        };
      case "Email_able":
        return {
          heading: `Powerful, scalable, easy-
          <br />
          to-use marketing solutions`,
          text: "For a solution that mirrors Emailable’s detail and speed on smaller lists but stays faster and cheaper as your needs grow, Mountain Email Verifier is the clear choice.",
        };
      case "Verify_Bee":
        return {
          heading: `Powerful, scalable, easy-
          <br />
          to-use marketing solutions`,
          text: "For an even faster and more cost-efficient alternative to VerifyBee, Mountain Email Verifier checks all the boxes",
        };
      default:
        return {
          heading: `Discover why <span class="text-[#00408C]">Exact Mails</span> leads,`,
          text: `Find out how Exact Mails can revolutionize your email verification process with outstanding accuracy and efficiency.`,
        };
    }
  };

  const { heading, text } = generateHeadingAndText(topic);

  return (
    <div className="bg-[#d7fec8] px-6 py-12 md:pt-20 md:px-16 rounded-br-[70px] md:rounded-br-[120px] flex flex-col md:flex-row items-center md:justify-center text-center md:text-left md:h-[89vh] 2xl:h-[100vh]">
      <div className="max-w-lg w-full">
        <h1 className="text-lg font-medium text-black mb-2">
          Mountain Email Verifier -vs-{" "}
          {topic
            .split("_")
            .map((word, index) =>
              index < 2 ? word.charAt(0).toUpperCase() + word.slice(1) : word
            )
            .join(" ")}
        </h1>
        <h1 className="text-2xl sm:text-3xl lg:text-[37px] !leading-tight font-bold text-[#0b996e]" dangerouslySetInnerHTML={{ __html: heading }}></h1>
        <p className="text-gray-900 !leading-normal lg:text-lg mt-5">{text}</p>
        <button
          onClick={() => {
            navigate("/auth");
          }}
          className="mt-7 px-6 py-3 bg-[#006a43] shadow-md text-white rounded-2xl text-lg font-medium"
        >
          Sign up free
        </button>
        <p className="mt-2.5 text-gray-500">
          Get started in minutes - no commitment
        </p>
      </div>

      <div className="mt-8 md:mt-0 md:ml-10 max-w-xl">
        <img src={img1} alt="HeaderImage" className="h-[300px] w-[480px]" />
        <div className="flex items-center justify-center mt-6 space-x-8">
          <div className="flex items-center space-x-2">
            <img src={img2} alt="Image1" className="h-10 w-10 mr-2" />
            4.5
            <Star className="text-[#006a43] fill-[#006a43] h-5 w-5" />
          </div>
          <div className="flex items-center space-x-2">
            <img src={img3} alt="Image2" className="h-10 w-10 mr-2" />
            4.6
            <Star className="text-[#006a43] fill-[#006a43] h-5 w-5" />
          </div>
          <div className="flex items-center space-x-2">
            <img src={img4} alt="Image3" className="h-10 w-10 mr-2" />
            4.4
            <Star className="text-[#006a43] fill-[#006a43] h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
