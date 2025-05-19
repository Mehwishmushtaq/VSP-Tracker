import React from "react";

export default function WorkingCards() {
  const features = [
    { id: 1, title: "Easy Setup" },
    { id: 2, title: "Simple Accurate Data Capture" },
    { id: 3, title: "Real Time Results" },
  ];

  return (
    <div className="relative bg-[#417a45] py-2 px-4">
      <div className="relative max-w-7xl mx-auto text-center text-white z-10 mb-12">
        <h3 className="text-base mt-12 uppercase tracking-wider mb-2">
          WHAT WE ARE WORKING FOR
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold">
          HOW VSP TRACKER <br />PRODUCTIVITY WORKS
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto mb-[-10%]">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between -mb-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative w-[239px] mb-24 md:mb-0"
              style={{
                height: feature.id === 3 ? 262 : feature.id === 2 ? 263 : 265,
                transform: `translateY(${feature.id === 1 ? '0' : feature.id === 2 ? '0' : '0'}px)`,
              }}
            >
              <div className="relative w-[237px] h-full">
                {/* Card Box */}
                <div
                  className="absolute w-[237px] h-[206px] top-[57px] left-0 bg-[#f8f8f8] rounded-[5px] shadow-[2px_4px_10px_#00000026]"
                >
                  <div className="flex flex-col items-center justify-center h-full px-4">
                    <div className="font-semibold text-[#010101] text-[28px] text-center mt-6">
                      {feature.title}
                    </div>
                  </div>
                </div>

                {/* Circle background */}
                <div className="absolute w-20 h-20 top-0 left-[50%] transform -translate-x-1/2 bg-[#f8f8f8] rounded-full shadow-[2px_4px_10px_#00000026]" />

                {/* Circle border */}
                <div className="absolute w-[60px] h-[60px] top-[10px] left-[50%] transform -translate-x-1/2 rounded-full border-2 border-[#417a45]" />

                {/* Number */}
                <div className="absolute top-[27px] left-[50%] transform -translate-x-1/2 font-extrabold text-[#010101] text-[22px] text-center">
                  {feature.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}