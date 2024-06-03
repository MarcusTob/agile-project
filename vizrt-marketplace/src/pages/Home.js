import React from 'react'
import Starterpack from '../components/Starterpack';
import Carousel from '../components/Carousel';
import Welcomeoffer from '../components/Welcomeoffer';
import TrustedBy from '../components/TrustedBy';
import "../index.css";
import "tailwindcss/tailwind.css"

{/* Pictures for carousel */}
const Home = () => {
  {/* All components on Landing page */}
  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center">
        <div className='mt-5'>
            <Starterpack/>
        </div>
      
      <div className='w-[60%] m-auto pt-8'>
        <Carousel />
      </div>

        <div className='pt-8'>
          <Welcomeoffer/>
        </div>

        <div className='w-full bg-white mt-10'>
          <TrustedBy/>
        </div>
    </div>
  )
}
export default Home;

