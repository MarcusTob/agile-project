import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartService from "../services/CartService";

const PackageDetailsAndImage = ({ imageUrl, graphicPackage }) => {
  // State to control the visibility of the message when item is added to cart
  const [showMessage, setShowMessage] = useState(false);

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    // Call CartService to add the graphicPackage to the cart
    CartService.addToCart(graphicPackage);
    // Show message
    setShowMessage(true);
    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

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
        {/* Package name */}
        <h1 className="text-5xl font-bold mb-6 text-brandOrange py-1 px-2 rounded-lg">
          {graphicPackage.name}
        </h1>
        {/* Price */}
        <p className="text-white mb-6 text-3xl">Price: ${graphicPackage.price}</p>
        {/* Category */}
        <p className="text-white mb-2 text-2xl">Category: {graphicPackage.category}</p>
        {/* Creator */}
        <p className="text-white mb-6 text-2xl">Creator: {graphicPackage.creator}</p>
        {/* Star ratings and reviews */}
        <div className="flex items-center justify-start">
          <img
            className="w-30 h-10 mr-2"
            alt="Star ratings"
            src="https://c.animaapp.com/2XehKRee/img/star-ratings@2x.png"
          />
          <p className="text-white">{graphicPackage.nrOfReviews} Reviews</p>
        </div>
        {/* Button to add to cart */}
        <button
          className="bg-brandBlue text-white px-8 py-3 rounded-lg mt-9 flex items-center"
          onClick={handleAddToCart}
        >
          <p className="text-2xl mr-2">Add to Cart</p>
          <FiShoppingCart className="text-2xl" />
        </button>
        {/* Show message when item is added to cart */}
        {showMessage && (
          <div className="absolute bg-white rounded-lg p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
            <p className="text-gray-800 text-xl">Item added to cart!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageDetailsAndImage;
