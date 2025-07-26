import React from 'react'
import { MdErrorOutline } from "react-icons/md";
export default function Error() {
  return (
    <div className='w-[100vw] h-[100vh] bg-black text-white pt-[150px] text-center flex flex-col items-center '>
           <MdErrorOutline size={100} color='red'/>
        <h1 className='text-[4em] font-bold'>Page Not Found</h1>
        <p className='text-[18px]'>Sorry,the page is not founded</p>
        <p className='text-[25px] w-[650px]'>Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
    </div>
  )
}
