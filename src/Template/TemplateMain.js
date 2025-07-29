import React from 'react'
import { TemplateData } from '../data/TemplateData'
import { LogoData } from '../data/TemplateData'
export function TemplateMain() {
  return (
    <div className='py-28 bg-black text-white pl-[3em]'>
      <div className='flex flex-col gap-6'>
      <div>
        <h1 className='mb-4 text-[2em] gt-super-font' >Trending Template</h1>
        <div className='flex overflow-x-auto scrollbar-hide whitespace-nowrap'>
          {TemplateData.map((template, index) => (
            <div key={index} className='flex-shrink-0  flex flex-col gap-3 mr-5'>
              <img src={template.Image} alt="" className='w-[350px] rounded-3xl' />
              <h4 className='text-[18px] ml-4'>{template.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className='mb-4 text-[2em] gt-super-font'>Popular Logo</h1>
        <div>
          {LogoData.map((logo,index)=>{
            return(
               <div>
              <img key={index} src={logo.Image} alt="" className='w-[350px] rounded-3xl mb-4' />
              <h4 className='text-[18px] ml-4'>{logo.title}</h4>
               </div>
            )
          })}
        </div>
      </div>
    </div>  
    </div>
  )
}