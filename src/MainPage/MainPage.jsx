import React from 'react';
import Banner from './Banner';
import Slogen from './Slogen';
import Collaboration from './Collaboration';
import BuyDomain from './BuyDomain';
import TipsForWeb from './TipsForWeb';
import './Main.module.css';
import BuildWebside from './BuildWebside';

export const MainPage = () => {

  return (
    <>
      <div className='bg-black'>
        <Slogen/>
        <Collaboration/>
        <BuyDomain/>
        <Banner/>
        <BuildWebside/>
        <TipsForWeb/>
      </div>
    </>
  );
};