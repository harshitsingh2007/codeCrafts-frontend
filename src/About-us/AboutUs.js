import React from 'react'
export default function AboutUs() {

  return (
    <div className='bg-black text-white'>
      {/* Scroll to Top Button */}
      <div className='w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pt-[50px]'>
        {/* Hero Section */}
        <div className='text-white py-10 px-5'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[4.8em] font-bold text-center mt-6 sm:mt-10'>
            Building Digital Success
          </h1>
          <p className='text-center text-base sm:text-lg md:text-[20px] mt-3'>
            We transform business visions into high-performing websites that drive results.
          </p>
        </div>
        
        {/* Our Story */}
        <div className='border-b-2 border-gray-600 pb-8'>
          <h3 className='text-2xl sm:text-3xl md:text-[35px] font-bold mt-6 sm:mt-10'>
            Our Story
          </h3>
          <p className='text-base sm:text-lg md:text-[20px] leading-relaxed mt-3'>
            Founded in 2025, Began by a single Developer <strong>Harshit Singh</strong> of passionate developer who believed every business deserves an exceptional online presence. Today, we've grown into a full-service web development agency serving clients across multiple industries.
          </p>
        </div>

        {/* Stats Section */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 sm:gap-4 md:gap-0 pt-8 sm:pt-[80px] px-0 sm:pl-[50px] sm:pr-[50px] md:pl-[100px] md:pr-[100px]'>
          <div className='shadow-xl py-6 sm:py-[50px] px-4 sm:px-[30px] md:px-[50px] text-center hover:animate-zoom rounded-3xl hover:scale-105 sm:hover:scale-110 duration-500 delay-100 bg-gradient-to-b from-gray-900 to-gray-800'>
            <h2 className='font-bold text-[#3498DB] text-3xl sm:text-4xl md:text-[45px]'>150+</h2>
            <p className='text-base sm:text-lg md:text-[20px]'>Websites Delivered</p>
          </div>
          <div className='shadow-xl py-6 sm:py-[50px] px-4 sm:px-[30px] md:px-[50px] text-center hover:animate-zoom rounded-3xl hover:scale-105 sm:hover:scale-110 duration-500 delay-100 bg-gradient-to-b from-gray-900 to-gray-800'>
            <h2 className='font-bold text-[#3498DB] text-3xl sm:text-4xl md:text-[45px]'>98%</h2>
            <p className='text-base sm:text-lg md:text-[20px]'>Client Satisfaction</p>
          </div>
          <div className='shadow-xl py-6 sm:py-[50px] px-4 sm:px-[30px] md:px-[50px] text-center hover:animate-zoom rounded-3xl hover:scale-105 sm:hover:scale-110 duration-500 delay-100 bg-gradient-to-b from-gray-900 to-gray-800'>
            <h2 className='font-bold text-[#3498DB] text-3xl sm:text-4xl md:text-[45px]'>1</h2>
            <p className='text-base sm:text-lg md:text-[20px]'>Year Experience</p>
          </div>
        </div>

        {/* Development Process */}
        <div className='pt-12 sm:pt-[6.5em] pb-10 sm:pb-[5em]'>
          <h1 className='text-2xl sm:text-3xl md:text-[35px] font-bold border-b-2 w-max border-gray-600'>
            Our Development Process
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 sm:pt-[50px] px-0 sm:pl-[50px] sm:pr-[50px] md:pl-[100px] md:pr-[100px]'>
            <div className='w-full h-auto sm:h-[250px] p-4 sm:p-3 rounded shadow-2xl bg-gradient-to-b from-gray-900 to-gray-800'>
              <p className='w-8 h-8 sm:w-10 sm:h-10 bg-[#7173C6] rounded-[50%] flex justify-center items-center shadow-[10px_10px_80px_#4E87D1]'>1</p>
              <h3 className='text-lg sm:text-xl font-medium mt-2'>Discovery</h3>
              <p className='pt-2 sm:pt-[10px] text-sm sm:text-base'>
                We analyze your business needs and target audience to create the perfect strategy.
              </p>
            </div>
            <div className='w-full h-auto sm:h-[250px] p-4 sm:p-3 rounded shadow-2xl bg-gradient-to-b from-gray-900 to-gray-800'>
              <p className='w-8 h-8 sm:w-10 sm:h-10 bg-[#7173C6] rounded-[50%] flex justify-center items-center shadow-[10px_10px_80px_#4E87D1]'>2</p>
              <h3 className='text-lg sm:text-xl font-medium mt-2'>Design</h3>
              <p className='pt-2 sm:pt-[10px] text-sm sm:text-base'>
                Custom designs that reflect your brand identity and engage your customers.
              </p>
            </div>
            <div className='w-full h-auto sm:h-[250px] p-4 sm:p-3 rounded shadow-2xl bg-gradient-to-b from-gray-900 to-gray-800'>
              <p className='w-8 h-8 sm:w-10 sm:h-10 bg-[#7173C6] rounded-[50%] flex justify-center items-center shadow-[10px_10px_80px_#4E87D1]'>3</p>
              <h3 className='text-lg sm:text-xl font-medium mt-2'>Development</h3>
              <p className='pt-2 sm:pt-[10px] text-sm sm:text-base'>
                Clean, efficient code built with modern technologies for optimal performance.
              </p>
            </div>
            <div className='w-full h-auto sm:h-[250px] p-4 sm:p-3 rounded shadow-2xl bg-gradient-to-b from-gray-900 to-gray-800'>
              <p className='w-8 h-8 sm:w-10 sm:h-10 bg-[#7173C6] rounded-[50%] flex justify-center items-center shadow-[10px_10px_80px_#4E87D1]'>4</p>
              <h3 className='text-lg sm:text-xl font-medium mt-2'>Launch & Support</h3>
              <p className='pt-2 sm:pt-[10px] text-sm sm:text-base'>
                We handle deployment and provide ongoing maintenance and updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className=" bg-black text-white py-16 sm:py-24 px-4 sm:px-8 ">
        {/* Decorative background elements */}
        <div>
          <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-[#FF9E18]/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-[#FF9E18]/15 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 sm:w-28 sm:h-28 rounded-full bg-[#FF9E18]/10 blur-3xl"></div>
        </div>

        {/* Content container */}
        <div className=" max-w-7xl mx-auto space-y-6 sm:space-y-8 z-10">
          {/* Decorative heading accent */}
          <div className="flex items-center gap-4 mb-8 sm:mb-12">
            <div className="w-10 sm:w-16 h-1 bg-[#FF9E18]"></div>
            <span className="text-[#FF9E18] font-medium tracking-wider text-sm sm:text-base">OUR CORE</span>
          </div>

          {/* Headlines with decorative hover effects */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="block relative group">
              <span className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 text-[#FF9E18] opacity-0 group-hover:opacity-100 transition-opacity">◆</span>
              We seek purpose,
            </span>
            <span className="block relative group mt-4 sm:mt-6">
              <span className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 text-[#FF9E18] opacity-0 group-hover:opacity-100 transition-opacity">◆</span>
              build with intention,
            </span>
            <span className="block relative group mt-4 sm:mt-6">
              <span className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 text-[#FF9E18] opacity-0 group-hover:opacity-100 transition-opacity">◆</span>
              & strive for excellence
            </span>
          </h1>

          {/* Decorative bottom elements */}
          <div className="flex justify-between items-center mt-12 sm:mt-16">
            <div className="hidden md:block w-1/3 h-px bg-gradient-to-r from-[#FF9E18] to-transparent"></div>
            <div className="text-[#FF9E18] text-xs sm:text-sm font-mono px-4">EST. 2024</div>
            <div className="hidden md:block w-1/3 h-px bg-gradient-to-l from-[#FF9E18] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}