import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from "../images/User.png";
import log_out from "../images/log_out.png";

const ChoixPaiment = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className=" hover:border-b hover:cursor-pointer ease-in-out border-transparent text-brown_palette duration-300"
        onClick={toggleMenu}
      >
        <span>دفع التكاليف</span>
      </button>

      {isOpen && (
        <div className="absolute  right-0  mt-8 w-48 rounded-md shadow-lg bg-[#EAE1D1] ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link to="/paimentVP" className="block px-4 py-2 text-sm font-medium text-fake_black hover:bg-gray-100 hover:text-brown_palette transition duration-300 ease-in-out" role="menuitem">دفع بالبريد الجاري</Link>
            <Link to="/paimentcarteccp" className="block px-4 py-2 text-sm font-medium text-fake_black hover:bg-gray-100 hover:text-brown_palette transition duration-300 ease-in-out" role="menuitem">الدفع عبر بطاقة البريد الجاري</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChoixPaiment;
