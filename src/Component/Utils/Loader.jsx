import React from 'react'

export default function Loader() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-black px-4'>
      <img 
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWs3aTZyeXpkbWFseXBpdmdoOWN5Z3ZqdGJvdG5tNTFobzl2Z2h6biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VseXvvxwowwCc/giphy.gif"
        className='w-32 sm:w-40 md:w-48 lg:w-52 xl:w-56 max-w-xs' 
        alt="Loading..." 
      />
    </div>
  )
}
