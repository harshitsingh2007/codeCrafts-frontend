import { FaCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { Navigate, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header onKeyDown={(e) => {
      if (e.key === 's' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        Navigate('/signup');
      }
    }}>
      <div className="flex justify-between items-center px-[5%] pt-[20px] pb-4 bg-black shadow-md relative">
        {/* Available for project - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2 bg-white text-black py-1 px-3 rounded-full font-bold text-sm">
          <FaCircle color="green" size={8} />
          Available for project
        </div>

        {/* Mobile Logo - Visible only on mobile */}
        <div className="flex sm:hidden items-center">
          <FaCodepen size={32} color="white" className="bg-white/20 p-1 rounded-full" />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className='hidden lg:flex fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-xl py-1 items-center px-1.5 rounded-full gap-4'>
          <div className="flex items-center gap-3">
            <FaCodepen size={40} color="white" className="bg-black py-1 px-3 rounded-full" />
            <NavLink to="/" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset-2" : "no-underline"}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset-2" : "no-underline"}`}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset-2" : "no-underline"}`}>Contact</NavLink>
            <NavLink to="/services" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset-2" : "no-underline"}`}>Services</NavLink>
          </div>
          <div className="ml-4 flex items-center gap-2">
            <NavLink to='/login' className='bg-[#1D1F22] text-white no-underline px-4 py-2 rounded-full'>Login</NavLink>
            <NavLink to='/signup' className='bg-[#414245] text-white px-4 py-2 no-underline rounded-full'>Get Started</NavLink>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Start Button - Responsive */}
        <div className="hidden sm:flex cursor-pointer justify-center items-center py-2 px-3 gap-1 bg-[#f2f2f2] font-medium rounded-full text-sm">
          Press<span className="font-bold bg-white px-2 py-0.5 rounded">S</span> to Start <FaArrowRight/>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={toggleMobileMenu}>
          <div className="fixed top-0 right-0 h-full w-[280px] bg-black shadow-xl transform transition-transform duration-300">
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-end mb-6">
                <button onClick={toggleMobileMenu} className="text-white p-2 hover:bg-white/10 rounded-full">
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Available for project - Mobile */}
              <div className="flex items-center gap-2 bg-white text-black py-2 px-3 rounded-full font-bold text-sm mb-6">
                <FaCircle color="green" size={8} />
                Available for project
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4 mb-8">
                <NavLink 
                  to="/" 
                  onClick={toggleMobileMenu}
                  className={({ isActive }) => `block font-bold text-white py-2 px-4 rounded-lg transition-colors ${isActive ? "bg-white/20" : "hover:bg-white/10"}`}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  onClick={toggleMobileMenu}
                  className={({ isActive }) => `block font-bold text-white py-2 px-4 rounded-lg transition-colors ${isActive ? "bg-white/20" : "hover:bg-white/10"}`}
                >
                  About
                </NavLink>
                <NavLink 
                  to="/contact" 
                  onClick={toggleMobileMenu}
                  className={({ isActive }) => `block font-bold text-white py-2 px-4 rounded-lg transition-colors ${isActive ? "bg-white/20" : "hover:bg-white/10"}`}
                >
                  Contact
                </NavLink>
                <NavLink 
                  to="/services" 
                  onClick={toggleMobileMenu}
                  className={({ isActive }) => `block font-bold text-white py-2 px-4 rounded-lg transition-colors ${isActive ? "bg-white/20" : "hover:bg-white/10"}`}
                >
                  Services
                </NavLink>
              </nav>

              {/* Auth Buttons */}
              <div className="space-y-3">
                <NavLink 
                  to='/login' 
                  onClick={toggleMobileMenu}
                  className='block text-center bg-[#1D1F22] text-white py-3 px-4 rounded-full font-medium transition-opacity hover:opacity-80'
                >
                  Login
                </NavLink>
                <NavLink 
                  to='/signup' 
                  onClick={toggleMobileMenu}
                  className='block text-center bg-[#414245] text-white py-3 px-4 rounded-full font-medium transition-opacity hover:opacity-80'
                >
                  Get Started
                </NavLink>
              </div>

              {/* Start Button - Mobile */}
              <div className="mt-6 flex cursor-pointer justify-center items-center py-3 px-4 gap-2 bg-[#f2f2f2] text-black font-medium rounded-full">
                Press<span className="font-bold bg-white px-2 py-1 rounded">S</span> to Start <FaArrowRight/>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
