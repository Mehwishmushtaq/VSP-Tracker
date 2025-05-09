import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as YoutubeIcon } from "../assets/images/youtube.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/instagram.svg";
import { ReactComponent as FacebookIcon } from "../assets/images/facebook.svg";
import { FaBars, FaTimes } from "react-icons/fa"; // For mobile toggle icons
import logoImage from "../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-40">
      {/* Top Bar */}
      <div className="bg-[#292b35] px-4 md:px-28 py-6 h-24 flex justify-between items-center">
        {/* Left Side - Youtube Icon + Text */}
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 rounded-full p-1">
            <YoutubeIcon className="text-red-500 w-5 h-5" />
          </div>
          <span className="text-white text-sm">VSP Tracker Extended</span>
        </div>

        {/* Right Side - Other Socials */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 rounded-full p-1">
            <TwitterIcon className="h-4 w-4 text-green-700" />
          </div>
          <div className="bg-gray-100 rounded-full p-1">
            <InstagramIcon className="h-4 w-4 text-green-700" />
          </div>
          <div className="bg-gray-100 rounded-full p-1">
            <FacebookIcon className="h-4 w-4 text-green-700" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="absolute top-[65%] left-0 w-full z-50">
        <div className="max-w-7xl mx-auto bg-black px-4 md:px-4 mt-2 flex items-center justify-between rounded-b-md relative">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="Logo" className="h-16 md:h-20 w-auto" />
          </div>

          {/* Hamburger Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-sans text-[16px] font-normal leading-6 text-[#4e4e4e]">
            <Link to="/" className="text-primary hover:scale-105 transition duration-300 hover:text-primary">
              HOME
            </Link>
            <Link to="/machines" className="hover:scale-105 transition duration-300 hover:text-primary">
              MACHINES
            </Link>
            <Link to="/devices-positioning" className="hover:scale-105 transition duration-300 hover:text-primary">
              DEVICES & POSITIONING
            </Link>
            <Link to="/workflows" className="hover:scale-105 transition duration-300 hover:text-primary">
              WORKFLOWS
            </Link>
            <Link to="/tools-calculators" className="hover:scale-105 transition duration-300 hover:text-primary">
              TOOLS & CALCULATORS
            </Link>
            <Link to="/resources-support" className="hover:scale-105 transition duration-300 hover:text-primary">
              RESOURCES & SUPPORT
            </Link>
            <Link to="/portal-app" className="hover:scale-105 transition duration-300 hover:text-primary">
              PORTAL & APP
            </Link>
          </div>

          {/* Contact Button (Desktop Only) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-transparent border border-primary text-primary px-2 py-2 hover:bg-primary hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-black px-4 py-4 space-y-4 font-sans text-white text-[16px]">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block">
              HOME
            </Link>
            <Link to="/machines" onClick={() => setMenuOpen(false)} className="block">
              MACHINES
            </Link>
            <Link to="/devices-positioning" onClick={() => setMenuOpen(false)} className="block">
              DEVICES & POSITIONING
            </Link>
            <Link to="/workflows" onClick={() => setMenuOpen(false)} className="block">
              WORKFLOWS
            </Link>
            <Link to="/tools-calculators" onClick={() => setMenuOpen(false)} className="block">
              TOOLS & CALCULATORS
            </Link>
            <Link to="/resources-support" onClick={() => setMenuOpen(false)} className="block">
              RESOURCES & SUPPORT
            </Link>
            <Link to="/portal-app" onClick={() => setMenuOpen(false)} className="block">
              PORTAL & APP
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block border border-primary text-primary px-3 py-2 text-center mt-2 hover:bg-primary hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
