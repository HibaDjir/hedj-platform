import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/LOGO.png";

function NavbarMed() {
  return (
    <div className="flex justify-between items-center h-20 max-w-1240 mx-auto px-4 navbar bg-gradient-to-b from-[#FAF8F5] to-transparent">
      <Link to="/">
        <img className="w-20 h-auto" src={Logo} alt="LOGO" />
      </Link>
      <ul className='flex justify-between'>
        <li className='p-4 m-2  hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300'>
          <Link to="/listepelerin" className="text-[#D8A353] hover:text-[#B08835] transition duration-300">pelerins</Link>
        </li>
        <li className='p-4 m-2  hover:cursor-pointer ease-in-out border-transparent hover:border-white duration-300'>
          <Link to="" className="text-[#D8A353] hover:text-[#B08835] transition duration-300">Nom Prenom</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarMed;
