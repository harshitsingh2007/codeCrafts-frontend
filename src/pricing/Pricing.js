import React from 'react'
import Footer from '../Component/Fotter/Footer.js'
import Navbar2 from '../Component/All-navbar/NavbarNew.jsx'
import { Link } from 'react-router-dom'
export default function Pricing() {
  const plans = [
    {
      name: "Business Elite",
      price: "₹1,800",
      per: "/mo",
      features: [
        "Free domain for 1 year",
        "Unlimited storage space",
        "Multi-cloud hosting",
        "Advanced marketing suite",
        "Accept payments",
        "Advanced eCommerce",
        "Scheduling and services",
        "Advanced developer platform",
        "100 site collaborators"
      ],
    },
    {
      name: "Business",
      price: "₹900",
      per: "/mo",
      recommended: true,
      features: [
        "Free domain for 1 year",
        "100 GB storage space",
        "Multi-cloud hosting",
        "Standard marketing suite",
        "Accept payments",
        "Standard eCommerce",
        "Scheduling and services",
        "10 site collaborators"
      ],
    },
    {
      name: "Core",
      price: "₹500",
      per: "/mo",
      features: [
        "Free domain for 1 year",
        "50 GB storage space",
        "Multi-cloud hosting",
        "Basic marketing suite",
        "Accept payments",
        "Basic eCommerce",
        "Scheduling and services",
        "5 site collaborators"
      ],
    },
    {
      name: "Light",
      price: "₹250",
      per: "/mo",
      features: [
        "Free domain for 1 year",
        "2 GB storage space",
        "Multi-cloud hosting",
        "Light marketing suite",
        "2 site collaborators"
      ],
    },
  ];

  return (
    <>
      <div className='bg-black'>
        <div className='mx-[1.5em] bg-black'></div>
        <div className='mx-[1.5em] bg-black'>
          <div className='h-[600px] text-white bg-[radial-gradient(140%_107.13%_at_50%_10%,transparent_37.41%,#6363ea_69.27%,white_100%)] rounded-[2.5em] text-center'>
            <div className='pt-[150px]'>
              <h1 className='text-[3.5em] font-bold '>Find the right plan for You</h1>
              <button className='bg-white text-black py-2 px-5 text-[20px] hover:shadow-[0px_0px_10px_2px_white] mt-[30px] rounded-3xl'>Start Now</button>
            </div>
          </div>
        </div>

        <div className=" min-h-screen p-6 flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl bg-white p-6 shadow-lg flex flex-col justify-between border ${plan.recommended ? "border-green-400 scale-105" : "border-transparent"
                  } transition-transform duration-300`}
              >
                <div>
                  <h2 className="text-xl font-semibold text-blue-900">{plan.name}</h2>
                  <p className="text-sm text-blue-700 mt-1">
                    {index === 0
                      ? "Scale your business"
                      : index === 1
                        ? "Grow your brand"
                        : index === 2
                          ? "Engage your audience"
                          : "Get the basics"}
                  </p>
                  {plan.recommended && (
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-bold bg-green-100 text-green-700 rounded">
                      RECOMMENDED
                    </span>
                  )}
                  <div className="text-3xl font-bold text-blue-900 mt-4">
                    {plan.price}
                    <span className="text-base font-normal text-blue-700">{plan.per}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-blue-800 text-sm">
                        <span className="mr-2 text-blue-600">✔️</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-[linear-gradient(to_bottom,_#d2b6ff,_#7748ff_40%,_rgba(0,0,0,0.6)_80%)] h-[600px] mx-[1.5em] rounded-3xl mt-[10px]'>
          <div className='ml-[250px] pt-[100px]'>
            <h1 className='m-0 text-[5em] tracking-[-0.1px]  text-[#DFF994] w-[900px] text-center'>Create your site and scale with the right plan.</h1>
            <button>
              <Link className='no-underline text-[25px] rounded-3xl ml-[360px] py-2.5 px-5 bg-[#DFF994] text-black hover:shadow-[0px_0px_100px_2px_#DFF994]'>Sign up</Link>
            </button>
          </div>
        </div>
        <div className='bg-[#E6EEF7] p-[80px]'>
          <h1 className='mb-0 text-[3.5em] w-[600px]'>Solutions for agencies and enterprises</h1>

          <div className='flex justify-between mb-8 mt-[50px] align-middle border-1 border-black cursor-pointer py-[50px] px-3 rounded-3xl hover:bg-[#143B5A] hover:delay-200 hover:text-white'>

            <div>
              <span className='text-[3.3em] ml-8 font-thin'>Agencies & freelances</span>
            </div>

            <div>
              <p className='text-[16px] w-[380px]'>
                Experince the ultimate web creation platform for designers & developers
              </p>
              <a href="" className='no-underline text-black'>Explore Wix Studio </a>
            </div>
          </div>


          <div className='flex justify-between align-middle border-1 border-black cursor-pointer py-[50px] px-3 rounded-3xl hover:bg-[#143B5A] hover:delay-100 hover:text-white'>

            <div>
              <span className='text-[3.3em] ml-8 font-thin'>Enterprices</span>
            </div>

            <div>
              <p className='text-[16px] w-[380px]'>
                scale confidently with seamless multisite management and full design control
              </p>
              <a href="" className='no-underline text-black'>Book a Demo</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
