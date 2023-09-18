import React from 'react'
import './home.css'
import bannerAd from './Group 1.png'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            className='home__image'
            src={bannerAd}/>
        </div>
        home
    </div>
  )
}

export default Home