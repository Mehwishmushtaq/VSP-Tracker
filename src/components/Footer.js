import React from 'react';
import SubscribeSection from './SubscribeSection';
import logoImage from "../assets/images/logo.png";
import twitterIcon from "../assets/images/1.svg";
import instagramIcon from "../assets/images/2.svg";
import facebookIcon from "../assets/images/3.svg";

const Footer = () => {
  return (
    <>
      <SubscribeSection />
      <footer className="bg-custom-gradient text-white relative font-sora">

<div className="px-8 py-24 flex flex-col md:flex-row justify-between gap-12">
  {/* Left Side - Logo and Description */}
  <div className="flex flex-col mt-24 space-y-4 max-w-sm">
    <div className="flex items-center space-x-3">
      <img src={logoImage} alt="Logo" className="h-36 w-auto" />
    </div>
    <p className="text-white text-lg leading-relaxed">
      We understand that every business is unique.
      That’s why our team is committed to delivering tailored IT solutions—whether it’s
      customizing specific components or designing an end-to-end system—to meet your company’s
      distinct goals and operational needs.
    </p>
    <div className="flex space-x-4">
      <img src={twitterIcon} alt="Twitter" className="w-10 h-10 cursor-pointer hover:opacity-70" />
      <img src={instagramIcon} alt="Instagram" className="w-10 h-10 cursor-pointer hover:opacity-70" />
      <img src={facebookIcon} alt="Facebook" className="w-10 h-10 cursor-pointer hover:opacity-70" />
    </div>
  </div>

  {/* Right Side - Links */}
  <div className="flex mt-28 flex-wrap gap-x-[200px] gap-y-[100px] text-white text-sm md:text-base font-light leading-relaxed">
    {/* Official Documents */}
    <div>
      <h4 className="font-bold font-syne text-lg mb-4">Official Documents</h4>
      <ul className="space-y-10">
        <li>General Terms & Conditions</li>
        <li>Privacy Statement</li>
        <li>Cookie Policy</li>
        <li>Disclaimer</li>
      </ul>
    </div>

    {/* Pages */}
    <div>
      <h4 className="font-bold text-lg mb-4">Pages</h4>
      <ul className="space-y-8">
        <li>Home</li>
        <li>About us</li>
        <li>Private</li>
        <li>Commercial</li>
        <li>Contact us</li>
      </ul>
    </div>

    {/* Contact Details */}
    <div>
      <h4 className="text-white font-bold text-lg mb-4">Contact Details</h4>
      <ul className="space-y-10">
        <li>
          Support Line<br />
          <span className="font-medium text-base text-black">06 - 309-309 08</span>
        </li>
        <li>
          Send an Email<br />
          <span className="text-black">info@vsptracker.nl</span>
        </li>
        <li>Business Address</li>
      </ul>
    </div>
  </div>
</div>

{/* Bottom Bar */}
<div className="border-t border-gray-400 py-4 text-center text-sm font-light">
  © Copyright 2024, All Rights Reserved by VSP Tracker Team.
</div>
</footer>

    </>
  );
};

export default Footer;