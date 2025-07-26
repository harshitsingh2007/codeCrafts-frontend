import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
export default function BuildWebside() {
  return (
    <div className='flex flex-col items-center justify-center py-[8em]'>
        <h1 className='text-[4em] text-white font-extrabold w-[600px] text-center'>Webflow building as it should be</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-[6em] px-[4em]'>
            <div className='border-2 border-[#333333] flex flex-col items-center py-[2em] justify-center gap-3  rounded-3xl'>
                <FaBoxOpen size={60} color='#FF9E18'/>
                <h1 className='text-white font-bold w-[400px] text-center'>Clean website design</h1>
            </div>
            <div className='border-2 border-[#333333]  flex flex-col items-center justify-center gap-3 py-[2em] rounded-3xl'>
                <FaCode size={60} color='#FF9E18'/>
                <h1 className='text-white font-bold w-[400px] text-center'>Clear website development</h1>
            </div>
            <div className='border-2 border-[#333333]  flex flex-col py-[2em] justify-center gap-3  items-center rounded-3xl'>
                <IoSettingsOutline size={60} color='#FF9E18'/>
                <h1 className='text-white font-bold w-[400px] text-center'>Concise website support</h1>
            </div>
        </div>
    </div>
  )
}
