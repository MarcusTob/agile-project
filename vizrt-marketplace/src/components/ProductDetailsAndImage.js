import React, { useState } from 'react';
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { motion } from 'framer-motion';
import CartService from '../services/CartService';

const ProductDetailsAndImage = ({ imageUrl, product }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [colors, setColors] = useState([]);
  const [rating, setRating] = useState(0);

  const handleAddToCart = () => {
    CartService.addToCart(product);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const handleAddColor = () => {
    setColors([...colors, '#000000']);
  };

  const handleColorChange = (color, index) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  const handleDeleteColor = (index) => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  const handleHexCodeChange = (e, index) => {
    const newColors = [...colors];
    newColors[index] = e.target.value;
    setColors(newColors);
  };

  const handleRating = (star) => {
    setRating(star);
  };

  return (
    <div className="flex justify-center items-start w-full relative">
      <div className="w-1/2 px-8">
        <img
          className="w-full h-auto object-cover"
          alt="Main"
          src={`${imageUrl}/${product.image}`}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-start items-start px-7">
        <h1 className="text-5xl font-bold mb-6 text-brandOrange py-1 px-2 rounded-lg">
          {product.name}
        </h1>
        <p className="text-white mb-6 text-3xl">Price: ${product.price}</p>
        <p className="text-white mb-2 text-2xl">Category: {product.category}</p>
        <p className="text-white mb-6 text-2xl">Creator: {product.creator}</p>
        <div className="mb-4">
          <h3 className="text-white font-bold mb-2">Colors</h3>
          <div className="flex flex-wrap items-center">
            {colors.map((color, index) => (
              <div key={index} className="relative flex items-center mr-4 mb-4">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => handleColorChange(e.target.value, index)}
                  className="w-10 h-10"
                />
                <input
                  type="text"
                  value={color}
                  onChange={(e) => handleHexCodeChange(e, index)}
                  className="ml-2 p-1 border rounded w-24"
                />
                <button className="ml-2 text-gray-500" onClick={() => handleDeleteColor(index)}>
                  <FiTrash2 />
                </button>
              </div>
            ))}
            <button className="bg-brandBg text-white px-4 py-2 rounded" onClick={handleAddColor}>
              Add Color
            </button>
          </div>
        </div>
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
          <p className="text-white ml-4">{product.nrOfReviews} Reviews</p>
        </div>
        <button
          className="bg-brandBlue text-white px-8 py-3 rounded-lg mt-9 flex items-center"
          onClick={handleAddToCart}
        >
          <p className='text-2xl mr-2'>Add to Cart</p>
          <FiShoppingCart className='text-2xl' />
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
