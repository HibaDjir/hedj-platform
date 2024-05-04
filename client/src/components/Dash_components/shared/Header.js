import React, { Fragment  } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { useState } from 'react';
export default function Header() {
	const navigate = useNavigate()
	const [isSearchOpen, setSearchOpen] = useState(false);

    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen);}

	return (
      <div>
		
            <div className="bg-white h-16 px-4 flex items-center justify-between">
			

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



			<div className="flex items-center gap-2 mr-2">
				<Popover className="relative">
					{({ open }) => (
						<>
							<Popover.Button
								className={classNames(
									open && 'bg-gray-100',
									'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<HiOutlineChatAlt fontSize={24} />
							</Popover.Button>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
										<strong className="text-gray-700 font-medium">Messages</strong>
										<div className="mt-2 py-1 text-sm">This is messages panel.</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
				<Popover className="relative">
					{({ open }) => (
						<>
							<Popover.Button
								className={classNames(
									open && 'bg-gray-100',
									'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<HiOutlineBell fontSize={24} />
							</Popover.Button>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
										<strong className="text-gray-700 font-medium">Notifications</strong>
										<div className="mt-2 py-1 text-sm">This is notification panel.</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
				<Menu as="div" className="relative">
					<div>
						<Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
							<span className="sr-only">Open user menu</span>
							<div
								className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
								style={{ backgroundImage: 'url("data:image/jpeg;base64,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")' }}
							>
								<span className="sr-only">Marc Backes</span>
							</div>
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/profile')}
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Your Profile
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/settings')}
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Settings
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										Sign out
									</div>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>
		</div>
		</div>
	)
}

