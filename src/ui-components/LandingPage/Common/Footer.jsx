import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
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
              <li className="hover:text-[#0b996e] cursor-pointer">Why Mountain?</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Email marketing</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Transactional email</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Wallet</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Enterprise solution</li>
              <li className="hover:text-[#0b996e] cursor-pointer">All features</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Pricing</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Integrations</li>
              <li className="hover:text-[#0b996e] cursor-pointer">GDPR</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Security</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Product updates</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">COMPARE</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-[#0b996e] cursor-pointer">Bulk email service</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Email marketing platforms</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Mountain vs Mailchimp</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Mountain vs HubSpot</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Mountain vs Constant Contact</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Mountain vs Klaviyo</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Mailchimp alternatives</li>
              <li className="hover:text-[#0b996e] cursor-pointer">HubSpot alternatives</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">RESOURCES</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-[#0b996e] cursor-pointer">Help center</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Platform status</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Community</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Blog</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Glossary</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Success</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Academy</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Ebooks & webinars</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Developers</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Migrate from Mailchimp</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">PARTNERS</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-[#0b996e] cursor-pointer">All partner programs</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Affiliates</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Experts</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Startups & VCs</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Integration partners</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Find an expert</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-[#0b996e] cursor-pointer">About us</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Leadership</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Careers</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Press</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Carbon footprint</li>
              <li className="hover:text-[#0b996e] cursor-pointer">Contact us</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Mountain Email Finder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}