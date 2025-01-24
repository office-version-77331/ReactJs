import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-500 text-white ">
      <div className="flex justify-between items-center px-5 py-3">
        {/* Logo or Brand Name */}
        <div className="text-lg font-bold">
          <NavLink to="/">Logo</NavLink>
        </div>

        {/* Hamburger Menu Icon (visible on mobile) */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (hidden on mobile, visible on larger screens) */}
        <div className="hidden lg:flex space-x-5">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/login" className="hover:underline">
            Login
          </NavLink>
          <NavLink to="/signup" className="hover:underline">
            Sign Up
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu (visible when hamburger menu is clicked) */}
      {isMenuOpen && (
        <div className="lg:hidden px-5 space-y-3 pb-3">
          <NavLink
            to="/"
            className="block hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            className="block hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Other
          </NavLink>
          <NavLink
            to="/signup"
            className="block hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
