import React from 'react'
import Navbar2 from '../../Component/All-navbar/Navbar2'
import {OurServicesData} from '../../data/OurServices'
import DesignData from '../../data/DesignData'
import { TrustedServicesData } from '../../data/OurServices'
export default function OurServices() {
    return (
        <div className='px-[4%] pb-10 bg-black text-white pt-5  max-w-full overflow-x-hidden '>
            <div>
                <h1 className='text-[2.5em] font-bold mb-7'>Popular Services</h1>
                <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5'>
                    {
                        OurServicesData.map((item, idx) => (
                            <div className='flex flex-col justify-center gap-4 w-full max-w-[300px] px-2 py-1.5 bg-[#003912] rounded-xl text-white'>
                                <h5 className='font-bold pt-3 pb-2 px-2 text-[20px]'>{item.title}</h5>
                                <img src={item.Image} className=' rounded-xl flex' alt={item.title} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='bg-[#C55E7C] text-white flex justify-between items-center py-[4.5em] px-[100px] rounded-xl my-[80px]'>
                <div className='flex flex-col gap-2 items-start'>
                    <h1 className='text-[4.4em]'>Stuck at coding?</h1>
                    <p className='text-[18px] w-[550px]'>Get matched with the right expert to turn your prototype into a real, working product.</p>
                    <button className='bg-white rounded-lg py-2 px-4 text-black'>Find an Expert</button>
                </div>
                <div>
                    <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/6d44640ae60bba48efa315b0c206fad3-1750935806127/Vibe%20coding%20marketing%20banner%20loop" loop autoPlay controls className='w-[600px] rounded-xl'></video>
                </div>
            </div>

              <div>
                <h1 className='text-[3em] font-bold mb-[60px]'>More on CodeCrafts</h1>
            <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4'>
                {DesignData.map((items, index) => (
                    <div key={index} className='mb-4 break-inside-avoid'>
                        <img
                            src={items.Image}
                            alt=""
                            className='w-full rounded-xl'
                        />
                    </div>
                ))}
            </div>
             </div>

            <div className='bg-[#FFF6F2]  text-black flex justify-between items-center py-[4.5em] px-[100px] rounded-xl my-[80px]'>
                <div>
                    <h1 className='text-[4.4em]'>Create a logo in minutes</h1>
                    <p className='text-[18px] w-[580px]'>Use our AI-powered logo maker to create a unique logo that represents your brand.</p>
                    <button className='bg-[#C55E7C] rounded-lg py-2 px-4 text-white'>Get Started</button>
                </div>
                <div>
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_460,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png" alt="" />
                </div>
            </div>


<div>
            <h1 className='text-[3em] font-bold mb-[60px]'>Trusted by the world's best</h1>
            <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 my-12'>
                { TrustedServicesData.map((items)=>{
                    return(
                        <div className='bg-white  hover:scale-110 duration-500 delay-100 text-black flex flex-col items-center py-2 w-[250px] rounded-xl'>
                            <img src={items.Image} alt="" className='w-[100px] '/>
                            <p>{items.title}</p>
                        </div>
                    )
                })}
            </div>
 </div>           

             <div className='bg-[#4D1727] text-white py-[2.5em] flex flex-col items-center rounded-2xl'>
                <h1 className='text-[2.5em]'>Get Start Your Journey with CodeCrafts</h1>
                <button className='bg-black text-[18px] py-2 px-4 mt-3 rounded-md'>Join now</button>
             </div>
        </div>
    )
}
