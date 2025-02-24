import React from "react";
import {
  User,
  CreditCard,
  Globe,
  FileText,
  ShieldAlert,
  Power,
  Gavel,
  RefreshCw,
} from "lucide-react";

const terms = [
  {
    title: "Account Requirements",
    icon: User,
    content: (
      <>
        Users are responsible for providing accurate, complete, and up-to-date
        information when creating an account. Any false, misleading, or outdated
        information may result in the suspension or termination of the account.
        <br />
        <br />
        It is the user's responsibility to ensure that their account details,
        including login credentials, are kept secure. Any unauthorized access or
        suspicious activities must be reported to us immediately. Failure to
        comply with these requirements may result in account restrictions or
        removal.
      </>
    ),
  },
  {
    title: "Payment & Billing",
    icon: CreditCard,
    content: (
      <>
        All transactions made through our platform must be completed with valid
        and authorized payment methods.
        <br />
        <br />
        Users are responsible for ensuring that their payment details are
        accurate and up to date. Refunds and cancellations are subject to our
        policies, and any discrepancies must be reported within a reasonable
        timeframe. In case of pricing errors or discrepancies, we will notify
        the customer before proceeding with the transaction. Additional charges,
        including taxes, service fees, and shipping costs, will be calculated
        and displayed at checkout.
        <br />
        <br />
        Users should review all costs before completing their purchase.
      </>
    ),
  },
  {
    title: "Use of the Service",
    icon: Globe,
    content: (
      <>
        Users must comply with all applicable local, national, and international
        laws and regulations while using our services. Any misuse, including but
        not limited to unauthorized access, fraudulent activities, distribution
        of harmful content, or attempts to disrupt the service, is strictly
        prohibited.
        <br />
        <br />
        Violation of these guidelines may result in account suspension, legal
        action, or permanent termination from our platform. We reserve the right
        to monitor activity to ensure compliance and maintain the security of
        our services.
      </>
    ),
  },
  {
    title: "Intellectual Property",
    icon: FileText,
    content:
      "All content, trademarks, logos, and intellectual property displayed on this platform are the sole property of our company or respective licensors. Users are not permitted to copy, reproduce, modify, distribute, or exploit any content without prior written permission. Any unauthorized use of our intellectual property may result in legal action. We take intellectual property rights seriously and actively monitor potential violations to protect our assets and those of our partners.",
  },
  {
    title: "Limitation of Liability",
    icon: ShieldAlert,
    content:
      "We are not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services, including but not limited to data loss, service interruptions, or unauthorized access to user accounts. Users acknowledge that they access our platform at their own risk and agree to hold us harmless from any claims, losses, or damages. We do our best to provide a reliable and secure service, but we do not guarantee that our platform will be error-free or uninterrupted at all times.",
  },
  {
    title: "Termination",
    icon: Power,
    content:
      "We reserve the right to suspend or terminate user accounts at our sole discretion if users violate our terms, engage in fraudulent activities, or pose security risks. Upon termination, users may lose access to their data, purchases, and any associated services. Users are encouraged to back up important information to avoid data loss. If an account is terminated, re-registration may not be permitted without prior approval.",
  },
  {
    title: "Dispute Resolution",
    icon: Gavel,
    content: (
      <>
        Any disputes arising from these terms will be governed by applicable
        laws in the designated jurisdiction. Users agree to resolve disputes
        through arbitration, mediation, or other legal means as specified in our
        policies.
        <br />
        <br />
        We encourage users to reach out to our support team first to seek an
        amicable resolution before pursuing legal action. Disputes that cannot
        be resolved informally may be subject to formal proceedings in
        accordance with our governing laws and jurisdiction policies.
      </>
    ),
  },
  {
    title: "Changes to Terms",
    icon: RefreshCw,
    content: (
      <>
        We reserve the right to update, modify, or revise these terms at any
        time to reflect changes in our services, policies, or applicable laws.
        <br />
        <br />
        Users will be notified of significant updates through email, platform
        announcements, or other communication methods. It is the user's
        responsibility to review the terms periodically to stay informed about
        any changes. Continued use of our services after updates constitutes
        acceptance of the revised terms and conditions.
        <br />
        <br />
        If users disagree with the changes, they must discontinue using our
        services immediately.
      </>
    ),
  },
];

export default function Header() {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg">
      <div className="text-[24px] sm:text-[28px] mb-14">
        <h1 className="text-[#1C1C1C] font-bold text-center mb-2">
          Terms of Service
        </h1>
        <h1 className="text-[#1c1c1ca1] font-medium !text-sm text-center mb-6">
          This agreement governs your use of Mountain Email Verifier. By signing
          up, you accept these terms.{" "}
        </h1>
      </div>
      <div className="space-y-6 mb-16">
        {terms.map((term, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-7 h-7 rounded-full bg-[#0b996e] flex items-center justify-center">
              <term.icon className="text-white w-9 p-1" />
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
