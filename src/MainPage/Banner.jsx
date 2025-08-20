import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const Navigate = useNavigate();
  return (
    <div className='flex justify-center items-center px-4 sm:px-6 lg:px-8'>
      <div className='bg-[#232323] flex flex-col items-center w-[98%] rounded-[20px] sm:rounded-[30px] py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-3 sm:gap-4 items-center justify-center text-center'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-tight'>
            Beyond search, Super accelerates all your workflows.
          </h1>
          <p className='text-sm sm:text-base max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl text-gray-300'>
            Super comes with the world's most accurate AI search out of the box but it can go step further. You can build Assistants that answer like your domain leads — consistently, clearly, and instantly. So dependent teams never slow down.
          </p>
        </div>
        <div className='flex gap-4 mt-4 sm:mt-6'>
          <button 
            onClick={() => Navigate('/signup')} 
            className='bg-[#CC67F4] px-3 sm:px-4 text-sm sm:text-[16px] py-2 rounded hover:bg-[#b855e0] transition-colors'
          >
            Start now
            <FaArrowRight className='inline ml-2' />
          </button>
        </div>
      </div>
    </div>
  )
}
