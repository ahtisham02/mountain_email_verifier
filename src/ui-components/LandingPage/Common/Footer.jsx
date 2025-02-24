import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const handleComparisonClick = (contentKey) => {
    navigate(`/comparison/${contentKey}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#f6f9f6] text-[#111] pt-10 pb-6 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#0b996e]">Mountain</h2>
          <div className="flex space-x-4">
            <Linkedin className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold mb-3">PRODUCT</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-[#0b996e] cursor-pointer">
                Why Mountain?
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Email marketing
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Transactional email
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">Wallet</li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Enterprise solution
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                All features
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">Pricing</li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Integrations
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">GDPR</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Security</li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Product updates
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">COMPARE</h3>
            <ul className="space-y-2.5 text-sm">
              <li onClick={() => handleComparisonClick("Never_Bounce")} className="hover:text-[#0b996e] cursor-pointer">
                Mountain vs NeverBounce
              </li>
              <li onClick={() => handleComparisonClick("Zero_Bounce")} className="hover:text-[#0b996e] cursor-pointer">
                Mountain vs ZeroBounce
              </li>
              <li onClick={() => handleComparisonClick("Brite_Verify")} className="hover:text-[#0b996e] cursor-pointer">
                Mountain vs BriteVerify
              </li>
              <li onClick={() => handleComparisonClick("Kick_box")} className="hover:text-[#0b996e] cursor-pointer">
                Mountain vs Kickbox
              </li>
              <li onClick={() => handleComparisonClick("De_Bounce")} className="hover:text-[#0b996e] cursor-pointer">
                Mountain vs DeBounce
              </li>
              <li onClick={() => handleComparisonClick("X_verify")} className="hover:text-[#0b996e] cursor-pointer">
                Mountain vs Xverify
              </li>
              <li onClick={() => handleComparisonClick("EmailList_Verify")} className="hover:text-[#0b996e] cursor-pointer">
                Mountain vs EmailListVerify
              </li>
              <li onClick={() => handleComparisonClick("Clear_out")} className="hover:text-[#0b996e] cursor-pointer">
                Mountain vs Clearout
              </li>
              <li onClick={() => handleComparisonClick("Email_able")} className="hover:text-[#0b996e] cursor-pointer">
                Mountain vs Emailable
              </li>
              <li onClick={() => handleComparisonClick("Verify_Bee")} className="hover:text-[#0b996e] cursor-pointer">
                Mountain vs VerifyBee
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">RESOURCES</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-[#0b996e] cursor-pointer">
                Help center
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Platform status
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">Community</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Blog</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Glossary</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Success</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Academy</li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Ebooks & webinars
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Developers
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Migrate from Mailchimp
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">PARTNERS</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-[#0b996e] cursor-pointer">
                All partner programs
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Affiliates
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">Experts</li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Startups & VCs
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Integration partners
              </li>
              <li className="hover:text-[#0b996e] cursor-pointer">
                Find an expert
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2.5 text-sm">
              <li
                className="hover:text-[#0b996e] cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li
                className="hover:text-[#0b996e] cursor-pointer"
                onClick={() => navigate("/aboutus")}
              >
                About
              </li>
              <li
                className="hover:text-[#0b996e] cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                Contact
              </li>
              <li
                className="hover:text-[#0b996e] cursor-pointer"
                onClick={() => navigate("/terms")}
              >
                Terms & Conditions
              </li>
              <li
                className="hover:text-[#0b996e] cursor-pointer"
                onClick={() => navigate("/policy")}
              >
                Privacy Policy
              </li>
              <li
                className="hover:text-[#0b996e] cursor-pointer"
                onClick={() => navigate("/blog")}
              >
                Blog
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Mountain Email Finder. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
