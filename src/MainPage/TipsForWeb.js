import React from 'react';
import styles from './Main.module.css';
import {useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

export default function TipsForWeb() {
  const Navigate = useNavigate();
  
  return (
    <div className='border-t-[1px] border-[#ffffff1a]'>
      <div className={`${styles.tipsContainer} px-4 sm:px-6 lg:px-8`}>
        <div className={`${styles.tipsItems} w-full max-w-none sm:max-w-md lg:max-w-lg`}>
          <div className={styles.tipsItemsChild}>
            <h2 className='text-xl sm:text-2xl lg:text-3xl'>How to create a website</h2>
          </div>
          <div className={styles.tipsItemsChild}>
            <p className='text-sm sm:text-base lg:text-lg'>Follow these 7 simple steps to create a website today.</p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <button 
              className='bg-[#FF9E18] flex gap-2 items-center justify-center py-2 px-4 rounded-md hover:bg-white text-black delay-100 text-sm sm:text-base w-full sm:w-auto' 
              onClick={() => Navigate('/signup')}
            >
              Get Started <FaArrowRight/>
            </button>
            <button  
              onClick={() => Navigate('/contact')} 
              className='flex gap-2 items-center justify-center px-4 py-2 border-2 border-white rounded-3xl hover:rounded-md delay-200 text-sm sm:text-base w-full sm:w-auto'
            >
              Learn more <FaArrowRight/>
            </button>
          </div>
        </div>

        <div className={`${styles.tipsItems2} w-full mt-8 lg:mt-0`}>
          <div className={styles.tipsList}>
            <ul className='space-y-2 sm:space-y-3'>
              <li className='text-sm sm:text-base'>
                <span>
                  <span className={styles.listBold}>Pick a platform. </span>
                  <span>Sign up for a secure and reliable free website builder like CODECRAFTS</span>
                </span>
              </li>
              <li className='text-sm sm:text-base'>
                <span>
                  <span className={styles.listBold}>Plan out your website.</span>
                  <span> Map out your goals, site structure and who your audience is.</span>
                </span>
              </li>
              <li className='text-sm sm:text-base'>
                <span>
                  <span className={styles.listBold}>Start creating. </span>
                  <span>Choose from 900+ free templates or use the AI website builder.</span>
                </span>
              </li>
              <li className='text-sm sm:text-base'>
                <span>
                  <span className={styles.listBold}>Customize your website. </span>
                  <span>Use the drag and drop editor and tailor your site to fit your brand.</span>
                </span>
              </li>
              <li className='text-sm sm:text-base'>
                <span>
                  <span className={styles.listBold}>Optimize for search engines.</span>
                  <span>Increase your site's visibility with a suite of built-in SEO tools.</span>
                </span>
              </li>
              <li className='text-sm sm:text-base'>
                <span>
                  <span className={styles.listBold}>Publish your website.</span>
                  <span> Register and connect a custom domain name and go live.</span>
                </span>
              </li>
              <li className='text-sm sm:text-base'>
                <span>
                  <span className={styles.listBold}>Promote and drive traffic.</span>
                  <span> Use built-in marketing tools to grow and expand your reach.</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  );
}