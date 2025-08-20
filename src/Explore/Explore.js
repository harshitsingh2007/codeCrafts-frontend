import React from 'react'
import { useEffect } from 'react'
import { templateStore } from '../store/data/Templatedata'
export default function TemplateMain() {
  const { templates, fetchTemplate } = templateStore();
  
  useEffect(() => {
    fetchTemplate();
  }, [fetchTemplate]);

  const categories = [...new Set(templates.map(template => template.genre))];
  
  return (
    <>
      <div className='min-h-screen bg-black text-white pl-[3em] pr-[3em]'>
        <div className='pt-3 pb-2'>
          <h1 className='text-[3.5em] gt-super-font bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold'>
            Discover Templates
          </h1>
          </div>

        <div className='mb-16'>
          <div className='flex overflow-x-auto gap-6 whitespace-nowrap pb-6' 
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {templates.map((template, index) => (
              <div key={index} className='group flex flex-col gap-4 mt-2 min-w-[380px] cursor-pointer transform transition-all duration-300 hover:scale-105'>
                <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                  <img 
                    src={template.image} 
                    alt={template.title} 
                    className='w-[380px] h-[220px] object-cover transition-transform duration-500 group-hover:scale-110' 
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <span className='bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium'>
                      View Template
                    </span>
                  </div>
                </div>
                <h4 className='text-[19px] ml-4 font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300'>
                  {template.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category} className='mb-16'>
            <div className='flex items-center gap-4 mb-8'>
              <h2 className='font-bold text-[2.5em] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>
                {category}
              </h2>
              <div className='flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent'></div>
              <span className='text-gray-400 text-sm font-medium'>
                {templates.filter(template => template.genre === category).length} Templates
              </span>
            </div>
            
            <div className='flex overflow-x-auto gap-6 whitespace-nowrap pb-6' 
                 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {templates
                .filter(template => template.genre === category)
                .map((template, index) => (
                  <div key={index} className='group flex flex-col gap-4 mt-2 min-w-[380px] cursor-pointer'>
                    <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                      <img 
                        src={template.image} 
                        alt={template.title} 
                        className='w-[380px] h-[220px] object-cover '
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='bg-blue-500/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium'>
                          {category}
                        </span>
                      </div>
                      <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium'>
                          Preview
                        </span>
                      </div>
                    </div>
                    <h4 className='text-[19px] ml-4 font-semibold text-gray-100 group-hover:text-blue-400'>
                      {template.title}
                    </h4>
                  </div>
                ))}
            </div>
          </div>
        ))}
        <div className='pb-20'></div>
      </div>
    </>
  )
}