import React from 'react';
import Music from "../../assets/images/music.png";

const TopSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content Section */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-primary font-medium mb-4">
            Why Smart Tap VSP Tracker?
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Welcome To Smart Tap Productivity
          </h1>
          <p className="text-accent mb-8">
            The VSP Tracker Productivity System simplifies tracking across mixed-brand fleets.
          </p>

          {/* Features List */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="4" ry="4" fill="currentColor" />
                  <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-primary">Brand Agnostic & Universally Compatible</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-1 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="4" ry="4" fill="currentColor" />
                  <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-primary">Effortless & Accurate Operator Logging</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-1 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="4" ry="4" fill="currentColor" />
                  <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-primary">Seamless System Integration & Visualization</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img
            src={Music}
            alt="VSP Tracker Visualization"
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
