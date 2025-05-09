import React from "react";

const VSPTProcessFlow = () => {
  return (
    <div className="bg-white p-4">
      {/* Main container with green border */}
      <div className="border-8 border-green-600">
        {/* Header */}
        <div className="bg-green-600 text-white p-4 text-center">
          <h1 className="text-4xl font-bold">FROM DATA INPUTS TO INSIGHTFUL REPORTS</h1>
          <h2 className="text-2xl mt-2">The VSPT Process</h2>
        </div>
        
        {/* Process Flow Diagram - White background with content */}
        <div className="bg-white p-8 relative">
          {/* Top row */}
          <div className="flex justify-between mb-20">
            {/* Box 1: Set-up Portal */}
            <div className="w-[30%] group">
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-500 transition-colors duration-300 group-hover:text-orange-600">
                  <rect x="10" y="15" width="40" height="30" stroke="currentColor" strokeWidth="4" fill="none" />
                  <rect x="20" y="45" width="20" height="5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </div>
              <div className="border-2 border-gray-800 bg-gray-200 transition-all duration-300 group-hover:border-green-600 group-hover:shadow-lg">
                <h3 className="text-xl font-bold text-center p-2 transition-colors duration-300 group-hover:text-green-600">Set-up Portal</h3>
                <p className="p-3 text-sm">
                  Configure the VSPT portal to ensure all necessary parameters, such as site/project, operators, and equipment are properly registered and set up for data collection.
                </p>
              </div>
              {/* Right arrow from Box 1 to Box 2 - with animation */}
              <div className="absolute left-[28%] top-[15%] transition-all duration-300 group-hover:translate-x-1">
                <svg width="50" height="30" className="text-green-600 transition-colors duration-300 group-hover:text-green-500">
                  <polygon points="0,15 40,15 40,5 50,15 40,25 40,15" fill="currentColor" />
                  <animate 
                    attributeName="opacity" 
                    values="1;0.8;1" 
                    dur="1.5s" 
                    repeatCount="indefinite" 
                    begin="indefinite" 
                    className="group-hover:begin" />
                </svg>
              </div>
            </div>
            
            {/* Box 2: Train Operators */}
            <div className="w-[30%] group">
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-500 transition-colors duration-300 group-hover:text-orange-600">
                  <circle cx="30" cy="20" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path d="M20,45 C20,35 40,35 40,45" stroke="currentColor" strokeWidth="4" fill="none" />
                  <circle cx="45" cy="25" r="8" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path d="M45,33 C45,38 45,38 45,43" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </div>
              <div className="border-2 border-gray-800 bg-gray-200 transition-all duration-300 group-hover:border-green-600 group-hover:shadow-lg">
                <h3 className="text-xl font-bold text-center p-2 transition-colors duration-300 group-hover:text-green-600">Train Operators</h3>
                <p className="p-3 text-sm">
                  Train operators on using the VSPT system to ensure they understand how to input data accurately and efficiently during daily operations.
                </p>
              </div>
              {/* Right arrow from Box 2 to Box 3 - with animation */}
              <div className="absolute left-[61%] top-[15%] transition-all duration-300 group-hover:translate-x-1">
                <svg width="50" height="30" className="text-green-600 transition-colors duration-300 group-hover:text-green-500">
                  <polygon points="0,15 40,15 40,5 50,15 40,25 40,15" fill="currentColor" />
                </svg>
              </div>
            </div>
            
            {/* Box 3: Collect Data */}
            <div className="w-[30%] group">
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-500 transition-colors duration-300 group-hover:text-orange-600">
                  <circle cx="30" cy="20" r="15" stroke="currentColor" strokeWidth="4" fill="none" />
                  <rect x="15" y="35" width="30" height="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <rect x="20" y="45" width="20" height="5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </div>
              <div className="border-2 border-gray-800 bg-gray-200 transition-all duration-300 group-hover:border-green-600 group-hover:shadow-lg">
                <h3 className="text-xl font-bold text-center p-2 transition-colors duration-300 group-hover:text-green-600">Collect Data</h3>
                <p className="p-3 text-sm">
                  Once the portal is operational, data is collected in real time from all connected machines and operators, tracking metrics like location, material, and productivity.
                </p>
              </div>
              {/* Animate the right vertical arrow when hovering over Box 3 */}
              <div className="absolute right-8 top-[30%] h-[40%] w-8 border-r-8 border-t-8 border-b-8 border-green-600 transition-all duration-300 group-hover:border-green-500 group-hover:translate-y-1"></div>
            </div>
          </div>
          
          {/* Vertical arrows - these are static but we'll animate them with the groups */}
          {/* Right vertical arrow - handled by Box 3 group */}
          <div className="absolute right-8 top-[30%] h-[40%] w-8 border-r-8 border-t-8 border-b-8 border-green-600"></div>
          
          {/* Left vertical arrow - handled by Box 6 group */}
          <div className="absolute left-8 top-[30%] h-[40%] w-8 border-l-8 border-t-8 border-b-8 border-green-600"></div>
          
          {/* Bottom row */}
          <div className="flex justify-between">
            {/* Box 6: Explore Export Options */}
            <div className="w-[30%] group">
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-500 transition-colors duration-300 group-hover:text-orange-600">
                  <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path d="M30,10 L30,30 L45,20" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </div>
              <div className="border-2 border-gray-800 bg-gray-200 transition-all duration-300 group-hover:border-green-600 group-hover:shadow-lg">
                <h3 className="text-xl font-bold text-center p-2 transition-colors duration-300 group-hover:text-green-600">Explore Export Options</h3>
                <p className="p-3 text-sm">
                  Export reports in various formats (e.g., static, interactive) with flexible settings providing control over details like operator performance, machine usage, and site productivity.
                </p>
              </div>
              {/* Left arrow from Box 6 to Box 5 - with animation */}
              <div className="absolute left-[28%] top-[75%] transition-all duration-300 group-hover:translate-x-1">
                <svg width="50" height="30" className="text-green-600 transition-colors duration-300 group-hover:text-green-500 transform rotate-180">
                  <polygon points="0,15 40,15 40,5 50,15 40,25 40,15" fill="currentColor" />
                </svg>
              </div>
              {/* Animate the left vertical arrow when hovering over Box 6 */}
              <div className="absolute left-8 top-[30%] h-[40%] w-8 border-l-8 border-t-8 border-b-8 border-green-600 transition-all duration-300 group-hover:border-green-500 group-hover:translate-y-1"></div>
            </div>
            
            {/* Box 5: Customize Report */}
            <div className="w-[30%] group">
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-500 transition-colors duration-300 group-hover:text-orange-600">
                  <rect x="15" y="10" width="30" height="40" stroke="currentColor" strokeWidth="4" fill="none" />
                  <line x1="20" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="4" />
                  <line x1="20" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="4" />
                  <line x1="20" y1="40" x2="30" y2="40" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
              <div className="border-2 border-gray-800 bg-gray-200 transition-all duration-300 group-hover:border-green-600 group-hover:shadow-lg">
                <h3 className="text-xl font-bold text-center p-2 transition-colors duration-300 group-hover:text-green-600">Customize Report</h3>
                <p className="p-3 text-sm">
                  Customize reports by selecting different formats, date ranges, and other variables, ensuring the data fits the specific needs of the project or site.
                </p>
              </div>
              {/* Left arrow from Box 5 to Box 4 - with animation */}
              <div className="absolute left-[61%] top-[75%] transition-all duration-300 group-hover:translate-x-1">
                <svg width="50" height="30" className="text-green-600 transition-colors duration-300 group-hover:text-green-500 transform rotate-180">
                  <polygon points="0,15 40,15 40,5 50,15 40,25 40,15" fill="currentColor" />
                </svg>
              </div>
            </div>
            
            {/* Box 4: View & Monitor Dashboards */}
            <div className="w-[30%] group">
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-orange-500 transition-colors duration-300 group-hover:text-orange-600">
                  <rect x="10" y="10" width="40" height="30" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path d="M15,30 L25,20 L35,25 L45,15" stroke="currentColor" strokeWidth="4" fill="none" />
                  <line x1="10" y1="45" x2="50" y2="45" stroke="currentColor" strokeWidth="4" />
                  <line x1="30" y1="40" x2="30" y2="50" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>
              <div className="border-2 border-gray-800 bg-gray-200 transition-all duration-300 group-hover:border-green-600 group-hover:shadow-lg">
                <h3 className="text-xl font-bold text-center p-2 transition-colors duration-300 group-hover:text-green-600">View & Monitor Dashboards</h3>
                <p className="p-3 text-sm">
                  Generate real-time reports using dashboards, allowing you to view productivity data by material, location, or operator for immediate insights.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-green-600 text-white p-4 flex items-center">
          <div className="w-16 h-16 bg-green-700 flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110">
            <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[30px] border-l-white border-b-[20px] border-b-transparent"></div>
          </div>
          <p className="text-lg font-semibold">
            The VSPT team is always ready to assist project teams in creating custom reports tailored to 
            their needs, ensuring seamless integration and optimized data management for the project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VSPTProcessFlow;
