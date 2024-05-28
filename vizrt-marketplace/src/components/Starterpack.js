import React from 'react';
import 'tailwindcss/tailwind.css';
import '../index.css';

const Starterpack = () => {
  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold mb-6">Starter packs</h1>
      <div className='flex justify-center gap-5 flex-wrap'>
        <div className="relative w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-64 overflow-hidden">
          <img src='/images/Big-company.jpeg' alt='Image 1' className='object-cover h-full w-full blur-sm'/>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Big Company</span>
          </div>
        </div>
        <div className="relative w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-64 overflow-hidden">
          <img src='/images/Individual.webp' alt='Image 2' className='object-cover h-full w-full blur-sm'/>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Individual</span>
          </div>
        </div>
        <div className="relative w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-64 overflow-hidden">
          <img src='/images/Small-company.jpg' alt='Image 3' className='object-cover h-full w-full blur-sm'/>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Small Company</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Starterpack
