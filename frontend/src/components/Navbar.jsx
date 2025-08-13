import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold"
      : "hover:text-blue-600 transition-colors duration-200";

  return (
    <nav className="h-14 w-full bg-blue-50 flex items-center justify-between px-4 shadow-md relative">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">SKILLSYNC</div>

      {/* Search Bar (hidden on mobile) */}
      <div className="hidden md:flex">
        <input
          type="text"
          placeholder="Search skills"
          className="outline-none bg-transparent border-2 rounded-4xl p-1 px-3 placeholder-blue-400 text-gray-700 border-blue-300"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700">
        <li>
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" className={navLinkClass}>
            AboutUs
          </NavLink>
        </li>
        <li>
          <NavLink to="/browse-skills" className={navLinkClass}>
            Browse Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={navLinkClass}>
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink to="/chats" className={navLinkClass}>
            Chats
          </NavLink>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-600 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-blue-50 shadow-md md:hidden z-10">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-700">
            <li>
              <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className={navLinkClass} onClick={() => setIsOpen(false)}>
                AboutUs
              </NavLink>
            </li>
            <li>
             
            </li>
            <li>
              <NavLink to="/signup" className={navLinkClass} onClick={() => setIsOpen(false)}>
                Signup
              </NavLink>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
