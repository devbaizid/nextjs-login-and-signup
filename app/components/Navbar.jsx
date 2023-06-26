"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Home",
      url: "/home"
    },
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Service",
      url: "/service"
    },
    {
      name: "Contact",
      url: "/contact"
    }
  ];


const Logo_name = "TechBD"
const Logo_url = "/"

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <Link href={Logo_url} >
                  <span className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  
                    <span className="font-bold">{Logo_name}</span>
                  </span>
                </Link>
              </div>
              {/* md:flex items-center space-x-1 */}
              <div className="hidden  items-center justify-between   hidden w-full md:flex md:w-auto md:order-1 ">
                {links.map((link, index) => (
                  <Link href={link.url} key={index}   className="py-5  px-3 text-gray-700 hover:text-gray-900">
    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
            <div className="relative hidden md:block">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border  rounded-lg " placeholder="Search..." />
      </div>




              <Link href="#" class="text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 ">Get started</Link>

           
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={toggleMenu}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className={`mobile-menu ${open ? '' : 'hidden'} md:hidden`}>
          {links.map((link, index) => (
            <Link href={link.url} key={index}>
              <span className="block py-2 px-4 text-sm hover:bg-gray-200">{link.name}</span>
            </Link>
          ))}
        </div>
      </nav>




    </>
  );
};

export default Navbar;
