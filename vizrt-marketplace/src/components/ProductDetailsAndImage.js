import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import CartService from "../services/CartService";

// Define the ProductDetailsAndImage component
const ProductDetailsAndImage = ({ imageUrl, product }) => {
  // State for showing the "Item added to cart!" message
  const [showMessage, setShowMessage] = useState(false);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    // Call the addToCart function from the CartService and pass the product
    CartService.addToCart(product);
    // Show the message
    setShowMessage(true);
    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  // Render the component
  return (
    <div className="flex justify-center items-start w-full relative">
      {/* Image Section */}
      <div className="w-1/2 px-8">
        <img
          className="w-full h-auto object-cover"
          alt="Main"
          src={`${imageUrl}/${product.image}`}
        />
      </div>

      {/* Details Section */}
      <div className="w-1/2 flex flex-col justify-start items-start px-7">
        {/* Product name */}
        <h1 className="text-5xl font-bold mb-6 text-brandOrange py-1 px-2 rounded-lg">
          {product.name}
        </h1>
        {/* Product price */}
        <p className="text-white mb-6 text-3xl">Price: ${product.price}</p>
        {/* Product category */}
        <p className="text-white mb-2 text-2xl">Category: {product.category}</p>
        {/* Product creator */}
        <p className="text-white mb-6 text-2xl">Creator: {product.creator}</p>
        {/* Star ratings */}
        <div className="flex items-center justify-start">
          <img
            className="w-30 h-10 mr-2"
            alt="Star ratings"
            src="https://c.animaapp.com/2XehKRee/img/star-ratings@2x.png"
          />
          <p className="text-white">{product.nrOfReviews} Reviews</p>
        </div>
        {/* Add to Cart button */}
        <button
          className="bg-brandBlue text-white px-8 py-3 rounded-lg mt-9 flex items-center"
          onClick={handleAddToCart}
        >
          <p className="text-2xl mr-2">Add to Cart</p>
          <FiShoppingCart className="text-2xl" />
        </button>
        {/* Show "Item added to cart!" message */}
        {showMessage && (
          <div className="absolute bg-white rounded-lg p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
            <p className="text-gray-800 text-xl">Item added to cart!</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Export the component
export default ProductDetailsAndImage;
