import React from 'react';
import Hero from "../../assets/images/hero.png";
import BackgroundImage from "../../assets/images/homePageBackground.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="mt-[-3rem] relative z-[10] overflow-hidden">
      <div className="relative bg-cover bg-center bg-no-repeat min-h-screen md:h-[630px] flex items-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-8">
          {/* Left content section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4 py-8 md:py-0">
            <h3 className="text-lg md:text-xl font-medium">VSP TRACKER</h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B1B1B] leading-tight">
              UNLOCK PEAK
              <br />
              <span className="font-bold">PERFORMANCE:</span>{" "}
              <span className="text-2xl md:text-3xl font-normal">real-time</span>
              <br />
              <span className="text-2xl md:text-3xl font-normal">
                productivity tracking for every fleet, every brand.
              </span>
            </h1>
            <Link to="/contact" className="inline-block">
              <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Right image section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative md:top-[-5rem] md:right-[-6.5rem]">
              <img
                src={Hero}
                alt="Construction vehicles in action"
                className="w-full h-auto max-h-[400px] md:max-h-[750px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
