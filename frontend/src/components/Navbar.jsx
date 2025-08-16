import React, { useState } from 'react';
import logopng from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-blue-50 shadow-inner sticky top-0 z-50'>
      <div className='flex items-center justify-between p-4 max-w-7xl mx-auto'>
        {/* Logo */}
        <div className='h-13 w-14'>
          <img src={logopng} alt="Skill-Sync" className='w-full h-full' />
        </div>

        {/* Desktop Menu */}
        <ul className='sm:hidden md:flex gap-8'>
          <li className='hover:text-blue-400'><NavLink to={"/"}>Home</NavLink></li>
          <li className='hover:text-blue-400'><NavLink to={"/aboutus"}>AboutUs</NavLink></li>
          <li className='hover:text-blue-400'><NavLink to={"/browseskill"}>BrowseSkills</NavLink></li>
          <li className='hover:text-blue-400'><NavLink to={"/chats"}>Chats</NavLink></li>
          <li className='hover:text-blue-400'><NavLink to={"/requests"}>Requests</NavLink></li>
          {/* <li className='hover:text-blue-400'><NavLink to={"/profile"}>Profile</NavLink></li> */}
        </ul>

        {/* Mobile Hamburger */}
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='md:hidden flex flex-col gap-2 px-4 pb-4'>
          <li className='hover:text-blue-400'><NavLink to={"/"} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li className='hover:text-blue-400'><NavLink to={"/aboutus"} onClick={() => setMenuOpen(false)}>AboutUs</NavLink></li>
          <li className='hover:text-blue-400'><NavLink to={"/browseskill"} onClick={() => setMenuOpen(false)}>BrowseSkills</NavLink></li>
          <li className='hover:text-blue-400'><NavLink to={"/chats"} onClick={() => setMenuOpen(false)}>Chats</NavLink></li>
          <li className='hover:text-blue-400'><NavLink to={"/requests"} onClick={() => setMenuOpen(false)}>Requests</NavLink></li>
          {/* <li className='hover:text-blue-400'><NavLink to={"/profile"} onClick={() => setMenuOpen(false)}>Profile</NavLink></li> */}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
