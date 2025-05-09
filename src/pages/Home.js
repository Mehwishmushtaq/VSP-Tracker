import React from 'react'
import FAQSection from '../components/home/FAQSection'
import TimerStats from '../components/home/TimerStats'
import VSPDataSheet from '../components/home/VSPDataSheet'
import Banner from '../components/home/Banner'
import WorkingCards from '../components/home/WorkingCards'
import VSPCards from '../components/home/VSPcards'
import TopSection from '../components/home/TopSection'
import HeroSection from '../components/home/HeroSection'
import Testimonials from '../components/home/Testimonial'
const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopSection />
      <div className='py-8 px-8 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center bg-[#D8D8D8]'>
        <VSPCards text="DUMP TRACKER" />
        <VSPCards text="EXCAVATER" />
        <VSPCards text="SCRAPER" />
      </div>
      <WorkingCards />
      <Banner />
      <VSPDataSheet />
      <TimerStats />
      <Testimonials />
      <FAQSection />
    </div>
  )
}

export default Home
