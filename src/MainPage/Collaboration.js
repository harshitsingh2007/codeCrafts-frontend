import React from 'react'
import collabImages from '../data/CollabImages'
export default function Collaboration() {
  return (
    <>
    <div className='bg-[#FFFBEA] pt-[100px] pb-[100px]'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h4 className='font-bold uppercase'>Discover what's missing in your brand.</h4>
        <h1 className='font-extrabold uppercase my-3 text-[3em]'>Let's connect today.</h1>
        <p className='text-[#666661] w-[480px] text-[16px]'>Is your brand's voice being heard? We identify the missing elements and enhance them to <span className='font-bold text-black'>elevate your brand.</span></p>
      </div>
      <div className='flex justify-center gap-4 my-[80px]'>
        {collabImages.map((image) => {
          return (
            <img src={image.Image} alt={image.alt} className='w-[40px] h-[40px] rounded-xl hover:scale-[1.5] ransition-transform duration-500' />
          )
        })}
      </div>
      <p className='text-center text-[#666661] font-bold text-[15px] mb-0'>Yes, we have <span className='font-bold  text-black'>The Best</span> Knives and <span className=' font-bold text-black'>Know-How</span></p>
      <div>
      </div>
    </div>
  </>
    )

}
