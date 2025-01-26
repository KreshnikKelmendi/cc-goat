import React from 'react'
import BannerPortfolio from '../portfolio/BannerPortfolio'
import ColorCard from '../portfolio/ColorCard'
import CapraIcon from '../portfolio/CapraIcon'

const PortfolioPage = () => {
  return (
    <>
     <div className="absolute top-3 right-3">
              <CapraIcon />
            </div>
      <BannerPortfolio />
      <ColorCard />
    </>
  )
}

export default PortfolioPage