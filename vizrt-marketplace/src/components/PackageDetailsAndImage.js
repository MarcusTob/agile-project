import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartService from "../services/CartService";
import { motion } from "framer-motion";

const PackageDetailsAndImage = ({ imageUrl, graphicPackage }) => {
  // State to control the visibility of the message when item is added to cart
  const [showMessage, setShowMessage] = useState(false);
  const [rating, setRating] = useState(0);

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

  const handleRating = (star) => {
    setRating(star);
  };

  return (
    <div className="flex justify-center items-start w-full relative">
      {/* Image Section */}
      <div className="w-1/2 px-8">
        <img
          className="w-full h-auto object-cover"
          alt="Main"
          src={`${imageUrl}/${graphicPackage.image}`}
          style={{ width: '600px', height: '500px' }}
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
        <div className="flex space-x-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`text-3xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => handleRating(star)}
              >
                ★
              </motion.button>
            ))}
          </div>
          <p className="text-white ml-4">{graphicPackage.nrOfReviews} Reviews</p>
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
