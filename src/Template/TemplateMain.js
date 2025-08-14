import React from 'react'
import { useEffect } from 'react'
import { templateStore } from '../store/data/Templatedata'

export function TemplateMain() {
  const { templates, fetchTemplate } = templateStore();
  
  useEffect(() => {
    fetchTemplate();
  }, [fetchTemplate]);

  const categories = [...new Set(templates.map(template => template.genre))];
  
  return (
    <>
      <div className='py-20 bg-black text-white pl-[3em]'>
        {/* All Templates Section */}
        <div>
          <h1 className='mb-4 text-[2em] gt-super-font'>Discover Templates</h1>
          <div className='flex overflow-x-auto gap-4 whitespace-nowrap pb-4' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {templates.map((template, index) => (
              <div key={index} className='flex flex-col gap-3 mt-2 min-w-[350px]'>
                <img src={template.image} alt="" className='w-[350px] h-[200px]  rounded-3xl' />
                <h4 className='text-[18px] ml-4'>{template.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamically generated category sections */}
        {categories.map(category => (
          <div key={category} className='mt-14'>
            <h1>{category} Related Templates</h1>
            <div className='flex overflow-x-auto gap-4 whitespace-nowrap pb-4 pt-2' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {templates
                .filter(template => template.genre === category)
                .map((template, index) => (
                  <div key={index} className='flex flex-col gap-3 mt-2 min-w-[350px]'>
                    <img src={template.image} alt="" className='w-[350px] h-[200px] rounded-3xl'/>
                     <div className='flex gap-4 justify-center pt-1'>
                      <button className='border-1 border-white px-4 py-1 rounded-md'>Discover</button>
                      <button className='border-1 border-white px-4 py-1 rounded-md'>Add to Cart</button>
                     </div>
                    <h4 className='text-[18px] ml-4'>{template.title}</h4>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}