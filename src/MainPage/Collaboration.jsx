import React from 'react'
import collabImages from '../data/CollabImages'
import { useNavigate } from 'react-router-dom';
export default function Collaboration() {
  const Navigate=useNavigate()
  return (
    <div className='text-white pt-16 pb-20 md:pt-[100px] md:pb-[100px] border-t-[1px] border-[#ffffff1a] px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col items-center justify-center text-center'>
          <h4 className='font-bold uppercase text-sm md:text-base mb-2 md:mb-3'>
            Discover what's missing in your brand.
          </h4>
          <h1 className='font-extrabold shadow-xl text-white drop-shadow-[10px_20px_20px_rgba(255,210,225,0.4)] uppercase my-3 text-3xl sm:text-4xl md:text-5xl lg:text-[3em] leading-tight'>
            Let's connect today.
          </h1>
          <p className='text-[#666661] max-w-[480px] text-sm sm:text-base md:text-[16px]'>
            Is your brand's voice being heard? We identify the missing elements and enhance them to{' '}
            <span className='font-bold text-white'>elevate your brand.</span>
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 sm:gap-6 my-12 md:my-[80px]'>
          {collabImages.map((image, index) => (
            <div 
              key={index}
              className='p-2 sm:p-3 hover:bg-[#ffffff10] rounded-xl transition-all duration-300'
            >
              <img 
                src={image.Image} 
                alt={image.alt} 
                className='w-8 h-8 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] rounded-xl hover:scale-125 transition-transform duration-500' 
              />
            </div>
          ))}
        </div>
        <p className='text-center text-[#666661] font-bold text-xs sm:text-sm md:text-[15px] mb-0'>
          Yes, we have{' '}
          <span className='font-bold text-white'>The Best</span> Knives and{' '}
          <span className='font-bold text-white'>Know-How</span>
        </p>


        <div className='mt-8 md:hidden flex justify-center'>
          <button onClick={()=>Navigate('/contact')} className='px-6 py-2 bg-white text-black font-bold rounded-sm text-sm'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}