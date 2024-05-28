import React from 'react'
import Starterpack from '../components/Starterpack'
<<<<<<< HEAD
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='starterpack'>
=======
import Welcomeoffer from '../components/Welcomeoffer';
import "../index.css";
import "tailwindcss/tailwind.css"

const Home = () => {
  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center">
        <div>
>>>>>>> 87d882d2acb41e3a15f3d3cd8f86c72506ddb9cb
            <Starterpack/>
            <div className='carousel mt-8'>
              <Carousel/>
            </div>
        </div>
        <div>
          <Welcomeoffer/>
        </div>
    </div>
  )
}
export default Home;