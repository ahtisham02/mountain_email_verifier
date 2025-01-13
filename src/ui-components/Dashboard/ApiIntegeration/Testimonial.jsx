import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

export default function TestimonialTwo() {
  const [activeSection, setActiveSection] = useState("DomainSearch");
  const [copiedMessage2, setCopiedMessage2] = useState(false);
  const [results, setResults] = useState({
    email: "joedelia@anymailfinder.com",
    validation: "valid",
    domain: "anymailfinder.com",
    mxRecordsFound: true,
    smtpCheck: true,
    roleBasedAddress: false,
    disposableAddress: false,
    freeAddress: false,
    confidenceScore: 95,
    AverageScoreScore: 95,
    success: true,
    message: "Domain search successful",
    timestamp: "2024-11-08 12:30:00",
    dnsRecords: "OK",
    whoisData: "Available",
    dnssec: "Enabled",
    ipAddress: "192.168.1.1",
    country: "United States",
  });

  const toggleSection = (section) => {
    if (activeSection !== section) {
      setActiveSection(section);

      if (section === "DomainSearch") {
        setResults({
          email: "joedelia@anymailfinder.com",
          validation: "valid",
          domain: "anymailfinder.com",
          mxRecordsFound: true,
          smtpCheck: true,
          roleBasedAddress: false,
          disposableAddress: false,
          freeAddress: false,
          confidenceScore: 95,
          AverageScoreScore: 95,
          success: true,
          message: "Domain search successful",
          timestamp: "2024-11-08 12:30:00",
          dnsRecords: "OK",
          whoisData: "Available",
          dnssec: "Enabled",
          ipAddress: "192.168.1.1",
          country: "United States",
        });
      } else if (section === "EmailFinder") {
        setResults({
          name: "Joe d'Elia",
          domain: "anymailfinder.com",
          email: "joedelia@anymailfinder.com",
          jobTitle: "Marketing Manager",
          location: "New York, USA",
          company: "AnyMailFinder Inc.",
          linkedInProfile: "https://linkedin.com/in/joedelia",
          confidenceScore: 98,
          AverageScoreScore: 98,
          success: true,
          message: "Email found successfully",
          timestamp: "2024-11-08 12:35:00",
          phoneNumber: "(123) 456-7890",
          address: "123 Main St, New York, NY 10001",
          website: "https://anymailfinder.com",
          socialProfiles: [
            "https://twitter.com/joedelia",
            "https://facebook.com/joedelia",
          ],
          employmentStatus: "Employed",
        });
      }
    }
  };

  const copyToClipboard = (text, isSecondBlock = false) => {
    navigator.clipboard.writeText(text);
    setCopiedMessage2(true);
    setTimeout(() => setCopiedMessage2(false), 2000);
  };

  return (
    <div className="bg-white m-6 p-4 flex flex-col rounded-2xl shadow-md">
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div className="w-full lg:w-1/2 order-2 lg:order-2">
          <div className="rounded-lg">
            <div>
              <div className="flex items-center bg-[#19253C] p-4 rounded-t-xl border-b-[1px] border-gray-500">
                <button
                  onClick={() =>
                    copyToClipboard(JSON.stringify(results, null, 2), true)
                  }
                  className="ml-auto text-white bg-gray-500 p-2 rounded-full"
                >
                  <FiCopy />
                </button>
              </div>
              {copiedMessage2 && (
                <span className="absolute top-4 right-16 text-white bg-green-500 px-2 py-1 rounded-md">
                  Copied!
                </span>
              )}
              <pre
                style={{ whiteSpace: "pre-wrap", overflowX: "hidden" }}
                className="bg-[#19253C] h-80 lg:h-[630px] min-[1058px]:h-[600px] min-[1099px]:h-[570px] min-[1185px]:h-[490px] min-[1338px]:h-[460px] min-[1842px]:h-[440px] text-white p-4 rounded-b-xl overflow-y-auto scrollbar-hide"
              >
                {JSON.stringify(results, null, 2)}
              </pre>
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="w-full lg:w-1/2 order-1 lg:order-1">
          <div className="text-left">
            <h2 className="text-2xl text-gray-800 font-bold">
              API Documentation (Single & Bulk API Validation)
            </h2>
            <div className="mt-8">
              {/* Domain Search API Section */}
              <div
                onClick={() => toggleSection("DomainSearch")}
                className={`cursor-pointer flex justify-between items-center ${
                  activeSection === "DomainSearch"
                    ? "border-transparent pt-4"
                    : "border-b py-4"
                }`}
              >
                <span
                  className={`font-semibold text-xl pl-2 ${
                    activeSection === "DomainSearch"
                      ? "text-black"
                      : "text-[#757C81]"
                  }`}
                >
                  Single Email Validation
                </span>
                <FaChevronRight
                  className={`duration-200 text-[#757C81] ${
                    activeSection === "DomainSearch"
                      ? "rotate-90 !text-black"
                      : ""
                  }`}
                />
              </div>
              {activeSection === "DomainSearch" && (
                <div
                  className={`${
                    activeSection === "DomainSearch"
                      ? "border-b"
                      : "border-transparent"
                  }`}
                >
                  <p className="mt-4 text-gray-600 px-2 pb-5">
                    This API endpoint is ideal for verifying email at its
                    entry-level. You can verify an email to check its validity
                    before allowing it to enter your email database. This
                    document contains the API documentation to be used by any
                    programming language.
                  </p>
                  <div className="flex items-center mt-4 text-lg text-gray-600 px-2 pb-5 cursor-pointer">
                    <p className="mr-2 border-b border-transparent hover:border-gray-600 transition-all duration-300 hover:scale-105">
                      GET Request URL (HTTPS):
                    </p>
                  </div>
                  <pre
                    style={{ whiteSpace: "pre-wrap", overflowX: "hidden" }}
                    className="bg-[#19253C] text-white p-4 mb-4 rounded-xl overflow-y-auto overflow-x-auto scrollbar-hide"
                  >
                    {`https://emailverifier.reoon.com/api/v1/verify?email=<email>&key=<key>&mode=quick`}
                  </pre>
                </div>
              )}

              <div
                onClick={() => toggleSection("EmailFinder")}
                className={`cursor-pointer flex justify-between items-center ${
                  activeSection === "EmailFinder"
                    ? "border-transparent pt-4"
                    : "border-b py-4"
                }`}
              >
                <span
                  className={`font-semibold text-xl pl-2 ${
                    activeSection === "EmailFinder"
                      ? "text-black"
                      : "text-[#757C81]"
                  }`}
                >
                  Bulk Email Validation (Different Endpoint)
                </span>
                <FaChevronRight
                  className={`duration-200 text-[#757C81] ${
                    activeSection === "EmailFinder"
                      ? "rotate-90 !text-black"
                      : ""
                  }`}
                />
              </div>
              {activeSection === "EmailFinder" && (
                <div
                  className={`${
                    activeSection === "EmailFinder"
                      ? "border-b"
                      : "border-transparent"
                  }`}
                >
                  <p className="mt-4 text-gray-600 px-2 pb-5">
                    This API Endpoint is ideal for verifying large email sets at
                    a great speed. This endpoint creates a bulk verification
                    task for the given list of emails. The emails will be
                    processed to remove duplicates, and a bulk email
                    verification task will be created.
                  </p>
                  <div className="flex items-center mt-4 text-lg text-gray-600 px-2 pb-5 cursor-pointer">
                    <p className="mr-2 border-b border-transparent hover:border-gray-600 transition-all duration-300 hover:scale-105">
                      POST Request URL (HTTPS):
                    </p>
                  </div>
                  <pre
                    style={{ whiteSpace: "pre-wrap", overflowX: "hidden" }}
                    className="bg-[#19253C] text-white p-4 rounded-xl overflow-y-auto overflow-x-auto scrollbar-hide"
                  >
                    {`https://emailverifier.reoon.com/api/v1/create-bulk-verification-task/`}
                  </pre>{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
