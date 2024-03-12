import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from '../images/LOGO.png';

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
    <div dir="rtl" className={`flex justify-between items-center h-20 max-w-1240 mx-auto px-4 navbar text-dorée bg-gradient-to-b from-green-900 to-green-700` }>
      <img style={{ width: '80px', height: 'auto' }} src={Logo} alt="LOGO" />

      <ul className={`hidden md:flex ${desktopNav ? 'flex-col' : ''}`}>
        <li className="p-4 hover:border-b hover:cursor-pointer border-transparent hover:border-dorée duration-300">
          <Link to="/">مناسك</Link>
        </li>
        <li className="p-4 hover:border-b hover:cursor-pointer border-transparent hover:border-dorée duration-300">
          <Link to="/company">اللأسئلة المتداولة</Link>
        </li>
        <li className="p-4 hover:border-b hover:cursor-pointer border-transparent hover:border-dorée duration-300">
          <Link to="/resources">من نحن</Link>
        </li>
        <li className="p-4 hover:border-b hover:cursor-pointer border-transparent hover:border-dorée duration-300">
          <Link to="/hajj">إتصل بنا</Link>
        </li>
        
      </ul>

      <div onClick={handleMobileNav} className="block md:hidden">
        {!mobileNav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div className={`fixed bg-vert_foncé left-0 top-0 w-60% h-full border-r border-r-gray-900 bg-custom ease-in-out duration-500 ${mobileNav ? 'block' : 'hidden'}`}>
        <img style={{ width: '80px', height: 'auto' }} src={Logo} alt="LOGO" />
        <ul className={`md:flex flex-col ${mobileNav ? 'block' : 'hidden'}`}>
          <li className="p-4 text-white hover:border-b hover:cursor-pointer border-transparent hover:border-dorée duration-300">
            <Link to="/">مناسك</Link>
          </li>
          <li className="p-4 hover:border-b hover:cursor-pointer border-transparent hover:border-dorée duration-300">
            <Link to="/company">اللأسئلة المتداولة</Link>
          </li>
          <li className="p-4 hover:border-b hover:cursor-pointer border-transparent hover:border-dorée duration-300">
            <Link to="/resources">من نحن</Link>
          </li>
          <li className="p-4 hover:border-b hover:cursor-pointer border-transparent hover:border-dorée duration-300">
            <Link to="/hajj">إتصل بنا</Link>
          </li>
          <li>
            <button 
            className="p-4 bg-fake_black text-dorée rounded-2xl  m-2  "
            >
                <Link to='/signup'>
                إنشاء حساب 
                </Link>
           </button>
        </li>

        <li>
            <button 
            className="p-4 bg-dorée text-fake_black rounded-2xl m-2  "
            >
           <Link to='/login'>
           تسجيل 
            
           </Link>
           </button>
        </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
