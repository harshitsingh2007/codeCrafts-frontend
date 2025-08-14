import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";

export default function BuildWebside() {
    return (
        <div className='flex flex-col items-center justify-center py-8 md:py-16 lg:py-32 px-4'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-extrabold max-w-4xl text-center leading-tight'>
                    Webflow building as it should be
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-16 lg:mt-24 w-full max-w-6xl px-4'>
                        <div className='border-2 border-[#333333] flex flex-col items-center py-6 md:py-8 justify-center gap-3 rounded-3xl'>
                                <FaBoxOpen size={50} className='md:w-15 md:h-15' color='#FF9E18'/>
                                <h1 className='text-white font-bold text-center px-4 text-sm md:text-base lg:text-lg'>
                                    Clean website design
                                </h1>
                        </div>
                        <div className='border-2 border-[#333333] flex flex-col items-center justify-center gap-3 py-6 md:py-8 rounded-3xl'>
                                <FaCode size={50} className='md:w-15 md:h-15' color='#FF9E18'/>
                                <h1 className='text-white font-bold text-center px-4 text-sm md:text-base lg:text-lg'>
                                    Clear website development
                                </h1>
                        </div>
                        <div className='border-2 border-[#333333] flex flex-col py-6 md:py-8 justify-center gap-3 items-center rounded-3xl md:col-span-2 lg:col-span-1'>
                                <IoSettingsOutline size={50} className='md:w-15 md:h-15' color='#FF9E18'/>
                                <h1 className='text-white font-bold text-center px-4 text-sm md:text-base lg:text-lg'>
                                    Concise website support
                                </h1>
                        </div>
                </div>
        </div>
    )
}
