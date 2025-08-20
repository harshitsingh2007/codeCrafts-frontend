import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
export default function Slogen() {
const Navigate=useNavigate();
  return (
    <div className='py-10 md:py-20 px-4 md:px-10'>
      <div className='flex flex-col justify-center items-center gap-3'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-3xl text-center'>Your site should do more than look good</h1>
        <p className='text-sm md:text-base text-center max-w-3xl mt-3 px-4 md:px-0'>
           As the first-ever website experience platform, CodeCrafts lets marketers, designers, and developers
           come together to build, manage, and optimize web experiences that get results.
        </p>
      </div>
      <div className='flex  sm:flex-row gap-4 justify-center items-center mt-4'>
        <button onClick={()=>Navigate('/signup')} className='py-2 px-[1.5em] bg-[#CC67F4] w-full sm:w-auto text-center'>Start now
          <FaArrowRight className='inline ml-2' />
        </button>
        <button onClick={()=>Navigate('/contact')} className='py-2 px-[1.5em] bg-[#9F620F] w-full sm:w-auto text-center'>Contact us
          <FaArrowRight className='inline ml-2' />
        </button>
      </div>
      <div className='mt-10 md:mt-[80px] flex items-center justify-center'>
         <video src="https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/hero/hero-compress5.mp4" controls autoPlay muted loop
            className='w-full md:w-[90%] rounded-md'
          />
      </div>
    </div>
  )
}
