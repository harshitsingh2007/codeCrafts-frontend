import React from 'react'
import { MdErrorOutline } from "react-icons/md";

export default function Error() {
  return (
    <div className='w-full h-screen bg-black text-white pt-16 md:pt-32 lg:pt-36 text-center flex flex-col items-center px-4'>
      <MdErrorOutline className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" color='red'/>
      <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mt-4'>Page Not Found</h1>
      <p className='text-base md:text-lg mt-2'>Sorry, the page is not found</p>
      <p className='text-lg md:text-xl lg:text-2xl max-w-xs md:max-w-md lg:max-w-2xl mt-4 leading-relaxed'>
        Please contact the owner of the site that linked you to the original URL and let them know their link is broken.
      </p>
    </div>
  )
}
