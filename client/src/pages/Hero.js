import React from "react";
import { useState } from "react";
import heroBg from "../images/hero_bg.png";
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
      className="w-full h-[87vh] mx-auto  text-right flex flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${ElHadj})` }}
    >
      <div className="-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
        <div></div>
        <div className="flex flex-col justify-center items-center">
  <h1 className="text-5xl text-center text-white">
    ابدأ رحلتك للحج مع لبيك
  </h1>
  <button
    className="bg-[#D4A373] hover:opacity-85 p-4 text-white rounded-2xl mt-10 m-2"
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
