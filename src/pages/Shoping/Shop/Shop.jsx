import React, { useEffect, useState } from 'react'
import { templateStore } from '../../../store/data/Templatedata'
import { NavLink } from 'react-router-dom';
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export default function Shop() {
  const { templates, fetchTemplate } = templateStore();
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  useEffect(() => {
    fetchTemplate();
  }, [fetchTemplate])
  
  const categories = ['All', ...new Set(templates.map((template) => template.genre))];
  
  // Filter templates based on selected category
  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.genre === selectedCategory);

  return (
    <div className='pt-28 bg-black text-white pl-[3em] pr-[3em]'>

      <div className='flex justify-center items-center mb-10'>
        <div className='text-center flex gap-8 justify-center w-[90%]'>
          {categories.map((category, index) => (
            <NavLink 
              key={index}
              to={`?category=${category}`}
              className={({ isActive }) => `no-underline ${isActive ? "text-white" : "text-gray-400"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </NavLink>
          ))}
        </div>
        <div className='w-[5%] flex justify-center text-center text-xl gap-2 cursor-pointer'>
          <TbAdjustmentsHorizontal /><p className='text-sm'>Price</p>
        </div>
      </div>
      
      {/* Show filtered templates */}
      <div className='sm:block sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4'>
        {filteredTemplates.map((template,index) => (
          <div key={index} className='mb-3 sm:mb-4 break-inside-avoid relative cursor-pointer'>
            <NavLink to={`/shop-more/${template._id}`}>
            <img src={template.image} alt=""  className='rounded-lg'/>
            </NavLink>
            <p className='absolute bottom-1 left-3 bg-black py-1 px-2 rounded-lg'>${template.Price}</p>
          </div>
        ))}
      </div>

      {/* Show templates by category */}
      {selectedCategory === 'All' && (
        <div>
          {categories.filter(cat => cat !== 'All').map((category, index) => (
            <div key={index} className='mb-12'>
              <h2 className='text-2xl font-bold mb-6 capitalize'>{category}</h2>
              <div className='sm:block sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4'>
                {templates
                  .filter(template => template.genre === category)
                  .map((template, templateIndex) => (
                    <div key={templateIndex} className='mb-3 sm:mb-4 break-inside-avoid relative cursor-pointer'>
                      <NavLink to={`/shop-more/${template._id}`}>
                      <img src={template.image} alt={template.title} className='rounded-lg'/>
                      </NavLink>
                      <p className='absolute bottom-1 left-3 bg-black py-1 px-2 rounded-lg'>${template.Price}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className='pb-16'></div>
    </div>
  )
}