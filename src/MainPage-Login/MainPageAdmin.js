import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MainPageAdmin() {
  const navigate = useNavigate();

  return (
    <>
      <div className='bg-black text-white '>
        <div className='px-[2%]'>
            
            <div className='flex flex-col items-center justify-center text-center pt-[6em] pb-[8em]'>
              <h1 className='text-[3.75em] font-medium text-white'>An <span className='text-orange-500'>engineer</span> in every tab</h1>
              <p className='text-[#adadad] text-[20px] w-[670px]'>Delegate software development tasks to agents called Droids. Droids take commands and deliver: pull requests, tickets, docs, and more.</p>
              <button className='bg-gradient-to-b from-[#FFA04E] to-[#FF7822] py-2 text-[18px] px-4 font-[Geist,sans-serif] font-bold rounded-md'>Start Building</button>
            </div>

            <div>
              <p className='text-[2.5em] text-white w-[550px] font-bold leading-[45px] text-center absolute ml-[30%] mt-[7%]'>All the Tools You Need in one place.</p>
              <img src="https://framerusercontent.com/images/VJQdWL9xcwSyvfew2d0GQyl6f4.webp?scale-down-to=2048" className='border-2 border-[#121212] rounded-2xl' alt="" />
            </div>


{/* your listing area */}
<div className='flex justify-between mh-[300px] border-2 border-[#121212] mt-[2em] p-[0_0_0_120px] rounded-xl'>
    <div className='flex flex-col justify-center items-start'>
    <p className='text-[3.5em] font-bold'>Your Listing</p>
    <p className='text-[1.5em]'>Create a listing and share your skills with the world</p>
    <button onClick={()=>navigate('/')}  className='bg-white text-black py-2 px-4 rounded '>Create Listing</button>
    </div>
  <div><img src="https://framerusercontent.com/images/y4bHNhBcpNBQB1W1uaLSo3s6rRc.webp" alt=""  className='h-[300px] border-b-2 border-[#121212] rounded-2xl'/></div>
</div>

{/* freelancing */}
<div className='mt-[2em] border-2 border-[#121212] rounded-xl min-h-[150px] bg-[url("https://framerusercontent.com/images/YiX6NBM7RLqppI9vWIVCIYnK5I.webp?scale-down-to=2048")] bg-cover bg-center'>
  <div className='flex justify-between px-[5%] align-middle py-[2em]'>
    <div className='flex flex-col'>
    <p className='text-[2em] font-bold'>Sart your Freelancing</p>
    <p className='text-[1em] font-bold'>Earn from your own skills</p>
    </div>
    <div className='mt-[1.5em]'>
    <button onClick={()=>navigate('/')} className='bg-white text-black py-2 px-4 rounded'>Start Freelancing</button>
    </div>
</div>
</div>

{/* ready to bulid */}
<div className='text-center mt-[4em] pb-[6em]'>
  <h1 className='mb-[0px] text-[3.5em]'>Ready to build</h1>
  <h1 className='mb-0 text-[3.5em] text-[#D8841A]'>the software of the future?</h1>
    <button className='bg-white text-black py-2 px-4 rounded mt-[1em] hover:shadow-[0_0px_10px_10px_white]' onClick={()=>navigate('/listing')}>Start Building</button>
</div>

</div>
</div>
    </>
  )
}

