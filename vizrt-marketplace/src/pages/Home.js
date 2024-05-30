import React from 'react'
import Starterpack from '../components/Starterpack';
import Carousel from '../components/Carousel';
import Welcomeoffer from '../components/Welcomeoffer';
import TrustedBy from '../components/TrustedBy';
import "../index.css";
import { useEffect, useState } from 'react';
import PackageService from '../services/PackageService';
import "tailwindcss/tailwind.css"
import { useNavigate } from 'react-router-dom';

const imageUrl = "http://localhost:5219/images";

{/* Pictures for carousel */}
const Home = () => {
  const [slides, setSlides] = useState([]);
  const navigate = useNavigate();

  const handleViewItem = (packageID) => {
    navigate(`/package/${packageID}`);
  };

  useEffect(() => {
    const packageIDs = [4, 5, 6];
    const packagePromises = packageIDs.map(id => PackageService.getPackageById(id));

    Promise.all(packagePromises)
      .then(packages => {
        const slides = packages.map(graphicPackage => `${imageUrl}/${graphicPackage.packageImage}`);
        setSlides(slides);
      });
  }, []);

  {/* All components on Landing page */}
  return (
    <div className="bg-brandBgLight min-h-screen flex flex-col items-center">
        <div className='mt-5'>
            <Starterpack/>
        </div>
      
      <div className='w-[60%] m-auto pt-8'>
        <Carousel slides={slides} onSlideClick={handleViewItem}/>
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

