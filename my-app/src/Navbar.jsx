import React, { useState } from 'react';
import logo from './assets/Logo.png';
import search from './assets/search-normal.png';
import heart from './assets/heart.png';
import shop from './assets/shopping-bag.png';
import user from './assets/profile.png';
import arrow from './assets/arrow-left.png';
import hamburger from './assets/ham.png'; // Add your hamburger icon here

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the mobile menu is open or closed

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full">
      {/* Top Row: Logo and Icons inside max-width container */}
      <div className="max-w-[1300px] mx-auto px-4 pt-9">
        <div className="flex items-center justify-between relative mb-4">
          {/* Left: Logo and Hamburger Icon */}
          <div className="flex items-center gap-2 z-10">
            <img
              src={hamburger} // Hamburger icon for mobile
              alt="menu"
              className="h-9 w-9 cursor-pointer sm:hidden"
              onClick={toggleMenu} // Toggle mobile menu visibility on click
            />
            <img src={logo} alt="logo" className="h-10 w-10" />
          </div>

          {/* Center: LOGO text */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block">
            <h1 className="text-black font-extrabold text-4xl tracking-[2px] font-inter">LOGO</h1>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4 sm:gap-6 z-10">
            <img src={search} alt="search" className="h-6 w-6 cursor-pointer" />
            <img src={heart} alt="heart" className="h-6 w-6 cursor-pointer" />
            <img src={shop} alt="shop" className="h-6 w-6 cursor-pointer" />
            <img src={user} alt="user" className="h-6 w-6 cursor-pointer sm:block hidden" />
            <div className="sm:flex items-center gap-1 cursor-pointer sm:block hidden ">
              <span className="text-black font-bold text-lg">ENG</span>
              <img src={arrow} alt="arrow" className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Menu: Full-width border and nav items */}
      <div className="w-full border-b-2 border-[#E5E5E5] pb-2.5">
        <ul className="flex tracking-[1px] pt-11 gap-15 justify-center text-black font-simplon font-bold text-lg pb-3 uppercase hidden sm:flex">
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Stories</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Mobile Menu (Toggle visibility based on state) */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center pt-3 gap-5 text-black font-simplon font-bold text-lg pb-3 uppercase">
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Stories</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact Us</li>
        </div>
      )}
    </header>
  );
}

export default Navbar;
