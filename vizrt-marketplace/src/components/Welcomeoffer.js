import React from "react";

// Component to display a welcome offer with an image and heading
const Welcomeoffer = () => {
  // Render welcome offer section
  return (
    <div className="flex flex-col items-center justify-center bg-brandBgLight">
      {/* Link to the offer page */}
      <a href="https://www.vizrt.com/campaign/summer-of-storytelling/">
        <div className="max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden flex">
          {/* Image section */}
          <div className="relative w-1/2">
            {/* Image */}
            <img
              src="/images/Welcomeoffer.webp"
              alt="Welcome Offer"
              className="object-cover w-full h-full"
            />
            {/* Heading over image */}
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 flex items-center justify-start p-4">
              <h3 className="text-white text-h3 font-bold font-customFont">
                Welcome Offer
                <br />
                30% Off
              </h3>
            </div>
          </div>

          {/* Heading and text for the welcome offer */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-h3 font-semibold mb-4 font-customFont">Special Offer</h3>
            <p className="text-p text-gray-700 font-customFont">
              Enjoy a special 30% discount on your first purchase. This offer is
              available for a limited time only. Don't miss out!
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Welcomeoffer;
