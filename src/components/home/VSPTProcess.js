import React from 'react';

const ArrowComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="relative">
        <svg
          width="100"
          height="300"
          viewBox="0 0 100 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
         
          {/* Main arrow path */}
          <path
            d="M 20 280 L 20 40 L 80 40"
            stroke="#1A3C34"
            strokeWidth="15"
            strokeLinecap="square"
            fill="none"
          />
          <polygon
            points="80,25 80,55 100,40"
            fill="#1A3C34"
            stroke="#1A3C34"
            strokeWidth="2"
          />
          <path
            d="M 20 280 L 80 280"
            stroke="#1A3C34"
            strokeWidth="15"
            strokeLinecap="square"
            fill="none"
          />
        </svg>
        {/* Card near top right arrowhead */}
        <div className="absolute top-0 right-[-150px] w-32 h-20 bg-white shadow-lg rounded-lg p-4">
          <p className="text-sm text-gray-800">Top Right Card</p>
        </div>
        {/* Card near bottom corner of the arrow, moved to the right */}
        <div className="absolute bottom-0 right-[-150px] w-32 h-20 bg-white shadow-lg rounded-lg p-4">
          <p className="text-sm text-gray-800">Bottom Right Card</p>
        </div>
      </div>
    </div>
  );
};

export default ArrowComponent;