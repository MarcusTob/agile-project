import React from 'react'
import Starterpack from '../components/Starterpack';
import Carousel from '../components/Carousel';
import Welcomeoffer from '../components/Welcomeoffer';
import TrustedBy from '../components/TrustedBy';
import "../index.css";
import "tailwindcss/tailwind.css"

const Home = () => {
  let slides = [
    "/images/Image1-carousel.webp",
    "/images/Image2-carousel.jpeg",
    "/images/Image3-carousel.webp",
    "/images/Image4-carousel.png"
  ]
  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center">
        <div className='mt-10'>
            <Starterpack/>
        </div>
      
      <div className='w-[60%] m-auto pt-11'>
        <Carousel slides={slides}/>
      </div>

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

