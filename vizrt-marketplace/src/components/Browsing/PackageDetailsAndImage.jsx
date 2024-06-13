import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import CartService from "../../services/CartService";

const PackageDetailsAndImage = ({ imageUrl, graphicPackage }) => {
  const [showMessage, setShowMessage] = useState(false); // State for controlling the visibility of the message when the item is added to cart

  // Function to handle users adding an item to the cart
  const handleAddToCart = () => {
    // Call CartService to add the graphicPackage to the cart
    CartService.addToCart(graphicPackage);
    // Show the message
    setShowMessage(true);
    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-start w-full relative">
      {/* Image Section*/}
      <div className="w-1/2 px-8">
        <img
          className="w-full h-auto object-cover"
          alt="Main"
          src={`${imageUrl}/${graphicPackage.image}`}
          style={{ width: "600px", height: "500px" }}
        />
      </div>

      {/* Details Section */}
      <div className="w-1/2 flex flex-col justify-start items-start px-7">
        {/* Package name */}
        <h1 className="text-h1 font-customFont font-bold mb-6 text-brandOrange py-1 px-2 rounded-lg">
          {graphicPackage.name}
        </h1>
        {/* Price */}
        <p className="text-white mb-6 text-h3 font-customFont">
          Price: ${graphicPackage.price}
        </p>
        {/* Category */}
        <p className="text-white mb-2 text-p font-customFont">
          Category: {graphicPackage.category}
        </p>
     
        {/* Ratings and reviews */}
        <div className="flex items-center justify-start mb-4">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`text-3xl ${
                  star <= graphicPackage.rating ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                ★
              </motion.button>
            ))}
          </div>
          <p className="text-white ml-2 text-p3 font-customFont">
            {graphicPackage.rating.toFixed(1)}
          </p>
          <p className="text-white ml-4 text-p3 font-customFont">
            ({graphicPackage.nrOfReviews} Reviews)
          </p>
        </div>
        {/* Button to add to the cart */}
        <button
          className="bg-brandBlue text-white px-8 py-3 rounded-lg mt-9 flex items-center"
          onClick={handleAddToCart}
        >
          <p className="text-p font-customFont mr-2">Add to Cart</p>
          <FiShoppingCart className="text-2xl" />
        </button>
        {/* Show message when the item is added to cart */}
        {showMessage && (
          <div className="absolute bg-white rounded-lg p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
            <p className="text-gray-800 text-h3 font-customFont">Item added to cart!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageDetailsAndImage;
