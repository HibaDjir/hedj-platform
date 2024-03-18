import React from 'react';

import Navbar_lgin from '../components/NavbarLogin.js';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import ManassikSlider from './ManassikSlider';
import HotelSlider from './HotelSlider';
import Herolgin from './Herolgin';
function Homelgin() {
  return (
  <div className=' bg-white_palette'>
    <Navbar_lgin/>
    <Herolgin/>
    <HotelSlider/>
    <ManassikSlider/>
    <AboutUs/>
    <FAQ/>
    </div>
  )
}

export default Homelgin

