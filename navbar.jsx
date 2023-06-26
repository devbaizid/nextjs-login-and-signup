"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=' w-full fixed top-0 left-0'>
        <div className='md:flex items-center  bg-gray-900 justify-between  py-4 md:px-10 px-7'>
          <div className=' text-gray-200   font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-100'>
            <span className='text-3xl text-gray-100 mr-1 pt-2'>
            </span>
            Designer
          </div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-[0.75rem] text-white cursor-pointer md:hidden'>
            {/* <ion-icon name={open ? 'close' : 'menu'}>sadfasdf</ion-icon> */}
            < i class={open ? 'ri-close-line' : 'ri-menu-line'}></i>

          </div>

          <ul className={`md:flex  md:items-center bg-gray-900 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
            {Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-sm text-gray-100 md:my-0 my-7'>
                <Link href={link.link}>
                  <span className='text-gray-200  duration-500'>{link.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
