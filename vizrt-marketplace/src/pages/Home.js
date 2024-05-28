import React from 'react'
import Starterpack from '../components/Starterpack'
import Welcomeoffer from '../components/Welcomeoffer';
import TrustedBy from '../components/TrustedBy';
import "../index.css";
import "tailwindcss/tailwind.css"

const Home = () => {
  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center">
        <div className='mt-10'>
            <Starterpack/>
        </div>
      
      <div></div>

        <div className='my-20'>
          <Welcomeoffer/>
        </div>

        <div className='w-full bg-white'>
          <TrustedBy/>
        </div>
    </div>
  )
}
export default Home;

