import React from "react";
import img from "../../../assets/WordPress_blue_logo.svg.png";

export default function PlugIn() {
  const pluginList = [
    "Contact Form 7",
    "Fluent Forms",
    "WooCommerce Checkout Form",
    "Gravity Form",
    "Formidable Form",
    "Elementor Forms",
    "Contact Form by BestWebSoft",
    "Ninja Forms",
    "Default WordPress Reg Form",
    "Forminator Forms",
    "HappyForms",
    "Mail Mint Form",
    "WPForms",
    "WordPress Comment Form",
    "More coming soon...",
  ];

  return (
    <div className="bg-white p-8 m-6 rounded-2xl shadow-md">
      <div className="flex justify-center mb-6">
        <img src={img} alt="WordPress Logo" className="h-12" />
      </div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        WordPress Integration (Plugin)
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Our WordPress plugin is readily available for integration. If your
        website is powered by WordPress and utilizes any of the specified
        WordPress Forms, our plugin is fully compatible and can be seamlessly
        incorporated into your existing setup.
      </p>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-36 xl:gap-40 2xl:gap-52 gap-8">
          {[0, 1, 2].map((column) => (
            <ul key={column} className="list-disc list-inside text-gray-700">
              {pluginList
                .slice(column * 5, (column + 1) * 5)
                .map((plugin, index) => (
                  <li key={index} className="text-left">
                    {plugin}
                  </li>
                ))}
            </ul>
          ))}
        </div>
      </div>

      <p className="text-gray-600 text-center mt-8">
        You can search for "Reoon Email Verifier" on the WordPress plugin
        directory and install our plugin.
      </p>
      <p className="text-gray-600 text-center mb-6">
        Or you can download it from here:
      </p>

      <div className="text-center">
        <a
          href="https://wordpress.org/plugins/reoon-email-verifier"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0073aa] text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-[#005177] transition"
        >
          Download it here
        </a>
      </div>
    </div>
  );
}
