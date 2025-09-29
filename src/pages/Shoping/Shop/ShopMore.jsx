import React, { useState, useEffect } from 'react';
import { IoIosMore } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { templateStore } from '../../../store/data/Templatedata';

export default function ShopMore() {
  const { templates, fetchTemplate } = templateStore();
  const { templateId } = useParams();
  const [template, setTemplate] = useState(null);
  
  useEffect(() => {
    fetchTemplate();
  }, [fetchTemplate]);
  
  useEffect(() => {
    if (templates.length > 0 && templateId) {
      const foundTemplate = templates.find(t => t._id === templateId);
      setTemplate(foundTemplate);
    }
  }, [templates, templateId]);
  
  const navigate = useNavigate();
  const [showCopyOptions, setShowCopyOptions] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowCopyOptions(false);
  };

  if (!template) {
    return <div className="bg-black text-white min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className='bg-black text-white min-h-screen pt-20 pb-10 px-4 md:px-6 lg:px-8'>
      <button 
        onClick={() => navigate('/shop')}
        className="absolute top-24 left-4 md:left-6 z-10 bg-[#2E2E2E] rounded-full p-1 hover:bg-[#3E3E3E] transition-colors"
        aria-label="Go back"
      >
        <MdOutlineKeyboardArrowLeft size={30} />
      </button>

      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 pt-4'>
        <div className='w-full lg:w-[70%] flex justify-center items-center py-4 md:py-8'>
          <img 
            src={template.image} 
            alt={template.title} 
            className='w-full max-w-2xl rounded-md shadow-lg object-contain'
          />
        </div>
        
        {/* Product info panel - becomes full width on mobile */}
        <div className='w-full lg:w-[30%] bg-[#1D1D1D] rounded-2xl md:rounded-3xl p-4 md:p-6'>
          {/* Header with options and save button */}

          <div className='flex justify-between items-center mb-4'>
            <div className='relative'>
              <button 
                onClick={() => setShowCopyOptions(!showCopyOptions)}
                className='bg-[#2E2E2E] rounded-full p-2 hover:bg-[#3E3E3E] transition-colors'
                aria-label="More options"
              >
                <IoIosMore size={24} />
              </button>
              
              {showCopyOptions && (
                <div className='absolute top-12 left-0 w-40 bg-[#2E2E2E] rounded-lg p-2 z-10 shadow-lg'>
                  <button
                    onClick={() => copyToClipboard(window.location.href)}
                    className='text-white hover:bg-[#3E3E3E] w-full text-left px-3 py-2 rounded text-sm transition-colors'
                  >
                    Copy URL Link
                  </button>
                </div>
              )}
            </div>
            
            <button className='bg-white text-black py-2 px-4 md:px-5 rounded-full text-sm md:text-base hover:bg-gray-100 transition-colors'>
              Save
            </button>
          </div>

        { /* Product details */ }
        <div className='py-4 md:py-6 border-b border-[#2E2E2E]'>
          <h1 className='text-xl md:text-2xl font-medium'>{template.title}</h1>
          <div className='pt-1 font-bold text-xl md:text-2xl text-white'>
            {template.Price ? `$${template.Price}` : 'Free'}
          </div>
          <p className='pt-2 text-sm md:text-base text-gray-400 leading-relaxed'>
            {template.description}
          </p>
          <button className='bg-white text-black text-base font-bold py-3 px-4 rounded-full w-full mt-4 hover:bg-gray-100 transition-colors'>
            Buy Now
          </button>
        </div>

        {/* Connections section */}
          <div className='pt-4 md:pt-6'>
            <p className='font-bold text-lg md:text-xl mb-3'>29 Connections</p>
            <div className='flex items-center p-3 bg-[#2E2E2E] rounded-xl'>
              <img 
                src="https://cdn.cosmos.so/c14f5bc8-841a-41c6-94cd-cc4552e75b20?format=webp&w=300" 
                alt="Webside profile" 
                className='w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0'
              />
              
              <div className='ml-3 md:ml-4 flex-grow min-w-0'>
                <div className='font-medium truncate'>Webside</div>
                <div className='flex flex-wrap gap-1 md:gap-2 text-xs text-gray-400 font-medium'>
                  <span className='truncate'>777element</span>
                  <span className='flex items-center gap-1 truncate'>
                    @linunsrago
                    <RiVerifiedBadgeFill className="text-blue-400 flex-shrink-0" />
                  </span>
                </div>
              </div>
              
              <div className='ml-2'>
                <span className='border border-white px-2 py-1 text-xs rounded-full whitespace-nowrap'>
                  Ist
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}