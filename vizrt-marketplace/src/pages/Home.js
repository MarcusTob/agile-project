import React from 'react'
import Starterpack from '../components/Starterpack'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='starterpack'>
            <Starterpack/>
            <div className='carousel mt-8'>
              <Carousel/>
            </div>
        </div>
        </div>
  )
}

export default Home
