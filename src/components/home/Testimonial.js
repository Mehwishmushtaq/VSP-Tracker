import React, { useRef, useEffect, useState } from 'react';
import QuoteIcon from '../../assets/images/Vector.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: "VSPT data has been used in unexpected areas like training, site supervision and dispute resolution expanding its utility just beyond production tracking.",
    name: "SAM COURIER",
    title: "Senior Project Engineer",
    company: "Drury South Crossing",
    bgColor: "bg-light-green",
  },
  {
    quote: "VSPT replaced labor-intensive manual load tallying significantly improving accuracy in fleet management and productivity reporting.",
    name: "DANIEL PEAK",
    title: "Site Engineer",
    company: "Fulton Hogan Ltd",
    bgColor: "bg-dark-green text-white",
  },
  {
    quote: "VSPT provided detailed productivity reports, capturing load tallies and truck movements, enabling more efficient management and planning of resources.",
    name: "RUSSELL GREEN",
    title: "Managing Director",
    company: "Civil & Landfill Construction",
    bgColor: "bg-light-green",
  },
  {
    quote: "VSPT replaced labor-intensive manual load tallying significantly improving accuracy in fleet management and productivity reporting.",
    name: "DANIEL PEAK",
    title: "Site Engineer",
    company: "Fulton Hogan Ltd",
    bgColor: "bg-dark-green text-white",
  },
  {
    quote: "VSPT provided detailed productivity reports, capturing load tallies and truck movements, enabling more efficient management and planning of resources.",
    name: "RUSSELL GREEN",
    title: "Managing Director",
    company: "Civil & Landfill Construction",
    bgColor: "bg-light-green",
  },
];

const ReviewsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy(); // clean up old
      swiperInstance.navigation.init();    // re-init with new refs
      swiperInstance.navigation.update();  // update for reactivity
    }
  }, [swiperInstance]);

  return (
    <section className="py-20 bg-[#f3f6f8] relative overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h5 className="text-[#4b7c4b] uppercase font-semibold mb-2 tracking-wide">Reviews</h5>
          <h2 className="text-3xl md:text-5xl font-bold mb-0">
            Customers Raving About<br /> Smart Tap VSP Tracker
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`p-8 ${item.bgColor} flex flex-col items-start rounded-tl-[40px] rounded-br-[40px] h-full max-w-sm mx-auto shadow-md`}
                  style={{ minHeight: 340 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-4">

                    <img
                      src={QuoteIcon}
                      alt="Quote Icon"
                      className="w-10 h-10"
                      style={{ filter: index === 1 || index === 3 ? 'invert(0%) brightness(0)' : 'none' }}
                    />
                  </div>
                  <p className={`mb-6 text-left leading-relaxed text-base ${index === 1 ? 'text-white' : 'text-[#4b5c4b]'}`}>
                    {item.quote}
                  </p>
                  <div className="text-left mt-auto">
                    <h4 className={`font-bold text-lg ${index === 1 ? 'text-white' : 'text-[#2d2d2d]'}`}>{item.name}</h4>
                    <p className={`text-sm uppercase tracking-widest mt-1 ${index === 1 ? 'text-white/80' : 'text-[#4b7c4b]'}`}>{item.title}</p>
                    <p className={`font-semibold mt-2 ${index === 1 ? 'text-white' : 'text-[#4b7c4b]'}`}>{item.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div ref={prevRef} className="swiper-button-prev-custom absolute top-1/2 left-[-60px] transform -translate-y-1/2 w-10 h-10 border border-[#4b7c4b] rounded-full flex items-center justify-center bg-white cursor-pointer z-10 shadow-md">
            <svg className="w-4 h-4 text-[#4b7c4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div ref={nextRef} className="swiper-button-next-custom absolute top-1/2 right-[-60px] transform -translate-y-1/2 w-10 h-10 border border-[#4b7c4b] rounded-full flex items-center justify-center bg-white cursor-pointer z-10 shadow-md">
            <svg className="w-4 h-4 text-[#4b7c4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination-custom mt-10 flex justify-center space-x-3"></div>
      </div>

      {/* Custom Styling */}
      <style jsx global>{`
        .bg-light-green {
          background-color: #c7dfc7;
        }
        .bg-dark-green {
          background-color: #4b7c4b;
        }
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-color: #FF7B00;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;