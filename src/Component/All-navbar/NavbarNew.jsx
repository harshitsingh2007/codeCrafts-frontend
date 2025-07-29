import React, {useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import codeCrafts from '../../images/codecrafts.png'

export default function NavbarNew() {
  const [isOnline, setOnline] = useState(navigator.onLine);
  const navigate = useNavigate();    

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

  return (
    <div className='bg-black text-white fixed w-full z-50'>
      <div className='flex justify-between bg-black items-center px-[5%] py-[15px]'>
        <div className='flex gap-4 px-2 py-1.5 rounded-lg items-center'>
          <img 
            src={codeCrafts} 
            alt="" 
            className='h-[36px] cursor-pointer' 
            onClick={() => navigate('/')}
          />
          <NavLink 
            to="/template" 
            className={({isActive}) => `no-underline ${isActive ? "text-white" : "text-gray-400"}`}
          >
            Discover
          </NavLink>
          <NavLink 
            to="/design" 
            className={({isActive}) => `no-underline ${isActive ? "text-white" : "text-gray-400"}`}
          >
            Shop
          </NavLink>
        </div>
        
        <div className='flex items-center gap-3'>
          <input 
            type="text"  
            className='py-2.5 w-[500px] rounded-xl bg-white/20 border-0 outline-none px-3 text-[18px] focus:w-[650px] transition-all duration-300 ease-in-out'
          />
          <FaSearch/>
        </div>
        
        <div className='relative'>
          <button onClick={() => navigate('/account')} className='relative'>
            <img 
              src="https://github.com/shadcn.png" 
              alt=""  
              className='w-[50px] rounded-full'
            />
            {/* Online status indicator */}
            <span 
              className={`absolute bottom-0 right-0 inline-block w-4 h-4 rounded-full border-2 border-black ${
                isOnline ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  )
}