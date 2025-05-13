import React from 'react'
import FAQSection from '../components/home/FAQSection'
import TimerStats from '../components/home/TimerStats'
import VSPDataSheet from '../components/home/VSPDataSheet'
import Banner from '../components/home/Banner'
import WorkingCards from '../components/home/WorkingCards'
// import VsptProcess from '../components/home/VSPTProcess'
import VSPCards from '../components/home/VSPcards'
import TopSection from '../components/home/TopSection'
import HeroSection from '../components/home/HeroSection'
import Testimonials from '../components/home/Testimonial'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopSection />
      <div className='py-24 px-8 md:px-28 grid grid-cols-1 md:grid-cols-3 gap-[45px] justify-items-center bg-[#D8D8D8]'>
        <VSPCards text="DUMP TRUCK" />
        <VSPCards text="EXCAVATOR" />
        <VSPCards text="SCRAPER" />
      </div>
      <WorkingCards />
      {/* <VsptProcess /> */}
      <Banner />
      <VSPDataSheet />
      <TimerStats />
      <Testimonials />
      <FAQSection />
    </div>
  )
}

export default Home
