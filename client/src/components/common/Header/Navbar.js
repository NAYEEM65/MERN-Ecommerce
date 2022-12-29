import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
const Navbar = () => {
    const navbarData = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore',
        },
        {
            id: 3,
            name: 'About',
            path: '/about',
        },
        {
            id: 4,
            name: 'Contact',
            path: '/contact',
        },
    ];
    const [isOpen, setOpen] = useState(false);
    console.log(isOpen);
    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 h-28 mx-auto md:px-4 container md:flex items-center hidden justify-between flex-wrap md:flex-nowrap">
                <div className="text-indigo-500 md:order-1">
                    <h2 className="text-4xl font-bold">
                        <Link to="/">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                Mern
                            </span>
                            Ecommerce
                        </Link>
                    </h2>
                </div>
                <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                    <ul className="flex font-semibold justify-between">
                        {navbarData.map((item) => (
                            <li className="md:px-4 md:py-2 text-indigo-500" key={item.id}>
                                <NavLink to={item.path}>{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="order-2 md:order-3">
                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <Link to="/login">Login</Link>
                    </button>
                </div>
            </div>
            {/* mobile Menu */}
            <div className="md:hidden visible">
                <div className="text-indigo-500 md:order-1 flex justify-between items-center">
                    <h2 className="text-4xl font-bold">
                        <Link to="/">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                R
                            </span>
                            Builder
                        </Link>
                    </h2>
                    <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} />
                </div>
                {isOpen && (
                    <div className="border-t-2 border-violet-500 pt-5 pb-10 mx-auto md:px-4 container flex items-center justify-between flex-col">
                        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                            <ul className="flex font-semibold justify-between flex-col items-center">
                                {navbarData.map((item) => (
                                    <li className="md:px-4 md:py-2 text-indigo-500" key={item.id}>
                                        <NavLink to={item.path}>{item.name}</NavLink>
                                    </li>
                                ))}
                                <li>
                                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <Link to="/login">Login</Link>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
