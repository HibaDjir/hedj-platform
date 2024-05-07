import Logo from "../../../images/LOGO.png";
import { useState } from 'react';

export default function Header() {
    const [isSearchOpen, setSearchOpen] = useState(false);

    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen);
    };

    return (
        <div>
            <div className="bg-white h-16 px-4 flex items-center justify-between">
                {/* Search form */}
                <form className={`max-w-md mx-auto lg:block ${isSearchOpen ? 'block' : 'hidden'}`}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-black">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-black focus:border-[#D8A353] dark:bg-white dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-[#D8A353] w-[40rem] h-10"
                            placeholder="Search..."
                            required
                        />
                    </div>
                </form>

                <div className="flex justify-between items-center px-4 py-3">
                    <div className="flex justify-end w-full">
                        <img className="w-20 h-auto" src={Logo} alt="LOGO" />
                    </div>
                </div>

                {/* Icon to toggle search or search icon */}
                <div className="block lg:hidden">
                    <button
                        onClick={toggleSearch}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        aria-label="Toggle search"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isSearchOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
