import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { motion } from 'framer-motion';
import CartService from '../../services/CartService';

const ProductDetailsAndImage = ({ imageUrl, product }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [rating, setRating] = useState(0);

  // Set the initial selected color and rating from the product data
  useEffect(() => {
    if (product.colors && product.colors.length > 0) {
      const initialColor = product.colors[0].split(',')[0];
      setSelectedColor(initialColor);
    }
    if (product.rating) {
      setRating(product.rating);
    }
  }, [product.colors, product.rating]);

  const handleAddToCart = () => {
    const productWithColor = { ...product, selectedColor };
    CartService.addToCart(productWithColor);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  return (
    <div className="flex justify-center items-start w-full relative p-4">
      <div className="w-1/2 px-8">
        <img
          className="w-full h-auto object-cover"
          alt="Main"
          src={`${imageUrl}/${product.image}`}
        />
      </div>

      <div className="w-1/2 flex flex-col justify-start items-start px-7">
        <h1 className="text-h1 font-customFont font-bold mb-6 text-brandOrange py-1 px-2 rounded-lg">
          {product.name}
        </h1>
        <p className="text-white mb-6 text-h3 font-customFont">Price: ${product.price}</p>
        <p className="text-white mb-2 text-p font-customFont">Category: {product.category}</p>
        <p className="text-white mb-6 text-p font-customFont">Creator: {product.creator}</p>

        <div className="flex space-x-2 mb-4">
        <h3 className="text-white mb-2 text-p font-customFont">Available colors:</h3>
          {product.colors[0].split(',').map((color, i) => (
            <div
              key={i}
              style={{ backgroundColor: color, width: "20px", height: "20px", borderRadius: "50%" }}
            ></div>
          ))}
        </div>

        <div className="flex items-center justify-start mb-4">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`text-3xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
              >
                ★
              </motion.button>
            ))}
          </div>
          <p className="text-white ml-2 text-p3 font-customFont">{rating.toFixed(1)}</p>
          <p className="text-white ml-4 text-p3 font-customFont">({product.nrOfReviews} Reviews)</p>
        </div>

        <button
          className="bg-brandBlue text-white px-8 py-3 rounded-lg mt-9 flex items-center"
          onClick={handleAddToCart}
        >
          <p className="text-p font-customFont mr-2">Add to Cart</p>
          <FiShoppingCart className="text-2xl" />
        </button>

        {showMessage && (
          <div className="absolute bg-white rounded-lg p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
            <p className="text-gray text-h3 font-customFont">Item added to cart!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsAndImage;
