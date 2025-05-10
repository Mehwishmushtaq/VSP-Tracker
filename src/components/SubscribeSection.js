import React from 'react';

const SubscribeSection = () => {
  return (
    <div className="bg-primary text-white mt-20 rounded-t-3xl rounded-b-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center w-[95%] h-52 max-w-6xl mx-auto mb-[-5%] z-20 relative space-y-6 md:space-y-0">
      {/* Left Content */}
      <div className="text-center md:text-left w-full md:w-1/2 space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-black">Let’s Start Tracking Smarter Today!</h2>
        <p className="text-black text-sm md:text-base">
          Feel free to send us your questions or request a free consultation.
        </p>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end space-y-3">
        <p className="text-black text-sm md:text-base text-center md:text-right">
          Optimizing Every Load, Every Second, Every Site.
        </p>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="E-mail address"
            className="rounded-l-full py-2 px-4 text-black focus:outline-none w-full md:w-60 bg-gray-100"
          />
          <button className="bg-black text-white rounded-r-full px-4 md:px-6 hover:bg-green-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
