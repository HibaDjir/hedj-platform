import React, { useState } from 'react';
import classNames from 'classnames';
import Logo from "../../../images/LOGO.png";
import { Link, useLocation } from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FaUserDoctor, FaPeopleGroup } from "react-icons/fa6";
import { SlUserFollowing } from "react-icons/sl";

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-white  hover:underline rounded-sm text-base';

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <button onClick={toggleSidebar} aria-label="Open sidebar" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 ">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside
                className={classNames("top-0 left-0 z-40 w-64 h-screen transition-transform", {
                    '-translate-x-full sm:translate-x-0': !isSidebarOpen,
                })}
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
                            <a href="#" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                                <svg className="h-8 w-8 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <CiTimer />
                                </svg>
                                <span className="ms-3">Session de ELHadj</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                                <svg className="h-7 w-7 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <GoPeople />
                                </svg>
                                <span className="ms-3">Administrateurs</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                                <svg className="h-7 w-7 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <FaUserDoctor />
                                </svg>
                                <span className="ms-3">Médecins</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                                <svg className="h-7 w-7 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <FaPeopleGroup />
                                </svg>
                                <span className="ms-3">Candidats</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-5 text-gray-900 rounded-lg dark:text-black hover:text-[#D8A353]  group">
                                <svg className="h-7 w-7 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-[#D8A353]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <SlUserFollowing />
                                </svg>
                                <span className="ms-3">Pèlerins</span>
                            </a>
                        </li>

                        <div className="flex flex-col gap-0.5 pt-5 border-t border-neutral-400">
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black hover:text-red-500  group">
                                    <svg className="h-8 w-8 text-gray-500 transition duration-75 dark:text-black group-hover:text-[#D8A353] dark:group-hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <MdLogout />
                                    </svg>
                                    <span className="ms-3">Se deconnecter</span>
                                </a>
                            </li>
                        </div>

                    </ul>
                </div>
            </aside>
        </div>
    );
}
