import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../images/LOGO.png";
import NetflixModal from "../Popups/Netflix";
import user from "../images/User.png";
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'


function Navbar_lgin() {
  const [isNetflixModalOpen, setIsNetflixModalOpen] = useState(false);

  const openNetflixModal = () => {
    setIsNetflixModalOpen(true);
  };

  const closeNetflixModal = () => {
    setIsNetflixModalOpen(false);
  };
 
  

  const [mobileNav, setMobileNav] = useState(false);
  const [desktopNav, setDesktopNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleDesktopNav = () => {
    setDesktopNav(!desktopNav);
  };

  useEffect(() => {
    setMobileNav(false);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      dir="rtl"
      className={`flex justify-between items-center h-20 max-w-1240 mx-auto px-4 navbar text-fack_black  `}
    >
      <img style={{ width: "80px", height: "auto" }} src={Logo} alt="LOGO" />

      <ul
        className={`text-white hidden md:flex ${desktopNav ? "flex-col" : ""}`}
      >
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300 ">
          <Link to="/home">الصفحة الرإيسية</Link>
        </li>
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link to="/nussuki">مناسك</Link>
        </li>
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link to="/"> حجز الرحلات</Link>
        </li>
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link to="/">دفع التكاليف</Link>
        </li>
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link to="/">الحالة الصحية</Link>
        </li>
     
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link 
           onClick={openNetflixModal}
           >التسجيل للحج</Link>
            {isNetflixModalOpen && <NetflixModal onClose={closeNetflixModal} />}
        </li>

        <li className="p-4 m-2  hover:cursor-pointer ">
          <Link to="/user_profile"> <img src={user} className="h-[30px] w-[30px]  " /></Link>
        </li>
     
      </ul>

      <div onClick={handleMobileNav} className="block md:hidden">
        {!mobileNav ? (
          <AiOutlineMenu size={20} />
        ) : (
          <AiOutlineClose size={20} />
        )}
      </div>

      <div
        className={`fixed bg-[#F6F2ED] left-0 top-0 w-60% h-full border-r border-r-gray-900 bg-custom ease-in-out duration-500 ${
          mobileNav ? "block" : "hidden"
        }`}
      >
        <img style={{ width: "80px", height: "auto" }} src={Logo} alt="LOGO" />
        <ul className={`md:flex flex-col ${mobileNav ? "block" : "hidden"}`}>
        <li className="p-4 m-2  hover:cursor-pointer ">
          <Link to="/user_profile"> <img src={user} className="h-[30px] w-[30px]  " /></Link>
        </li>
     
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link 
           onClick={openNetflixModal}
           >التسجيل للحج</Link>
            {isNetflixModalOpen && <NetflixModal onClose={closeNetflixModal} />}
        </li>
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link to="/">الحالة الصحية</Link>
        </li>
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link to="/">دفع التكاليف</Link>
        </li>
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link to="/"> حجز الرحلات</Link>
        </li>
          
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300 ">
          <Link to="/home">الصفحة الرإيسية</Link>
        </li>
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link to="/nussuki">مناسك</Link>
        </li>
        </ul>
      </div>
    </div>
    
  );
}

export default Navbar_lgin;




