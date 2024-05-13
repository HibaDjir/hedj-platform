import React, { useState } from 'react';
import classNames from 'classnames';
import Logo from "../../../images/LOGO.png";
import { Link, useLocation } from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";
import { FaUserDoctor, FaPeopleGroup } from "react-icons/fa6";
import { SlUserFollowing } from "react-icons/sl";
import Paiment from '../../../pages/AdminPages/Paiment';
import { FaCreditCard } from 'react-icons/fa';
import { useLogout } from "../../../hooks/useLogout"
import { useAuthContext } from "../../../hooks/useAuthContext";


export default function Sidebar() {
    const [daata, setDaata] = useState({});
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const handleClick = () => {
      logout();
    };
    return (
        <aside
            className="top-0 left-0 z-40 w-64 h-screen transition-transform"
            aria-label="Sidebar"
        >

            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#FAF8F5] shadow-xl">
                <ul className="space-y-2 font-medium">

                    <li>
                        <div className="flex gap-2 px-1 py-3 justify-center items-center ">
                            <img style={{ width: "80px", height: "auto" }} src={Logo} alt="LOGO" />
                        </div>
                    </li>
                    <li>
                        <a href="Dash" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                            <svg className="h-7 w-7 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span className="ms-3">Tableau de bord</span>
                        </a>
                    </li>

                    <li>
                        <a href="Session" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                            <svg className="h-8 w-8 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <CiTimer />
                            </svg>
                            <span className="ms-3">Session de ELHadj</span>
                        </a>
                    </li>
                    <li>
                        <a href="RecentAdmin" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                            <svg className="h-7 w-7 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <GoPeople />
                            </svg>
                            <span className="ms-3">Administrateurs</span>
                        </a>
                    </li>
                    <li>
                        <a href="medecin" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                            <svg className="h-7 w-7 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <FaUserDoctor />
                            </svg>
                            <span className="ms-3">Médecins</span>
                        </a>
                    </li>
                    <li>
                        <a href="Candidat" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                            <svg className="h-7 w-7 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <FaPeopleGroup />
                            </svg>
                            <span className="ms-3">Candidats</span>
                        </a>
                    </li>
                    <li>
                        <a href="Pelerin" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                            <svg className="h-7 w-7 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <SlUserFollowing />
                            </svg>
                            <span className="ms-3">Pèlerins</span>
                        </a>
                    </li>

                    <li>
                        <a href="AttentePelerin" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                            <svg className="h-7 w-7 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <GiSandsOfTime />
                            </svg>
                            <span className="ms-3">Liste d'attente</span>
                        </a>
                    </li>
                    <li>
            <a href="Paiment" class="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]   group">
               <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
			 <FaCreditCard className=" flex justify-center"/>
               </svg>
               <span class="ms-3">Paiment</span>
            </a>
         </li>

                    <div className="flex flex-col gap-0.5 pt-5 border-t border-neutral-400">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:text-red-500  group">
                                <svg className="h-8 w-8 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <MdLogout />
                                </svg>
                                {user && (
                                    <div>
                                    
                                <button  onClick={handleClick} className="ms-3">Se deconnecter</button>
                                </div>
                            )}
                            </a>
                        </li>
                    </div>

		
		 

		 

		

		 

         


		 
         
         
        
      </ul>
   </div>
</aside>












			 
			


			









			
			
		
	)
}






