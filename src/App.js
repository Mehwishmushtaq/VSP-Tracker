import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Machines from './pages/Machines'
import DevicePositioning from './pages/DevicePositioning'
import Workflows from './pages/Workflows'
import CalculationProcess from './pages/CalculationProcess'
import VSPTrackerAction from './pages/VSPTrackerAction'
import WhereWeFitIn from './pages/WhereWeFitIn'
import ResourcesSupport from './pages/ResourcesSupport'
import FAQSection from './components/home/FAQSection'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faq' element={<FAQSection />} />
          <Route path='/machines' element={<Machines />} />
          <Route path='/devices-positioning' element={<DevicePositioning />} />
          <Route path='/workflows' element={<Workflows />} />
          <Route path='/tools-calculators' element={<CalculationProcess />} />
          <Route path='/vsp-tracker-in-action' element={<VSPTrackerAction />} />
          <Route path='/where-we-fit-in' element={<WhereWeFitIn />} />
          <Route path='/resources-support' element={<ResourcesSupport />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
