import React from 'react'
import VideoBanner from '../VideoBanner/VideoBanner'
import ContactBanner from '../VideoBanner/ContactBanner'
import SvgBanner from '../SvgBanner/SvgBanner'
import Card from '../CardWork/Card'
import Services from '../Services/Services'

const HomePage = () => {
  return (
    <>
    <div className="lg:p-[25px]">
    <VideoBanner />
    <ContactBanner />
   
  </div>
   <SvgBanner />
   <Card />
   <Services />
   </>
  )
}

export default HomePage