import React from 'react'
import { RiLoader2Line } from "react-icons/ri";

export default function Loader() {
  return (
    <div className='flex flex-col items-center pt-[200px] w-[100vw] h-[100vh] bg-black'>
   
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWs3aTZyeXpkbWFseXBpdmdoOWN5Z3ZqdGJvdG5tNTFobzl2Z2h6biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VseXvvxwowwCc/giphy.gif"
      className='w-[200px]' alt="" />
      <p className='text-center text-white text-[30px] pt-2'>Loading...</p>
    </div>
  )
}

