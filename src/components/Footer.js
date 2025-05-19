import React from 'react';
import logoImage from "../assets/images/footerLogo.svg";
import twitterIcon from "../assets/images/1.svg";
import instagramIcon from "../assets/images/2.svg";
import facebookIcon from "../assets/images/3.svg";
import SubscribeSection from './SubscribeSection';

const Footer = () => {

  const documentLinks = [
    "General Terms & Conditions",
    "Privacy Statement",
    "Cookie Policy",
    "Diclaimer",
    ""
  ];

  const pageLinks = [
    "Home",
    "About us",
    "Private",
    "Commercial",
    "Contact us"
  ];

  const contactDetails = [
    { label: "Support Line", value: "06 - 309-309 08" },
    { label: "Send an Email", value: "info@VS tracker.com" },
    { label: "Business Address", value: "" }
  ];

  const socialIcons = [
    { src: twitterIcon, alt: "Twitter", href: "https://twitter.com" },
    { src: facebookIcon, alt: "Facebook", href: "https://facebook.com" },
    { src: instagramIcon, alt: "Instagram", href: "https://instagram.com" }
  ];


  return (
    <>
      <SubscribeSection />
      <footer className="w-full bg-[#41784580] bg-gradient-to-b from-[#41784580] to-[#77E07F] min-h-[678px]">
        <div className="max-w-[1279px] mx-auto px-4 md:px-6 lg:px-8 pt-[99px] relative">
          <div className="absolute w-full md:w-[532px] h-[511px] top-0 left-1/2 -translate-x-1/2 md:left-[417px] md:translate-x-0 bg-[#366BC3] rounded-[266px/255.5px] blur-[250px]" />

          <div className="relative flex flex-col md:flex-row gap-8 md:gap-[137px]">
            <div className="flex flex-col gap-8">
              <img
                className="w-[200px] mt-16 md:w-[272px] h-auto object-contain"
                alt="VSPT and full name"
                src={logoImage}
              />

              <div className="flex flex-col gap-4">
                <p className="max-w-[368px] opacity-90 font-preview-themeforest-net-sora-regular text-white text-sm md:text-base leading-[25.5px]">
                  We understand that every business is unique. That's why our team is committed to delivering tailored IT solutions—whether it's customizing specific components or designing an end-to-end system—to meet your company's distinct goals and operational needs.
                </p>

                {/* Icons aligned with paragraph */}
                <div className="flex gap-3 w-fit">
                  {socialIcons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-[#4B4B4B] rounded-[18px] flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        className="w8 h-8 object-contain"
                      />
                    </a>
                  ))}
                </div>

                {/* <div className="h-[1px] bg-[#8A8A8A] w-full" /> */}
              </div>

            </div>

            <div className="flex mt-16 flex-col md:flex-row gap-8 md:gap-[68px]">
              <div className="flex flex-col gap-[31px]">
                <div className="flex items-center gap-[15px]">
                  <div className="w-2 h-2 bg-[#E8CC4B] rounded-full" />
                  <h3 className="font-['Syne'] font-semibold text-white text-lg leading-[25.2px]">
                    Official Documents
                  </h3>
                </div>

                <div className="flex flex-col gap-[47px]">
                  {documentLinks.map((link, index) => (
                    <div key={index} className="pl-[3px]">
                      <span className="font-preview-themeforest-net-sora-regular text-[#FFFFFFCC] text-base">
                        {link}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <h3 className="font-['Epilogue'] font-semibold text-[#FAFAFA] text-lg tracking-[0.36px]">
                  Pages
                </h3>

                <div className="flex flex-col gap-5">
                  {pageLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-['Epilogue'] text-white text-sm leading-[19.6px] hover:text-[#E8CC4B] transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center gap-[15px]">
                  <div className="w-2 h-2 bg-[#E8CC4B] rounded-full" />
                  <h3 className="font-['Syne'] font-semibold text-white text-lg leading-[25.2px]">
                    Contact Details
                  </h3>
                </div>

                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <span className="font-preview-themeforest-net-sora-regular text-[#FFFFFFCC] text-base">
                      {detail.label}
                    </span>
                    {detail.value && (
                      <span className="font-['Sora'] font-semibold text-black text-base leading-[25.5px]">
                        {detail.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#8A8A8A] mt-12 md:mt-[100px]" />
          <div className="py-4 md:py-6 text-center">
            <span className="font-['Epilogue'] text-[#FAFAFA] text-xs md:text-sm tracking-[0.08px] leading-5">
              © Copyright 2024, All Rights Reserved by VSP Tracker Team.
            </span>
          </div>
        </div>
      </footer>
    </>


  );
};

export default Footer;