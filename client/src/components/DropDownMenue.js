import React, { useState, useRef } from 'react';
import user from "../images/User.png";
import log_out from "../images/log_out.png";
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const timerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    clearTimeout(timerRef.current);
  };

  const closeMenu = () => {
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Adjust the delay time as needed
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
    clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    closeMenu();
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <button
        className="flex items-center px-4 py-2 text-sm font-medium text-fake_black bg-transparent rounded-md focus:outline-none transition duration-300 ease-in-out"
        onClick={toggleMenu}
      >
        <img src={user} className='w-[25px] h-[25px] mr-2' alt="User Icon" />
        <span>المستخدم</span>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-taupe_palette ring-1 ring-black ring-opacity-5 z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link
              to=""
              className=" px-4 py-2 text-sm text-fake_black hover:bg-brown_palette hover:text-gray-900 flex items-center"
              role="menuitem"
            >
              <img src={user} className='w-6 h-6 mr-2' alt="User Icon" />
              <span>المستخدم 1</span>
            </Link>
            <Link
              to=""
              className=" px-4 py-2 text-sm text-fake_black hover:bg-brown_palette hover:text-gray-900 flex items-center"
              role="menuitem"
            >
              <img src={user} className='w-6 h-6 mr-2' alt="User Icon" />
              <span>المستخدم 2</span>
            </Link>
            <Link
              to="/homelgin"
              className=" px-4 py-2 text-sm text-fake_black hover:bg-brown_palette hover:text-gray-900 flex items-center"
              role="menuitem"
            >
              <img src={user} className='w-6 h-6 mr-2' alt="User Icon" />
              <span>صاحب الحساب</span>
            </Link>
            <Link
              to="/logout"
              className=" px-4 py-2 text-sm text-fake_black hover:bg-brown_palette hover:text-gray-900 flex items-center"
              role="menuitem"
            >
              <img src={log_out} className='w-6 h-6 mr-2' alt="Logout Icon" />
              <span>تسجيل الخروج</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
