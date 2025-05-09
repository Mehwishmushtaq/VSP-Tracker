import React from "react";
import timerImg from "../../assets/images/timer.png";

const TimerStats = () => {
  const stats = [
    {
      value: "98%",
      label: "Client Satisfaction",
      subtext: "Our Members Love Their Results And Experience",
      color: "text-yellow-400",
    },
    {
      value: "+5",
      label: "Years Of Experience",
      subtext: "Trust In Our Proven Track Record Of Transforming",
      color: "text-green-400",
    },
    {
      value: "+800",
      label: "Operators & Machines",
      subtext: "Join Our Thriving Fitness Community",
      color: "text-orange-400",
    },
    {
      value: "24/7",
      label: "Support Available",
      subtext: "Expert Assistance Whenever You Need It",
      color: "text-green-500",
    },
  ];

  return (
    <div
      className="bg-cover bg-center py-12 px-4 sm:px-10"
      style={{ backgroundImage: `url(${timerImg})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white bg-black bg-opacity-50 rounded-2xl p-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h2>
            <p className="text-lg font-semibold">{stat.label}</p>
            <p className="text-sm mt-1 text-gray-300">{stat.subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimerStats;
