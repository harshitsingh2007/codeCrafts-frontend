import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { IoPaperPlane } from "react-icons/io5";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaRegComment } from "react-icons/fa6";
import { freeLancerStore } from '../../../store/Freelancer.js/FreeLancer';
import { CiLocationOn } from "react-icons/ci";

export default function Custom_More() {
  const {freelancers,fetchAllFreelancer}=freeLancerStore();
  const {freelancerid}=useParams();
  const [Freelancer,setFreelancer]=React.useState(null)
  React.useEffect(()=>{
      fetchAllFreelancer()
  },[fetchAllFreelancer])
  
  React.useEffect(()=>{
      if(freelancers && freelancers.length>0 && freelancerid){
          const foundFreelancer=freelancers.find(f=>f._id===freelancerid)
          setFreelancer(foundFreelancer)
      }
  },[freelancers,freelancerid])

  const [showConsultation, setShowConsultation] = React.useState(false);
  const [selectedTimeslot, setSelectedTimeslot] = useState("");
  const [showContact, setShowContact] = React.useState(false);
const [contactMessage, setContactMessage] = useState("");


  const handleConsultationClick = (e) => {
    e.preventDefault();
    if (!selectedTimeslot) {
      alert("Please select a time slot");
      return;
    } 
  

    alert(`Consultation booked for ${selectedTimeslot} with ${Freelancer.name}`);
    setSelectedTimeslot("");
    setShowConsultation(false);
  }


  if (showContact && Freelancer) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            onClick={() => setShowContact(false)}
            aria-label="Close"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-black">Contact {Freelancer.name}</h2>
          <div className="mb-4 flex items-center gap-2 text-gray-700">
            <CiLocationOn size={22} />
            <span>{Freelancer.Location}</span>
          </div>
            <form >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <textarea  onChange={(e)=>setContactMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
              rows={4}
              placeholder="Type your message here..."
            />
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold w-full flex items-center justify-center gap-2">
            <IoPaperPlane /> Send Message
          </button>
            </form>
          <div className="mt-6 text-sm text-gray-500">
            <div>
              <span className="font-semibold">Email:</span> {Freelancer.email}
            </div>
            <div>
              <span className="font-semibold">Average response time:</span> 2 hours
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showConsultation && Freelancer) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            onClick={() => setShowConsultation(false)}
            aria-label="Close"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-black">Book Consultation with {Freelancer.name}</h2>
          <div className="mb-4 flex items-center gap-2 text-gray-700">
            <CiLocationOn size={22} />
            <span>{Freelancer.Location}</span>
          </div>
          <form onSubmit={handleConsultationClick} className='flex flex-col gap-4 text-black'>
            <p className="font-medium">Select a time slot:</p>
            <label className='flex items-center gap-2'>
              <input
                type='radio'
                name='timeslot'
                value='9-12 AM'
                className='accent-black'
                onChange={(e) => setSelectedTimeslot(e.target.value)}
              />
              9-12 AM
            </label>
            <label className='flex items-center gap-2'>
              <input
                type='radio'
                name='timeslot'
                value='12-3 PM'
                className='accent-black'
                onChange={(e) => setSelectedTimeslot(e.target.value)}
              />
              12-3 PM
            </label>
            <label className='flex items-center gap-2'>
              <input
                type='radio'
                name='timeslot'
                value='3-6 PM'
                className='accent-black'
                onChange={(e) => setSelectedTimeslot(e.target.value)}
              />
              3-6 PM
            </label>
            <label className='flex items-center gap-2'>
              <input
                type='radio'
                name='timeslot'
                value='6-9 PM'
                className='accent-black'
                onChange={(e) => setSelectedTimeslot(e.target.value)}
              />
              6-9 PM
            </label>
            <button className='bg-black text-white py-2 px-10 rounded-md mt-2'>Book Now</button>
          </form>
          <div className="mt-6 text-sm text-gray-500">
            <div>
              <span className="font-semibold">Email:</span> {Freelancer.email}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-black text-white pt-10 md:pt-32 pb-10 md:pb-20 px-4 sm:px-6 md:px-10 lg:px-20'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2'>
          <div className='flex flex-col sm:flex-row gap-6 items-center sm:items-start'>
            <div className='flex-shrink-0'>
              <img 
                src={Freelancer?.Image} 
                alt={Freelancer?.name || ""} 
                className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover'
              />  
            </div>  
            
            <div className='md:text-left sm:text-center'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold uppercase'>
                {Freelancer?.name ?? 'Loading...'}
              </h1>
               
              <div className='flex gap-2'>
                <div className='flex flex-wrap justify-center sm:justify-start gap-1 my-2'>
                  <FaRegComment size={20}/>
                  {Freelancer?.Language.map((lan, index) => (
                    <p key={index} className=' text-xs sm:text-sm capitalize'>
                      {lan},
                    </p>
                  ))}
                </div>
              </div>
              
              <p className='text-sm md:text-base capitalize'>{Freelancer?.role}</p>
              <p className='text-gray-400 text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-2 capitalize mt-1'>
                <FaRegComment/>
                {Freelancer?.Location}
              </p>
            </div>
          </div>
          
          <div className='mt-6 md:mt-8'>
            <h1 className='text-xl sm:text-2xl font-bold mb-2 md:mb-3'>About Me</h1>
            <p className='text-gray-300 leading-relaxed text-sm sm:text-base'>
              {Freelancer?.about}
            </p>
          </div>

          <div className='mt-6 md:mt-8'>
            <h1 className='text-xl sm:text-2xl font-bold mb-2 md:mb-3'>Skills</h1>
            <div className='flex flex-wrap gap-2'>
              {Freelancer?.skills.map((skill, index) => (
                <span 
                  key={index}
                  className='px-4 py-1 text-xs sm:text-sm md:px-3 md:py-1 md:text-base border-2 border-white rounded-full font-medium capitalize'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar - becomes full width on mobile */}
        <div className='lg:mt-28 mt-8 lg:col-span-1 flex flex-col gap-6'>
          <div className='shadow-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl w-full py-5 px-4 sm:px-6 md:px-8'>
            <div className='flex flex-col gap-4 sm:gap-6 text-center'>
              <button
                className='bg-white text-black flex gap-2 items-center justify-center py-2 w-full px-4 rounded-lg text-sm sm:text-base'
                onClick={() => setShowContact(true)}
              >
                <IoPaperPlane className="text-lg" />Contact me
              </button>
              <button 
                className='bg-white text-black flex gap-2 items-center justify-center py-2 w-full px-4 rounded-lg text-sm sm:text-base'
                onClick={() => setShowConsultation(true)}
              >
                <GoDeviceCameraVideo className="text-lg" /> Book a consultation
              </button >
              <p className='text-xs sm:text-sm md:text-base text-gray-400'>
                Average response time: 2 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}