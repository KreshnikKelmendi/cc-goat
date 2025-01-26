import React from 'react'
import VideoBanner from '../VideoBanner/VideoBanner'
import ContactBanner from '../VideoBanner/ContactBanner'
import SvgBanner from '../SvgBanner/SvgBanner'
import Card from '../CardWork/Card'
import Services from '../Services/Services'
import { Example } from '../Mouse/Example'
import TeamOnHomePage from '../team/TeamOnHomePage'

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
      {/* <Example /> */}
      <TeamOnHomePage />
    </>
  )
}

export default HomePage