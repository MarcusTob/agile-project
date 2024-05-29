import React from 'react';

const Welcomeoffer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-brandBgLight">
      <div className="max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Image and overlay text */}
        <div className="relative w-1/2">
          <img 
            src="/images/Welcomeoffer.webp" 
            alt="Welcome Offer" 
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 flex items-center justify-start p-4">
            <h2 className="text-white text-3xl font-bold">Welcome Offer<br />30% Off</h2>
          </div>
        </div>

        {/* Heading and text */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Special Offer</h3>
          <p className="text-lg text-gray-700">
            Enjoy a special 30% discount on your first purchase. This offer is available for a limited time only. Don't miss out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcomeoffer;
