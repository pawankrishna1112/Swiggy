import React from 'react'
import TopBar from '../Components/TopBar'
import ItemsDisplay from '../Components/ItemsDisplay';
const LandingPage = () => {
  return (
  <div>
      <TopBar/>

      <div className='landingSection'>

      <ItemsDisplay/>
      </div>
     
  </div>
  )
}

export default LandingPage