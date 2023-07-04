import React from 'react'
import './style.scss'
import Herobanner from './heroBanner/Herobanner'
import Trending from './trending/Trending'

const Home = () => {
  return (
    <div className='homePage'>
      <Herobanner />
      <Trending />
      
    </div>
  )
}

export default Home
