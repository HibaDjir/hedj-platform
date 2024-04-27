import React from "react";
import { ReactTyped } from "react-typed";
import { useState } from "react";
import heroBg from "../images/sunrise.jpeg";
import ElHadj from "../images/ELHADJ.jpg";
import Navbar from "../components/Navbar";
import SignupModal from "../Popups/Signup";
function Hero() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };
  return (
    <div
      dir="rtl "
      className="w-full h-[87vh] mx-auto  text-right flex flex-col justify-center bg-cover bg-center cursor-pointer"
      style={{  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${ElHadj})`}}
    >
      <div className="maw-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
        <div></div>
        <div className="flex flex-col justify-center items-center w-full mt-20 ">
  <h2 className=" text-white_palette text-5xl text-center mb-4 transition-all duration-500 transform hover:scale-105">
    ابدأ رحلتك للحج مع لبيك
  </h2>
  <ReactTyped className=" mt-4 text-xl text-center text-white_palette" strings={["لبيك اللهم لبيك","لبيك لا شريك لك لبيك"," إن الحمد ","والنعمة لك","والملك", "لا شريك لك" ]} typeSpeed={170} backSpeed={180} loop/>

  <button
    className="bg-[#D4A373] hover:opacity-85 p-4 text-white rounded-2xl w-80 transition-all duration-300 ease-in-out transform hover:scale-105 mt-4"
    onClick={openSignupModal}
  >
    تسجيل حساب جديد
  </button>
  {isSignupModalOpen && <SignupModal onClose={closeSignupModal} />}
</div>

      </div>
    </div>
  );
}

export default Hero;
