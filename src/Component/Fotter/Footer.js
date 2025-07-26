import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Footer() {
  const Navigate=useNavigate()
  return (
    <>
      <footer className='bg-black border-y-2 border-solid border-[#ffffff1a]'>
        <div className='flex justify-between text-white max-w-[1350px] mx-auto py-[50px] pt-[30px] px-[40px] border-x-2 border-solid border-[#ffffff1a]'>
          <div className='my-20 mx-20'>
            <Link to='/about' className='bg-white text-black py-2 px-3 no-underline text-[19px] rounded hover:shadow-[0px_4px_100px_16px_#ffffff47]'>codeCrafts</Link>
          </div>
          <div className='grid grid-cols-3 gap-[100px]'>
            <div>
              <h1 className='text-[20px] text-white pb-[10px] hover:text-white'>Company</h1>
              <p className='text-sm text-[#adadad] pt-[8px] hover:text-white'>Career</p>
              <p className='text-sm text-[#adadad] pt-[8px]  hover:text-white'>Enterprise</p>
              <p className='text-sm text-[#adadad] pt-[8px]  hover:text-white'>Security</p>
            </div>
            <div>
              <h1 className='text-[20px] text-white pb-[10px]  hover:text-white'>Resources</h1>
              <p className='text-sm text-[#adadad] pt-[8px]  hover:text-white'>News</p>
              <button onClick={()=>Navigate('/contact')} className='text-sm text-[#adadad] pt-[8px] hover:text-white'>Contact us</button>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-[20px] text-white pb-[10px]'>Social</h1>
              <a href='' className='text-sm text-[#adadad] pt-[8px] hover:text-white'>Instagram</a>
              <a href='www.linkedin.com/in/harshit-singh-8b106b323' className='text-sm text-[#adadad] pt-[8px] hover:text-white'>LinkedIn</a>
            </div>
          </div>
        </div>
        <div className='max-w-[1350px] mx-auto text-center border-x-[1px] border-y-[1px] border-solid border-[#ffffff1a] p-4'>
          <p className='leading-3 text-[#adadad] pt-[15px]'>© 2025 Powered by
            <a href="#" className='text-white pl-[5px] no-underline'>Harshit</a>
          </p>
        </div>
      </footer>
    </>
  )
}
