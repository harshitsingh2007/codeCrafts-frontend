import { FaCircle } from "react-icons/fa";
import {Navigate, NavLink}  from 'react-router-dom'
import { FaLaptopCode } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
export default function Navbar2() {
  return (
    <header onKeyDown={(e) => {
  if (e.key === 's' && !e.ctrlKey && !e.metaKey && !e.altKey) {e.preventDefault();Navigate('/signup');}}}>
      <div className={`flex justify-between px-[5%] pt-[20px] bg-black shadow-md relative`}>
        <div className="flex items-center gap-2 bg-white text-black py-1 px-3 rounded-full font-bold">
          <FaCircle color="green" />
          Aviablabe for project
        </div>

        <div className='fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-xl py-1 items-center px-1.5 rounded-full flex gap-4'>
          <div className="flex items-center gap-3 ">
          <FaLaptopCode size={40} color="white" className="bg-black py-1 px-3 rounded-full" />
          <NavLink to="/" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset-2" : "no-underline"}`}>Home</NavLink>
           <NavLink to="/about" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset" : "no-underline"}`}>About</NavLink>
           <NavLink to="/contact" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset-2" : "no-underline"}`}>Contact</NavLink>
           <NavLink to="/services" className={({ isActive }) => `font-bold text-black ${isActive ? "underline underline-offset-2" : "no-underline"}`}>Services</NavLink>
          </div>
           <div className="ml-4 flex items-center gap-2">
            <NavLink to='/login' className='bg-[#1D1F22] text-white no-underline px-4 py-2 rounded-full'>Login</NavLink>
            <NavLink to='/signup' className='bg-[#414245] text-white px-4 py-2 no-underline rounded-full'>Get Started</NavLink>
           </div>
        </div>

         <div className="flex justify-center items-center py-2 px-3 gap-1 bg-[#f2f2f2] font-medium rounded-full">
         Press<span className="font-bold bg-white px-2 py-0.5 rounded">S</span> to Start <FaArrowRight/>
         </div>
      </div>
    </header>
  )
}
