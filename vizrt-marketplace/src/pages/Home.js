import React from 'react'
import Starterpack from '../components/Starterpack'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div className='home-conatiner'>
        <div className='starterpack'>
            <Starterpack/>
            <div className='carousel'>
              <Carousel/>
            </div>
        </div>
        </div>
  )
}

export default Home
