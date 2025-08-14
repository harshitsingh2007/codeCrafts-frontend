import React from 'react'
import {OurServicesData} from '../../data/OurServices'
import DesignData from '../../data/DesignData'
import { TrustedServicesData } from '../../data/OurServices'

export default function OurServices() {
    return (
        <div className='px-[4%] sm:px-[2%] pb-10 bg-black text-white pt-5 max-w-full overflow-x-hidden'>
           
            <div>
                <h1 className='text-[2em] sm:text-[2.5em] font-bold mb-7'>Popular Services</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5'>
                    {OurServicesData.map((item, idx) => (
                        <div key={idx} className='flex flex-col justify-center gap-2 sm:gap-4 w-full max-w-[300px] px-2 py-1.5 bg-[#003912] rounded-xl text-white'>
                            <h5 className='font-bold pt-2 sm:pt-3 pb-1 sm:pb-2 px-2 text-[16px] sm:text-[20px]'>{item.title}</h5>
                            <img src={item.Image} className='rounded-xl flex' alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>

          
            <div className='bg-[#C55E7C] text-white flex flex-col lg:flex-row justify-between items-center py-8 sm:py-[4.5em] px-4 sm:px-8 lg:px-[100px] rounded-xl my-10 sm:my-[80px]'>
                <div className='flex flex-col gap-2 items-start mb-6 lg:mb-0'>
                    <h1 className='text-[2.5em] sm:text-[3.5em] lg:text-[4.4em] leading-tight'>Stuck at coding?</h1>
                    <p className='text-[16px] sm:text-[18px] w-full lg:w-[550px] mb-4'>
                        Get matched with the right expert to turn your prototype into a real, working product.
                    </p>
                    <button className='bg-white rounded-lg py-2 px-4 text-black'>Find an Expert</button>
                </div>
                <div className='w-full lg:w-auto'>
                    <video 
                        src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/6d44640ae60bba48efa315b0c206fad3-1750935806127/Vibe%20coding%20marketing%20banner%20loop" 
                        loop 
                        autoPlay 
                        controls 
                        className='w-full max-w-[600px] rounded-xl'
                    ></video>
                </div>
            </div>

            
            <div>
                <h1 className='text-[2em] sm:text-[3em] font-bold mb-6 sm:mb-[60px]'>More on CodeCrafts</h1>
                <div className='hidden sm:block sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4'>
                    {DesignData.map((items, index) => (
                        <div key={index} className='mb-3 sm:mb-4 break-inside-avoid'>
                            <img
                                src={items.Image}
                                alt=""
                                className='w-full rounded-xl'
                            />
                        </div>
                    ))}
                </div>
            </div>

            
            <div className='bg-[#FFF6F2] text-black flex flex-col lg:flex-row justify-between items-center py-8 sm:py-[4.5em] px-4 sm:px-8 lg:px-[100px] rounded-xl my-10 sm:my-[80px]'>
                <div className='mb-6 lg:mb-0'>
                    <h1 className='text-[2.5em] sm:text-[3.5em] lg:text-[4.4em] leading-tight'>Create a logo in minutes</h1>
                    <p className='text-[16px] sm:text-[18px] w-full lg:w-[580px] mb-4'>
                        Use our AI-powered logo maker to create a unique logo that represents your brand.
                    </p>
                    <button className='bg-[#C55E7C] rounded-lg py-2 px-4 text-white'>Get Started</button>
                </div>
                <div className='w-full lg:w-auto'>
                    <img 
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_460,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png" 
                        alt="" 
                        className='w-full max-w-[460px]'
                    />
                </div>
            </div>

            
            <div>
                <h1 className='text-[2em] sm:text-[3em] font-bold mb-6 sm:mb-[60px]'>Trusted by the world's best</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 my-6 sm:my-12'>
                    {TrustedServicesData.map((items, index) => (
                        <div key={index} className='bg-white hover:scale-105 sm:hover:scale-110 duration-500 delay-100 text-black flex flex-col items-center py-2 w-full sm:w-[250px] rounded-xl'>
                            <img src={items.Image} alt="" className='w-[80px] sm:w-[100px]'/>
                            <p className='text-sm sm:text-base'>{items.title}</p>
                        </div>
                    ))}
                </div>
            </div>           

            {/* CTA Section */}
            <div className='bg-[#4D1727] text-white py-6 sm:py-[2.5em] flex flex-col items-center rounded-2xl'>
                <h1 className='text-[1.8em] sm:text-[2.5em] text-center px-4'>Get Start Your Journey with CodeCrafts</h1>
                <button className='bg-black text-[16px] sm:text-[18px] py-2 px-4 mt-3 rounded-md'>Join now</button>
            </div>
        </div>
    )
}