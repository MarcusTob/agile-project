import React, { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import CartService from '../services/CartService';

const ProductDetailsAndImage = ({ imageUrl, product }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    CartService.addToCart(product);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // Hide the message after 2 seconds
  };

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
        <h1 className="text-5xl font-bold mb-6 text-brandOrange py-1 px-2 rounded-lg">
          {product.name}
        </h1>
        <p className="text-white mb-6 text-3xl">Price: ${product.price}</p>
        <p className="text-white mb-2 text-2xl">Category: {product.category}</p>
        <p className="text-white mb-6 text-2xl">Creator: {product.creator}</p>
        <div className="flex items-center justify-start">
          <img
            className="w-30 h-10 mr-2"
            alt="Star ratings"
            src="https://c.animaapp.com/2XehKRee/img/star-ratings@2x.png"
          />
          <p className="text-white">{product.nrOfReviews} Reviews</p>
        </div>
        <button
          className="bg-brandBlue text-white px-8 py-3 rounded-lg mt-9 flex items-center"
          onClick={handleAddToCart}
        >
          <p className='text-2xl mr-2'>Add to Cart</p>
          <FiShoppingCart className='text-2xl'/>
        </button>
        {showMessage && (
          <div className="absolute bg-white rounded-lg p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
            <p className="text-gray-800 text-xl">Item added to cart!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsAndImage;
