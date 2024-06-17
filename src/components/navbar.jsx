
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../index.css"
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
              aria-controls="mobile-menu" 
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-xl font-semibold text-gray-800">Attendance Management</NavLink>
            </div>
            <div className="hidden sm:block sm:ml-6 justify-end items-end mr-0 ">
              <div className="flex space-x-4">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "text-white bg-primary px-3 py-2 rounded-md text-sm font-medium" : "text-gray-800 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/user/dashboard" 
                  className={({ isActive }) => isActive ? "text-white bg-primary px-3 py-2 rounded-md text-sm font-medium" : "text-gray-800 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"} >
                  Dashboard
                </NavLink>
                <NavLink 
                  to="/login" 
                  className={({ isActive }) => isActive ? "text-white bg-primary px-3 py-2 rounded-md text-sm font-medium" : "text-gray-800 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-white bg-primary block px-3 py-2 rounded-md text-base font-medium" : "text-gray-800 hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"}
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? "text-white bg-primary block px-3 py-2 rounded-md text-base font-medium" : "text-gray-800 hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"}
             onClick={toggleMobileMenu}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? "text-white bg-primary block px-3 py-2 rounded-md text-base font-medium" : "text-gray-800 hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"}
             onClick={toggleMobileMenu}
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
