import React from 'react';
import Hero  from './Hero';
import Navbar from '../components/Navbar';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import ManassikSlider from './ManassikSlider';
import HotelSlider from './HotelSlider';
function Home() {
  return (
  <div className=' bg-white_palette'>
    <Hero/>
    <HotelSlider/>
    <ManassikSlider/>
    <AboutUs/>
    <FAQ/>
    </div>
  )
}

export default Home
