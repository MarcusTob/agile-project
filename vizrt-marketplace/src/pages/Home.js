import React from 'react'
import Starterpack from '../components/Starterpack'
import Welcomeoffer from '../components/Welcomeoffer';
import "../index.css";
import "tailwindcss/tailwind.css"

const Home = () => {
  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center">
        <div>
            <Starterpack/>
        </div>
        <div>
          <Welcomeoffer/>
        </div>
    </div>
  )
}
export default Home;