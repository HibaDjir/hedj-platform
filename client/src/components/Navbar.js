import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../images/LOGO.png";
import LoginModal from "../Popups/Login";
import SignupModal from "../Popups/Signup";
import Home from "../pages/Home";

function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
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
          <Link to="/company">اللأسئلة المتداولة</Link>
        </li>
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link to="/resources">من نحن</Link>
        </li>
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300">
          <Link to="/hajj">إتصل بنا</Link>
        </li>
        <li className=" hover:border-b hover:cursor-pointer ease-in-out border-transparent">
          <button
            className=" border border-[#D4A373] text-white rounded-2xl p-4 m-2 hover:bg-[#D4A373] "
            onClick={openLoginModal}
          >
            دخول
          </button>
          {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
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
        <li className="p-4 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300 ">
          <Link to="/home">الصفحة الرإيسية</Link>
        </li>
          <li className="p-4 text-white hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-dorée duration-300">
            <Link to="/">مناسك</Link>
          </li>
          <li className="p-4 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-dorée duration-300">
            <Link to="/company">اللأسئلة المتداولة</Link>
          </li>
          <li className="p-4 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-dorée duration-300">
            <Link to="/resources">من نحن</Link>
          </li>
          <li className="p-4 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-dorée duration-300">
            <Link to="/hajj">إتصل بنا</Link>
          </li>
          <li className=" hover:border-b hover:cursor-pointer ease-in-out border-transparent">
          <button
            className=" border border-[#D4A373] text-white rounded-2xl p-4 m-2 hover:bg-[#D4A373] "
            onClick={openLoginModal}
          >
            دخول
          </button>
          {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
        </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
