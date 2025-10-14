import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import codeCrafts from '../../images/codecrafts.png'
import useCartStore from '../../store/Cart/Cart' 

export default function NavbarNew() {
  const [isOnline, setOnline] = useState(navigator.onLine);
  const [search, setsearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  
  const { cartItems, getCartItems } = useCartStore();

  useEffect(() => {
    getCartItems(); 
  }, [getCartItems]);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  
  const totalItems = cartItems?.reduce((acc, cart) => acc + cart.productId.length, 0) || 0;

  return (
    <div className='bg-black text-white fixed w-full z-50'>
      <div className='flex justify-between bg-black items-center px-4 sm:px-[5%] py-[15px]'>

        {/* Logo and Desktop Navigation */}
        <div className='flex gap-2 sm:gap-4 px-2  rounded-lg items-center'>
           <h2 className='font-light'>CodeCrafts</h2>
          <div className='hidden ml-3 md:flex gap-4'>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `no-underline ${isActive ? "text-white" : "text-gray-400"}`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/custom"
              className={({ isActive }) =>
                `no-underline ${isActive ? "text-white" : "text-gray-400"}`
              }
            >
              Custom
            </NavLink>
          </div>
        </div>

        {/* Right side - Profile and Mobile Menu */}
        <div className='flex items-center gap-3'>

          {/* Search icon for mobile */}
          <button className='lg:hidden'>
            <FaSearch className='text-xl' />
          </button>

          {/* ✅ Cart Icon with Count Badge */}
          <div className='relative cursor-pointer' onClick={() => navigate('/cart')}>
            <FaShoppingCart size={28} className='mr-4' />
            {totalItems > 0 && (
              <span className='absolute -top-1 right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center'>
                {totalItems}
              </span>
            )}
          </div>

          {/* Profile */}
          <button onClick={() => navigate('/account')} className='relative'>
            <img
              src="https://github.com/shadcn.png"
              alt="Profile"
              className='w-[40px] sm:w-[50px] rounded-full'
            />
            <span
              className={`absolute bottom-0 right-0 inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-black ${isOnline ? "bg-green-500" : "bg-red-500"}`}
            ></span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-xl'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-black border-t border-gray-700'>
          <div className='px-4 py-2 space-y-2'>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `block py-2 no-underline ${isActive ? "text-white" : "text-gray-400"}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </NavLink>

            {/* Mobile Search */}
            <div className='py-2'>
              <input
                type="text"
                onChange={(e) => setsearch(e.target.value)}
                placeholder="Search..."
                className='w-full py-2 rounded-lg bg-white/20 border-0 outline-none px-3 text-[16px]'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
