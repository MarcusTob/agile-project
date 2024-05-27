import React from 'react'

const Starterpack = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    <div className='text-center'>
      <h1 className="text-3xl font-bold mb-6">Starterpacks</h1>
      <div className='flex justify-center gap-5 flex wrap'>
        <img src='/images/Big-company.jpeg' alt='Image 1' className='w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-auto'/>
        <img src='/images/Individual.webp' alt='Image 2' className='w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-auto'/>
        <img src='/images/Small-company.jpg' alt='Image 3' className='w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 h-auto'/>
         </div>
    </div>
    </div>
  )
}

export default Starterpack
