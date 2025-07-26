import React from 'react'
import './Design.module.css'
import DesignTemplate from './DesignTemplate'
import ExploreDesign from './ExploreDesign'
import JoinPlatorm from './JoinPlatorm'
import Footer from '../Component/Fotter/Footer'
import Navbar2 from '../Component/All-navbar/Navbar2'
export const DesignMain = () => {
  return (
    <>
       <DesignTemplate/>
       <ExploreDesign/>
       <JoinPlatorm/>
    </>
  )
}
