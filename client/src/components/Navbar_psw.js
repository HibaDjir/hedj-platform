import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../images/LOGO.png";


function Navbar() {
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
      className={`flex justify-between items-center h-20 max-w-1240 mx-auto px-4 navbar text-fake_black bg-taupe_palette  `}
    >
      <img style={{ width: "80px", height: "auto" }} src={Logo} alt="LOGO" />

      <ul className={`text-white gap-5 hidden md:flex ${desktopNav ? "flex-col" : ""}`}>
      <li className="p-2 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-dorée duration-300 ">
          <Link to="/home">الصفحة الرإيسية</Link>  
        </li>
  <li className="mb-4">
    <input
      className="text-black mb-2 mt-2 p-2 border rounded-2xl w-full focus:outline-none focus:border-brown_palette"
      type="email"
      placeholder="البريد اللإلكتروني"
      required
    />
  </li>
  <li className="mb-4">
    <input
      className="text-black mb-2 mt-2 p-2 border rounded-2xl w-full focus:outline-none focus:border-brown_palette"
      type="password"
      placeholder="كلمة السر"
      required
    />
  </li>
  <li className="hover:border-b hover:cursor-pointer ease-in-out border-transparent">
    <button className="bg-[#D4A373] hover:opacity-85 p-2 text-white rounded-2xl m-2">
      تسجيل الدخول
    </button>
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
        <li className="p-2 m-2 hover:border-b hover:cursor-pointer ease-in-out border-transparent hover:border-dorée duration-300 ">
          <Link to="/home">الصفحة الرإيسية</Link>  
        </li>
  <li className="mb-4">
    <input
      className="text-black mb-2 mt-2 p-2 border rounded-2xl w-full focus:outline-none focus:border-brown_palette"
      type="email"
      placeholder="البريد اللإلكتروني"
      required
    />
  </li>
  <li className="mb-4">
    <input
      className="text-black mb-2 mt-2 p-2 border rounded-2xl w-full focus:outline-none focus:border-brown_palette"
      type="password"
      placeholder="كلمة السر"
      required
    />
  </li>
  <li className="hover:border-b hover:cursor-pointer ease-in-out border-transparent">
    <button className="bg-[#D4A373] hover:opacity-85 p-2 text-white rounded-2xl m-2">
      تسجيل الدخول
    </button>
  </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;