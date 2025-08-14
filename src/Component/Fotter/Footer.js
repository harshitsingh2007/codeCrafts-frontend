import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Footer() {
  const Navigate=useNavigate()
  return (
    <>
      <footer className='bg-black border-y-2 border-solid border-[#ffffff1a]'>
        <div className='flex flex-col lg:flex-row justify-between text-white max-w-[1350px] mx-auto py-[30px] lg:py-[50px] lg:pt-[30px] px-[20px] lg:px-[40px] border-x-2 border-solid border-[#ffffff1a]'>
          <div className='mb-8 lg:my-20 lg:mx-20 text-center lg:text-left'>
            <Link to='/about' className='bg-white text-black py-2 px-3 no-underline text-[19px] rounded hover:shadow-[0px_4px_100px_16px_#ffffff47]'>codeCrafts</Link>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[100px]'>
            <div>
              <h1 className='text-[18px] lg:text-[20px] text-white pb-[10px] hover:text-white'>Company</h1>
              <p className='text-sm text-[#adadad] pt-[8px] hover:text-white cursor-pointer'>Career</p>
              <p className='text-sm text-[#adadad] pt-[8px] hover:text-white cursor-pointer'>Enterprise</p>
              <p className='text-sm text-[#adadad] pt-[8px] hover:text-white cursor-pointer'>Security</p>
            </div>
            <div>
              <h1 className='text-[18px] lg:text-[20px] text-white pb-[10px] hover:text-white'>Resources</h1>
              <p className='text-sm text-[#adadad] pt-[8px] hover:text-white cursor-pointer'>News</p>
              <button onClick={()=>Navigate('/contact')} className='text-sm text-[#adadad] pt-[8px] hover:text-white bg-transparent border-none p-0 text-left'>Contact us</button>
            </div>
            <div className='flex flex-col sm:col-span-2 lg:col-span-1'>
              <h1 className='text-[18px] lg:text-[20px] text-white pb-[10px]'>Social</h1>
              <a href='' className='text-sm text-[#adadad] pt-[8px] hover:text-white'>Instagram</a>
              <a href='https://www.linkedin.com/in/harshit-singh-8b106b323' className='text-sm text-[#adadad] pt-[8px] hover:text-white'>LinkedIn</a>
            </div>
          </div>
        </div>
        <div className='max-w-[1350px] mx-auto text-center border-x-[1px] border-y-[1px] border-solid border-[#ffffff1a] p-4'>
          <p className='leading-3 text-[#adadad] pt-[15px] text-sm'>© 2025 Powered by
            <a href="#" className='text-white pl-[5px] no-underline'>Harshit</a>
          </p>
        </div>
      </footer>
    </>
  )
}
