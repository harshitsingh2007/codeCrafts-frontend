import React from 'react'
import { useNavigate } from 'react-router-dom'
import { freeLancerStore } from '../../../store/Freelancer.js/FreeLancer';
import { useEffect } from 'react';
import { FaRegComment } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
export default function Custom() {
  const {freelancers,fetchAllFreelancer}=freeLancerStore()
  const Navigate=useNavigate();
   
  useEffect(()=>{
      fetchAllFreelancer()
  },[fetchAllFreelancer])

  return (
    <div className='bg-black text-white min-h-screen'>
      <div className='text-center py-24'>
        <h1 className='font-bold text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
          Our Expert in the best Enterprise
        </h1>
        <p className='text-gray-400 text-lg'>Meet our talented professionals</p>
      </div>
      
      <div className='px-24 pb-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          {freelancers.map((freelancer) => (
          <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6'>
            
            <div className='flex items-center gap-4 mb-6'>
              <div className='relative'>
                <img src={freelancer.Image}
                  alt="name" 
                  className='w-20 h-20 rounded-full object-cover border-4 border-blue-500/30' 
                />
                <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800'></div>
              </div>
              <div >
                  <h3 className='font-bold text-xl text-white uppercase'>{freelancer.name}</h3>
                  <div className='flex gap-2 text-gray-500'>
                    <FaRegComment/>
                {freelancer.Language.map((language)=>(
                  <p key={language} className='text-sm capitalize'>{language}</p>
                ))}
                  </div>
                <p className='text-gray-400 text-[16px] flex items-center gap-1 text-center capitalize'>
                  <CiLocationOn size={20}/>
                  {freelancer.Location}
                </p>
              </div>
            </div>
            
            <div className='mb-6'>
              <p className='text-gray-300 leading-relaxed'>
                {freelancer.about}
              </p>
            </div>
            
            <div className='flex flex-wrap gap-2'>
              {freelancer.skills.map((skill) => (
                <span 
                  key={skill}
                  className='px-3 py-1 rounded-full border-2 border-white text-sm font-medium'
                >
                  {skill}
                </span>
              ))}
            </div>          
            <div className='mt-6 pt-3 border-t border-gray-700'>
              <button onClick={()=>Navigate(`/custom-more/${freelancer._id}`)} className='w-full  text-black font-medium py-2 px-4 rounded-lg bg-white'>
                View Profile
              </button>
            </div>
          </div>
          ))}
          


        </div>
      </div>
    </div>
  )
}
