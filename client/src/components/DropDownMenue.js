import React, { useState, useRef, useEffect } from 'react';
import user from "../images/User.png";
import log_out from "../images/log_out.png";
import { Link } from 'react-router-dom';

import axios from 'axios';

export let idCandidat = 'szdzdzdz';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const timerRef = useRef(null);
  const [content, setContent] = useState('المستخدم');

  const [candidature, setCandidature] = useState([]);

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
    const token = tokenCookie ? tokenCookie.split('=')[1] : null;
    axios.get('http://localhost:3000/TestLogin?fieldName=token&fieldValue='+token)
            .then(response => {
              axios.get('http://localhost:3000/api/users/'+response.data)
                      .then(responseF => {
                        fetchCandidature(response.data);
                        //alert(responseF.data)
                      })
                      .catch(error => {
                          console.error('Erreur lors de la récupération des options :', error);
                      });
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });
  }, []);

  const fetchCandidature = async (id_user) => {
      try {
          const response = await fetch('http://localhost:3000/api/candidature/id_user/find?fieldName=id_user&fieldValue='+id_user);
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setCandidature(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };


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
  
  const handleClick = (id, nomP) => {
    setContent(nomP);
    idCandidat = id;
    setIsOpen(!isOpen);
    clearTimeout(timerRef.current);
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
        <span>{content}</span>
        
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#EAE1D1] ring-1 ring-black ring-opacity-5 z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {candidature.map(candidat => (
              <button
                className="flex items-center px-4 py-2 text-sm font-medium text-fake_black bg-transparent rounded-md focus:outline-none transition duration-300 ease-in-out"
                onClick={() => handleClick(candidat._id, candidat.nom+" "+candidat.prenom)}
              >
                  
                  <span>{candidat.nom} {candidat.prenom}</span>
              </button>
            ))}
            <button
              className="flex items-center px-4 py-2 text-sm font-medium text-fake_black bg-transparent rounded-md focus:outline-none transition duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              <img src={user} className='w-6 h-6 mr-2' alt="User Icon" />
              <span>صاحب الحساب</span>
            </button>
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
