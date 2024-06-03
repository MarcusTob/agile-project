import React from 'react';

const PackageDetailsAndImage = ({ imageUrl, graphicPackage }) => {
  return (
    <div className="flex justify-center items-start w-full relative">
      {/* Image Section */}
      <div className="w-1/2 px-8">
        <img
          className="w-full h-auto object-cover"
          alt="Main"
          src={`${imageUrl}/${graphicPackage.image}`}
        />
      </div>
      
      {/* Details Section */}
      <div className="w-1/2 flex flex-col justify-start items-start px-7">
        <h1 className="text-5xl font-bold mb-6 text-brandOrange py-1 px-2 rounded-lg">
          {graphicPackage.name}
        </h1>
        <p className="text-white mb-6 text-3xl">Price: ${graphicPackage.price}</p>
        <p className="text-white mb-2 text-2xl">Category: {graphicPackage.category}</p>
        <p className="text-white mb-6 text-2xl">Creator: {graphicPackage.creator}</p>
        <div className="flex items-center justify-start">
          <img
            className="w-30 h-10 mr-2"
            alt="Star ratings"
            src="https://c.animaapp.com/2XehKRee/img/star-ratings@2x.png"
          />
          <p className="text-white">{graphicPackage.nrOfReviews} Reviews</p>
        </div>
        <button
          className="bg-brandBlue text-white px-8 py-3 rounded-lg mt-9 flex items-center"
          // You need to add functionality for adding to cart here if needed
        >
          <p className='text-2xl mr-2'>Add to Cart</p>
          {/* Add cart icon here if needed */}
        </button>
      </div>
    </div>
  );
};

export default PackageDetailsAndImage;
