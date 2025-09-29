import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { userAuthStore } from '../../store/auth/auth';
export default function AdminNav() {
  const {user}=userAuthStore()
  return (
    <div className='bg-black fixed w-[1200px] z-50 top-2 left-1/2 transform -translate-x-1/2'>
        <div className='bg-white/30 text-black flex justify-between px-1 py-1 items-center rounded-full '>
          <div className='flex gap-2'>
            <button className='bg-black text-white px-4 py-2 flex gap-2 items-center rounded-full'>Your Template <FaArrowRight/></button>
            <button className='bg-black text-white px-4 py-2 flex gap-2 items-center rounded-full'>Your Webside <FaArrowRight/></button>
          </div>
          <div className='font-bold text-lg px-14 capitalize'>
            Hello {user && user.name ? user.name : "Admin"}
          </div>
          <div className='flex gap-4'>
               <button className='bg-black text-white px-4 py-2 flex gap-2 items-center rounded-full'>Your Message <FaArrowRight/></button>
               <button className='bg-black text-white px-4 py-2 flex gap-2 items-center rounded-full'>Your Booking <FaArrowRight/></button>
          </div>
        </div>
    </div>
      )
}
