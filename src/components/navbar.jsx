import React from 'react';
import logo from '../assets/logo.svg';
import { Button } from './ui/button';

export const Navbar = () => {
    return (
      <>
  
       {/* Background bar and Login button */}
       <div className=" inset-x-0 top-0 h-10 bg-[#1A265C] z-[-1]">
       {/* Login button centered vertically */}
       <Button className="absolute top-2 right-32 w-14 h-6 p-1 bg-slate-50 text-black">Login</Button>
      </div>
       
  
        {/* Navbar container */}
        <div id="navbar" className="relative grid h-[4.5rem] 2xl:px-36 lg:px-10 sm:px-1">
  
          {/* Navigation links and logo */}
          <div className="flex justify-between items-center w-full">
            {/* Left navigation items */}
            <ul className="flex 2xl:space-x-24 lg:space-x-5 sm:space-x-3 align-middle">
              <li className="text-[#1A265C] font-[Montserrat]">LIBRARY</li>
              <li className="text-[#1A265C] font-[Montserrat]">ABOUT US</li>
              <li className="text-[#1A265C] font-[Montserrat]">PROGRAM EVENTS</li>
            </ul>
  
            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[-1] max-lg:top-[-2rem]">
              <img src={logo} alt="logo" className="block h-auto max-lg:h-11" />
            </div>
  
            {/* Right navigation items */}
            <ul className="flex 2xl:space-x-24 lg:space-x-5 sm:space-x-2">
              <li className="text-[#1A265C] font-[Montserrat]">SKYLINE STORIES</li>
              <li className="text-[#1A265C] font-[Montserrat]">CAREER OPPORTUNITY</li>
              <li className="text-[#1A265C] font-[Montserrat]">SPORTS</li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  