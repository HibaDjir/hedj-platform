import React from 'react';

import heroBg from '../images/hero_bg.png';
import makkah from '../clip/bg_mekkah.mp4';
import makkah_02 from '../clip/bg_mekkah_02.mp4';
function Hero() {
  return (
    <div
      dir="rtl"
      className=" w-full h-screen mx-auto text-center flex flex-col justify-center bg-cover bg-center "
      >
      <video
        className="w-full h-full object-cover "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={makkah} type="video/mp4" />
      </video>

      <h1 className="text-white font-extrabold text-4xl mb-4">13:14</h1>
      <h2 className="text-white font-extrabold text-2xl mb-4">شعبان 1445 29</h2>
     
    
    </div>
  );
}

export default Hero;
