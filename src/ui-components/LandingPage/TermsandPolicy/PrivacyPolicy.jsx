import React from "react";
import { Dot } from "lucide-react";

const terms = [
  {
    title: "Information We Collect",
    content: (
      <>
        We collect information such as your name, email, and billing details
        when you interact with our services. This information helps us provide a
        seamless user experience.
        <br />
        <br />
        Mountain Email Finder is committed to protecting your data and ensuring
        transparency in how we handle your personal details.
      </>
    ),
  },
  {
    title: "How We Use Your Data",
    content: (
      <>
        We use your data to process verifications, enhance our services, and
        personalize your experience. Your information is securely stored and
        only accessed when necessary.Sensitive data, such as payment details, is encrypted using SSL
        technology to maintain the highest level of security.
      </>
    ),
  },
  {
    title: "Data Retention & Deletion",
    content: (
      <>
        We retain your data for as long as necessary to fulfill the purposes
        outlined in this policy. Unused accounts and expired data are
        periodically deleted.
        <br />
        <br />
        Users may request data deletion at any time by contacting our support
        team. We ensure compliance with regulatory guidelines to protect user
        privacy.
      </>
    ),
  },
  {
    title: "Cookies & Tracking",
    content: (
      <>
        Our website uses cookies to enhance your browsing experience. These
        cookies help us analyze website traffic, store preferences, and improve
        service performance.
        <br />
        You can manage cookie settings through your browser. Disabling cookies
        may affect certain site functionalities, including order processing and
        personalized recommendations.
      </>
    ),
  },
  {
    title: "User Rights",
    content: (
      <>
        Users have the right to access, update, or delete their personal data at
        any time. Requests for data modifications can be submitted via our
        support team.
        <br />
        We comply with GDPR and other privacy laws to ensure users' rights are
        upheld and respected.
      </>
    ),
  },
  {
    title: "Security Measures",
    content: (
      <>
        We implement strict security measures to protect user data from
        unauthorized access, breaches, and cyber threats. Our platform is
        regularly audited for vulnerabilities.
        <br />
        Users are encouraged to use strong passwords and enable two-factor
        authentication where possible for added security.
      </>
    ),
  },
  {
    title: "Contact Information",
    content: (
      <>
        If you have any questions or concerns about our privacy policy, please
        reach out to our support team at support@mountainemailfinder.com.
        <br />
        We value your privacy and are committed to addressing inquiries in a
        timely manner.
      </>
    ),
  },
];

export default function Header() {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg">
      <div className="text-[24px] sm:text-[28px] mb-14">
        <h1 className="text-[#1C1C1C] font-bold text-center mb-2">
          Privacy Policy
        </h1>
        <h1 className="text-[#1c1c1ca1] font-medium !text-sm text-center mb-6">
          We value your privacy. This policy outlines how we collect, use, and
          protect your data when you use Mountain Email Verifier.
        </h1>
      </div>
      <div className="relative space-y-6 mb-16">
        {terms.map((term, index) => (
          <div key={index} className="relative flex items-start gap-4">
            {index !== terms.length - 1 && (
              <div className="absolute left-[5px] top-7 w-[2px] h-full bg-gray-200"></div>
            )}
            <div className="w-7 h-7 -ml-2 rounded-full bg-[#0b996e] flex items-center justify-center">
              <Dot className="text-white w-8" />
            </div>

            <div>
              <h2 className="text-[#121212] font-medium mb-2 text-[17px] sm:text-[17px]">
                {term.title}
              </h2>
              <p className="text-[#868686] mt-1 text-[13px] sm:text-[14px]">
                {term.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
