import React,{useState} from 'react'
import { SiFampay } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { GoStarFill } from "react-icons/go";

import {NavLink} from 'react-router-dom'
export default function CodeCrafts_Plus() {
const data=[
  {
    Head1:"Basic",
    Price:{
      price:"$29",
      save:"72",
    },
    Paying:"per month, billed annually",
    MoneyBack:"7-day Money Back Guarantee",
    Details:{
      li1:"Access to basic coding tutorials and exercises",
      li2:"Community forum support",
      li3:"Basic project templates",
      li4:"Email support",
      li5:"Certificate of completion",
    }
  },
  {
    Head1:"Pro",
    Price:{
      price:"$59",
      save:"144",
    },
    Paying:"per month, billed annually",
    MoneyBack:"7-day Money Back Guarantee",
    Details:{
      li1:"Advanced coding courses and projects",
      li2:"Live coding sessions with instructors",
      li3:"Premium project templates and tools",
      li4:"Priority support and mentorship",
      li5:"Industry-recognized certifications",
    }
  },
  {
    Head1:"Enterprise",
    Price:{
      price:"Custom",
      save:"",
    },
    Paying:"Contact Sales for pricing and demo",
    MoneyBack:"Talk to a CodeCrafts Expert",
    Details:{
      li1:"Custom curriculum for your team",
      li2:"Dedicated account manager",
      li3:"Advanced analytics and reporting",
      li4:"White-label solutions",
      li5:"24/7 premium support",
    }
  },
]

  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className='bg-black text-white px-[5%]'>
          <div>
            <h1 className='text-2xl sm:text-3xl lg:text-[40px] font-bold'>CodeCrafts<span className='text-red-600'>+</span></h1>
          </div>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center py-1'>
        <div>
          <h1 className='text-[#808080] font-bold w-full sm:w-[500px] text-lg sm:text-xl'><span className='text-white'>Plans </span><span className='text-red-600'>––</span> for every stage of your journey </h1>
        </div>
      </div>

        <div className='bg-[#0D0D0D] border-2 border-[#313131] py-1 px-1 text-sm sm:text-[16px] text-[#808080] rounded-full flex justify-between items-center gap-1 w-full sm:w-[600px] mt-4'>
          <NavLink className={({isActive})=>`px-2 sm:px-8 py-2 ${isActive? "bg-[#262626] text-white":""} rounded-full flex-1 sm:w-[200px] no-underline text-center text-xs sm:text-base`}>Yearly Save 20%</NavLink>
          <NavLink className={({isActive})=>`px-2 sm:px-8 py-2 ${isActive? "bg-[#262626] text-white":""} rounded-full flex-1 sm:w-[200px] no-underline text-center text-xs sm:text-base`}>Monthly</NavLink>
          <NavLink className={({isActive})=>`px-2 sm:px-8 py-2 ${isActive? "bg-[#262626] text-white":""} rounded-full flex-1 sm:w-[200px] no-underline text-center text-xs sm:text-base`}>Custom</NavLink>
        </div>
         <div className='flex flex-col lg:flex-row justify-between items-center mt-4 gap-4'>
          {data.map((item, index)=>{
              return(
          <div 
            key={index} 
            className={`bg-white text-black w-full lg:w-[400px] py-5 rounded-lg px-4 cursor-pointer transition-all duration-300 ${
              selectedPlan === index ? 'ring-4 ring-red-600 shadow-lg shadow-red-600/50' : 'hover:shadow-lg'
            }`}
            onClick={() => setSelectedPlan(index)}
          >
            <p className='font-bold text-xl sm:text-[25px]'>{item.Head1}</p>
             <div className='flex items-center justify-between align-bottom'>
              <h1 className='font-bold text-lg sm:text-xl'>{item.Price.price}</h1>
              {item.Price.save && <p className='flex gap-2 items-center text-white bg-black px-3 py-1 rounded-full text-sm'><SiFampay/>Save ${item.Price.save}</p>}
              </div>
              <p className='text-[#808080] text-sm sm:text-base'>{item.Paying}</p>
              <button className='bg-black text-white w-full py-2 rounded-md my-2'>Start Now</button>
              <p className='flex gap-2 items-center text-center text-xs sm:text-[14px] text-[#808080] mt-3'><MdSecurity/>{item.MoneyBack}</p>
              <p className='font-bold text-lg sm:text-[20px]'>Includes:</p>
              <ul className='py-2 flex flex-col gap-2'>
                {item.Details && Object.values(item.Details).map((detail, detailIndex)=>{
                  return(
                    <li className="relative pl-6 before:absolute before:left-0 before:content-['★'] text-sm sm:text-base" key={detailIndex}>{detail}</li>
                  )
                })}
              </ul>
          </div>
          )
        })}
         </div>

        <div className='text-center pt-[50px] pb-2'>
          <p className='text-sm sm:text-base'>Trusted by 150,000+ Content Creators, SEOs, Agencies, and Teams</p>
        </div>

        <div className='py-10 flex flex-col lg:flex-row gap-5'>
          <div className='lg:w-1/3'>
           <p className='uppercase text-sm sm:text-base'>What new at CodeCrafts</p>
           <h1 className='font-bold w-full lg:w-[400px] text-lg sm:text-xl'>Discover new features and recent changes.</h1>
          </div>
          <div className='lg:w-2/3'>
            <ul className='font-bold text-base sm:text-[20px] flex flex-col gap-2'>
              <li>Facts: Boost SEO & GEO in 15 languages by even 25%!</li>
              <li>AI Tracker: Daily visibility insights across top AI models</li>
              <li>Rank Drop alerts: Get notified when rankings fall—so you can act fast</li>
              <li>Keyword Surfer: See the fan‑out queries ChatGPT runs to build its answers</li>
              <li>...and much more inside!</li>
            </ul>
          </div>
        </div>

        <div className='pt-5 pb-4'>
          <h1 className='font-bold mb-4 text-lg sm:text-xl'>Rating</h1>
          <div className='flex flex-col sm:flex-row justify-between gap-4 border-2 border-[#313131] py-2 px-2 sm:px-5 rounded-lg'>
             <div className='flex gap-2 items-center sm:border-r-2 pr-2 justify-center sm:justify-start'>
              <GoStarFill color='red'/> 
              <GoStarFill color='red'/> 
              <GoStarFill color='red'/> 
              <GoStarFill color='red'/> 
              <GoStarFill color='red'/> 
                <span className='text-sm sm:text-base'>4.8/5</span>
                <span className='text-[#808080] font-bold text-xs sm:text-sm'>500+ Review</span>
             </div>
             <div className='flex gap-2 items-center sm:border-r-2 pr-2 justify-center sm:justify-start'>
              <GoStarFill color='yellow'/> 
              <GoStarFill color='yellow'/> 
              <GoStarFill color='yellow'/> 
              <GoStarFill color='yellow'/> 
              <GoStarFill color='yellow'/>
                <span className='text-sm sm:text-base'>4.6/5</span>
                <span className='text-[#808080] font-bold text-xs sm:text-sm'>400+ Review</span>
             </div>
             <div className='flex gap-1 items-center justify-center sm:justify-start'>
              <GoStarFill className='bg-green-600'/> 
              <GoStarFill className='bg-green-600'/> 
              <GoStarFill className='bg-green-600'/> 
              <GoStarFill className='bg-green-600'/> 
              <GoStarFill className='bg-green-600'/> 
                <span className='text-sm sm:text-base'>4.6/5</span>
                <span className='text-[#808080] font-bold text-xs sm:text-sm'>500+Review</span>
             </div>

          </div>
        </div>
    </div>
  )
}
